import React from "react";
import {
  EuiFlexItem, EuiProvider,
  EuiTabbedContent,
  EuiTabbedContentTab,
} from "@elastic/eui";
import { AlternativeNameTabWidget } from "./AlternativeNameTabWidget";
import { CrossRefTabWidget } from "./CrossRefWidget";
import { HierarchyWidget } from "./HierarchyWidget";
import {QueryClient, QueryClientProvider} from "react-query";
import {AutocompleteWidget} from "../../AutocompleteWidget";
import ReactDOM from "react-dom";

export interface TabWidgetProps {
  iri: string;
  api: string;
  ontologyId: string;
  entityType:
      | "ontology"
      | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
      | "individual"
      | "property"
      | string;
  parameter?: string;
}

function TabWidget(props: TabWidgetProps) {
  const { iri, api, ontologyId, entityType, parameter, ...rest } = props;
  const tabs: Array<EuiTabbedContentTab> = [
    {
      content: <AlternativeNameTabWidget
          api={api}
          iri={iri}
          ontologyId={ontologyId}
          entityType={entityType}
      />,
      id: "tab1",
      name: "Alternative Names",
    },
    {
      content: (
        <HierarchyWidget api={api} iri={iri} ontologyId={ontologyId} />
      ),
      id: "tab2",
      name: "Hierarchy",
    },
    {
      content: <CrossRefTabWidget
          api={api}
          iri={iri}
          ontologyId={ontologyId}
          entityType={entityType}
      />,
      id: "tab3",
      name: "Cross references",
    },
  ];

  return (
    <div>
      <EuiFlexItem>
        <EuiTabbedContent size="s" tabs={tabs} />
      </EuiFlexItem>
    </div>
  );
}

function createTab(props: TabWidgetProps, container: any, callback?: ()=>void) {
  ReactDOM.render(WrappedTabWidget(props), container, callback);
}

function WrappedTabWidget(props: TabWidgetProps) {
  const queryClient = new QueryClient();
  return (
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          <TabWidget
              iri={props.iri}
              api={props.api}
              ontologyId={props.ontologyId}
              entityType={props.entityType}
              parameter={props.parameter}
          />
        </QueryClientProvider>
      </EuiProvider>
  )
}

export { TabWidget, createTab };
