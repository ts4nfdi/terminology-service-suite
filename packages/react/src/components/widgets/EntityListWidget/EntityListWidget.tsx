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
  try {
    const url = new URL(baseUrl);
    const ps = Number(url.searchParams.get("size"));
    return Number.isFinite(ps) && ps > 0 ? ps : DEFAULT_FETCH_SIZE;
  } catch {
    return DEFAULT_FETCH_SIZE;
  }
}

function parseOlsUrl(baseUrl: string): {
  endpoint: "classes" | "terms" | "properties" | "individuals" | "ontologies";
  useLegacy: boolean;
  ontologyId?: string;
  parameter?: string;
} {
  const url = new URL(baseUrl);
  const parts = url.pathname.split("/").filter(Boolean);

  const useLegacy = !parts.includes("v2");

  const idx = parts.indexOf("ontologies");
  const ontologyId = idx >= 0 ? parts[idx + 1] : undefined;
  const endpoint =
    (idx >= 0 && parts[idx + 2]) ||
    (idx >= 0 && !ontologyId ? "ontologies" : "classes");

  const sp = new URLSearchParams(url.searchParams);
  sp.delete("page");
  sp.delete("size");

  return {
    endpoint:
      endpoint === "terms" ||
      endpoint === "properties" ||
      endpoint === "individuals" ||
      endpoint === "ontologies"
        ? endpoint
        : "classes",
    useLegacy: endpoint === "terms" ? true : useLegacy,
    ontologyId,
    parameter: sp.toString() || undefined,
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

  for (const v of Object.values(embedded)) {
    if (Array.isArray(v)) return v as any[];
  }

  return [];
}

function extractTotal(response: any, fallback: number) {
  const candidates = [
    response?.totalElements,
    response?.numElements,
    response?.page?.totalElements,
  ];

  for (const value of candidates) {
    const num =
      typeof value === "number"
        ? value
        : typeof value === "string" || typeof value === "bigint"
          ? Number(value)
          : NaN;

    if (Number.isFinite(num)) return num;
  }

  return fallback;
}


const entityApi = new OlsEntityApi(EBI_API_ENDPOINT);
const ontologyApi = new OlsOntologyApi(EBI_API_ENDPOINT);

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

  const {
    data: firstPage,
    isLoading: isLoadingFirstPage,
    isError,
    error,
  } = useQuery<QueryResult>(
    ["entityList:firstPage", baseUrl, fetchSize],
    () => fetchPage(baseUrl, 0, fetchSize),
    {
      keepPreviousData: false,
      staleTime: 60_000,
    },
  );

  useEffect(() => {
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    setAllRows([]);
    setTotalItemCount(0);
    setIsFetchingMore(false);

    return () => {
      abortRef.current?.abort();
    };
  }, [baseUrl, fetchSize]);

  useEffect(() => {
    if (!firstPage) return;
    setAllRows(firstPage.rows);
    setTotalItemCount(firstPage.totalItemCount);
  }, [firstPage]);

  useEffect(() => {
    if (!firstPage) return;

    const controller = abortRef.current;
    const signal = controller?.signal;

    const total = firstPage.totalItemCount;
    const already = firstPage.rows.length;

    if (!total || already >= total) return;

    const totalPages = Math.ceil(total / fetchSize);
    const remainingPages: number[] = [];
    for (let p = 1; p < totalPages; p++) remainingPages.push(p);

    let cancelled = false;
    setIsFetchingMore(true);

    const pending = new Map<number, EntityRow[]>();
    let nextPageToFlush = 1;

    const flush = () => {
      while (pending.has(nextPageToFlush)) {
        const rows = pending.get(nextPageToFlush)!;
        pending.delete(nextPageToFlush);
        nextPageToFlush += 1;

        setAllRows((prev) => {
          if (rows.length === 0) return prev;
          const last = prev[prev.length - 1];
          if (last && last.rowIndex >= rows[0].rowIndex) return prev;
          return [...prev, ...rows];
        });
      }
    };

    const runPool = async () => {
      const queue = [...remainingPages];

      const workerCount = Math.min(FETCH_CONCURRENCY, queue.length);
      const workers = Array.from({ length: workerCount }, async () => {
        while (queue.length && !cancelled && !signal?.aborted) {
          const page = queue.shift();
          if (page == null) return;

          try {
            const result = await fetchPage(baseUrl, page, fetchSize, signal);
            pending.set(page, result.rows);
            flush();
          } catch {
            if ((signal as any)?.aborted) return;
          }
        }
      });

      await Promise.all(workers);
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
