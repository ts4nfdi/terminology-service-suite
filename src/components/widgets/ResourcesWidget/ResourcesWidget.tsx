import React, { useState } from "react";
import {
  Comparators,
  CriteriaWithPagination,
  EuiBasicTable,
  EuiButtonIcon,
  EuiHorizontalRule,
  EuiLink,
  EuiSpacer,
  EuiText
} from "@elastic/eui";
import { useQuery } from "react-query";
import { OlsApi } from "../../../api/OlsApi";
import { css, SerializedStyles } from "@emotion/react";
import { EuiBasicTableColumn } from "@elastic/eui/src/components/basic_table/basic_table";
import { OlsResource, ResourcesWidgetProps } from "../../../utils/types";
import { Ontologies } from "../../../model/interfaces";

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
const DEFAULT_INITIAL_SORT_FIELD = "config.preferredPrefix";
const DEFAULT_INITIAL_SORT_DIR = "asc" as const;

function ResourcesWidget(props: ResourcesWidgetProps) {
  const {
    api,
    pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
    initialSortField = DEFAULT_INITIAL_SORT_FIELD,
    initialSortDir = DEFAULT_INITIAL_SORT_DIR,
    onNavigateToOntology,
    parameter
  } = props;
  const olsApi = new OlsApi(api);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState<string | number>(initialSortField);
  const [sortDirection, setSortDirection] = useState(initialSortDir);

  const columns: Array<EuiBasicTableColumn<OlsResource> & { css?: SerializedStyles }> = [
    {
      name: "Resource Name",
      field: "config.title",
      width: "15%",
      sortable: true
    },
    {
      name: "Short Name",
      field: "config.preferredPrefix",
      render: (value: string) => (
        onNavigateToOntology ? (
          <EuiLink onClick={() => onNavigateToOntology(value)}>{value}</EuiLink>
        ) : (
          value
        )
      ),
      width: "10%",
      sortable: true
    },
    {
      name: "Description",
      field: "config.description",
      width: "30%",
      css: css`
          display: block;
          max-height: 200px;
          overflow: auto;
      `
    },
    {
      name: "Version",
      field: "config.version",
      width: "7.5%"
    },
    {
      name: "Loaded on",
      field: "loaded",
      width: "10%",
      dataType: "date" as const,
      sortable: true
    },
    {
      name: "Terms",
      field: "numberOfTerms",
      render: (value: number) => <>{value.toLocaleString()}</>,
      width: "7.5%",
      sortable: true
    },
    {
      name: "Properties",
      field: "numberOfProperties",
      render: (value: number) => <>{value.toLocaleString()}</>,
      width: "7.5%",
      sortable: true
    },
    {
      name: "Individuals",
      field: "numberOfIndividuals",
      render: (value: number) => <>{value.toLocaleString()}</>,
      width: "7.5%",
      sortable: true
    },
    {
      width: "5%",
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
        props.parameter,
      );
    }
  );


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


  return (
    <>
      {isSuccess &&
        <>
          <EuiText size="xs">
            Showing {resultsCount} <strong>Ontologies</strong>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiHorizontalRule margin="none" style={{ height: 2 }} />

          <EuiBasicTable
            columns={columns}
            items={pageOfItems}
            onChange={onTableChange}
            pagination={pagination}
            sorting={sorting}
          />
        </>
      }
      {isLoading &&
        <EuiBasicTable
          columns={columns}
          items={pageOfItems}
          onChange={onTableChange}
          pagination={pagination}
          sorting={sorting}
          loading
        />

      }
      {isError &&
        <EuiBasicTable
          columns={columns}
          items={pageOfItems}
          onChange={onTableChange}
          pagination={pagination}
          sorting={sorting}
          /*
                          error={getErrorMessageToDisplay(error, "resources")}
          */
        />
      }
    </>
  );
}

export { ResourcesWidget };
