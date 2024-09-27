import React, { ReactNode, useState } from "react";
import {
  Comparators,
  CriteriaWithPagination,
  EuiBasicTable,
  EuiButtonIcon,
  EuiHorizontalRule,
  EuiProvider,
  EuiLink,
  EuiSpacer,
  EuiText, EuiHealth, EuiDescriptionList, EuiScreenReaderOnly, EuiCallOut
} from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsApi } from "../../../api/OlsApi";
import { css, SerializedStyles } from "@emotion/react";
import { EuiBasicTableColumn } from "@elastic/eui/src/components/basic_table/basic_table";
import { OlsResource, ResourcesWidgetProps } from "../../../app/types";
import { Ontologies } from "../../../model/interfaces";
import ReactDOM from "react-dom";

const DEFAULT_INITIAL_ENTRIES_PER_PAGE = 10;
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
const DEFAULT_INITIAL_SORT_FIELD = "config.preferredPrefix";
const DEFAULT_INITIAL_SORT_DIR = "asc" as const;

function ResourcesWidget(props: ResourcesWidgetProps) {
  const {
    api,
    initialEntriesPerPage = DEFAULT_INITIAL_ENTRIES_PER_PAGE,
    pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
    initialSortField = DEFAULT_INITIAL_SORT_FIELD,
    initialSortDir = DEFAULT_INITIAL_SORT_DIR,
    targetLink,
    parameter
  } = props;
  const olsApi = new OlsApi(api);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(initialEntriesPerPage);
  const [sortField, setSortField] = useState<string | number>(initialSortField);
  const [sortDirection, setSortDirection] = useState(initialSortDir);

  const [itemIdToExpandedRowMap, setItemIdToExpandedRowMap] = useState<
    Record<string, ReactNode>
  >({});

  const columns: Array<EuiBasicTableColumn<OlsResource> & { css?: SerializedStyles }> = [
    {
      name: "Resource Name",
      field: "config.title",
      width: "15%",
      sortable: true,
    },
    {
      name: "Short Name",
      field: "ontologyId",
      render: (value: string) => (
        targetLink ? <EuiLink href={targetLink + "ontologies/" + value + "/"}>{value}</EuiLink> : value
      ),
      width: "10%",
      sortable: true,
    },
    {
      name: "Description",
      field: "config.description",
      width: "30%",
      css: css`
          display: block;
          max-height: 200px;
          overflow: auto;
      `,
    },
    {
      name: "Version",
      field: "config.version",
      width: "7.5%",
    },
    {
      name: "Loaded on",
      field: "loaded",
      width: "10%",
      dataType: "date" as const,
      sortable: true,
    },
    {
      name: "Terms",
      field: "numberOfTerms",
      render: (value: number) => <>{value.toLocaleString()}</>,
      width: "7.5%",
      sortable: true,
    },
    {
      name: "Properties",
      field: "numberOfProperties",
      render: (value: number) => <>{value.toLocaleString()}</>,
      width: "7.5%",
      sortable: true,
    },
    {
      name: "Individuals",
      field: "numberOfIndividuals",
      render: (value: number) => <>{value.toLocaleString()}</>,
      width: "7.5%",
      sortable: true,
    },
    {
      width: "5%",
      isExpander: true,
      actions: [
        ...(props.actions || []),
        {
          render: (item: OlsResource) => (
            <EuiButtonIcon
              href={item.config.fileLocation}
              iconType="download"
              aria-label="Download"
              isDisabled={
                !item.config.allowDownload ||
                item.config.fileLocation.startsWith("file://")
              }
            />
          )
        }
      ]
    }
  ];

  const onTableChange = ({
                           page,
                           sort
                         }: CriteriaWithPagination<OlsResource>) => {
    const { index: pageIndex, size: pageSize } = page;
    setPageIndex(pageIndex);
    setPageSize(pageSize);

    if (sort) {
      const { field: sortField, direction: sortDirection } = sort;
      setSortField(sortField);
      setSortDirection(sortDirection);
    }
  };

  const {
    data: ontologiesData,
    isSuccess,
    isError,
    isLoading
  } = useQuery<Ontologies>(
    ["ontologiesData", api, parameter],
    async () => {
      return olsApi.getOntologiesData(
        props.parameter
      );
    }
  );


  let uniqueIdCounter = 0;

  function generateUniqueId() {
    return ++uniqueIdCounter;
  }

  const ontos = ontologiesData?.properties.map(ontology => ({
    ...ontology.properties
  })) || [];

  const findOntologies = (
    ontologies: any[],
    pageIndex: number,
    pageSize: number,
    sortField: any,
    sortDirection: "asc" | "desc"
  ) => {
    let items;

    if (sortField) {
      items = ontologies
        .slice(0)
        .sort(
          Comparators.property(sortField, Comparators.default(sortDirection))
        );
    } else {
      items = ontologies;
    }

    let pageOfItems;

    if (!pageIndex && !pageSize) {
      pageOfItems = items;
    } else {
      const startIndex = pageIndex * pageSize;
      pageOfItems = items.slice(
        startIndex,
        Math.min(startIndex + pageSize, ontologies.length)
      );
    }

    return {
      pageOfItems,
      totalItemCount: ontologies.length
    };
  };

  const { pageOfItems, totalItemCount } = findOntologies(
    ontos,
    pageIndex,
    pageSize,
    sortField,
    sortDirection
  );

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount,
    pageSizeOptions
  };

  const resultsCount =
    pageSize === 0 ? (
      <strong>All</strong>
    ) : (
      <>
        <strong>
          {pageSize * pageIndex + 1}-{pageSize * pageIndex + pageSize}
        </strong>{" "}
        of {totalItemCount}
      </>
    );


  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection
    }
  };

  const toggleDetails = (resource: any) => {
    const itemIdToExpandedRowMapValues = { ...itemIdToExpandedRowMap };

    if (itemIdToExpandedRowMapValues[resource.ontologyId]) {
      delete itemIdToExpandedRowMapValues[resource.ontologyId];
    } else {

      const listItems = [
        {
          title: "Homepage",
          description: <EuiLink
            href={`${resource.config.homepage ? resource.config.homepage : "-"}`}>{`${resource.config.homepage ? resource.config.homepage : "-"}`}</EuiLink>
        }
      ];

      if (resource.config.license) {
        listItems.push({
            title: "License",
            description: <EuiLink
              href={`${resource.config.homepage ? resource.config.license : "-"}`}>{`${resource.config.license ? resource.config.license : "-"}`}</EuiLink>
          }
        );
      }

      itemIdToExpandedRowMapValues[resource.ontologyId] = (
        <EuiDescriptionList listItems={listItems} />
      );
    }

    setItemIdToExpandedRowMap(itemIdToExpandedRowMapValues);
  };

  const columnsWithExpandingRowToggle: Array<EuiBasicTableColumn<OlsResource> & { css?: SerializedStyles }> = [
    ...columns,
    {
      align: "right",
      width: "40px",
      isExpander: true,
      name: (
        <EuiScreenReaderOnly>
          <span>Expand row</span>
        </EuiScreenReaderOnly>
      ),
      mobileOptions: { header: false },
      render: (resource: any) => {
        const itemIdToExpandedRowMapValues = { ...itemIdToExpandedRowMap };

        return (
          <EuiButtonIcon
            onClick={() => toggleDetails(resource)}
            iconType={
              itemIdToExpandedRowMapValues[resource.ontologyId] ? "arrowDown" : "arrowRight"
            }
            aria-label={
              itemIdToExpandedRowMapValues[resource.ontologyId] ? "Collapse" : "Expand"
            }
          />
        );
      }
    }
  ];

  return (
    <>
      {isSuccess &&
        <>
          <EuiCallOut
            title={"Licenses"}
            iconType="magnifyWithExclamation"
            style={{ backgroundColor: "#AEE6E6" }}
          >
            <p>The use and distribution of the terminologies beyond this service is only permitted in compliance with
              the license conditions of the respective terminology, also in compliance with the license conditions in
              the respective countries.</p>
          </EuiCallOut>
          <EuiSpacer size="s" />
          <EuiText size="xs">
            Showing {resultsCount} <strong>Ontologies</strong>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiHorizontalRule margin="none" style={{ height: 2 }} />

          <EuiBasicTable
            columns={columnsWithExpandingRowToggle}
            items={pageOfItems}
            onChange={onTableChange}
            pagination={pagination}
            sorting={sorting}
            itemIdToExpandedRowMap={itemIdToExpandedRowMap}
            isExpandable={true}
            itemId={"ontologyId"}
          />
        </>
      }
      {isLoading &&
        <EuiBasicTable
          columns={columnsWithExpandingRowToggle}
          items={pageOfItems}
          onChange={onTableChange}
          pagination={pagination}
          sorting={sorting}
          loading
          itemIdToExpandedRowMap={itemIdToExpandedRowMap}
          isExpandable={true}
          itemId={"ontologyId"}
        />

      }
      {isError &&
        <EuiBasicTable
          columns={columnsWithExpandingRowToggle}
          items={pageOfItems}
          onChange={onTableChange}
          pagination={pagination}
          sorting={sorting}
          itemIdToExpandedRowMap={itemIdToExpandedRowMap}
          isExpandable={true}
          itemId={"ontologyId"}
          /*
                          error={getErrorMessageToDisplay(error, "resources")}
          */
        />
      }
    </>
  );
}

function createResources(props: ResourcesWidgetProps, container: Element, callback?: () => void) {
  ReactDOM.render(WrappedResourcesWidget(props), container, callback);
}

function WrappedResourcesWidget(props: ResourcesWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <ResourcesWidget
          api={props.api}
          initialEntriesPerPage={props.initialEntriesPerPage}
          pageSizeOptions={props.pageSizeOptions}
          initialSortField={props.initialSortField}
          initialSortDir={props.initialSortDir}
          targetLink={props.targetLink}
          actions={props.actions}
          parameter={props.parameter}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { ResourcesWidget, createResources };
