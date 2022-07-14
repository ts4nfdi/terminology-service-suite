import React, { useEffect, useState } from 'react';
import {
  EuiFlexGroup, EuiFlexItem, EuiLink, EuiPanel, EuiText,
} from '@elastic/eui';

interface CrossRefWidgetProps {
  term: string;
  api:string;
}

function CrossRefTabWidget(props: CrossRefWidgetProps) {
  const [crossRef, setCrossRef] = useState([]);
  const { term, api } = props;

  useEffect(() => {
    const getDescription = async () => {
      const crossRefData = await fetch(`${api}terms?iri=${term}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Content_Type: 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => response._embedded.terms[0].obo_xref);
      setCrossRef(crossRefData);
    };
    getDescription().catch((error) => console.log(error));
  }, [props.api, props.term]);

  return (
    <EuiPanel>
      <EuiFlexGroup style={{ padding: 7 }} direction="column">
        {crossRef
          ? (
            crossRef.map((item, index) => (
              <EuiFlexItem key={index}>
                {item.url
                  ? (
                    <EuiLink href={item.url} external target="_blank">
                      {item.database}
                      :
                      {item.id}
                    </EuiLink>
                  )
                  : (
                    `${item.database}:${item.id}`
                  )}
              </EuiFlexItem>
            ))
          )
          : (
            <EuiText>No cross references exists for this concept.</EuiText>
          )}
      </EuiFlexGroup>
    </EuiPanel>
  );
}

export { CrossRefTabWidget };
