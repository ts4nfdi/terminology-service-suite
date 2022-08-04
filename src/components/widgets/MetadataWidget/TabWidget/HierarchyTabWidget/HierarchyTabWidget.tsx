import React, { useEffect, useState } from 'react';
import {
  EuiPanel, EuiText
} from '@elastic/eui';

export interface HierarchyTabWidgetProps {
  iri: string;
  api:string;
}

function HierarchyTabWidget(props: HierarchyTabWidgetProps) {
  const [mainLabel, setMainLabel] = useState('');
  const [link, setLink] = useState();
  const [data, setData] = useState();
  const [childrenItems, setChildrenItems] = useState();

  const { api, iri } = props;

  useEffect(() => {
    fetch(`${api}terms?iri=${iri}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Content_Type: 'application/json',
      },
    }).then((res) => res.json())
      .then((res) => res._embedded)
      .then((res) => {
        setData(res);
        setMainLabel(res.terms[0].label);
      })
      .catch((error) => console.log(error));
  }, [props.api, props.iri]);

  useEffect(() => {
    // console.log(data)
    if (data != undefined) {
      // console.log(data)
      // @ts-ignore
      fetch(data.terms[0]._links.children.href, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
          Accept: 'application/json',
          Content_Type: 'application/json',
        },
      }).then((res) => res.json())
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }
  }, [data]);

  return (
    <EuiPanel>
      {/* <EuiTreeView */}
      {/*   items={[ */}
      {/*     { */}
      {/*       label: mainLabel, */}
      {/*       id: 'mainItem', */}
      {/*       icon: <EuiIcon type="arrowRight" />, */}
      {/*       iconWhenExpanded: <EuiIcon type="arrowDown" />, */}
      {/*       isExpanded: true, */}
      {/*       children: childrenItems, */}
      {/*     }, */}
      {/*   ]} */}
      {/*   aria-label="HierarchyTab" */}
      {/*   expandByDefault */}
      {/* /> */}
      <EuiText>
        Hierarchy not implemented
      </EuiText>

    </EuiPanel>
  );
}

export { HierarchyTabWidget };
