import React from "react";
import { EuiBadge, EuiFlexItem, EuiIconTip, EuiText } from "@elastic/eui";

export interface BreadcrumbPresentationProps {
  isDefiningOntology: boolean,
  ontologyName: string,
  shortForm: string,
  ontologyId?: string
  colorFirst?:
    | "primary"
    | "accent"
    | "success"
    | "warning"
    | "danger"
    | "ghost"
    | "text"
    | "subdued"
    | string;
  colorSecond?: string;
}

function BreadcrumbPresentation(props: BreadcrumbPresentationProps) {
  return (
    <>
        <span>
              {
                !props.ontologyId && !props.isDefiningOntology &&
                <EuiFlexItem>
                  <EuiText size={"s"}>
                    <i>Defining ontology not available </i>
                    <EuiIconTip
                      type={"iInCircle"}
                      color={"subdued"}
                      content={`Showing occurence inside ${props.ontologyName} instead.`}
                    />
                  </EuiText>
                </EuiFlexItem>
              }
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
