import { EuiFlexGroup, EuiFlexItem, EuiHorizontalRule, EuiLoadingSpinner, EuiPanel, EuiPanelProps, EuiSpacer, EuiTablePagination, EuiText, EuiTitle } from "@elastic/eui";
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

  const {
    data: searchResults,
    isLoading: resultsAreLoading
  } = useQuery(
    [api, "searchResults", query, activePage, itemsPerPage],
    async () => {
      return olsApi.search(
        query,
        {
          page: activePage.toString(),
          size: itemsPerPage.toString()
        }
      ).then((response) => {
        if (response.response && response.response.docs != null && response.response.numFound != null) {
          setTotalItems(response.response.numFound);
          setPageCount(Math.ceil(response.response.numFound/itemsPerPage));
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

  if (resultsAreLoading) {
    return <EuiLoadingSpinner size="xl" />;
  }

  return (
    <>
      <EuiText size="xs" style={{ padding: "0 8px" }}>
        Showing {activePage*itemsPerPage+1} to {Math.min((activePage+1)*itemsPerPage, totalItems)} of {totalItems} results
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

      {searchResults.map((result: any) => (
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
    </>
  );
}

export { SearchResultsListWidget };
