"use client";
import type { EuiBasicTableColumn } from "@elastic/eui";
import {
  EuiBasicTable,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
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
import { normalizeBaseApi, OlsSearchApi } from "../../../api/ols/OlsSearchApi";
import { EntityListWidgetProps } from "../../../app";
import { getErrorMessageToDisplay } from "../../../app/util";
import {
  isThingTypeName,
  ThingTypeName,
  entityTypeToEntityTypeName,
} from "../../../model/ModelTypeCheck";
import {
  buildSolrPrefixQuery,
  compareValues,
  getPreferredIdFromSearchDoc,
  getPreferredLabelFromSearchDoc,
  normalizeSearchText,
} from "./Utils/searchUtils";

type EntityRow = { name: string; id: string; rowIndex: number };
type QueryResult = { rows: EntityRow[]; totalItemCount: number };

const PAGE_SIZE_OPTIONS = [10, 25, 50] as const;
type PageSize = (typeof PAGE_SIZE_OPTIONS)[number];

function EntityListWidget(props: EntityListWidgetProps) {
  const { api, ontologyId, parameter, useLegacy, thingType } = props;
  const searchParameter = (props as any).searchParameter as string | undefined;

  const normalizedThingType: ThingTypeName | undefined =
    thingType && isThingTypeName(thingType) ? thingType : undefined;

  const apiBase = useMemo(() => {
    if (!api || typeof api !== "string") return undefined;
    return normalizeBaseApi(api);
  }, [api]);

  const entityApi = useMemo(() => {
    if (!apiBase) return undefined;
    return new OlsEntityApi(apiBase);
  }, [apiBase]);

  const ontologyApi = useMemo(() => {
    if (!apiBase) return undefined;
    return new OlsOntologyApi(apiBase);
  }, [apiBase]);

  const searchApi = useMemo(() => {
    if (!apiBase) return undefined;
    return new OlsSearchApi(apiBase);
  }, [apiBase]);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState<PageSize>(10);

  const [searchText, setSearchText] = useState("");
  /**
   * Normalized and delayed search value used to avoid firing a request on every keystroke
   */
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
  }, [api]);

  useEffect(() => {
    /**
     * Wait until the user pauses typing before updating the search value
     */
    const t = setTimeout(() => {
      setDebouncedSearchText(normalizeSearchText(searchText));
    }, 300);
    return () => clearTimeout(t);
  }, [searchText]);

  useEffect(() => {
    /**
     * Cancel any in-flight request when inputs change to prevent race conditions and stale data
     */
    controllerRef.current.abort();
    controllerRef.current = new AbortController();
    return () => {
      controllerRef.current.abort();
    };
  }, [api, pageIndex, pageSize, debouncedSearchText, normalizedThingType]);

  const queryKey = useMemo(
    () =>
      [
        "entityList:page",
        api,
        pageIndex,
        pageSize,
        debouncedSearchText,
        normalizedThingType,
      ] as const,
    [api, pageIndex, pageSize, debouncedSearchText, normalizedThingType],
  );

  const queryFn = async (): Promise<QueryResult> => {
    const signal = controllerRef.current.signal;

    if (
      !apiBase ||
      !entityApi ||
      !ontologyApi ||
      !searchApi ||
      !ontologyId ||
      !normalizedThingType
    ) {
      return { rows: [], totalItemCount: 0 };
    }

    /**
     * Use the /search endpoint when the user enters a search value
     * Otherwise, load the default paginated entity list
     */
    if (debouncedSearchText) {
      return await searchEntitiesPage(
        searchApi,
        normalizedThingType,
        ontologyId,
        pageIndex,
        pageSize,
        debouncedSearchText,
        /**
         * Optional /search params. Keep `queryFields` in query params for stable matching behavior
         */
        searchParameter ?? "",
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

  if (isLoading) {
    return (
      <div>
        <EuiLoadingSpinner size="s" />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <EuiText color="danger">{getErrorMessageToDisplay(error)}</EuiText>
      </div>
    );
  }

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

/**
 * Extract entity items from the API response based on thing type and legacy mode
 */
function extractElements(
  response: any,
  thingType: ThingTypeName,
  useLegacy: boolean,
): any[] {
  if (Array.isArray(response?.elements)) return response.elements;

  const embedded = response?._embedded;
  if (!embedded || typeof embedded !== "object") return [];
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

async function searchEntitiesPage(
  searchApi: OlsSearchApi,
  thingType: ThingTypeName,
  ontologyId: string,
  pageIndex: number,
  pageSize: number,
  searchText: string,
  searchParameter: string,
  signal?: AbortSignal,
): Promise<QueryResult> {
  const start = pageIndex * pageSize;

  const type =
    thingType === "property"
      ? "property"
      : thingType === "individual"
        ? "individual"
        : "class";

  /**
   * Convert user input into a Solr prefix query for more precise matching
   */
  const solrQuery = buildSolrPrefixQuery(searchText);

  const json: any = await searchApi.search(
    {
      /**
       * Keep query semantics identical to the old fetchSearchPage
       */
      query: solrQuery,
      types: type,
      ontology: ontologyId,
      exactMatch: false,
      showObsoleteTerms: false,
      /**
       * Restrict matching to key identifier fields for tighter results
       */
      queryFields: "label,obo_id,short_form,iri",
    } as any,
    {
      page: String(pageIndex),
      size: String(pageSize),
    } as any,
    undefined,
    /**
     * Pass optional /search params via the `parameter` argument
     */
    searchParameter,
    signal,
  );

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

  const entityType = entityTypeToEntityTypeName(effectiveThingType);

  response = await getEntitiesWithEntityTypeProvided(
    entityApi,
    entityType,
    ontologyId,
    parameter,
    useLegacy,
    paginationParams,
    signal,
  );

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
