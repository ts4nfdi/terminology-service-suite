import React, { useEffect, useState } from 'react';
import { EuiText } from '@elastic/eui';

export interface TermWidgetProps {
  iri: string,
  api: string,
  termText?: string,
}
function TermWidget(props: TermWidgetProps) {
  const [label, setLabel] = useState('undefined');
  const { iri, api } = props;

  useEffect(() => {
    const getTerm = async () => {
      const fetchedLabel = await fetch(`${api}terms?iri=${iri}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Content_Type: 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => response._embedded.terms[0].label);
      setLabel(fetchedLabel);
    };
    getTerm().catch((error) => console.log(error));
  }, [props.api, props.iri]);

  return (
    <EuiText>
      {props.termText ? props.termText : label}
    </EuiText>
  );
}

export { TermWidget };
