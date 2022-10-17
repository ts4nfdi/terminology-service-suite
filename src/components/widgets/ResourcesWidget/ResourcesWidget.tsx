import React, { useState } from "react";
import { EuiLoadingSpinner, EuiBasicTable, EuiButton, EuiButtonIcon, CriteriaWithPagination } from "@elastic/eui";
import { useQuery } from 'react-query';
import { OlsApi } from "../../../api/OlsApi";

export interface ResourcesWidgetProps {
  api: string;
  initialEntriesPerPage?: number;
  pageSizeOptions?: number[];
  initialSortField?: string;
  initialSortDir?: "asc" | "desc";
}

interface OlsResource {
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
  } = props;
  const olsApi = new OlsApi(api);

  const [pageIndex, setPageIndex] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(initialEntriesPerPage);
  const [sortField, setSortField] = useState<string | number>(initialSortField);
  const [sortDirection, setSortDirection] = useState(initialSortDir);
  const [totalOntologies, setTotalOntologies] = useState(0);

  const columns = [
    {
      name: "Resource Name",
      field: "config.title",
      width: "20%",
      sortable: true,
    },
    {
      name: "Short Name",
      field: "config.preferredPrefix",
      width: "10%",
      sortable: true,
    },
    {
      name: "Description",
      field: "config.description",
      width: "30%",
    },
    {
      name: "Version",
      field: "config.version",
      width: "10%",
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
      width: "5%",
      sortable: true,
    },
    {
      name: "Properties",
      field: "numberOfProperties",
      width: "5%",
      sortable: true,
    },
    {
      name: "Individuals",
      field: "numberOfIndividuals",
      width: "5%",
      sortable: true,
    },
    {
      name: "Actions",
      width: "5%",
      actions: [
        // TODO Allow usage of react-router links
        {
          isPrimary: true,
          render: (item: OlsResource) => (
            <EuiButtonIcon
              href="" // TODO Add working link
              iconType="search"
              aria-label="Search"
            />
          ),
        },
        {
          isPrimary: true,
          render: (item: OlsResource) => (
            <EuiButtonIcon
              href={item.config.fileLocation}
              iconType="download"
              aria-label="Download"
              isDisabled={!item.config.allowDownload || item.config.fileLocation.startsWith("file://")}
            />
          ),
        },
        {
          render: (item: OlsResource) => (
            <EuiButton href="" size="s">Show terms</EuiButton> // TODO Add working link
          ),
        },
        {
          render: (item: OlsResource) => (
            <EuiButton href="" size="s">Show properties</EuiButton> // TODO Add working link
          ),
        },
        {
          render: (item: OlsResource) => (
            <EuiButton href="" size="s">Show individuals</EuiButton> // TODO Add working link
          ),
        },
      ],
    },
  ];

  const pagination = {
    pageIndex: pageIndex,
    pageSize: entriesPerPage,
    totalItemCount: totalOntologies,
    pageSizeOptions: pageSizeOptions
  };

  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection,
    }
  }

  const onTableChange = ({ page, sort }: CriteriaWithPagination<OlsResource>) => {
    const { index: pageIndex, size: entriesPerPage } = page;
    setPageIndex(pageIndex);
    setEntriesPerPage(entriesPerPage);

    if (sort) {
      const { field: sortField, direction: sortDirection } = sort;
      setSortField(sortField);
      setSortDirection(sortDirection);
    }
  };

  const {
    data: ontologies
  } = useQuery(
    [api, "ontologiesMetadata", entriesPerPage, pageIndex, sortField, sortDirection],
    async () => {
      return olsApi.getOntologies(
        {
          size: entriesPerPage.toString(),
          page: pageIndex.toString()
        },
        {
          sortField: sortField,
          sortDir: sortDirection
        }
      ).then((response) => {
        if (response.page.totalElements != null && response._embedded && response._embedded.ontologies) {
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
