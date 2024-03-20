import React from "react";
import {EuiBadge} from "@elastic/eui";
import {BreadcrumbPresentationProps} from "../../../../utils/types";

function BreadcrumbPresentation(props: BreadcrumbPresentationProps) {
  return (
    <>
        <span>
          <EuiBadge color={props.colorFirst || "primary"}>
            {props.ontologyName.toUpperCase()}
          </EuiBadge>
          {" > "}
          <EuiBadge color={props.colorSecond || "success"}>
            {props.shortForm ? props.shortForm.toUpperCase() : "No short form available"}
          </EuiBadge>
        </span>
    </>
  );
}

export { BreadcrumbPresentation };
