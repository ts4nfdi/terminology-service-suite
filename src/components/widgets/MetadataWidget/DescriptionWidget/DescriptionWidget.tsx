import React, { useEffect, useState } from "react";
import { EuiText } from "@elastic/eui";
import { EuiTextProps } from "@elastic/eui/src/components/text/text";

export interface DescriptionWidgetProps extends EuiTextProps {
  iri: string;
  api: string;
  descText?: string;
}

const NO_DESCRIPTION = "No description available.";

function DescriptionWidget(props: DescriptionWidgetProps) {
  const [description, setDescription] = useState(NO_DESCRIPTION);
  const { api, iri, descText, ...rest } = props;

  useEffect(() => {
    const getDescription = async () => {
      const descriptionData = await fetch(`${api}terms?iri=${iri}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Content_Type: "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response._embedded && response._embedded.terms && response._embedded.terms.length > 0 && response._embedded.terms[0].description != null && response._embedded.terms[0].description[0] != null) {
            return response._embedded.terms[0].description[0];
          } else {
            return NO_DESCRIPTION;
          }
        });
      setDescription(descriptionData);
    };
    getDescription().catch((error) => console.log(error));
  }, [api, iri, descText]);

  return (
    <>
      <EuiText {...rest}>{descText || description}</EuiText>
    </>
  );
}

export { DescriptionWidget };
