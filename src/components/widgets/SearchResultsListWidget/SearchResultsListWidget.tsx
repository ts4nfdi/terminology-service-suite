import { EuiButtonEmpty, EuiFlexGroup, EuiFlexItem, EuiFormRow, EuiHorizontalRule, EuiLoadingSpinner, EuiPanel, EuiPanelProps, EuiSelectable, EuiSelectableOption, EuiSpacer, EuiSwitch, EuiTablePagination, EuiText, EuiTitle } from "@elastic/eui";
import React, { useState } from "react";
import { useQuery } from 'react-query';
import { OlsApi } from "../../../api/OlsApi";
import { BreadcrumbWidget, DescriptionWidget, IriWidget } from "../MetadataWidget";

export type SearchResultsListWidgetProps = {
  api: string;
  query: string;
  initialItemsPerPage?: number;
  itemsPerPageOptions?: number[];
} & EuiPanelProps;

const DEFAULT_INITIAL_ITEMS_PER_PAGE = 10;
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

function SearchResultsListWidget(props: SearchResultsListWidgetProps) {
  const {
    api,
    query,
    initialItemsPerPage = DEFAULT_INITIAL_ITEMS_PER_PAGE,
    itemsPerPageOptions = DEFAULT_PAGE_SIZE_OPTIONS,
    ...rest
  } = props;
  const olsApi = new OlsApi(api);

  const [activePage, setActivePage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [totalItems, setTotalItems] = useState(0);
  const [exactMatch, setExactMatch] = useState(false);
  const [showObsoleteTerms, setShowObsoleteTerms] = useState(false);
  const [filterByTypeOptions, setFilterByTypeOptions] = useState<EuiSelectableOption[]>([]);
  const [filterByOntologyOptions, setFilterByOntologyOptions] = useState<EuiSelectableOption[]>([]);

  function updateFilterOptions(currentOptions: EuiSelectableOption[], optionCounts: any[], setOptions: Function, render?: (value: string) => string) {
    if (currentOptions.length == 0) {
      setOptions(optionCounts.reduce((accumulator: any[], currentValue: string, currentIndex: number, array: any[]) => {
        if (currentIndex % 2 === 0) {
          accumulator.push({
            label: render ? render(currentValue) : currentValue,
            key: currentValue,
            append: "(" + array[currentIndex+1] + ")",
            disabled: array[currentIndex+1] == 0,
            data: { totalCount: array[currentIndex+1] },
          });
        }
        return accumulator;
      }, []));
    } else {
      const newOptions = [...currentOptions];
      optionCounts.forEach((currentValue: string, currentIndex: number, array: any[]) => {
        if (currentIndex % 2 === 0) {
          const option = newOptions.find((option: EuiSelectableOption) => option.key == currentValue);
          if (option) {
            option.append = "(" + array[currentIndex+1];
            if (option.data && array[currentIndex+1] < option.data.totalCount) {
              option.append += "/" + option.data.totalCount;
             }
            option.append += ")";
          }
        }
      });
      setOptions(newOptions);
    }
  }

  const {
    data: searchResults,
    isLoading: resultsAreLoading
  } = useQuery(
    [api, "searchResults", query, exactMatch, showObsoleteTerms, activePage, itemsPerPage, filterByTypeOptions, filterByOntologyOptions],
    async () => {
      return olsApi.search(
        {
          query: query,
          exactMatch: exactMatch,
          showObsoleteTerms: showObsoleteTerms,
          types: filterByTypeOptions.filter((option: EuiSelectableOption) => option.checked === "on").map((option: EuiSelectableOption) => option.key)[0],
          ontology: filterByOntologyOptions.filter((option: EuiSelectableOption) => option.checked === "on").map((option: EuiSelectableOption) => option.key).join(","),
        },
        {
          page: activePage.toString(),
          size: itemsPerPage.toString(),
        }
      ).then((response) => {
        if (response.response && response.response.docs != null && response.response.numFound != null) {
          setTotalItems(response.response.numFound);
          setPageCount(Math.ceil(response.response.numFound/itemsPerPage));

          if (response.facet_counts && response.facet_counts.facet_fields) {
            if (response.facet_counts.facet_fields.type) {
              updateFilterOptions(
                filterByTypeOptions,
                response.facet_counts.facet_fields.type,
                setFilterByTypeOptions,
                (currentValue: string) => `${currentValue[0].toUpperCase()}${currentValue.slice(1)}`
              );
            }
            if (response.facet_counts.facet_fields.ontology_name) {
              updateFilterOptions(
                filterByOntologyOptions,
                response.facet_counts.facet_fields.ontology_name,
                setFilterByOntologyOptions,
                (currentValue: string) => currentValue.toUpperCase()
              );
            }
          }

          return response.response.docs;
        } else {
          throw new Error("Unexpected API response");
        }
      });
    },
    { keepPreviousData : true } // See: https://react-query-v3.tanstack.com/guides/paginated-queries
  );

  function onChangeItemsPerPage(newItemsPerPage: number) {
    setActivePage(Math.floor((activePage*itemsPerPage+1)/newItemsPerPage));
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

  if (resultsAreLoading) {
    return <EuiLoadingSpinner size="xl" />;
  }

  return (
    <EuiFlexGroup>
      <EuiFlexItem grow={3}>
        <EuiPanel>
          <EuiFormRow label="Filter by type">
            <EuiSelectable
              options={filterByTypeOptions}
              onChange={setFilterByTypeOptions}
              listProps={{ bordered: true }}
              singleSelection={true}
            >
              {(list) => list}
            </EuiSelectable>
          </EuiFormRow>

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

          <EuiButtonEmpty
            onClick={clearAllFilters}
          >
            Clear all filters
          </EuiButtonEmpty>
        </EuiPanel>
      </EuiFlexItem>

      <EuiFlexItem grow={7}>
        <EuiFlexGroup>
          <EuiFlexItem grow={false}>
            <EuiSwitch label="Exact match" checked={exactMatch} onChange={toggleExactMatch} />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiSwitch label="Show obsolete terms" checked={showObsoleteTerms} onChange={toggleShowObsoleteTerms} />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="m" />

        <EuiText size="xs" style={{ padding: "0 8px" }}>
          Showing {Math.min(activePage*itemsPerPage+1, totalItems)} to {Math.min((activePage+1)*itemsPerPage, totalItems)} of {totalItems} results
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

        {searchResults && searchResults.map((result: any) => (
          <React.Fragment key={result.id}>
            <EuiPanel {...rest}>
              <EuiFlexGroup>
                <EuiFlexItem grow={false}>
                  <EuiTitle><h2>{result.label}</h2></EuiTitle> {/* TODO Link to concept details page */}
                </EuiFlexItem>
                <EuiFlexItem>
                  <BreadcrumbWidget api={api} iri={result.iri} />
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size="xs" />
              <IriWidget api={api} iri={result.iri} />
              <EuiSpacer size="s" />
              <DescriptionWidget api={api} iri={result.iri} />
            </EuiPanel>
            <EuiSpacer />
          </React.Fragment>
        ))}
      </EuiFlexItem>
    </EuiFlexGroup>
  );
}

export { SearchResultsListWidget };
