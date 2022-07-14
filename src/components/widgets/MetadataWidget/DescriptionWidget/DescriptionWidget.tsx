import React, { useEffect, useState } from 'react';
import { EuiFlexItem, EuiText } from '@elastic/eui';
import { EuiTextProps } from '@elastic/eui/src/components/text/text';

interface DescriptionWidgetProps extends EuiTextProps {
  iri: string,
  api: string,
  // eslint-disable-next-line react/require-default-props
  descText?: string
}

function DescriptionWidget(props: DescriptionWidgetProps) {
  const [description, setDescription] = useState('No description available.');
  const {
    api, iri, descText, ...rest
  } = props;

  useEffect(() => {
    const getDescription = async () => {
      const descriptionData = await fetch(`${api}terms?iri=${iri}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Content_Type: 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response._embedded.terms[0].description[0] != null) {
            return response._embedded.terms[0].description[0];
          }
        });
      setDescription(descriptionData);
    };
    getDescription().catch((error) => console.log(error));
  }, [api, iri]);

  return (

    <div>
      <EuiFlexItem>
        <EuiText {...rest}>
          {descText || description}
        </EuiText>
      </EuiFlexItem>
    </div>
  );
}

export { DescriptionWidget };
