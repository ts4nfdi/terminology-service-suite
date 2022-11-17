import { EuiPanel, EuiTreeView } from "@elastic/eui";
import { Node } from "@elastic/eui/src/components/tree_view/tree_view";

import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetch_data, get_url_prefix } from "../../../../../api/widget";
import { OlsApi } from "../../../../../api/OlsApi";

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

  callback() { //TODO handle via OlsApi.getTermTree with child param
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
  linkToSelf: string | undefined; //TODO remove, since new props below are sufficient
  iri: string;
  ontologyID: string;
  api: string;
}

async function getTree(olsApi: OlsApi, ontologyID: string, iri: string): Promise<any> {
  const response = await olsApi.getTermTree({ontologyId: ontologyID, termIri: iri}, {viewMode: "All", siblings: false}, undefined, undefined)
    .catch((error) => console.log(error));
  return response
}

const HierarchyWidget = (props: HierarchyWidgetProps) => {
  const { linkToSelf, iri, ontologyID, api } = props;
  const [treeItems, setTreeItems] = useState<HierarchyTree[]>();
  const olsApi = new OlsApi(api);

  //initial tree query
  useQuery<Array<SemanticResponse>>([api, "getTermTree", ontologyID, iri], () => {
    return getTree(olsApi, ontologyID, iri)
      .then((res) => {
        const root = new HierarchyTree("#", "#", "", "");
        if (res) create_tree(root, res, get_url_prefix(linkToSelf));
        setTreeItems(root.children);
        return res;
      });
  });

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
