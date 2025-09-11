"use client";
import React from "react";
import { EuiIcon, EuiProvider } from "@elastic/eui";
import {BreadcrumbPresentationProps,} from "../../../../../app";
import "../../../../../style/ts4nfdiStyles/ts4nfdiBreadcrumbStyle.css";
import { QueryClient, QueryClientProvider } from "react-query";
import OntologyBadge from "../../../../../model/OntologyBadge";
import Badge from "../../../../../model/Badge";

function BreadcrumbPresentation(props: BreadcrumbPresentationProps) {
  const finalClassName = props.className || "ts4nfdi-breadcrumb-style";
  const ontologyId = props.entity?.properties?.ontologyId || props.ontologyId;
  const shortForm = props.entity?.properties?.shortForm || props.shortForm;

  return (
    <>
      <span className={finalClassName}>
        <OntologyBadge
            ontologyId={ontologyId}
            onNavigateToOntology={props.onNavigateToOntology}
            color={props.colorFirst || "primary"}
        />
        &nbsp;
        <EuiIcon type="arrowRight" />
        &nbsp;
        <Badge
            color={props.colorSecond || "success"}
        >
            {shortForm ? shortForm.toUpperCase() : "No short form available"}
        </Badge>
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
