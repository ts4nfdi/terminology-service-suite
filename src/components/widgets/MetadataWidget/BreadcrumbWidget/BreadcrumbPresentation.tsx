import React from "react";
import {EuiBadge} from "@elastic/eui";
import {BreadcrumbPresentationProps} from "../../../../app/types";

function BreadcrumbPresentation(props: BreadcrumbPresentationProps) {
  return (
    <>
        <span>
          <EuiBadge className="breadcrumb" color={props.colorFirst || "primary"}>
            {props.ontologyName ? props.ontologyName.toUpperCase() : "No ontology name available"}
          </EuiBadge>
          {" > "}
          <EuiBadge className="breadcrumb" color={props.colorSecond || "success"}>
            {props.shortForm ? props.shortForm.toUpperCase() : "No short form available"}
          </EuiBadge>
        </span>
    </>
  );
}

export { BreadcrumbPresentation };
