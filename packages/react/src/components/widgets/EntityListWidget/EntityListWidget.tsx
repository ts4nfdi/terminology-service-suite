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
  EntityTypeName,
  entityTypeToEntityTypeName,
  isEntityTypeName,
} from "../../../model/ModelTypeCheck";
import {
  buildSolrPrefixQuery,
  compareValues,
  getPreferredIdFromSearchDoc,
  getPreferredLabelFromSearchDoc,
  normalizeSearchText,
} from "./Utils/searchUtils";

type EntityRow = {
  name: string;
  id: string;
  rowIndex: number;
  domain?: string;
  range?: string;
  type?: string;
};

type QueryResult = { rows: EntityRow[]; totalItemCount: number };

const PAGE_SIZE_OPTIONS = [10, 25, 50] as const;
type PageSize = (typeof PAGE_SIZE_OPTIONS)[number];

function EntityListWidget(props: EntityListWidgetProps) {
  const { api, ontologyId, parameter, useLegacy, entityType } = props;
  const searchParameter = (props as any).searchParameter as string | undefined;

  const normalizedEntityType: EntityTypeName | undefined =
    entityType && isEntityTypeName(entityType) ? entityType : undefined;

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
  }, [api, ontologyId]);

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
  }, [api, ontologyId, pageIndex, pageSize, debouncedSearchText, normalizedEntityType]);

  const queryKey = useMemo(
    () =>
      [
        "entityList:page",
        api,
        ontologyId,
        pageIndex,
        pageSize,
        debouncedSearchText,
        normalizedEntityType,
      ] as const,
    [api, ontologyId, pageIndex, pageSize, debouncedSearchText, normalizedEntityType],
  );

  const queryFn = async (): Promise<QueryResult> => {
    const signal = controllerRef.current.signal;

    if (
      !apiBase ||
      !entityApi ||
      !ontologyApi ||
      !searchApi ||
      !ontologyId ||
      !normalizedEntityType
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
        normalizedEntityType,
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
      normalizedEntityType,
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
        normalizedEntityType &&
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

  const columns: Array<EuiBasicTableColumn<EntityRow>> = useMemo(() => {
    const baseColumns: Array<EuiBasicTableColumn<EntityRow>> = [
      { field: "name", name: "Name", truncateText: true, sortable: true },
      { field: "id", name: "ID", truncateText: true, sortable: true },
    ];

    if (normalizedEntityType === "property") {
      baseColumns.push(
        {
          field: "domain",
          name: "Domain",
          truncateText: true,
          sortable: true,
        },
        { field: "range", name: "Range", truncateText: true, sortable: true },
      );
    }

    if (normalizedEntityType === "individual") {
      baseColumns.push({
        field: "type",
        name: "Type",
        truncateText: true,
        sortable: true,
      });
    }

    return baseColumns;
  }, [normalizedEntityType]);

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
  return formatEntityField(
    item?.label ??
      item?.title ??
      item?.name ??
      item?.ontologyId,
  );
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

function pickDomain(item: any) {
  return formatEntityField(item?.domain ?? item?.domains);
}

function pickRange(item: any) {
  return formatEntityField(item?.range ?? item?.ranges);
}

function pickType(item: any) {
  return formatEntityField(item?.type ?? item?.types);
}

/**
 * Convert entity field values into string, including multi-value fields.
 */
function formatEntityField(value: any): string {
  if (value == null) return "—";

  if (Array.isArray(value)) {
    const parts = value
      .map((item) => formatSingleEntityField(item))
      .filter(Boolean);
    return parts.length ? parts.join(", ") : "—";
  }

  return formatSingleEntityField(value) || "—";
}

function formatSingleEntityField(value: any): string {
  if (value == null) return "";

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value);
  }

  if (typeof value === "object") {
    const candidate =
      value.label ??
      value.name ??
      value.title ??
      value.value ??
      value.text ??
      value.literal ??
      value.short_form ??
      value.obo_id ??
      value.curie ??
      value.id ??
      value.iri;

    if (Array.isArray(candidate)) {
      return candidate.length ? formatSingleEntityField(candidate[0]) : "";
    }

    if (candidate != null && candidate !== value) {
      return formatSingleEntityField(candidate);
    }
  }

  return "";
}

/**
 * Extract entity items from the API response based on entity type and legacy mode
 */
function extractElements(
  response: any,
  entityType: EntityTypeName,
  useLegacy: boolean,
): any[] {
  if (Array.isArray(response?.elements)) return response.elements;

  const embedded = response?._embedded;
  if (!embedded || typeof embedded !== "object") return [];
  if (entityType === "property")
    return Array.isArray(embedded.properties) ? embedded.properties : [];
  if (entityType === "individual")
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
  entityType: EntityTypeName,
  ontologyId: string,
  pageIndex: number,
  pageSize: number,
  searchText: string,
  searchParameter: string,
  signal?: AbortSignal,
): Promise<QueryResult> {
  const start = pageIndex * pageSize;

  const type =
    entityType === "property"
      ? "property"
      : entityType === "individual"
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
      domain: entityType === "property" ? pickDomain(d) : undefined,
      range: entityType === "property" ? pickRange(d) : undefined,
      type: entityType === "individual" ? pickType(d) : undefined,
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
  entityTypes: EntityTypeName | undefined,
  pageIndex: number,
  pageSize: number,
  signal?: AbortSignal,
): Promise<QueryResult> {
  const paginationParams = { page: String(pageIndex), size: String(pageSize) };

  const effectiveEntityType: EntityTypeName = entityTypes ?? "class";

  let response;

  const entityType = entityTypeToEntityTypeName(effectiveEntityType);

  response = await getEntitiesWithEntityTypeProvided(
    entityApi,
    entityType,
    ontologyId,
    parameter,
    useLegacy,
    paginationParams,
    signal,
  );

  const elements = extractElements(response, effectiveEntityType, useLegacy);
  const baseIndex = pageIndex * pageSize;

  return {
    rows: elements.map((item, i) => ({
      name: pickLabel(item),
      id: pickId(item),
      rowIndex: baseIndex + i,
      domain: effectiveEntityType === "property" ? pickDomain(item) : undefined,
      range: effectiveEntityType === "property" ? pickRange(item) : undefined,
      type: effectiveEntityType === "individual" ? pickType(item) : undefined,
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
          entityType={props.entityType}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { EntityListWidget };
export default WrappedEntityListWidget;
