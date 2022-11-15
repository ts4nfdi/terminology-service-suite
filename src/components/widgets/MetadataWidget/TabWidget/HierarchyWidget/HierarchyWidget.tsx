import { EuiPanel, EuiTreeView } from "@elastic/eui";
import { Node } from "@elastic/eui/src/components/tree_view/tree_view";

import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetch_data, get_url_prefix } from "../../../../../api/widget";

/**
 * Response from OLS
 */
interface SemanticResponse {
  id: string;
  parent: string;
  iri: string;
  text: string;
  /* state: {
    opened: boolean;
  }; */
  children: boolean;
  /* a_attr: {
    iri: string;
    ontology_name: string;
    title: string;
    class: string;
  }; */
  // ontology_name: string;
}

class HierarchyTree implements Node {
  url: string;
  iri: string;
  label: React.ReactNode;
  id: string;
  isExpanded?: boolean = true;
  children: Array<HierarchyTree> = [];
  icon: React.ReactElement = (<>+</>);
  iconWhenExpanded: React.ReactElement = (<>-</>);

  constructor(label: React.ReactNode, id: string, url: string, iri: string) {
    this.label = label;
    this.id = id;
    this.iri = iri;
    this.url = url;
  }

  setchild(child: HierarchyTree) {
    this.children.push(child);
    if (this.children.length > 0) {
      this.icon = <>+</>;
    }
  }

  is_root() {
    return this.id === "#";
  }

  to_string(): string {
    return (
      this.label + "[ " + this.children.map((value) => value.to_string()) + " ]"
    );
  }

  callback() {
    if (this.isExpanded) return "";
    const api_data_onclick =
      this.url +
      this.iri.replaceAll("/", "%252F").replaceAll(":", "%253A") +
      "/jstree/children/" +
      this.id;
    fetch_data(api_data_onclick).then((res) => {
      this.children = [];
      create_tree(this, res, this.url);
    });
    return "";
  }
}

const create_tree = (
  tree: HierarchyTree,
  arr: Array<SemanticResponse>,
  url: string
) => {
  arr
    .filter((value) => value.parent === tree.id)
    .forEach((value) => {
      tree.setchild(
        new HierarchyTree(value.text, value.id, url, value.iri)
      );
    });
    tree.children.map((value) => create_tree(value, arr, url));
};

export interface HierarchyWidgetProps {
  linkToSelf: string | undefined;
  iri: string | undefined;
}

const HierarchyWidget = (props: HierarchyWidgetProps) => {
  // state used to use EuiTreeView alternate,
  // because EuiTreeView does not show the children when in run time
  // a child is added
  const [state, setstate] = useState(true);

  const [treeItems, settreeItems] = useState<HierarchyTree[]>();

  useQuery<Array<SemanticResponse>>(["childhierarchy", props.iri], () => {
    return fetch(
      get_url_prefix(props.linkToSelf) +
        props.iri?.replaceAll("/", "%252F").replaceAll(":", "%253A") +
        "/jstree?viewMode=All&siblings=false",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const root = new HierarchyTree("#", "#", "", "");
        if (res) create_tree(root, res, get_url_prefix(props.linkToSelf));
        settreeItems(root.children);
        return res;
      })

      .catch((err) => {});
  });

  useEffect(() => {
    setstate(!state);
  }, [treeItems]);

  return (
    <EuiPanel>
      {treeItems && (
        <EuiTreeView
          expandByDefault={true}
          aria-label="HierarchyTab"
          items={treeItems}
        />
      )}
    </EuiPanel>
  );
};

export { HierarchyWidget };
