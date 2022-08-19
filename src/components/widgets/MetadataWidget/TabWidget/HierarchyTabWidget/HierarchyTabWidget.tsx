import { EuiPanel, EuiTreeView } from "@elastic/eui";
import { Node } from "@elastic/eui/src/components/tree_view/tree_view";

import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetch_data, get_url_prefix } from "../../../../../api/widget";

/**
 * Response from OLS
 */
interface semanticResponseIF {
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

class HierarchyTreeIF implements Node {
  url: string;
  iri: string;
  label: React.ReactNode;
  id: string;
  isExpanded?: boolean = true;
  children: Array<HierarchyTreeIF> = [];
  icon: React.ReactElement = (<>+</>);
  iconWhenExpanded: React.ReactElement = (<>-</>);

  constructor(label: React.ReactNode, id: string, url: string, iri: string) {
    this.label = label;
    this.id = id;
    this.iri = iri;
    this.url = url;
  }

  setchild(child: HierarchyTreeIF) {
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
  tree: HierarchyTreeIF,
  arr: Array<semanticResponseIF>,
  url: string
) => {
  if (tree.is_root()) {
    arr
      .filter((value) => value.parent === "#")
      .forEach((value) => {
        tree.setchild(
          new HierarchyTreeIF(value.text, value.id, url, value.iri)
        );
      });
    tree.children.map((value) => create_tree(value, arr, url));
  } else {
    arr
      .filter((value) => value.parent === tree.id)
      .forEach((value) => {
        tree.setchild(
          new HierarchyTreeIF(value.text, value.id, url, value.iri)
        );
      });
    tree.children.map((value) => create_tree(value, arr, url));
  }
};

export interface HierarchyTabIF {
  linkToSelf: string | undefined;
  iri: string | undefined;
}

const HierarchyTabWidget = (props: HierarchyTabIF) => {
  // state used to use EuiTreeView alternate,
  // because EuiTreeView does not show the children when in run time
  // a child is added
  const [state, setstate] = useState(true);

  const [treeItems, settreeItems] = useState<HierarchyTreeIF[]>();

  useQuery<Array<semanticResponseIF>>(["childhierarchy", props.iri], () => {
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
        const root = new HierarchyTreeIF("#", "#", "", "");
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
      {treeItems && !state && (
        <EuiTreeView
          expandByDefault={true}
          aria-label="HierarchyTab"
          items={treeItems}
        />
      )}
      {treeItems && state && (
        <EuiTreeView
          expandByDefault={true}
          aria-label="HierarchyTab1"
          items={treeItems}
        />
      )}
    </EuiPanel>
  );
};

export default HierarchyTabWidget;
