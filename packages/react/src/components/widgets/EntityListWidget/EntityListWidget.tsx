"use client";
import { EuiProvider } from "@elastic/eui";
import { useEffect, useMemo, useRef, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import {
  getEntitiesWithEntityTypeProvided,
  OlsEntityApi,
} from "../../../api/ols/OlsEntityApi";
import { normalizeBaseApi } from "../../../api/ols/OlsSearchApi";
import { EntityListWidgetProps, EntityRow } from "../../../app";
import {
  EntityTypeName,
  entityTypeToEntityTypeName,
  isEntityTypeName,
} from "../../../model/ModelTypeCheck";
import { EntityListPresentation } from "./EntityListPresentation";
import { normalizeSearchText } from "./Utils/searchUtils";

type QueryResult = { rows: EntityRow[]; totalItemCount: number };

export function isPropertyEntityType(entityType: EntityTypeName | undefined) {
  return (
    entityType === "property" ||
    entityType === "annotationProperty" ||
    entityType === "dataProperty" ||
    entityType === "objectProperty"
  );
}

export function isIndividualEntityType(entityType: EntityTypeName | undefined) {
  return entityType === "individual";
}

function EntityListWidget(props: EntityListWidgetProps): React.JSX.Element {
  const { api, ontologyId, parameter, entityType } = props;

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

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

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
  }, [api, ontologyId, parameter, entityType]);

  useEffect(() => {
    /**
     * Wait until the user pauses typing before updating the search value
     * and restart pagination from the first page for global search results.
     */
    const t = setTimeout(() => {
      const normalizedSearchValue = normalizeSearchText(searchText);
      setPageIndex(0);
      setDebouncedSearchText(normalizedSearchValue);
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
  }, [
    api,
    ontologyId,
    parameter,
    pageIndex,
    pageSize,
    debouncedSearchText,
    normalizedEntityType,
  ]);

  const queryKey = useMemo(
    () =>
      [
        "entityList:page",
        api,
        ontologyId,
        parameter,
        pageIndex,
        pageSize,
        debouncedSearchText,
        normalizedEntityType,
      ] as const,
    [
      api,
      ontologyId,
      parameter,
      pageIndex,
      pageSize,
      debouncedSearchText,
      normalizedEntityType,
    ],
  );

  const queryFn = async (): Promise<QueryResult> => {
    const signal = controllerRef.current.signal;

    if (!apiBase || !entityApi || !ontologyId || !normalizedEntityType) {
      return { rows: [], totalItemCount: 0 };
    }

    /**
     * Use the search parameter when the user enters a search value.
     * This searches the whole dataset instead of filtering only the current page.
     */
    if (debouncedSearchText) {
      const searchParameter = `${parameter}&search=**${debouncedSearchText}**`;
      return await fetchListPage(
        entityApi,
        ontologyId,
        searchParameter,
        normalizedEntityType,
        pageIndex,
        pageSize,
        signal,
      );
    }

    return await fetchListPage(
      entityApi,
      ontologyId,
      parameter ?? "",
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
      enabled: Boolean(apiBase && ontologyId && normalizedEntityType),
      keepPreviousData: true,
      staleTime: 60_000,
      retry: false,
    },
  );

  const totalItemCount = data?.totalItemCount ?? 0;

  const onTableChange = ({
    page,
    sort,
  }: {
    page?: { index: number; size: number };
    sort?: { field: keyof EntityRow; direction: "asc" | "desc" };
  }) => {
    if (page) {
      setPageIndex(page.index);
      setPageSize(page.size);
    }

    if (sort) {
      setSortField(sort.field);
      setSortDirection(sort.direction);
    }
  };

  return (
    <EntityListPresentation
      isLoading={isLoading}
      isFetching={isFetching}
      totalItemCount={totalItemCount}
      searchText={searchText}
      onSearchTextChange={setSearchText}
      onTableChange={onTableChange}
      pageIndex={pageIndex}
      pageSize={pageSize}
      sortField={sortField}
      sortDirection={sortDirection}
      entityType={normalizedEntityType}
      error={isError ? error : undefined}
      rows={data?.rows ?? []}
    />
  );
}

function pickLabel(item: any) {
  return formatEntityField(item?.label ?? item?.title ?? item?.name);
}

function pickId(item: any) {
  const v = item?.curie ?? item?.obo_id ?? item?.short_form ?? item?.id;
  return v ? String(v) : "—";
}

function pickDomain(item: any) {
  return formatEntityField(item?.domain ?? item?.domains);
}

function pickRange(item: any) {
  return formatEntityField(item?.range ?? item?.ranges);
}

function pickType(item: any) {
  const rdfTypeKey = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
  const rawValue = item?.[rdfTypeKey];

  if (!rawValue) {
    const fallbackType = item?.type ?? item?.entityType ?? item?.ontologyType;
    if (fallbackType) {
      if (Array.isArray(fallbackType)) {
        return fallbackType.join(", ");
      }
      return String(fallbackType);
    }
  }

  if (!rawValue) return "—";

  const iris = Array.isArray(rawValue) ? rawValue : [rawValue];
  if (!iris.length) return "—";

  /**
   * Only consider the first value
   */
  const iri = iris[0];
  if (!iri || typeof iri !== "string") return "—";

  const linked = item?.linkedEntities?.[iri];

  if (linked?.label) {
    const labelArray = Array.isArray(linked.label)
      ? linked.label
      : [linked.label];

    /**
     * Normalize + deduplicate
     */
    const cleaned = Array.from(
      new Set(labelArray.map((l: any) => String(l).trim()).filter(Boolean)),
    );

    if (cleaned.length === 0) {
      console.log(`No label was found for the IRI: ${iri}`);
    } else {
      /**
       * If multiple values, remove NamedIndividual
       */
      if (cleaned.length > 1) {
        const filtered = cleaned.filter((l) => l !== "NamedIndividual");
        if (filtered.length > 0) {
          return filtered.join(", ");
        }
      }

      /**
       * If only NamedIndividual or nothing else remains
       */
      return cleaned.join(", ");
    }
  } else {
    console.log(`No label was found for the IRI: ${iri}`);
  }

  /**
   * Fallback: extract fragment after # or /
   */
  const fragment = iri.includes("#")
    ? iri.split("#").pop()
    : iri.split("/").pop();

  return fragment || "—";
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
 * Extract entity items from the API response based on entity type
 */
function extractElements(response: any, entityType: EntityTypeName): any[] {
  if (Array.isArray(response?.elements)) return response.elements;

  const embedded = response?._embedded;
  if (!embedded || typeof embedded !== "object") return [];
  if (isPropertyEntityType(entityType))
    return Array.isArray(embedded.properties) ? embedded.properties : [];
  if (isIndividualEntityType(entityType))
    return Array.isArray(embedded.individuals) ? embedded.individuals : [];

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

async function fetchListPage(
  entityApi: OlsEntityApi,
  ontologyId: string | undefined,
  parameter: string,
  entityTypes: EntityTypeName | undefined,
  pageIndex: number,
  pageSize: number,
  signal?: AbortSignal,
): Promise<QueryResult> {
  const paginationParams = { page: String(pageIndex), size: String(pageSize) };

  const effectiveEntityType: EntityTypeName = entityTypes ?? "class";
  const entityType = entityTypeToEntityTypeName(effectiveEntityType);

  const response = await getEntitiesWithEntityTypeProvided(
    entityApi,
    entityType,
    ontologyId,
    parameter,
    false,
    paginationParams,
    signal,
  );

  const elements = extractElements(response, effectiveEntityType);
  const baseIndex = pageIndex * pageSize;

  return {
    rows: elements.map((item, i) => ({
      name: pickLabel(item),
      id: pickId(item),
      rowIndex: baseIndex + i,
      domain: isPropertyEntityType(effectiveEntityType)
        ? pickDomain(item)
        : undefined,
      range: isPropertyEntityType(effectiveEntityType)
        ? pickRange(item)
        : undefined,
      type: isIndividualEntityType(effectiveEntityType)
        ? pickType(item)
        : undefined,
    })),
    totalItemCount: extractTotal(response, elements.length),
  };
}

const queryClient = new QueryClient();

export function WrappedEntityListWidget(
  props: EntityListWidgetProps,
): React.JSX.Element {
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <EntityListWidget
          api={props.api}
          ontologyId={props.ontologyId}
          parameter={props.parameter}
          entityType={props.entityType}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { EntityListWidget };
export default WrappedEntityListWidget;
