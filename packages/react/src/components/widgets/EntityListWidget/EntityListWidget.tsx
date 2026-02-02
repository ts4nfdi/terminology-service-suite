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
import { useEffect, useMemo, useRef, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { OlsOntologyApi } from "../../../api/ols/OlsOntologyApi";
import { EBI_API_ENDPOINT } from "../../../app/globals";

type EntityRow = { name: string; id: string; rowIndex: number };
export type EntityListWidgetProps = { apiUrl?: string };
type QueryResult = { rows: EntityRow[]; totalItemCount: number };

const DEFAULT_API_URL = `${EBI_API_ENDPOINT}v2/ontologies/uberon/classes?search=mid`;

const DEFAULT_FETCH_SIZE = 200;
const FETCH_CONCURRENCY = 4;

const entityApi = new OlsEntityApi(EBI_API_ENDPOINT);
const ontologyApi = new OlsOntologyApi(EBI_API_ENDPOINT);

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


function parseOlsUrl(baseUrl: string): {
  endpoint: "classes" | "terms" | "properties" | "individuals" | "ontologies";
  useLegacy: boolean;
  ontologyId?: string;
  parameter?: string;
} {
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

  const sp = new URLSearchParams(url.searchParams);
  sp.delete("page");
  sp.delete("size");
  const parameter = sp.toString() || undefined;

  return {
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

  if (typeof total === "number" && Number.isFinite(total)) {
    return total;
  }

  if (
    (typeof total === "string" || typeof total === "bigint") &&
    Number.isFinite(Number(total))
  ) {
    return Number(total);
  }

  return fallback;
}


async function fetchPage(
  baseUrl: string,
  pageIndex: number,
  pageSize: number,
  signal?: AbortSignal,
): Promise<QueryResult> {
  const { endpoint, useLegacy, ontologyId, parameter } = parseOlsUrl(baseUrl);

  const paginationParams = { page: String(pageIndex), size: String(pageSize) };
  const contentParams = ontologyId ? { ontologyId } : undefined;

  let response: any;

  switch (endpoint) {
    case "ontologies":
      response = await ontologyApi.getOntologies(
        paginationParams,
        undefined,
        undefined,
        parameter,
        useLegacy,
      );
      break;

    case "properties":
      response = await (entityApi.getProperties as any)(
        paginationParams,
        undefined,
        contentParams,
        parameter,
        useLegacy,
        signal,
      );
      break;

    case "individuals":
      response = await (entityApi.getIndividuals as any)(
        paginationParams,
        undefined,
        contentParams,
        parameter,
        useLegacy,
        signal,
      );
      break;

    default:
      response = await (entityApi.getTerms as any)(
        paginationParams,
        undefined,
        contentParams,
        parameter,
        useLegacy,
        signal,
      );
      break;
  }

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

function EntityListWidget({ apiUrl }: EntityListWidgetProps) {
  const baseUrl = apiUrl ?? DEFAULT_API_URL;
  const fetchSize = useMemo(() => getFetchSizeFromUrl(baseUrl), [baseUrl]);

  const [allRows, setAllRows] = useState<EntityRow[]>([]);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    setAllRows([]);
    setTotalItemCount(0);
    setIsFetchingMore(false);

    return () => abortRef.current?.abort();
  }, [baseUrl, fetchSize]);

  const firstPageKey = useMemo(
    () => ["entityList:firstPage", baseUrl, fetchSize] as const,
    [baseUrl, fetchSize],
  );

  const fetchFirstPage = useMemo(
    () => () => fetchPage(baseUrl, 0, fetchSize, abortRef.current?.signal),
    [baseUrl, fetchSize],
  );

  const {
    data: firstPage,
    isLoading: isLoadingFirstPage,
    isError,
    error,
  } = useQuery<QueryResult>(firstPageKey, fetchFirstPage, {
    keepPreviousData: false,
    staleTime: 60_000,
    enabled: Boolean(abortRef.current),
  });

  useEffect(() => {
    if (!firstPage) return;
    setAllRows(firstPage.rows);
    setTotalItemCount(firstPage.totalItemCount);
  }, [firstPage]);


  useEffect(() => {
    if (!firstPage) return;

    const signal = abortRef.current?.signal;

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
        while (!cancelled && !signal?.aborted) {
          const page = queue[i++];
          if (page == null) return;

          try {
            const result = await fetchPage(baseUrl, page, fetchSize, signal);
            pending.set(page, result.rows);
            flush();
          } catch {
            if (signal?.aborted) return;
          }
        }
      };

      const workerCount = Math.min(FETCH_CONCURRENCY, queue.length);
      await Promise.all(Array.from({ length: workerCount }, worker));
    };

    runPool().finally(() => {
      if (cancelled || signal?.aborted) return;
      setIsFetchingMore(false);
    });

    return () => {
      cancelled = true;
    };
  }, [firstPage, baseUrl, fetchSize]);

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
        rowProps={(item) => ({
          style: {
            backgroundColor: item.rowIndex % 2 === 0 ? "#f0f6ff" : "#ffffff",
          },
        })}
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
