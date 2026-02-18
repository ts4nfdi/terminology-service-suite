"use client";

import type { EuiBasicTableColumn, EuiSearchBarProps } from "@elastic/eui";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiInMemoryTable,
  EuiLoadingSpinner,
  EuiPanel,
  EuiProvider,
  EuiText,
} from "@elastic/eui";
import { useEffect, useMemo, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { OlsOntologyApi } from "../../../api/ols/OlsOntologyApi";
import "../../../style/customBreadcrumbStyle.css";

type EntityRow = { name: string; id: string; rowIndex: number };

export type EntityListWidgetProps = {
  apiUrl?: string;
  api?: { entityApi: OlsEntityApi; ontologyApi: OlsOntologyApi };
};

type QueryResult = { rows: EntityRow[]; totalItemCount: number };

const DEFAULT_FETCH_SIZE = 200;
const FETCH_CONCURRENCY = 4;

const entityTypeNames = [
  "term",
  "class",
  "property",
  "annotationProperty",
  "dataProperty",
  "objectProperty",
  "individual",
] as const;

type EntityTypeName = (typeof entityTypeNames)[number];

function pickLabel(item: any) {
  const v = item?.label ?? item?.title ?? item?.name ?? item?.ontologyId;
  if (Array.isArray(v)) return v[0] ? String(v[0]) : "—";
  return v ? String(v) : "—";
}

function pickId(item: any) {
  const v =
    item?.curie ??
    item?.obo_id ??
    item?.short_form ??
    item?.id ??
    item?.ontologyId;
  return v ? String(v) : "—";
}

function getFetchSizeFromUrl(baseUrl: string) {
  const q = baseUrl.indexOf("?");
  if (q === -1) return DEFAULT_FETCH_SIZE;
  const size = Number(new URLSearchParams(baseUrl.slice(q)).get("size"));
  return size > 0 && Number.isFinite(size) ? size : DEFAULT_FETCH_SIZE;
}

function parseOlsUrl(baseUrl: string) {
  const url = new URL(baseUrl);
  const parts = url.pathname.split("/").filter(Boolean);

  const useLegacyBase = !parts.includes("v2");
  const idx = parts.indexOf("ontologies");

  const ontologyId = idx >= 0 ? parts[idx + 1] : undefined;
  const rawEndpoint = idx >= 0 ? parts[idx + 2] : "classes";

  const endpoint =
    rawEndpoint === "terms" ||
    rawEndpoint === "properties" ||
    rawEndpoint === "individuals" ||
    rawEndpoint === "ontologies"
      ? rawEndpoint
      : idx >= 0 && !ontologyId
        ? "ontologies"
        : "classes";

  const basePathEnd = useLegacyBase
    ? url.pathname.indexOf("/ontologies")
    : url.pathname.indexOf("/v2");

  const apiBase =
    basePathEnd >= 0
      ? url.origin + url.pathname.substring(0, basePathEnd)
      : url.origin;

  const sp = new URLSearchParams(url.searchParams);
  sp.delete("page");
  sp.delete("size");
  const parameter = sp.toString() || undefined;

  return {
    apiBase,
    endpoint,
    useLegacy: endpoint === "terms" ? true : useLegacyBase,
    ontologyId,
    parameter,
  };
}

function extractElements(response: any): any[] {
  if (Array.isArray(response?.elements)) return response.elements;

  const embedded = response?._embedded;
  if (!embedded || typeof embedded !== "object") return [];

  const candidates = [
    embedded["terms"],
    embedded["classes"],
    embedded["properties"],
    embedded["individuals"],
    embedded["ontologies"],
  ];

  for (const c of candidates) {
    if (Array.isArray(c)) return c;
  }

  for (const key in embedded) {
    const v = (embedded as any)[key];
    if (Array.isArray(v)) return v as any[];
  }

  return [];
}

function extractTotal(response: any, fallback: number) {
  const total =
    response?.totalElements ??
    response?.numElements ??
    response?.page?.totalElements;

  if (typeof total === "number" && Number.isFinite(total)) return total;

  if (
    (typeof total === "string" || typeof total === "bigint") &&
    Number.isFinite(Number(total))
  ) {
    return Number(total);
  }

  return fallback;
}

async function getEntityWithEntityTypeProvided(
  entityApi: OlsEntityApi,
  entityType: EntityTypeName,
  ontologyId?: string,
  parameter?: string,
  useLegacy?: boolean,
  paginationParams?: { page: string; size: string },
  signal?: AbortSignal,
): Promise<any> {
  const contentParams = ontologyId ? { ontologyId } : undefined;

  switch (entityType) {
    case "term":
    case "class":
      return await (entityApi.getTerms as any)(
        paginationParams,
        undefined,
        contentParams,
        parameter,
        useLegacy,
        signal,
      );

    case "property":
    case "annotationProperty":
    case "dataProperty":
    case "objectProperty":
      return await (entityApi.getProperties as any)(
        paginationParams,
        undefined,
        contentParams,
        parameter,
        useLegacy,
        signal,
      );

    case "individual":
      return await (entityApi.getIndividuals as any)(
        paginationParams,
        undefined,
        contentParams,
        parameter,
        useLegacy,
        signal,
      );

    default:
      throw Error(
        'Invalid entity type "' +
          entityType +
          '". Must be one of {' +
          entityTypeNames.map((e) => `"${e}"`).join(", ") +
          "}.",
      );
  }
}

function inferEntityTypeFromEndpoint(endpoint: string): EntityTypeName {
  if (endpoint === "properties") return "property";
  if (endpoint === "individuals") return "individual";
  return "term";
}

async function fetchPage(
  baseUrl: string,
  pageIndex: number,
  pageSize: number,
  api: { entityApi: OlsEntityApi; ontologyApi: OlsOntologyApi },
  signal?: AbortSignal,
): Promise<QueryResult> {
  const { endpoint, useLegacy, ontologyId, parameter } = parseOlsUrl(baseUrl);
  const paginationParams = { page: String(pageIndex), size: String(pageSize) };

  const response =
    endpoint === "ontologies"
      ? await api.ontologyApi.getOntologies(
          paginationParams,
          undefined,
          undefined,
          parameter,
          useLegacy,
        )
      : await getEntityWithEntityTypeProvided(
          api.entityApi,
          inferEntityTypeFromEndpoint(endpoint),
          ontologyId,
          parameter,
          useLegacy,
          paginationParams,
          signal,
        );

  const elements = extractElements(response);
  const baseIndex = pageIndex * pageSize;

  return {
    rows: elements.map((item, i) => ({
      name: pickLabel(item),
      id: pickId(item),
      rowIndex: baseIndex + i,
    })),
    totalItemCount: extractTotal(response, elements.length),
  };
}

function EntityListWidget(props: EntityListWidgetProps) {
  const { apiUrl, api } = props;

  if (!apiUrl) return null;

  const baseUrl = apiUrl;
  const fetchSize = useMemo(() => getFetchSizeFromUrl(baseUrl), [baseUrl]);

  const derivedApi = useMemo(() => {
    if (api) return api;
    const { apiBase } = parseOlsUrl(baseUrl);
    return {
      entityApi: new OlsEntityApi(apiBase),
      ontologyApi: new OlsOntologyApi(apiBase),
    };
  }, [api, baseUrl]);

  const [allRows, setAllRows] = useState<EntityRow[]>([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const [controller, setController] = useState<AbortController>(
    () => new AbortController(),
  );

  useEffect(() => {
    controller.abort();
    const next = new AbortController();
    setController(next);
    setAllRows([]);
    setTotalItemCount(0);
    setIsFetchingMore(false);
    return () => {
      next.abort();
    };
  }, [baseUrl, fetchSize]);

  const firstPageKey = useMemo(
    () => ["entityList:firstPage", baseUrl, fetchSize] as const,
    [baseUrl, fetchSize],
  );

  const {
    data: firstPage,
    isLoading: isLoadingFirstPage,
    isError,
    error,
  } = useQuery<QueryResult>(
    firstPageKey,
    () => fetchPage(baseUrl, 0, fetchSize, derivedApi, controller.signal),
    {
      keepPreviousData: false,
      staleTime: 60_000,
    },
  );

  useEffect(() => {
    if (!firstPage) return;
    setAllRows(firstPage.rows);
    setTotalItemCount(firstPage.totalItemCount);
  }, [firstPage]);

  useEffect(() => {
    if (!firstPage) return;

    const signal = controller.signal;
    const total = firstPage.totalItemCount;
    const already = firstPage.rows.length;
    if (!total || already >= total) return;

    const totalPages = Math.ceil(total / fetchSize);
    const remainingPages = Array.from(
      { length: totalPages - 1 },
      (_, i) => i + 1,
    );

    let cancelled = false;
    setIsFetchingMore(true);

    const pending = new Map<number, EntityRow[]>();
    let nextPageToFlush = 1;

    const flush = () => {
      let batch: EntityRow[] | null = null;
      while (true) {
        const rows = pending.get(nextPageToFlush);
        if (!rows) break;
        pending.delete(nextPageToFlush);
        nextPageToFlush += 1;
        if (rows.length) (batch ??= []).push(...rows);
      }
      if (!batch || batch.length === 0) return;
      setAllRows((prev) => {
        const last = prev[prev.length - 1];
        if (last && last.rowIndex >= batch[0]!.rowIndex) return prev;
        return [...prev, ...batch];
      });
    };

    const runPool = async () => {
      const queue = remainingPages;
      let i = 0;

      const worker = async () => {
        while (!cancelled && !signal.aborted) {
          const page = queue[i++];
          if (page == null) return;
          try {
            const result = await fetchPage(
              baseUrl,
              page,
              fetchSize,
              derivedApi,
              signal,
            );
            pending.set(page, result.rows);
            flush();
          } catch {
            if (signal.aborted) return;
          }
        }
      };

      const workerCount = Math.min(FETCH_CONCURRENCY, queue.length);
      await Promise.all(Array.from({ length: workerCount }, worker));
    };

    runPool().finally(() => {
      if (cancelled || signal.aborted) return;
      setIsFetchingMore(false);
    });

    return () => {
      cancelled = true;
    };
  }, [firstPage, baseUrl, fetchSize, controller, derivedApi]);

  if (isError) {
    return (
      <EuiPanel paddingSize="m">
        <EuiText color="danger">{String(error)}</EuiText>
      </EuiPanel>
    );
  }

  if (isLoadingFirstPage && allRows.length === 0) {
    return (
      <EuiPanel paddingSize="m" style={{ textAlign: "center" }}>
        <EuiLoadingSpinner size="l" />
      </EuiPanel>
    );
  }

  const columns: Array<EuiBasicTableColumn<EntityRow>> = [
    { field: "name", name: "Name", truncateText: true, sortable: true },
    { field: "id", name: "ID", truncateText: true, sortable: true },
  ];

  const search: EuiSearchBarProps = {
    box: {
      incremental: true,
      placeholder: "Search by Name or ID",
    },
  };

  return (
    <EuiPanel paddingSize="m">
      <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiText size="s" color="subdued">
            Loaded: {allRows.length}
            {totalItemCount ? ` / ${totalItemCount}` : ""}
            {isFetchingMore ? " (loading more…)" : ""}
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiInMemoryTable<EntityRow>
        className="stripedRows"
        tableCaption="Entity list"
        responsiveBreakpoint={false}
        items={allRows}
        columns={columns}
        loading={isLoadingFirstPage && allRows.length === 0}
        search={search}
        pagination={{
          initialPageSize: 10,
          pageSizeOptions: [10, 25, 50],
        }}
        sorting={true}
      />
    </EuiPanel>
  );
}

const queryClient = new QueryClient();

function WrappedEntityListWidget(props: EntityListWidgetProps) {
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <EntityListWidget {...props} />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { EntityListWidget, WrappedEntityListWidget };
export default WrappedEntityListWidget;
