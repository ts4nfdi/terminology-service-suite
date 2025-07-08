"use client";

import {
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiHorizontalRule,
  EuiLoadingSpinner,
  EuiPanel,
  EuiProvider,
  EuiSelectable,
  EuiSelectableOption,
  EuiSpacer,
  EuiSwitch,
  EuiTablePagination,
  EuiText,
} from "@elastic/eui";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { MetadataCompact } from "./MetadataCompact";
import { SearchResultsListWidgetProps } from "../../../app/types";
import ReactDOM from "react-dom";
import { SearchBarWidget } from "../SearchBarWidget";
import "../../../style/ts4nfdiStyles/ts4nfdiSearchResultStyle.css";
import {OlsSearchApi} from "../../../api/ols/OlsSearchApi";

const DEFAULT_INITIAL_ITEMS_PER_PAGE = 10;
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

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
    className,
    ...rest
  } = props;
  const olsApi = new OlsSearchApi(api);
  const finalClassName = className || "ts4nfdi-searchResult-style";

  const [searchValue, setSearchValue] = useState(query);
  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [totalItems, setTotalItems] = useState(0);
  const [exactMatch, setExactMatch] = useState(false);
  const [showObsoleteTerms, setShowObsoleteTerms] = useState(false);
  const [filterByTypeOptions, setFilterByTypeOptions] = useState<
    EuiSelectableOption[]
  >([]);
  const [filterByOntologyOptions, setFilterByOntologyOptions] = useState<
    EuiSelectableOption[]
  >([]);

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  function updateFilterOptions(
    currentOptions: EuiSelectableOption[],
    optionCounts: any[],
    setOptions: (options: EuiSelectableOption[]) => void,
    render?: (value: string) => string,
  ) {
    if (currentOptions.length == 0) {
      setOptions(
        optionCounts.reduce(
          (
            accumulator: any[],
            currentValue: string,
            currentIndex: number,
            array: any[],
          ) => {
            if (currentIndex % 2 === 0) {
              accumulator.push({
                label: render ? render(currentValue) : currentValue,
                key: currentValue,
                append: "(" + array[currentIndex + 1] + ")",
                disabled: array[currentIndex + 1] == 0,
                data: { totalCount: array[currentIndex + 1] },
              });
            }
            return accumulator;
          },
          [],
        ),
      );
    } else {
      const newOptions: EuiSelectableOption[] = [];
      for (let i = 0; i < currentOptions.length; i++) {
        newOptions.push(Object.assign({}, currentOptions[i])); // using Object.assign to pass by value, not by reference
      }

      optionCounts.forEach(
        (currentValue: string, currentIndex: number, array: any[]) => {
          if (currentIndex % 2 === 0) {
            const option = newOptions.find(
              (option: EuiSelectableOption) => option.key == currentValue,
            );
            if (option) {
              option.append = "(" + array[currentIndex + 1];
              if (
                option.data &&
                array[currentIndex + 1] < option.data.totalCount
              ) {
                option.append += "/" + option.data.totalCount;
              }
              option.append += ")";
            }
          }
        },
      );
      setOptions(newOptions);
    }
  }

  const filterSelectedOptions = (option: EuiSelectableOption) =>
    option.checked === "on";

  const {
    data: searchResults,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useQuery(
    [
      "searchResults",
      api,
      searchValue,
      exactMatch,
      showObsoleteTerms,
      activePage,
      itemsPerPage,
      filterByTypeOptions
        .filter(filterSelectedOptions)
        .map((option: EuiSelectableOption) => option.key),
      filterByOntologyOptions
        .filter(filterSelectedOptions)
        .map((option: EuiSelectableOption) => option.key),
      parameter,
    ],
    async ({ signal }) => {
      return olsApi
        .search(
          {
            query: searchValue,
            exactMatch: exactMatch,
            showObsoleteTerms: showObsoleteTerms,
            types: filterByTypeOptions
              .filter(filterSelectedOptions)
              .map((option: EuiSelectableOption) => option.key)
              .join(","),
            ontology: filterByOntologyOptions
              .filter(filterSelectedOptions)
              .map((option: EuiSelectableOption) => option.key)
              .join(","),
            groupByIri: true,
          },
          {
            page: activePage.toString(),
            size: itemsPerPage.toString(),
          },
          undefined,
          props.parameter,
          signal,
        )
        .then((response) => {
          if (
            response["response"] &&
            response["response"]["docs"] != null &&
            response["response"]["numFound"] != null
          ) {
            if (
              response["facet_counts"] &&
              response["facet_counts"]["facet_fields"]
            ) {
              if (response["facet_counts"]["facet_fields"]["type"]) {
                updateFilterOptions(
                  filterByTypeOptions,
                  response["facet_counts"]["facet_fields"]["type"],
                  setFilterByTypeOptions,
                  (currentValue: string) =>
                    `${currentValue[0].toUpperCase()}${currentValue.slice(1)}`,
                );
              }
              if (useLegacy) {
                if (response["facet_counts"]["facet_fields"]["ontology_name"]) {
                  updateFilterOptions(
                    filterByOntologyOptions,
                    response["facet_counts"]["facet_fields"]["ontology_name"],
                    setFilterByOntologyOptions,
                    (currentValue: string) => currentValue.toUpperCase(),
                  );
                }
              } else {
                if (response["facet_counts"]["facet_fields"]["ontologyId"]) {
                  updateFilterOptions(
                    filterByOntologyOptions,
                    response["facet_counts"]["facet_fields"]["ontologyId"],
                    setFilterByOntologyOptions,
                    (currentValue: string) => currentValue.toUpperCase(),
                  );
                }
              }
            }

            setTotalItems(response["response"]["numFound"]);
            const newPageCount = Math.ceil(
              response["response"]["numFound"] / itemsPerPage,
            );
            setPageCount(newPageCount);
            if (activePage >= newPageCount) {
              setActivePage(0);
            }

            return response.response.docs;
          } else {
            throw new Error("Unexpected API response");
          }
        });
    },
    {
      keepPreviousData: true,
    }, // See: https://react-query-v3.tanstack.com/guides/paginated-queries
  );

  function onChangeItemsPerPage(newItemsPerPage: number) {
    setActivePage(
      Math.floor((activePage * itemsPerPage + 1) / newItemsPerPage),
    );
    setItemsPerPage(newItemsPerPage);
  }

  function toggleExactMatch() {
    setExactMatch(!exactMatch);
  }

  function toggleShowObsoleteTerms() {
    setShowObsoleteTerms(!showObsoleteTerms);
  }

  function clearFilter(
    currentOptions: EuiSelectableOption[],
    setOptions: (options: EuiSelectableOption[]) => void,
  ) {
    const newOptions = [...currentOptions];
    setOptions(
      newOptions.map((option: EuiSelectableOption) => ({
        ...option,
        checked: undefined,
      })),
    );
  }

  function clearAllFilters() {
    clearFilter(filterByTypeOptions, setFilterByTypeOptions);
    clearFilter(filterByOntologyOptions, setFilterByOntologyOptions);
  }

  function transform_to_searchValue(
    selectedOption: {
      label: string;
      iri?: string;
      ontology_name?: string;
      type?: string;
    }[],
  ) {
    setSearchValue(selectedOption[0] ? selectedOption[0].label : "");
  }

  return (
    <>
      <div className={finalClassName}>
        <SearchBarWidget
          api={api}
          query={""}
          selectionChangedEvent={(selectedOption) => {
            transform_to_searchValue(selectedOption);
          }}
        />
        <EuiSpacer size="xl" />
        <EuiSpacer size="s" />

        <EuiFlexGroup>
          <EuiFlexItem grow={3} style={{ minWidth: 250 }}>
            <EuiPanel>
              {isSuccess && (
                <EuiFormRow label="Filter by type">
                  <EuiSelectable
                    options={filterByTypeOptions}
                    onChange={setFilterByTypeOptions}
                    listProps={{ bordered: true }}
                  >
                    {(list) => list}
                  </EuiSelectable>
                </EuiFormRow>
              )}
              {isLoading && (
                <EuiFormRow label="Filter by type">
                  <EuiLoadingSpinner size="s" />
                </EuiFormRow>
              )}
              {isError && (
                <EuiFormRow label="Filter by type">
                  <EuiSelectable
                    options={[]}
                    onChange={setFilterByTypeOptions}
                    listProps={{ bordered: true }}
                  >
                    {(list) => list}
                  </EuiSelectable>
                </EuiFormRow>
              )}

              {isSuccess && (
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
              )}
              {isLoading && (
                <EuiFormRow label="Filter by ontology">
                  <EuiLoadingSpinner size="s" />
                </EuiFormRow>
              )}
              {isError && (
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
              )}

              <EuiButtonEmpty onClick={clearAllFilters}>
                Clear all filters
              </EuiButtonEmpty>
            </EuiPanel>
          </EuiFlexItem>

          <EuiFlexItem grow={7}>
            <EuiPanel color="transparent" grow={false}>
              <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                  <EuiSwitch
                    label="Exact match"
                    checked={exactMatch}
                    onChange={toggleExactMatch}
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiSwitch
                    label="Show only obsolete terms"
                    checked={showObsoleteTerms}
                    onChange={toggleShowObsoleteTerms}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiSpacer size="m" />

              <EuiText size="xs" style={{ padding: "0 8px" }}>
                Showing {Math.min(activePage * itemsPerPage + 1, totalItems)} to{" "}
                {Math.min((activePage + 1) * itemsPerPage, totalItems)} of{" "}
                {totalItems} results
              </EuiText>

              <EuiSpacer size="s" />

              <EuiHorizontalRule margin="none" style={{ height: 2 }} />

              <EuiSpacer size="s" />

              <EuiTablePagination
                aria-label="Search result pagination"
                pageCount={pageCount}
                activePage={activePage}
                onChangePage={setActivePage}
                itemsPerPage={itemsPerPage}
                onChangeItemsPerPage={onChangeItemsPerPage}
                itemsPerPageOptions={itemsPerPageOptions}
              />

              <EuiSpacer size="s" />

              {searchResults &&
                searchResults.map((result: any) => (
                  <React.Fragment
                    key={result.iri + result.ontology_name + result.type}
                  >
                    <MetadataCompact
                      api={api}
                      result={result}
                      targetLink={targetLink}
                      className={`${finalClassName}-metadata-compact`}
                    />
                    <EuiSpacer />
                  </React.Fragment>
                ))}
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
}

function createSearchResultsList(
  props: SearchResultsListWidgetProps,
  container: any,
  callback?: () => void,
) {
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
