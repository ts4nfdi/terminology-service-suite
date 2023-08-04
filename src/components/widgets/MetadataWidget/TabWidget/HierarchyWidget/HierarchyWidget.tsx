import {EuiPanel, EuiProvider, EuiTreeView} from "@elastic/eui";
import { Node } from "@elastic/eui/src/components/tree_view/tree_view";

import React, { useState } from "react";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import { fetch_data, get_url_prefix } from "../../../../../api/widget";
import { OlsApi } from "../../../../../api/OlsApi";
import ReactDOM from "react-dom";
import {AutocompleteWidget} from "../../../AutocompleteWidget";

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
      encodeURIComponent(encodeURIComponent(this.iri)) +
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
  iri?: string;
  ontologyId: string;
  api: string;
}

async function getTree(olsApi: OlsApi, ontologyId: string, iri?: string): Promise<any> {
  const response = await olsApi.getTermTree({ontologyId: ontologyId, termIri: iri}, {viewMode: "All", siblings: false}, undefined, undefined)
    .catch((error) => console.log(error));
  if (iri) return response
  else { //roots have been queried, and the response needs restructuring to become SemanticResponse
    return response._embedded.terms.map(
      (x: { iri: string, label: string, has_children: boolean }, i: number) =>
        ({id: (++i).toString(), parent: '#', iri: x.iri, text: x.label, children: x.has_children})
    );
  }
}

const HierarchyWidget = (props: HierarchyWidgetProps) => {
  const { iri, ontologyId, api } = props;
  const [treeItems, setTreeItems] = useState<HierarchyTree[]>();
  const olsApi = new OlsApi(api);
  const linkToSelf = api+"ontologies/"+ontologyId+"/terms/"

  const fetchChildren = async (child: HierarchyTree) => { //could be given to HierarchyTree nodes for onClick callbacks
    const response = await olsApi.getTermTree({ontologyId: ontologyId, termIri: iri}, {child: child.id}, undefined, undefined)
      .catch((error) => console.log(error));
    child.children = [];
    create_tree(child, response, get_url_prefix(linkToSelf));
  }

  //initial tree query
  useQuery<Array<SemanticResponse>>([api, "getTermTree", ontologyId, iri], () => {
    return getTree(olsApi, ontologyId, iri)
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

function createHierarchy(props: HierarchyWidgetProps, container: any, callback?: ()=>void) {
  ReactDOM.render(WrappedHierarchyWidget(props), container, callback);
}

function WrappedHierarchyWidget(props: HierarchyWidgetProps) {
  const queryClient = new QueryClient();
  return (
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          <HierarchyWidget
              ontologyId={props.ontologyId}
              api={props.api}
              iri={props.iri}
          />
        </QueryClientProvider>
      </EuiProvider>
  )
}

export { HierarchyWidget, createHierarchy };
