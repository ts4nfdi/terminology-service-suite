import React, { useEffect, useState } from "react";
import { EuiFlexItem, EuiLink } from "@elastic/eui";

export interface IriWidgetProps {
  iri: string;
  api: string;
  iriText?: string;
  color?:
    | "primary"
    | "accent"
    | "success"
    | "warning"
    | "danger"
    | "ghost"
    | "text"
    | "subdued";
}
function IriWidget(props: IriWidgetProps) {
  const [fetchedIri, setFetchediri] = useState("undefined");
  const { api, iri, iriText, color } = props;

  useEffect(() => {
    const getIri = async () => {
      const description = await fetch(`${api}terms?iri=${iri}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Content_Type: "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => response._embedded.terms[0].iri);
      setFetchediri(description);
    };
    getIri().catch((error) => console.log(error));
  }, [api, iri]);

  return (
    <EuiFlexItem grow={false}>
      {iriText ? (
        <EuiLink href={iriText} target="_blank" color={color}>
          {iriText}
        </EuiLink>
      ) : (
        <EuiLink href={fetchedIri} target="_blank" color={color}>
          {fetchedIri}
        </EuiLink>
      )}
    </EuiFlexItem>
  );
}

export { IriWidget };
