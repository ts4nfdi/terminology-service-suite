"use client";

import React, { ReactNode, useState } from "react";
import {
  Comparators,
  CriteriaWithPagination,
  EuiBasicTable,
  EuiButtonIcon,
  EuiHorizontalRule,
  EuiLink,
  EuiSpacer,
  EuiText,
  EuiScreenReaderOnly,
  EuiDescriptionList,
  EuiCallOut,
  EuiProvider,
} from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { css, SerializedStyles } from "@emotion/react";
import { EuiBasicTableColumn } from "@elastic/eui/src/components/basic_table/basic_table";
import { OlsResource, ResourcesWidgetProps } from "../../../app/types";
import { Ontologies } from "../../../model/interfaces";
import { OLS4Ontology } from "../../../model/ols4-model";
import { OBO_FOUNDRY_REPO_URL_RAW } from "../../../app/util";
import "../../../style/ts4nfdiStyles/ts4nfdiResourcesStyle.css";
import { OlsOntologyApi } from "../../../api/ols/OlsOntologyApi";

const DEFAULT_INITIAL_ENTRIES_PER_PAGE = 10;
const DEFAULT_PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
const DEFAULT_INITIAL_SORT_FIELD = "config.preferredPrefix";
const DEFAULT_INITIAL_SORT_DIR = "asc" as const;
const DEFAULT_USE_LEGACY = true as const;

function ResourcesWidget(props: ResourcesWidgetProps) {
  const {
    api,
    initialEntriesPerPage = DEFAULT_INITIAL_ENTRIES_PER_PAGE,
    pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
    initialSortField = DEFAULT_INITIAL_SORT_FIELD,
    initialSortDir = DEFAULT_INITIAL_SORT_DIR,
    onNavigate,
    parameter,
    useLegacy = DEFAULT_USE_LEGACY,
    actions,
    className,
    ...rest
  } = props;
  const olsApi = new OlsOntologyApi(api);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(initialEntriesPerPage);
  const [sortField, setSortField] = useState<string | number>(initialSortField);
  const [sortDirection, setSortDirection] = useState(initialSortDir);

  const [itemIdToExpandedRowMap, setItemIdToExpandedRowMap] = useState<
    Record<string, ReactNode>
  >({});

  const finalClassName = className || "ts4nfdi-resources-style";

  const columns: Array<
    EuiBasicTableColumn<OlsResource> & { css?: SerializedStyles }
  > = [
    {
      name: "Logo",
      field: "config.logo",
      // TODO: improve position of logo (maybe inside another cell, but this makes sorting more complicated)
      render: (logoUrl: string) =>
        logoUrl ? (
          <img
            width={"100%"}
            style={{ objectFit: "contain" }}
            src={
              logoUrl.startsWith("/images")
                ? OBO_FOUNDRY_REPO_URL_RAW + logoUrl
                : logoUrl
            }
            alt={"-logo-"}
          />
        ) : (
          <></>
        ),
      width: "7%",
      sortable: false,
    },
    {
      name: "Resource Name",
      field: "config.title",
      width: "15%",
      sortable: true,
    },
    {
      name: "Short Name",
      field: "ontologyId",

      render: (ontologyId: string) => (
        <EuiLink
          href={"#"}
          onClick={(e) => {
            e.preventDefault();
            if (typeof onNavigate === "function") {
              onNavigate(ontologyId || "");
            }
          }}
        >
          {ontologyId}
        </EuiLink>
      ),

      width: "10%",
      sortable: true,
    },
    {
      name: "Description",
      field: "config.description",
      // width: "30%",
      css: css`
        display: block;
        max-height: 200px;
        overflow: auto;
      `,
    },
    {
      name: "Version",
      field: "config.version",
      width: "7%",
    },
    {
      name: "Loaded on",
      field: "loaded",
      width: "8%",
      dataType: "date" as const,
      sortable: true,
    },
    {
      name: "Terms",
      field: "numberOfTerms",
      render: (value: number) => <>{value.toLocaleString()}</>,
      width: "7%",
      sortable: true,
    },
    {
      name: "Properties",
      field: "numberOfProperties",
      render: (value: number) => <>{value.toLocaleString()}</>,
      width: "7%",
      sortable: true,
    },
    {
      name: "Individuals",
      field: "numberOfIndividuals",
      render: (value: number) => <>{value.toLocaleString()}</>,
      width: "7%",
      sortable: true,
    },
    {
      width: "2%",
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
                !item.config.fileLocation ||
                item.config.fileLocation.startsWith("file://")
              }
            />
          ),
        },
      ],
    },
  ];

  const onTableChange = ({
    page,
    sort,
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
    isLoading,
  } = useQuery<Ontologies>(
    ["ontologiesData", api, parameter, useLegacy],
    async () => {
      return olsApi.getOntologiesData(props.parameter, useLegacy);
    },
  );

  function v2toOlsResource(ontology: OLS4Ontology): OlsResource {
    return {
      ontologyId: ontology.getOntologyId(),
      loaded: ontology.getLoaded(),
      numberOfTerms: ontology.getNumClasses(),
      numberOfProperties: ontology.getNumProperties(),
      numberOfIndividuals: ontology.getNumIndividuals(),
      config: {
        logo: ontology.getLogoURL(),
        title: ontology.getName().trim(),
        description: ontology.getDescription(),
        preferredPrefix: ontology.getPreferredPrefix(),
        allowDownload: ontology.getAllowDownload(),
        fileLocation: ontology.getIri(),
        version: ontology.getVersion(),
        iri: ontology.getIri(),
        homepage: ontology.getHomepage(),
        annotations: {
          license: ontology.getLicense(),
        },
      },
    };
  }

  const ontos = useLegacy
    ? ontologiesData?.properties.map((ontology) => ({
        ...ontology.properties,
      })) || []
    : ontologiesData?.properties.map((ontology) => v2toOlsResource(ontology)) ||
      [];

  const findOntologies = (
    ontologies: any[],
    pageIndex: number,
    pageSize: number,
    sortField: any,
    sortDirection: "asc" | "desc",
  ) => {
    let items;

    if (sortField) {
      items = ontologies
        .slice(0)
        .sort(
          Comparators.property(sortField, Comparators.default(sortDirection)),
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
        Math.min(startIndex + pageSize, ontologies.length),
      );
    }

    return {
      pageOfItems,
      totalItemCount: ontologies.length,
    };
  };

  const { pageOfItems, totalItemCount } = findOntologies(
    ontos,
    pageIndex,
    pageSize,
    sortField,
    sortDirection,
  );

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount,
    pageSizeOptions,
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
      direction: sortDirection,
    },
  };

  const toggleDetails = (resource: any) => {
    const itemIdToExpandedRowMapValues = { ...itemIdToExpandedRowMap };

    if (itemIdToExpandedRowMapValues[resource.ontologyId]) {
      delete itemIdToExpandedRowMapValues[resource.ontologyId];
    } else {
      let homepage = null;
      let licenseUrl = "";
      let licenseLabel = "";

      if (resource.config.homepage) {
        homepage = resource.config.homepage;
      }

      if (resource?.config?.annotations?.license) {
        const license = resource.config.annotations.license;
        if (useLegacy) {
          if (license[0] !== "") {
            licenseUrl = `https://${license[0]}`;
            licenseLabel = license[0];
          }
        } else {
          licenseUrl = license.url ? license.url : "";
          licenseLabel = license.label ? license.label : "";
        }
      }

      const listItems = [];

      if (homepage) {
        listItems.push({
          title: "Homepage",
          description: (
            <EuiLink href={`${homepage ? homepage : "-"}`}>{`${
              homepage ? homepage : "-"
            }`}</EuiLink>
          ),
        });
      }
      if (licenseLabel !== "") {
        listItems.push({
          title: "License",
          description: (
            <EuiLink
              href={`${licenseUrl !== "" ? licenseUrl : null}`}
            >{`${licenseLabel}`}</EuiLink>
          ),
        });
      }

      itemIdToExpandedRowMapValues[resource.ontologyId] = (
        <EuiDescriptionList listItems={listItems} />
      );
    }

    setItemIdToExpandedRowMap(itemIdToExpandedRowMapValues);
  };

  const columnsWithExpandingRowToggle: Array<
    EuiBasicTableColumn<OlsResource> & { css?: SerializedStyles }
  > = [
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
            onClick={() => {
              toggleDetails(resource);
            }}
            iconType={
              itemIdToExpandedRowMapValues[resource.ontologyId]
                ? "arrowDown"
                : "arrowRight"
            }
            aria-label={
              itemIdToExpandedRowMapValues[resource.ontologyId]
                ? "Collapse"
                : "Expand"
            }
          />
        );
      },
    },
  ];
  // @ts-ignore
  return (
    <div className={finalClassName} data-testid="resources">
      {isSuccess && (
        <>
          <EuiCallOut title={"Licenses"} iconType="iInCircle" color={"warning"}>
            <p>
              The use and distribution of the terminologies beyond this service
              is only permitted in compliance with the license conditions of the
              respective terminology, also in compliance with the license
              conditions in the respective countries.
            </p>
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
            itemId={"ontologyId"}
            {...rest}
          />
        </>
      )}
      {isLoading && (
        <EuiBasicTable
          columns={columnsWithExpandingRowToggle}
          items={pageOfItems}
          onChange={onTableChange}
          pagination={pagination}
          sorting={sorting}
          loading
          {...rest}
        />
      )}
      {isError && (
        <EuiBasicTable
          columns={columns}
          items={pageOfItems}
          onChange={onTableChange}
          pagination={pagination}
          sorting={sorting}
          {...rest}
          /*
                          error={getErrorMessageToDisplay(error, "resources")}
          */
        />
      )}
    </div>
  );
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
          actions={props.actions}
          parameter={props.parameter}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { ResourcesWidget, WrappedResourcesWidget };
