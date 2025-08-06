"use client";
import React from "react";
import {EuiBadge, EuiIcon, EuiProvider} from "@elastic/eui";
import {BreadcrumbPresentationProps, BreadcrumbWidgetProps} from "../../../../../app/types";
import "../../../../../style/ts4nfdiStyles/ts4nfdiBreadcrumbStyle.css";
import ReactDOM from "react-dom";
import {QueryClient, QueryClientProvider} from "react-query";

function BreadcrumbPresentation(props: BreadcrumbPresentationProps) {
  const finalClassName = props.className || "ts4nfdi-breadcrumb-style";
  const clickable = !!props.onNavigateToOntology;
  const ontologyId = props.entity?.properties?.ontologyId || props.ontologyId
  const shortForm = props.entity?.properties?.shortForm || props.shortForm

  return (
    <>
      <span className={finalClassName}>
        <span
          onClick={() => {
            if (clickable && props.onNavigateToOntology) {
              props.onNavigateToOntology(
                ontologyId || "",
                undefined,
                undefined
              );
            }
          }}
          role={clickable ? "button" : undefined}
          tabIndex={0} // Make it focusable
          onKeyDown={(e) => {
            if (e.key === "Enter") e.currentTarget.click();
          }} // Handle keyboard navigation
        >
          <EuiBadge
            className={
              clickable ? "breadcrumb clickable-breadcrumb" : "breadcrumb"
            }
            color={props.colorFirst || "primary"}
          >
            {ontologyId
              ? ontologyId.toUpperCase()
              : "No ontology name available"}
          </EuiBadge>
        </span>
        &nbsp;
        <EuiIcon type="arrowRight" />
        &nbsp;
        <EuiBadge className="breadcrumb" color={props.colorSecond || "success"}>
          {shortForm
            ? shortForm.toUpperCase()
            : "No short form available"}
        </EuiBadge>
      </span>
    </>
  );
}

function WrappedBreadcrumbPresentation(props: BreadcrumbPresentationProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
      <QueryClientProvider client={queryClient}>
        <BreadcrumbPresentation
          ontologyId={props.ontologyId}
          shortForm={props.shortForm}
          colorFirst={props.colorFirst}
          colorSecond={props.colorSecond}
          onNavigateToOntology={props.onNavigateToOntology}
          entity={props.entity}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { BreadcrumbPresentation, WrappedBreadcrumbPresentation };