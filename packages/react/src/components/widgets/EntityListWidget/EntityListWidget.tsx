"use client";
import type { EuiBasicTableColumn } from "@elastic/eui";
import {
  EuiBasicTable,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiProvider,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { css } from "@emotion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import {
  getEntitiesWithEntityTypeProvided,
  OlsEntityApi,
} from "../../../api/ols/OlsEntityApi";
import { OlsOntologyApi } from "../../../api/ols/OlsOntologyApi";
import { EntityListWidgetProps } from "../../../app";
import {
  isThingTypeName,
  ThingTypeName,
  thingTypeToEntityTypeName,
} from "../../../model/ModelTypeCheck";
import {
  buildSolrPrefixQuery,
  normalizeSearchText,
} from "./Utils/inputSearchUtils";

type EntityRow = { name: string; id: string; rowIndex: number };
type QueryResult = { rows: EntityRow[]; totalItemCount: number };

const PAGE_SIZE_OPTIONS = [10, 25, 50] as const;
type PageSize = (typeof PAGE_SIZE_OPTIONS)[number];

function EntityListWidget(props: EntityListWidgetProps) {
  const { api, ontologyId, parameter, useLegacy, thingType } = props;

  const normalizedThingType: ThingTypeName | undefined =
    thingType && isThingTypeName(thingType) ? thingType : undefined;

  const apiBase = useMemo(() => {
    if (!api || typeof api !== "string") return undefined;
    return normalizeBaseApi(api);
  }, [api]);

  const baseUrl = useMemo(() => {
    if (
      !apiBase ||
      typeof useLegacy !== "boolean" ||
      !ontologyId ||
      !normalizedThingType
    ) {
      return undefined;
    }

    return buildEntityListApiUrl({
      api: apiBase,
      useLegacy,
      ontologyId,
      thingType: normalizedThingType,
      parameter: parameter ?? "",
    });
  }, [apiBase, useLegacy, ontologyId, normalizedThingType, parameter]);

  const entityApi = useMemo(() => {
    if (!apiBase) return undefined;
    return new OlsEntityApi(apiBase);
  }, [apiBase]);

  const ontologyApi = useMemo(() => {
    if (!apiBase) return undefined;
    return new OlsOntologyApi(apiBase);
  }, [apiBase]);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState<PageSize>(10);

  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  const [sortField, setSortField] = useState<keyof EntityRow>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const controllerRef = useRef<AbortController>(new AbortController());

  useEffect(() => {
    controllerRef.current.abort();
    controllerRef.current = new AbortController();
    setPageIndex(0);
    setPageSize(10);
    setSearchText("");
    setDebouncedSearchText("");
    setSortField("name");
    setSortDirection("asc");
    return () => {
      controllerRef.current.abort();
    };
  }, [baseUrl]);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearchText(normalizeSearchText(searchText));
    }, 300);
    return () => clearTimeout(t);
  }, [searchText]);

  useEffect(() => {
    controllerRef.current.abort();
    controllerRef.current = new AbortController();
    return () => {
      controllerRef.current.abort();
    };
  }, [baseUrl, pageIndex, pageSize, debouncedSearchText, normalizedThingType]);

  const queryKey = useMemo(
    () =>
      [
        "entityList:page",
        baseUrl,
        pageIndex,
        pageSize,
        debouncedSearchText,
        normalizedThingType,
      ] as const,
    [baseUrl, pageIndex, pageSize, debouncedSearchText, normalizedThingType],
  );

  const queryFn = async (): Promise<QueryResult> => {
    const signal = controllerRef.current.signal;

    if (
      !baseUrl ||
      !apiBase ||
      !entityApi ||
      !ontologyApi ||
      !ontologyId ||
      !normalizedThingType
    ) {
      return { rows: [], totalItemCount: 0 };
    }

    if (debouncedSearchText) {
      return await fetchSearchPage(
        apiBase,
        normalizedThingType,
        ontologyId,
        pageIndex,
        pageSize,
        debouncedSearchText,
        signal,
      );
    }

    return await fetchListPage(
      entityApi,
      ontologyApi,
      ontologyId,
      parameter ?? "",
      useLegacy ?? false,
      normalizedThingType,
      pageIndex,
      pageSize,
      signal,
    );
  };

  const { data, isLoading, isFetching, isError, error } = useQuery<QueryResult>(
    queryKey,
    queryFn,
    {
      enabled: Boolean(
        apiBase &&
        ontologyId &&
        normalizedThingType &&
        typeof useLegacy === "boolean",
      ),
      keepPreviousData: true,
      staleTime: 60_000,
      retry: false,
    },
  );

  const totalItemCount = data?.totalItemCount ?? 0;

  const rowsSorted = useMemo(() => {
    const rows = data?.rows ?? [];
    const sorted = [...rows].sort((a, b) => {
      const r = compareValues(a[sortField], b[sortField]);
      return sortDirection === "asc" ? r : -r;
    });
    return sorted;
  }, [data?.rows, sortField, sortDirection]);

  const columns: Array<EuiBasicTableColumn<EntityRow>> = useMemo(
    () => [
      { field: "name", name: "Name", truncateText: true, sortable: true },
      { field: "id", name: "ID", truncateText: true, sortable: true },
    ],
    [],
  );

  const onTableChange = ({
    page,
    sort,
  }: {
    page?: { index: number; size: number };
    sort?: { field: keyof EntityRow; direction: "asc" | "desc" };
  }) => {
    if (page) {
      const nextSize = (
        PAGE_SIZE_OPTIONS.includes(page.size as any) ? page.size : 10
      ) as PageSize;

      if (nextSize !== pageSize) {
        setPageSize(nextSize);
        setPageIndex(0);
      } else if (page.index !== pageIndex) {
        setPageIndex(page.index);
      }
    }

    if (sort) {
      setSortField(sort.field);
      setSortDirection(sort.direction);
    }
  };

  return (
    <EuiPanel paddingSize="m">
      <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiText size="s" color="subdued">
            Loaded: {rowsSorted.length}
            {totalItemCount ? ` / ${totalItemCount}` : ""}
            {isFetching ? " (loading…)" : ""}
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="s" />

      <EuiFieldSearch
        fullWidth
        incremental
        placeholder="Search by Name or ID"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setPageIndex(0);
        }}
        isClearable
        aria-label="Search by Name or ID"
      />

      <EuiSpacer size="m" />

      <EuiBasicTable<EntityRow>
        css={css`
          tbody .euiTableRow:nth-of-type(odd) {
            background-color: #ffffff;
          }
          tbody .euiTableRow:nth-of-type(even) {
            background-color: #f0f6ff;
          }
        `}
        tableCaption="Entity list"
        responsiveBreakpoint={false}
        items={rowsSorted}
        columns={columns}
        loading={isFetching}
        onChange={onTableChange}
        pagination={{
          pageIndex,
          pageSize,
          totalItemCount,
          pageSizeOptions: [...PAGE_SIZE_OPTIONS],
        }}
        sorting={{
          sort: { field: sortField, direction: sortDirection },
        }}
      />
    </EuiPanel>
  );
}

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

// Extracts the array of entity items from the API response, using thingType and useLegacy
function extractElements(
  response: any,
  thingType: ThingTypeName,
  useLegacy: boolean,
): any[] {
  if (Array.isArray(response?.elements)) return response.elements;

  const embedded = response?._embedded;
  if (!embedded || typeof embedded !== "object") return [];

  if (thingType === "ontology")
    return Array.isArray(embedded.ontologies) ? embedded.ontologies : [];
  if (thingType === "property")
    return Array.isArray(embedded.properties) ? embedded.properties : [];
  if (thingType === "individual")
    return Array.isArray(embedded.individuals) ? embedded.individuals : [];

  if (useLegacy) return Array.isArray(embedded.terms) ? embedded.terms : [];
  return Array.isArray(embedded.classes) ? embedded.classes : [];
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

// heart = Heart = HEART = HeaRt =...
function compareValues(a: unknown, b: unknown) {
  const av = a == null ? "" : String(a);
  const bv = b == null ? "" : String(b);
  return av.localeCompare(bv, undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

function getPreferredIdFromSearchDoc(d: any) {
  const v =
    d?.curie ?? d?.obo_id ?? d?.short_form ?? d?.id ?? d?.iri ?? d?.ontologyId;
  return v ? String(v) : "—";
}

function getPreferredLabelFromSearchDoc(d: any) {
  const v =
    d?.label ?? d?.label_autosuggest ?? d?.title ?? d?.name ?? d?.ontologyId;
  if (Array.isArray(v)) return v[0] ? String(v[0]) : "—";
  return v ? String(v) : "—";
}

function splitAndApplyParams(url: URL, raw: string) {
  if (!raw) return;
  for (const part of raw.split("&")) {
    if (!part) continue;
    const [k, v] = part.split("=");
    if (!k) continue;
    url.searchParams.set(k, v ?? "");
  }
}

function normalizeBaseApi(api: string) {
  return api.endsWith("/") ? api : `${api}/`;
}

type Endpoint =
  | "ontologies"
  | "properties"
  | "individuals"
  | "classes"
  | "terms";

function getEndpoint(thingType: string, useLegacy: boolean): Endpoint {
  switch (thingType) {
    case "ontology":
      return "ontologies";
    case "property":
      return "properties";
    case "individual":
      return "individuals";
    default:
      return useLegacy ? "terms" : "classes";
  }
}

function buildBaseUrl(
  api: string,
  useLegacy: boolean,
  ontologyId: string,
  endpoint: Endpoint,
) {
  const prefix = useLegacy ? "" : "v2/";
  if (endpoint === "ontologies") {
    return `${api}${prefix}ontologies?`;
  }
  return `${api}${prefix}ontologies/${ontologyId}/${endpoint}?`;
}

export function buildEntityListApiUrl(args: {
  api: string;
  useLegacy: boolean;
  ontologyId: string;
  thingType: string;
  parameter: string;
}) {
  const api = normalizeBaseApi(args.api);
  const endpoint = getEndpoint(args.thingType, args.useLegacy);
  const base = buildBaseUrl(api, args.useLegacy, args.ontologyId, endpoint);

  const url = new URL(base);
  url.searchParams.set("size", "10");
  splitAndApplyParams(url, args.parameter);
  return url.toString();
}

async function fetchSearchPage(
  apiBase: string,
  thingType: ThingTypeName,
  ontologyId: string,
  pageIndex: number,
  pageSize: number,
  searchText: string,
  signal?: AbortSignal,
): Promise<QueryResult> {
  const start = pageIndex * pageSize;
  const url = new URL("search", apiBase);

  const type =
    thingType === "ontology"
      ? "ontology"
      : thingType === "property"
        ? "property"
        : thingType === "individual"
          ? "individual"
          : "class";

  url.searchParams.set("q", buildSolrPrefixQuery(searchText));
  url.searchParams.set("type", type);
  url.searchParams.set(
    "queryFields",
    type === "ontology"
      ? "ontologyId,ontology_name,ontology_prefix,label,title,name"
      : "label,obo_id,short_form,iri",
  );
  url.searchParams.set("ontology", ontologyId);
  url.searchParams.set("start", String(start));
  url.searchParams.set("rows", String(pageSize));
  url.searchParams.set("exact", "false");
  url.searchParams.set("obsoletes", "false");

  const res = await fetch(url.toString(), { signal });
  if (!res.ok) throw new Error(`Search request failed (${res.status})`);
  const json: any = await res.json();

  const docs: any[] = Array.isArray(json?.response?.docs)
    ? json.response.docs
    : [];
  const total =
    typeof json?.response?.numFound === "number" &&
    Number.isFinite(json.response.numFound)
      ? json.response.numFound
      : docs.length;

  return {
    rows: docs.map((d, i) => ({
      name: getPreferredLabelFromSearchDoc(d),
      id: getPreferredIdFromSearchDoc(d),
      rowIndex: start + i,
    })),
    totalItemCount: total,
  };
}

async function fetchListPage(
  entityApi: OlsEntityApi,
  ontologyApi: OlsOntologyApi,
  ontologyId: string | undefined,
  parameter: string,
  useLegacy: boolean,
  thingType: ThingTypeName | undefined,
  pageIndex: number,
  pageSize: number,
  signal?: AbortSignal,
): Promise<QueryResult> {
  const paginationParams = { page: String(pageIndex), size: String(pageSize) };

  const effectiveThingType: ThingTypeName = thingType ?? "class";

  let response;

  if (effectiveThingType === "ontology") {
    response = await ontologyApi.getOntologies(
      paginationParams,
      undefined,
      undefined,
      parameter,
      useLegacy,
    );
  } else {
    const entityType = thingTypeToEntityTypeName(effectiveThingType);

    response = await getEntitiesWithEntityTypeProvided(
      entityApi,
      entityType,
      ontologyId,
      parameter,
      useLegacy,
      paginationParams,
      signal,
    );
  }

  const elements = extractElements(response, effectiveThingType, useLegacy);
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

const queryClient = new QueryClient();

export function WrappedEntityListWidget(props: EntityListWidgetProps) {
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <EntityListWidget
          api={props.api}
          ontologyId={props.ontologyId}
          parameter={props.parameter}
          useLegacy={props.useLegacy}
          thingType={props.thingType}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { EntityListWidget };
export default WrappedEntityListWidget;
