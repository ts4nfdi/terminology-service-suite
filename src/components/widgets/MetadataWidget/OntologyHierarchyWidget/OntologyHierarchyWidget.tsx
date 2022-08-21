import React, { useEffect, useState } from "react";
import { EuiBadge, EuiFlexItem } from "@elastic/eui";

export interface OntologyHierarchyWidgetProps {
  iri: string;
  api: string;
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

function OntologyHierarchyWidget(props: OntologyHierarchyWidgetProps) {
  const [hierarchy, setHierarchy] = useState<string[]>([]);
  const { api, iri, colorFirst, colorSecond } = props;

  useEffect(() => {
    const getHierarchy = async () => {
      const hierarchyData = await fetch(`${api}terms?iri=${iri}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Content_Type: "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => [
          response._embedded.terms[0].ontology_prefix,
          response._embedded.terms[0].obo_id,
        ]);
      setHierarchy(hierarchyData);
    };
    getHierarchy().catch((error) => console.log(error));
  }, [api, iri]);

  return (
    <EuiFlexItem>
      <span>
        <EuiBadge color={colorFirst || "primary"}>{hierarchy[0]}</EuiBadge>
        {" > "}
        <EuiBadge color={colorSecond || "success"}>{hierarchy[1]}</EuiBadge>
      </span>
    </EuiFlexItem>
  );
}
export { OntologyHierarchyWidget };
