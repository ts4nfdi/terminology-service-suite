import React from "react";
import {
  EuiFlexItem,
  EuiTabbedContent,
  EuiTabbedContentTab,
} from "@elastic/eui";
import { AlternativeNameTabWidget } from "./AlternativeNameTabWidget";
import { CrossRefTabWidget } from "./CrossRefWidget";
import { HierarchyTabWidget } from "./HierarchyTabWidget";

export interface TabWidgetProps {
  iri: string;
  api: string;
  linkToSelf: string;
}

function TabWidget(props: TabWidgetProps) {
  const tabs: Array<EuiTabbedContentTab> = [
    {
      content: <AlternativeNameTabWidget api={props.api} iri={props.iri} />,
      id: "tab1",
      name: "Alternative Names",
    },
    {
      content: (
        <HierarchyTabWidget iri={props.iri} linkToSelf={props.linkToSelf} />
      ),
      id: "tab2",
      name: "Hierarchy",
    },
    {
      content: <CrossRefTabWidget api={props.api} iri={props.iri} />,
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

export { TabWidget };
