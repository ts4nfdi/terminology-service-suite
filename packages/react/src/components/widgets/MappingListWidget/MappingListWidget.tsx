import { EuiPanel, EuiSearchBarProps, EuiText } from "@elastic/eui";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { JskosMappingApi } from "../../../api/coli-conc/JskosMappingAPI";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { MappingListWidgetProps } from "../../../app";
import { GATEWAY_API_OLS_ENDPOINT } from "../../../app/globals";
import { normalizeSearchText } from "../EntityListWidget/Utils/searchUtils";
import { formatMappingDate } from "../MappingDetailWidget/Utils/mappingUtils";
import type { MappingRow } from "./MappingListPresentation";
import MappingListPresentation from "./MappingListPresentation";

/**
 * Background of every other table row when the caller does not pick one.
 */
const DEFAULT_ROW_COLOR = "#fff5fa";

function MappingListWidget(props: MappingListWidgetProps) {
  const {
    api,
    source,
    rowColor = DEFAULT_ROW_COLOR,
    MappingDetailBackgroundColor,
  } = props;

  const jskosMappingApi = useMemo(() => new JskosMappingApi(api), [api]);
  const olsApi = useMemo(() => new OlsEntityApi(GATEWAY_API_OLS_ENDPOINT), []);

  const { data, isLoading, isError, error } = useQuery(
    ["mappings", source],
    () => {
      return jskosMappingApi.getMappingsByFrom(source);
    },
  );

  /**
   * Maps each URI to its readable label text.
   * Example:
   * {
   *   "http://uri.gbv.de/terminology/bk/86.69": "Agricultural law. Water law. Hunting law"
   * }
   */
  const [labels, setLabels] = useState<Record<string, string>>({});

  /**
   * Maps each source (from) URI to its readable label text, fetched from
   * the OLS gateway API the same way target labels are. Falls back to the
   * raw JSKOS notation whenever no OLS label is found.
   */
  const [fromLabels, setFromLabels] = useState<Record<string, string>>({});

  const [isTypeFilterOpen, setIsTypeFilterOpen] = useState(false);

  /**
   * Target entity whose metadata popup is currently open. Null while no popup
   * is shown. The gateway only resolves an entity on its ontology route, so
   * the scheme is kept next to the IRI.
   */
  const [metadataTarget, setMetadataTarget] = useState<{
    iri: string;
    ontologyId: string;
  } | null>(null);

  /**
   * Stores what the user searched in the search bar.
   */
  const [searchedQuery, setSearchedQuery] = useState("");

  /**
   * includes types: exactMatch, closeMatch, broadMatch, narrowMatch, relatedMatch and mappingRelation
   */
  const [selectedTypeFilters, setSelectedTypeFilters] = useState<string[]>([]);
  const [appliedTypeFilters, setAppliedTypeFilters] = useState<string[]>([]);

  const toggleTypeFilter = (type: string) => {
    if (selectedTypeFilters.includes(type)) {
      setSelectedTypeFilters(
        selectedTypeFilters.filter((selectedType) => {
          return selectedType !== type;
        }),
      );
    } else {
      setSelectedTypeFilters((prevState) => [...prevState, type]);
    }
  };

  /**
   * Ids of the rows whose detail card is currently expanded underneath them.
   */
  const [expandedRowIds, setExpandedRowIds] = useState<string[]>([]);

  function toggleRowExpansion(row: MappingRow) {
    setExpandedRowIds((prevState) =>
      prevState.includes(row.id)
        ? prevState.filter((expandedId) => expandedId !== row.id)
        : [...prevState, row.id],
    );
  }

  useEffect(() => {
    if (!data) return;

    data.forEach(async (item: any) => {
      const toUri = item.to?.memberSet?.[0]?.uri;
      const toScheme = item.toScheme?.notation?.[0]?.toLowerCase();

      if (!toScheme || !toUri || labels[toUri]) return;

      try {
        const entityResponse = await olsApi.getEntity(
          undefined,
          undefined,
          { ontologyId: toScheme, termIri: toUri },
          undefined,
          false,
        );

        const label = entityResponse?.elements?.[0]?.label ?? null;

        if (!label) return;

        setLabels((prevState) => ({ ...prevState, [toUri]: label }));
      } catch {
        /**
         * Keep the fallback notation when the OLS label cannot be loaded.
         */
      }
    });
  }, [data, labels, olsApi]);

  useEffect(() => {
    if (!data) return;

    data.forEach(async (item: any) => {
      const fromUri = item.from?.memberSet?.[0]?.uri;
      const fromScheme = item.fromScheme?.notation?.[0]?.toLowerCase();

      if (!fromScheme || !fromUri || fromLabels[fromUri]) return;

      try {
        const entityResponse = await olsApi.getEntity(
          undefined,
          undefined,
          { ontologyId: fromScheme, termIri: fromUri },
          undefined,
          false,
        );

        const label = entityResponse?.elements?.[0]?.label ?? null;

        if (!label) return;

        setFromLabels((prevState) => ({ ...prevState, [fromUri]: label }));
      } catch {
        /**
         * Keep the fallback notation when the OLS label cannot be loaded.
         */
      }
    });
  }, [data, fromLabels, olsApi]);

  /**
   * Builds table rows from the ColiConc mapping data.
   */
  const rows: MappingRow[] = useMemo(
    () =>
      (data ?? []).map((item: any, index: number) => {
        const toUri = item.to?.memberSet?.[0]?.uri ?? "—";
        const targetFromColiConc =
          item.to?.memberSet?.[0]?.notation?.[0] ?? "—";
        const rowFromUri = item.from?.memberSet?.[0]?.uri ?? "—";
        const sourceFromColiConc =
          item.from?.memberSet?.[0]?.notation?.[0] ?? "—";

        return {
          id: `${index}-${item.uri ?? toUri}`,
          from: fromLabels[rowFromUri] ?? sourceFromColiConc,
          fromUri: rowFromUri,
          to: labels[toUri] ?? targetFromColiConc,
          toUri,
          targetFromColiConc,
          creator: item.creator?.[0]?.prefLabel?.en ?? "—",
          type: item.type?.[0]?.split("#").pop() ?? "—",
          created: item.created ?? "—",
          createdLabel: formatMappingDate(item.created ?? "—"),
          fromScheme: item.fromScheme?.notation?.[0] ?? "—",
          toScheme: item.toScheme?.notation?.[0] ?? "—",
          identifier: item.identifier?.[0] ?? "—",
          modified: formatMappingDate(item.modified ?? "—"),
          uri: item.uri ?? "—",
          partOf: item.partOf?.[0]?.uri ?? "—",
        };
      }),
    [data, labels, fromLabels],
  );

  /**
   * Configures the EUI search bar for filtering ColiConc target and creator.
   */
  const search: EuiSearchBarProps = {
    onChange: ({ query }) => {
      const normalizedQuery = normalizeSearchText(query?.text ?? "");

      setSearchedQuery(normalizedQuery);
    },
    box: {
      incremental: true,
      placeholder: "Search Target or Creator",
    },
  };

  /**
   * Apply both the type-filter and the search-filter to the table rows
   */
  const filteredRows: MappingRow[] = useMemo(() => {
    const normalizedSearchQuery = searchedQuery.toLowerCase();

    return rows.filter((row) => {
      const matchesTypeFilter =
        appliedTypeFilters.length === 0 ||
        appliedTypeFilters.includes(row.type);

      const matchesSearch =
        normalizedSearchQuery === "" ||
        row.targetFromColiConc.toLowerCase().includes(normalizedSearchQuery) ||
        row.creator.toLowerCase().includes(normalizedSearchQuery);

      return matchesTypeFilter && matchesSearch;
    });
  }, [rows, appliedTypeFilters, searchedQuery]);

  const fromUri = data?.[0]?.from?.memberSet?.[0]?.uri ?? "—";
  const sourceFromColiConc =
    data?.[0]?.from?.memberSet?.[0]?.notation?.[0] ?? "—";
  const fromLabel = fromLabels[fromUri] ?? sourceFromColiConc;

  /**
   * State and handlers for the contextual help popover.
   */
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const onButtonClick = () => setIsPopoverOpen((isOpen) => !isOpen);
  const closePopover = () => setIsPopoverOpen(false);

  return isLoading ? (
    <EuiPanel paddingSize="m">
      <EuiText>Loading mappings...</EuiText>
    </EuiPanel>
  ) : isError ? (
    <EuiPanel paddingSize="m">
      <EuiText color="danger">
        Failed to load mappings:{" "}
        {error instanceof Error ? error.message : String(error)}
      </EuiText>
    </EuiPanel>
  ) : (
    <MappingListPresentation
      fromLabel={fromLabel}
      rowColor={rowColor}
      MappingDetailBackgroundColor={MappingDetailBackgroundColor}
      labels={labels}
      filteredRows={filteredRows}
      search={search}
      expandedRowIds={expandedRowIds}
      toggleRowExpansion={toggleRowExpansion}
      metadataTarget={metadataTarget}
      setMetadataTarget={setMetadataTarget}
      isTypeFilterOpen={isTypeFilterOpen}
      setIsTypeFilterOpen={setIsTypeFilterOpen}
      selectedTypeFilters={selectedTypeFilters}
      setSelectedTypeFilters={setSelectedTypeFilters}
      setAppliedTypeFilters={setAppliedTypeFilters}
      toggleTypeFilter={toggleTypeFilter}
      isPopoverOpen={isPopoverOpen}
      onButtonClick={onButtonClick}
      closePopover={closePopover}
    />
  );
}

export function WrappedMappingListWidget(props: MappingListWidgetProps) {
  return (
    <MappingListWidget
      api={props.api}
      source={props.source}
      rowColor={props.rowColor}
      MappingDetailBackgroundColor={props.MappingDetailBackgroundColor}
    />
  );
}

export { MappingListWidget };
export default WrappedMappingListWidget;
