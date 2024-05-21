import {
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiHorizontalRule,
  EuiLoadingSpinner,
  EuiPanel, EuiProvider,
  EuiSelectable,
  EuiSelectableOption,
  EuiSpacer,
  EuiSwitch,
  EuiTablePagination,
  EuiText
} from "@elastic/eui";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsApi } from "../../../api/OlsApi";
import { MetadataCompactPresentation } from "./MetadataCompactPresentation";
import { SearchResultsListWidgetProps } from "../../../app/types";
import { AutocompleteWidget } from "../AutocompleteWidget";
import ReactDOM from "react-dom";

const DEFAULT_INITIAL_ITEMS_PER_PAGE = 10;
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

/**
 * The SearchResultsListWidget is a component designed to facilitate the display
 * and navigation of search results within a user-friendly interface.
 * Features: dynamic filtering, pagination, interactive controls and metadata display
 *
 * For compatibility with the OLS3 system, the widget offers legacy mode.
 * For OLS4 searches, the useLegacy parameter needs to be set to false.
 * For OLS4 searches, we're using the experimental API V2. This API may still change.
 */

function SearchResultsListWidget(props: SearchResultsListWidgetProps) {
  const {
    api,
    query,
    parameter,
    initialItemsPerPage = DEFAULT_INITIAL_ITEMS_PER_PAGE,
    itemsPerPageOptions = DEFAULT_PAGE_SIZE_OPTIONS,
    targetLink,
    preselected,
    useLegacy = true,
    ...rest
  } = props;
  const olsApi = new OlsApi(api);

  const [searchValue, setSearchValue] = useState(query);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [totalItems, setTotalItems] = useState(0);
  const [exactMatch, setExactMatch] = useState(false);
  const [showObsoleteTerms, setShowObsoleteTerms] = useState(false);
  const [filterByTypeOptions, setFilterByTypeOptions] = useState<EuiSelectableOption[]>([]);
  const [filterByOntologyOptions, setFilterByOntologyOptions] = useState<EuiSelectableOption[]>([]);

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  function updateFilterOptions(currentOptions: EuiSelectableOption[], optionCounts: any[], setOptions: Function, render?: (value: string) => string) {
    if (currentOptions.length == 0) {
      setOptions(optionCounts.reduce((accumulator: any[], currentValue: string, currentIndex: number, array: any[]) => {
        if (currentIndex % 2 === 0) {
          accumulator.push({
            label: render ? render(currentValue) : currentValue,
            key: currentValue,
            append: "(" + array[currentIndex + 1] + ")",
            disabled: array[currentIndex + 1] == 0,
            data: { totalCount: array[currentIndex + 1] }
          });
        }
        return accumulator;
      }, []));
    } else {
      const newOptions: EuiSelectableOption[] = [];
      for (let i = 0; i < currentOptions.length; i++) {
        newOptions.push(Object.assign({}, currentOptions[i])); // using Object.assign to pass by value, not by reference
      }

      optionCounts.forEach((currentValue: string, currentIndex: number, array: any[]) => {
        if (currentIndex % 2 === 0) {
          const option = newOptions.find((option: EuiSelectableOption) => option.key == currentValue);
          if (option) {
            option.append = "(" + array[currentIndex + 1];
            if (option.data && array[currentIndex + 1] < option.data.totalCount) {
              option.append += "/" + option.data.totalCount;
            }
            option.append += ")";
          }
        }
      });
      setOptions(newOptions);
    }
  }

  const filterSelectedOptions = (option: EuiSelectableOption) => option.checked === "on";

  const {
    data: searchResults,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery(
    [
      "searchResults",
      api,
      searchValue,
      exactMatch,
      showObsoleteTerms,
      activePage,
      itemsPerPage,
      filterByTypeOptions.filter(filterSelectedOptions).map((option: EuiSelectableOption) => option.key),
      filterByOntologyOptions.filter(filterSelectedOptions).map((option: EuiSelectableOption) => option.key),
      parameter
    ],
    async ({ signal }) => {
      if (useLegacy) {
        return olsApi.search(
          {
            query: searchValue,
            exactMatch: exactMatch,
            showObsoleteTerms: showObsoleteTerms,
            types: filterByTypeOptions.filter(filterSelectedOptions).map((option: EuiSelectableOption) => option.key).join(","),
            ontology: filterByOntologyOptions.filter(filterSelectedOptions).map((option: EuiSelectableOption) => option.key).join(","),
            groupByIri: true
          },
          {
            page: activePage.toString(),
            size: itemsPerPage.toString()
          },
          undefined,
          props.parameter,
          signal
        ).then((response) => {
          if (response["response"] && response["response"]["docs"] != null && response["response"]["numFound"] != null) {
            if (useLegacy) {

            }
            if (response["facet_counts"] && response["facet_counts"]["facet_fields"]) {
              if (response["facet_counts"]["facet_fields"]["type"]) {
                updateFilterOptions(
                  filterByTypeOptions,
                  response["facet_counts"]["facet_fields"]["type"],
                  setFilterByTypeOptions,
                  (currentValue: string) => `${currentValue[0].toUpperCase()}${currentValue.slice(1)}`
                );
              }
              if (response["facet_counts"]["facet_fields"]["ontology_name"]) {
                updateFilterOptions(
                  filterByOntologyOptions,
                  response["facet_counts"]["facet_fields"]["ontology_name"],
                  setFilterByOntologyOptions,
                  (currentValue: string) => currentValue.toUpperCase()
                );
              }
            }

            setTotalItems(response["response"]["numFound"]);
            const newPageCount = Math.ceil(response["response"]["numFound"] / itemsPerPage);
            setPageCount(newPageCount);
            if (activePage >= newPageCount) {
              setActivePage(0);
            }

            return response.response.docs;
          } else {
            throw new Error("Unexpected API response");
          }
        });
      } else {
        return olsApi.ols4Search(
          {
            query: searchValue,
            exactMatch: exactMatch,
            showObsoleteTerms: showObsoleteTerms,
            types: filterByTypeOptions.filter(filterSelectedOptions).map((option: EuiSelectableOption) => option.key).join(","),
            ontology: filterByOntologyOptions.filter(filterSelectedOptions).map((option: EuiSelectableOption) => option.key).join(","),
            groupByIri: true
          },
          {
            page: activePage.toString(),
            size: itemsPerPage.toString()
          },
          undefined,
          props.parameter,
          signal,
          useLegacy
        ).then((response) => {
          if (response["elements"] && response["totalElements"] != null) {
            if (response["facetFieldsToCounts"]) {
              if (response["facetFieldsToCounts"]["type"]) {
                updateFilterOptions(
                  filterByTypeOptions,
                  Object.entries(response["facetFieldsToCounts"]["type"]).flat(),
                  setFilterByTypeOptions,
                  (currentValue: string) => `${currentValue[0].toUpperCase()}${currentValue.slice(1)}`
                );
              }
              if (response["facetFieldsToCounts"]["ontologyId"]) {
                updateFilterOptions(
                  filterByOntologyOptions,
                  Object.entries(response["facetFieldsToCounts"]["ontologyId"]).flat(),
                  setFilterByOntologyOptions,
                  (currentValue: string) => currentValue.toUpperCase()
                );
              }
            }

            setTotalItems(response["totalElements"]);
            const newPageCount = Math.ceil(response["totalElements"] / itemsPerPage);
            setPageCount(newPageCount);
            if (activePage >= newPageCount) {
              setActivePage(0);
            }

            return response.elements;
          } else {
            throw new Error("Unexpected API response");
          }
        });
      }
    },
    {
      keepPreviousData: true
    } // See: https://react-query-v3.tanstack.com/guides/paginated-queries
  );

  function onChangeItemsPerPage(newItemsPerPage: number) {
    setActivePage(Math.floor((activePage * itemsPerPage + 1) / newItemsPerPage));
    setItemsPerPage(newItemsPerPage);
  }

  function toggleExactMatch() {
    setExactMatch(!exactMatch);
  }

  function toggleShowObsoleteTerms() {
    setShowObsoleteTerms(!showObsoleteTerms);
  }

  function clearFilter(currentOptions: EuiSelectableOption[], setOptions: Function) {
    const newOptions = [...currentOptions];
    setOptions(newOptions.map((option: EuiSelectableOption) => ({ ...option, checked: undefined })));
  }

  function clearAllFilters() {
    clearFilter(filterByTypeOptions, setFilterByTypeOptions);
    clearFilter(filterByOntologyOptions, setFilterByOntologyOptions);
  }

  function transform_to_searchValue(selectedOption: {
    label: string;
    iri?: string;
    ontology_name?: string;
    type?: string
  }[]) {
    setSearchValue(selectedOption[0] ? selectedOption[0].label : "");
  }

  function getDefinitionString(result: any) {
    let definition;

    if (Array.isArray(result.definition)) {
      const hasValueProperty = result.definition.some((item: { hasOwnProperty: (arg0: string) => any; }) => typeof item === "object" && item.hasOwnProperty("value"));

      if (hasValueProperty) {
        definition = result.definition.find((item: { hasOwnProperty: (arg0: string) => any; }) => typeof item === "object" && item.hasOwnProperty("value")).value;
      } else {
        definition = result.definition.join(" ");
      }
    } else if (typeof result.definition === "string") {
      definition = result.definition;
    } else {
      definition = "";
    }

    return definition;
  }

  return (
    <>
      <AutocompleteWidget
        api={api}
        selectionChangedEvent={(selectedOption) => {
          transform_to_searchValue(selectedOption);
        }}
        allowCustomTerms={true}
        singleSelection={true}
        hasShortSelectedLabel={true}
        placeholder={"Search"}
        preselected={preselected}
      />

      <EuiSpacer size="s" />

      <EuiFlexGroup>
        <EuiFlexItem grow={3} style={{ minWidth: 250 }}>
          <EuiPanel>
            {isSuccess &&
              <EuiFormRow label="Filter by type">
                <EuiSelectable
                  options={filterByTypeOptions}
                  onChange={setFilterByTypeOptions}
                  listProps={{ bordered: true }}
                >
                  {(list) => list}
                </EuiSelectable>
              </EuiFormRow>
            }
            {isLoading &&
              <EuiFormRow label="Filter by type">
                <EuiLoadingSpinner size="s" />
              </EuiFormRow>
            }
            {isError &&
              <EuiFormRow label="Filter by type">
                <EuiSelectable
                  options={[]}
                  onChange={setFilterByTypeOptions}
                  listProps={{ bordered: true }}
                >
                  {(list) => list}
                </EuiSelectable>
              </EuiFormRow>
            }

            {isSuccess &&
              <EuiFormRow label="Filter by ontology">
                <EuiSelectable
                  options={filterByOntologyOptions}
                  onChange={setFilterByOntologyOptions}
                  listProps={{ bordered: true }}
                  searchable
                >
                  {(list, search) => (
                    <>
                      {search}
                      {list}
                    </>
                  )}
                </EuiSelectable>
              </EuiFormRow>
            }
            {isLoading &&
              <EuiFormRow label="Filter by ontology">
                <EuiLoadingSpinner size="s" />
              </EuiFormRow>
            }
            {isError &&
              <EuiFormRow label="Filter by ontology">
                <EuiSelectable
                  options={[]}
                  onChange={setFilterByOntologyOptions}
                  listProps={{ bordered: true }}
                  searchable
                >
                  {(list, search) => (
                    <>
                      {search}
                      {list}
                    </>
                  )}
                </EuiSelectable>
              </EuiFormRow>
            }

            <EuiButtonEmpty
              onClick={clearAllFilters}
            >
              Clear all filters
            </EuiButtonEmpty>
          </EuiPanel>
        </EuiFlexItem>

        <EuiFlexItem grow={7}>
          <EuiPanel color="transparent" grow={false}>
            <EuiFlexGroup>
              <EuiFlexItem grow={false}>
                <EuiSwitch label="Exact match" checked={exactMatch} onChange={toggleExactMatch} />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiSwitch label="Show only obsolete terms" checked={showObsoleteTerms}
                           onChange={toggleShowObsoleteTerms} />
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiSpacer size="m" />

            <EuiText size="xs" style={{ padding: "0 8px" }}>
              Showing {Math.min(activePage * itemsPerPage + 1, totalItems)} to {Math.min((activePage + 1) * itemsPerPage, totalItems)} of {totalItems} results
            </EuiText>

            <EuiSpacer size="s" />

            <EuiHorizontalRule margin="none" style={{ height: 2 }} />

            <EuiSpacer size="s" />

            <EuiTablePagination
              aria-label="OlsSearch result pagination"
              pageCount={pageCount}
              activePage={activePage}
              onChangePage={setActivePage}
              itemsPerPage={itemsPerPage}
              onChangeItemsPerPage={onChangeItemsPerPage}
              itemsPerPageOptions={itemsPerPageOptions}
            />

            <EuiSpacer size="s" />

            {searchResults && searchResults.map((result: any) => (
              <React.Fragment key={result.id}>
                {useLegacy &&
                  <MetadataCompactPresentation
                    iri={result.iri}
                    thingType={result.type}
                    ontologyId={result.ontology_name}
                    label={result.label}
                    short_form={result.short_form}
                    targetLink={targetLink}
                    description={result.description}
                  />}
                {!useLegacy &&
                  <MetadataCompactPresentation
                    iri={result.iri}
                    thingType={result.type[0]}
                    ontologyId={result.ontologyId}
                    label={(Array.isArray(result.label) && result.label.length > 1) ? result.label[0] : result.label}
                    short_form={result.shortForm}
                    targetLink={targetLink}
                    description={result.definition ? getDefinitionString(result) : ""}
                  />}
                <EuiSpacer />
              </React.Fragment>
            ))}
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
}

function createSearchResultsList(props: SearchResultsListWidgetProps, container: any, callback?: () => void) {
  ReactDOM.render(WrappedSearchResultsListWidget(props), container, callback);
}

function WrappedSearchResultsListWidget(props: SearchResultsListWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <SearchResultsListWidget
          api={props.api}
          query={props.query}
          parameter={props.parameter}
          initialItemsPerPage={props.initialItemsPerPage}
          itemsPerPageOptions={props.itemsPerPageOptions}
          targetLink={props.targetLink}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { SearchResultsListWidget, createSearchResultsList };
