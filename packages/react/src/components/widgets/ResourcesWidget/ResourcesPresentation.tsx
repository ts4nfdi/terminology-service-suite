"use client";

import {
  EuiBasicTableColumn,
  EuiButtonIcon,
  EuiCallOut,
  EuiDescriptionList,
  EuiHorizontalRule,
  EuiInMemoryTable,
  EuiLink,
  EuiProvider,
  EuiScreenReaderOnly,
  EuiSearchBarProps,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { css, SerializedStyles } from "@emotion/react";
import { ReactNode, useState } from "react";
import { OlsResource, ResourcesPresentationProps } from "../../../app";
import { OBO_FOUNDRY_REPO_URL_RAW } from "../../../app/util";
import "../../../style/ts4nfdiStyles/ts4nfdiResourcesStyle.css";

function ResourcesPresentation(
  props: ResourcesPresentationProps,
): React.JSX.Element {
  const {
    resources,
    isLoading,
    isError,
    onNavigate,
    useLegacy,
    actions,
    className,
    ...rest
  } = props;

  const [itemIdToExpandedRowMap, setItemIdToExpandedRowMap] = useState<
    Record<string, ReactNode>
  >({});
  const [searchQuery, setSearchQuery] = useState("");

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
      render: (value?: number) =>
        value ? <>{value.toLocaleString()}</> : <></>,
      width: "7%",
      sortable: true,
    },
    {
      name: "Properties",
      field: "numberOfProperties",
      render: (value?: number) =>
        value ? <>{value.toLocaleString()}</> : <></>,
      width: "7%",
      sortable: true,
    },
    {
      name: "Individuals",
      field: "numberOfIndividuals",
      render: (value?: number) =>
        value ? <>{value.toLocaleString()}</> : <></>,
      width: "7%",
      sortable: true,
    },
    {
      width: "2%",
      actions: [
        ...(actions || []),
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

  const search: EuiSearchBarProps = {
    box: {
      incremental: true,
      placeholder: "Search by ontology or resource name",
    },
    onChange: ({ queryText }) => {
      setSearchQuery(queryText);
    },
  };

  const filteredOntos = resources.filter((onto) => {
    if (searchQuery === "") {
      return true;
    } else {
      const searchedItem = searchQuery.trim().toLowerCase();

      const searchedShortName = (onto.ontologyId || "").toLowerCase();
      const searchedResourceName = (onto.config?.title || "").toLowerCase();

      return (
        searchedResourceName.includes(searchedItem) ||
        searchedShortName.includes(searchedItem)
      );
    }
  });

  const isSuccess = !isLoading && !isError;

  return (
    <div className={finalClassName} data-testid="resources">
      {isSuccess && (
        <>
          <EuiCallOut title={"Licenses"} iconType="info" color={"warning"}>
            <p>
              The use and distribution of the terminologies beyond this service
              is only permitted in compliance with the license conditions of the
              respective terminology, also in compliance with the license
              conditions in the respective countries.
            </p>
          </EuiCallOut>

          <EuiSpacer size="m" />
          <EuiText size="xs">
            Showing <strong>{filteredOntos.length}</strong>{" "}
            <strong>Ontologies</strong>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiHorizontalRule margin="none" style={{ height: 2 }} />

          <EuiInMemoryTable
            columns={columnsWithExpandingRowToggle}
            items={filteredOntos}
            pagination={true}
            sorting={true}
            search={search}
            itemIdToExpandedRowMap={itemIdToExpandedRowMap}
            itemId={"ontologyId"}
            {...rest}
          />
        </>
      )}
      {isLoading && (
        <EuiInMemoryTable
          columns={columnsWithExpandingRowToggle}
          items={filteredOntos}
          pagination={true}
          sorting={true}
          search={search}
          loading
          {...rest}
        />
      )}
      {isError && (
        <EuiInMemoryTable
          columns={columns}
          items={filteredOntos}
          pagination={true}
          sorting={true}
          search={search}
          {...rest}
          /*
                          error={getErrorMessageToDisplay(error, "resources")}
          */
        />
      )}
    </div>
  );
}

function WrappedResourcesPresentation(
  props: ResourcesPresentationProps,
): React.JSX.Element {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <ResourcesPresentation {...props} />
    </EuiProvider>
  );
}

export { ResourcesPresentation, WrappedResourcesPresentation };
