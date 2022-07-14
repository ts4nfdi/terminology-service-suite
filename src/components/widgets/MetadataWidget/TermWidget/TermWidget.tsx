import React, { useEffect, useState } from 'react';
import { EuiText } from '@elastic/eui';
import { EuiTextProps } from '@elastic/eui/src/components/text/text';

interface TermWidgetProps extends EuiTextProps {
  iri: string,
  api: string,
  termText?: string,
  textSize?: 'xl' | 'l' | 'm' | 's' | 'xs'
}
function TermWidget(props: TermWidgetProps) {
  const [label, setLabel] = useState('undefined');
  const {
    iri, api, textSize, ...rest
  } = props;
  const textSizeMap = {
    xl: '5em',
    l: '4em',
    m: '3em',
    s: '2em',
    xs: '1em',
  };

  const textSizeMapped = () => {
    if (textSize != undefined) {
      return textSizeMap[textSize];
    }
    return textSizeMap.m;
  };

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
    <EuiText {...rest}>
      <h1 style={{ fontSize: textSizeMapped() }}>
        {props.termText ? props.termText : label}
      </h1>
    </EuiText>
  );
}

export { TermWidget };
