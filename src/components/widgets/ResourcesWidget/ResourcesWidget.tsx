import React, { useState } from "react";
import {
  EuiLoadingSpinner,
  EuiBasicTable,
  EuiButtonIcon,
  EuiLink,
  CriteriaWithPagination,
} from "@elastic/eui";
import { useQuery } from "react-query";
import { OlsApi } from "../../../api/OlsApi";
import { css, SerializedStyles } from "@emotion/react";
import { Action } from "@elastic/eui/src/components/basic_table/action_types";
import { EuiBasicTableColumn } from "@elastic/eui/src/components/basic_table/basic_table";

export interface ResourcesWidgetProps {
  api: string;
  initialEntriesPerPage?: number;
  pageSizeOptions?: number[];
  initialSortField?: string;
  initialSortDir?: "asc" | "desc";
  /**
   * Pass actions to each item in the table.
   */
  targetLink?: string;
  actions?: Array<Action<OlsResource>>;
  /**
   * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
   */
  frontend?: string;
}

export interface OlsResource {
  ontologyId: string;
  loaded: string;
  numberOfTerms: number;
  numberOfProperties: number;
  numberOfIndividuals: number;
  config: {
    title: string;
    description: string;
    preferredPrefix: string;
    allowDownload: boolean;
    fileLocation: string;
    version?: string;
    [otherFields: string]: unknown;
  };
  [otherFields: string]: unknown;
}

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
    frontend,
  } = props;
  const olsApi = new OlsApi(api);

  const [pageIndex, setPageIndex] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(initialEntriesPerPage);
  const [sortField, setSortField] = useState<string | number>(initialSortField);
  const [sortDirection, setSortDirection] = useState(initialSortDir);
  const [totalOntologies, setTotalOntologies] = useState(0);


  const columns: Array<EuiBasicTableColumn<OlsResource> & {css?:SerializedStyles}> = [
    {
      name: "Resource Name",
      field: "config.title",
      width: "15%",
      sortable: true,
    },
    {
      name: "Short Name",
      field: "config.preferredPrefix",
      render: (value: string) => (
          targetLink ? <EuiLink href={targetLink + "ontologies/" + value.toLowerCase() + "/"}>{value}</EuiLink> : value
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
          ),
        },
      ],
    },
  ];

  const pagination = {
    pageIndex: pageIndex,
    pageSize: entriesPerPage,
    totalItemCount: totalOntologies,
    pageSizeOptions: pageSizeOptions,
  };

  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
  };

  const onTableChange = ({
    page,
    sort,
  }: CriteriaWithPagination<OlsResource>) => {
    const { index: pageIndex, size: entriesPerPage } = page;
    setPageIndex(pageIndex);
    setEntriesPerPage(entriesPerPage);

    if (sort) {
      const { field: sortField, direction: sortDirection } = sort;
      setSortField(sortField);
      setSortDirection(sortDirection);
    }
  };

  const { data: ontologies } = useQuery(
    [
      api,
      "ontologiesMetadata",
      entriesPerPage,
      pageIndex,
      sortField,
      sortDirection,
      frontend,
    ],
    async () => {
      return olsApi
        .getOntologies(
          {
            size: entriesPerPage.toString(),
            page: pageIndex.toString(),
          },
          {
            sortField: sortField,
            sortDir: sortDirection,
          },
          {
            frontend: frontend,
          }
        )
        .then((response) => {
          if (
            response.page.totalElements != null &&
            response._embedded &&
            response._embedded.ontologies
          ) {
            // TODO Refactor (code duplication, possibly reuse getTotalElements from DataContentWidget?)
            setTotalOntologies(response.page.totalElements);
            return response._embedded.ontologies;
          } else {
            throw new Error("Unexpected API response");
          }
        });
    }
  );

  if (ontologies) {
    return (
      <EuiBasicTable
        columns={columns}
        items={ontologies}
        onChange={onTableChange}
        pagination={pagination}
        sorting={sorting}
      />
    );
  }

  return <EuiLoadingSpinner size="xl" />;
}

export { ResourcesWidget };
