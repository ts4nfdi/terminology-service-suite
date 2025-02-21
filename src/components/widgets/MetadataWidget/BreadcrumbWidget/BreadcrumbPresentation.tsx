import React from "react";
import {EuiBadge, EuiIcon} from "@elastic/eui";
import {BreadcrumbPresentationProps} from "../../../../app/types";
import "../../../../style/ts4nfdiStyles/ts4nfdiBreadcrumbStyle.css";

function BreadcrumbPresentation(props: BreadcrumbPresentationProps) {
  const finalClassName = props.className || "ts4nfdi-breadcrumb-style";
  return (
    <>
        <span className={finalClassName}>
          <span
            onClick={() => {
                if (props.onNavigateToOntology)
                    props.onNavigateToOntology(props.ontologyId || "", undefined, undefined);
            }}
            role="button" // Improve accessibility
            tabIndex={0} // Make it focusable
            onKeyDown={(e) => { if (e.key === "Enter") e.currentTarget.click(); }} // Handle keyboard navigation
          >
            <EuiBadge className={props.ontologyId ? "breadcrumb clickable-breadcrumb" : "breadcrumb"} color={props.colorFirst || "primary"}>
                    {props.ontologyName ? props.ontologyName.toUpperCase() : "No ontology name available"}
            </EuiBadge>
          </span>
            &nbsp;<EuiIcon type="arrowRight"/>&nbsp;
            <EuiBadge className="breadcrumb" color={props.colorSecond || "success"}>
                {props.shortForm ? props.shortForm.toUpperCase() : "No short form available"}
            </EuiBadge>
        </span>
    </>
  );
}

export { BreadcrumbPresentation };
