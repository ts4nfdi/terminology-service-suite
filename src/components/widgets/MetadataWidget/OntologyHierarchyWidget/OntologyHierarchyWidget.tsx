import React, { useEffect, useState } from "react";
import { EuiBadge, EuiFlexItem } from "@elastic/eui";

export interface OntologyHierarchyWidgetProps {
  iri: string;
  api: string;
}

function OntologyHierarchyWidget(props: OntologyHierarchyWidgetProps) {
  const [hierarchy, setHierarchy] = useState([]);
  const { api, iri } = props;

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
      // @ts-ignore
      setHierarchy(hierarchyData);
    };
    getHierarchy().catch((error) => console.log(error));
  }, [props.api, props.iri]);

  return (
    <EuiFlexItem>
      <span>
        <EuiBadge color="primary">{hierarchy[0]}</EuiBadge>
        {" > "}
        <EuiBadge color="success">{hierarchy[1]}</EuiBadge>
      </span>
    </EuiFlexItem>
  );
}
export { OntologyHierarchyWidget };
