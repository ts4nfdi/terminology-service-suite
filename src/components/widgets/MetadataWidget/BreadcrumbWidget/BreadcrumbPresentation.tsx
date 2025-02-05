import React from "react";
import {EuiBadge, EuiIcon} from "@elastic/eui";
import {BreadcrumbPresentationProps} from "../../../../app/types";
import "../../../../style/ts4nfdiStyles/ts4nfdiBreadcrumbStyle.css";

function BreadcrumbPresentation(props: BreadcrumbPresentationProps) {
  const finalClassName = props.className || "ts4nfdi-breadcrumb-style";
  return (
    <>
        <span className={finalClassName}>
            <button onClick={() => {if(props.onNavigateToOntology) props.onNavigateToOntology(props.ontologyId || "", undefined, undefined)}}>
                <EuiBadge className={props.ontologyId ? "breadcrumb clickable-breadcrumb" : "breadcrumb"} color={props.colorFirst || "primary"}>
                    {props.ontologyName ? props.ontologyName.toUpperCase() : "No ontology name available"}
                </EuiBadge>
            </button>
            &nbsp;<EuiIcon type="arrowRight"/>&nbsp;
            <EuiBadge className="breadcrumb" color={props.colorSecond || "success"}>
                {props.shortForm ? props.shortForm.toUpperCase() : "No short form available"}
            </EuiBadge>
        </span>
    </>
  );
}

export { BreadcrumbPresentation };
