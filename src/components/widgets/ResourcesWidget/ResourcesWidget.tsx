import React, { useState } from "react";
import {
  EuiBasicTable,
  EuiButtonIcon,
  EuiLink,
  CriteriaWithPagination,
  EuiText,
} from "@elastic/eui";
import { useQuery } from "react-query";
import { OlsApi } from "../../../api/OlsApi";
import { css, SerializedStyles } from "@emotion/react";
import { Action } from "@elastic/eui/src/components/basic_table/action_types";
import { EuiBasicTableColumn } from "@elastic/eui/src/components/basic_table/basic_table";
import { getErrorMessageToDisplay } from "../../../utils/helper";

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
     * Additional parameters to pass to the API.
     *
     * This parameters can be used to filter the search results. Each parameter can be combined via
     * the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
     * <i><b>,</b></i>. The following keys could be used:<br/> <br/>
     *  <table>
     *  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
     *  <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>
     *  <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>
     *  <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>
     *  <tr><td>fieldList</td><td>Specify the fields to return. Defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>
     *  <tr><td>obsoletes</td><td>Set to true to include obsolete terms in the results</td></tr>
     *  <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>
     *  <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>
     *  <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>
     *  <tr><td>rows</td><td>Set results per page</td></tr>
     *  <tr><td>start</td><td>Set the results page number</td></tr>
     *  <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. collection=nfdi4health</td></tr>
     * </table>
     */
  parameter?: string;
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
    parameter,
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

  const {
    data: ontologies,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useQuery(
    [
      api,
      "ontologiesMetadata",
      entriesPerPage,
      pageIndex,
      sortField,
      sortDirection,
      parameter,
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
          undefined,
            props.parameter
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

  return (
      <>
        {isSuccess &&
            <EuiBasicTable
                columns={columns}
                items={ontologies}
                onChange={onTableChange}
                pagination={pagination}
                sorting={sorting}
            />
        }
        {isLoading &&
            <EuiBasicTable
                columns={columns}
                items={[]}
                onChange={onTableChange}
                pagination={pagination}
                sorting={sorting}
                loading
            />

        }
        {isError &&
            <EuiBasicTable
                columns={columns}
                items={[]}
                onChange={onTableChange}
                pagination={pagination}
                sorting={sorting}
                error={getErrorMessageToDisplay(error, "resources")}
            />
        }
      </>
  )
}

export { ResourcesWidget };
