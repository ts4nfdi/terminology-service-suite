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

const NO_IRI = "No IRI available.";

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
        .then((response) => {
          if (response._embedded && response._embedded.terms && response._embedded.terms.length > 0 && response._embedded.terms[0].iri != null) {
            return response._embedded.terms[0].iri;
          } else {
            return NO_IRI;
          }
        });
      setFetchediri(description);
    };
    getIri().catch((error) => console.log(error));
  }, [api, iri]);

  return (
    <EuiFlexItem grow={false}>
      <div>
        {iriText ? (
            <EuiLink href={iriText} target="_blank" color={color}>
              {iriText}
            </EuiLink>
        ) : (
            <EuiLink href={fetchedIri} target="_blank" color={color}>
              {fetchedIri}
            </EuiLink>
        )}
      </div>
    </EuiFlexItem>
  );
}

export { IriWidget };
