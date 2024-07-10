import {Action} from "@elastic/eui/src/components/basic_table/action_types";
import {OlsResource} from "../src/components/widgets/ResourcesWidget/ResourcesWidget";
import {EuiSuggestProps} from "@elastic/eui/src/components";
import {EuiCardProps} from "@elastic/eui";

declare global {
  interface SemLookPWidgets {
    createAutocomplete:(props:{
      api: string;
      parameter?: string;
      selectionChangedEvent: (selectedOption: {
        label: string;
        iri?: string;
        ontology_name?: string;
        type?: string;
      }) => void;
      preselected?: { label?: string; iri?: string };
      placeholder?: string;
      hasShortSelectedLabel?: boolean;
      allowCustomTerms: boolean;
    }
    )=>void,
    createDataContent:(props:{
      api: string;
      parameter?: string;
    }
    )=>void,
    createEntityInfo:(props:{
      api: string;
      iri?: string;
      ontologyId?: string;
      hasTitle?: boolean;
      entityType:
          | "ontology"
          | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
          | "individual"
          | "property";
      parameter?: string;
      useLegacy?: boolean;
      showBadges?: boolean;
    }
    )=>void,
    createEntityRelations:(props:{
      api: string;
      iri?: string;
      ontologyId?: string;
      hasTitle?: boolean;
      entityType:
          | "ontology"
          | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
          | "individual"
          | "property";
      parameter?: string;
      showBadges?: boolean;
    }
    )=>void,
    createJsonApi:(props:{
      apiQuery: string;
      buttonText: string;
      buttonSize?: "s" | "m";
    }
    )=>void,
    createBreadcrumb:(props:{
      iri?: string;
      ontologyId?: string;
      api: string;
      /**
       * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
       */
      entityType:
          | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
          | "individual"
          | "property"
          | string;
      colorFirst?:
          | "primary"
          | "accent"
          | "success"
          | "warning"
          | "danger"
          | "ghost"
          | "text"
          | "subdued"
          | string;
      colorSecond?: string;
      parameter?: string
    }
    )=>void,
    createDescription:(props:{
      iri?: string;
      ontologyId?: string;
      api: string;
      descText?: string;
      entityType:
          | "ontology"
          | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
          | "individual"
          | "property"
          | string;
      parameter?: string
    }
    )=>void,
    createIri:(props:{
      iri: string;
      iriText?: string;
      color?:
          | "primary"
          | "accent"
          | "success"
          | "warning"
          | "danger"
          | "ghost"
          | "text"
          | "subdued";
      parameter?: string;
      externalIcon?: boolean;
      urlPrefix?: string;
      copyButton?: boolean;
    }
    )=>void,
    createTab:(props:{
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
    )=>void,
    createAlternativeNameTab:(props:{
      iri: string;
      api: string;
      ontologyId?: string;
      entityType:
          | "ontology"
          | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
          | "individual"
          | "property"
          | string;
      parameter?: string;
    }
    )=>void,
    createCrossRefTab:(props:{
      iri: string;
      api: string;
      ontologyId?: string;
      entityType:
          | "ontology"
          | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
          | "individual"
          | "property"
          | string;
      parameter?: string;
    }
    )=>void,
    createHierarchy:(props:{
      iri?: string;
      ontologyId: string;
      api: string;
    }
    )=>void,
    createHierarchyDeprecated:(props:{
      iri?: string;
      ontologyId?: string;
      api: string;
    })=>void,
    createTitle:(props:{
      iri?: string;
      ontologyId?: string;
      api: string;
      titleText?: string;
      entityType:
          | "ontology"
          | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
          | "individual"
          | "property"
          | string;
      parameter?: string
    }
    )=>void,
    createMetadata:(props:{
      iri: string;
      ontologyId: string;
      api: string;
      entityType:
          | "term" | "class" //equivalent: API uses 'class', rest uses 'term' -> both allowed here
          | "individual"
          | "property"
          | string;
      parameter?: string
    })=>void,
    createOntologyInfo:(props:{
      ontologyId: string;
      api: string;
      parameter?: string;
    }
    )=>void,
    createResources:(props:{
      api: string;
      initialEntriesPerPage?: number;
      pageSizeOptions?: number[];
      initialSortField?: string;
      initialSortDir?: "asc" | "desc";
      targetLink?: string;
      actions?: Array<Action<OlsResource>>;
      parameter?: string;
    }
    )=>void,
    createSearchBar:(props:{
      api: string;
      query: string;
      parameter?: string;
      selectionChangedEvent: (selectedOption: {
        label: string;
        iri?: string;
        ontology_name?: string;
        type?: string;
      }) => void;
    } & Omit<EuiSuggestProps, "suggestions" | "onChange" | "onItemClick" | "value">
    )=>void,
    createSearchResultsList:(props:{
      api: string;
      query: string;
      parameter?: string;
      initialItemsPerPage?: number;
      itemsPerPageOptions?: number[];
      targetLink?: string;
      useLegacy?: boolean;
    } & Partial<Omit<EuiCardProps, "layout">>
    )=>void
  }
}

