import { entityTypeNames, thingTypeNames } from "../model/ModelTypeCheck";
import { pluralizeType } from "../app/util";
import {
  HIERARCHY_WIDGET_DEFAULT_VALUES
} from "../components/widgets/MetadataWidget/TabWidget/HierarchyWidget/HierarchyWidget";

export const apiArgType = {
  api: {
    required: true,
    control: {
      type: "radio",
    },
    options: [
      "https://terminology.services.base4nfdi.de/api-gateway/",
      "https://service.tib.eu/ts4tib/api/",
      "https://api.terminology.tib.eu/api/",
      "https://ols3-semanticlookup.zbmed.de/ols/api/",
      "https://semanticlookup.zbmed.de/ols/api/",
      "https://www.ebi.ac.uk/ols4/api/",
    ],
    description:
      "The API instance for the API call.<br><br> " +
      "**[TS4NFDI:](https://base4nfdi.de/projects/ts4nfdi)**<br> " +
      "TS4NFDI API Gateway: [https://terminology.services.base4nfdi.de/api-gateway/](https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/)<br><br> " +
      "**[TIB:](https://www.tib.eu/de/)**<br> " +
      "TIB Terminology Service (OLS3): [https://service.tib.eu/ts4tib/api/](https://service.tib.eu/ts4tib/api/)<br> " +
      "TIB Terminology Service (OLS4): [https://api.terminology.tib.eu/api/](https://api.terminology.tib.eu/api/)<br><br> " +
      "**[ZB MED:](https://www.zbmed.de/)**<br> " +
      "SemLookP API (OLS3): [https://ols3-semanticlookup.zbmed.de/ols/api/](https://ols3-semanticlookup.zbmed.de/ols/api/)<br> " +
      "SemLookP API (OLS4): [https://semanticlookup.zbmed.de/ols/api/](https://semanticlookup.zbmed.de/ols/api/)<br><br> " +
      "**Others:**<br> " +
      "EMBL-EBI API (OLS4): [https://www.ebi.ac.uk/ols4/api/](https://www.ebi.ac.uk/ols4/api/)<br><br> ",
    type: { summary: "string" },
  },
};
export const useLegacyArgType = {
  useLegacy: {
    required: false,
    description: "Toggle between OLS3 (legacy) and OLS4 API versions.",
    defaultValue: { summary: true },
    control: { type: "boolean" },
  },
};
export const useLegacyArgTypeHierarchy = {
  useLegacy: {
    required: false,
    description: `
**Only affecting OLS hierarchies**
<br>
Toggle between OLS3 (legacy) and OLS4 API versions.
    `,
    defaultValue: { summary: HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY },
    control: { type: "boolean" },
  },
};
export const iriArgType = {
  iri: {
    required: true,
    description: "Entity IRI whose information you want to fetch.",
    type: { summary: "string" },
  },
};
export const iriArgTypeHierarchy = {
  iri: {
    required: false,
    description: `
If provided, a hierarchy for the corresponding entity will be displayed, in which this entity is highlighted.
Otherwise, the root entities for the specified ontology and entityType will be displayed.
    `,
    type: { summary: "string" },
  }
}
export const ontologyIdArgType = {
  ontologyId: {
    required: false,
    description: "Select a specific ontology by ID.",
    table: {
      defaultValue: { summary: undefined },
    },
    type: { summary: "string" },
  },
};
export const ontologyIdReqArgType = {
  ontologyId: {
    required: true,
    description: "Select a specific ontology by ID.",
    table: {
      defaultValue: { summary: undefined },
    },
    type: { summary: "string" },
  },
};
export const ontologyIdArgTypeHierarchy = {
  ontologyId: {
    ...ontologyIdArgType.ontologyId,
    description: `
**Mandatory:** OntoPortal, Skosmos <br>
**Optional:** OLS (however, it is still strongly recommended to provide)
    `,
  }
}
export const entityTypeArgType = {
  entityType: {
    required: false,
    description:
      "Sets the type of the entity whose information you want to fetch.",
    control: {
      type: "radio",
    },
    table: {
      type: { summary: `${entityTypeNames.join(" | ")}` },
    },
    options: ["term", "class", "property", "individual", "INVALID STRING", ""],
  },
};
export const entityTypeArgTypeHierarchy = {
  entityType: {
    ...entityTypeArgType.entityType,
    description: `
**Mandatory:** OntoPortal <br>
**Optional:** OLS <br>
**Unused:** Skosmos <br>
    `,
  }
};
export const selectionChangedEventArgType = {
  selectionChangedEvent: {
    required: true,
    action: "selectionChangedEvent",
    description: "A method that is called once the set of selection changes.",
    type: {
      summary:
        "(selectedOptions: {" +
        "        label: string;" +
        "        iri?: string;" +
        "        ontology_name?: string;" +
        "        type?: string;" +
        "    }[]) => void;",
    },
    control: "text",
  },
};
export const placeholderArgType = {
  placeholder: {
    required: false,
    description:
      "Placeholder to show if no user input nor selection is performed.",
    type: { summary: "string" },
  },
};
export const preselectedArgType = {
  preselected: {
    required: false,
    description: "Pass pre-selected values.",
    type: { summary: "{ label?: string; iri?: string }[]" },
  },
};
export const parameterArgType = {
  parameter: {
    required: false,
    type: { summary: "string" },
    defaultValue: { summary: undefined },
    description: `

Additional parameters to pass to the API.

These parameters can be used to filter the search results. Each parameter can be combined with the special character **&**. The values of a parameter key can be combined with a comma (**,**). The following keys can be used:

| Parameter      | Description |
|---------------|------------|
| **ontology**  | Restrict a search to a set of ontologies, e.g., \`ontology=uberon,mesh\`. |
| **type**      | Restrict a search to an entity type, one of \`{class, property, individual, ontology}\`. |
| **slim**      | Restrict a search to a particular set of slims by name. |
| **fieldList** | Specify the fields to return. Defaults are **iri, label, short_form, obo_id, ontology_name, ontology_prefix, description, type**. |
| **obsoletes** | Set to \`true\` to include obsolete terms in the results. |
| **local**     | Set to \`true\` to only return terms that are in a defining ontology, e.g., only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced. |
| **childrenOf** | Restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only). Example: \`childrenOf\` the Snomed CT term *Myocardial infarction (disorder)* (→ heart attack) results in returning direct subclasses such as *ST elevation myocardial infarction (STEMI)* or sub-subclasses such as *STEMI of anterior wall*. The search term *Coronary artery occlusion* will return, among other things, *Acute myocardial infarction due to left coronary artery occlusion* because it's a child of *Acute myocardial infarction*, which is a child of *Myocardial infarction*. |
| **allChildrenOf** | Similar to \`childrenOf\`, but includes hierarchical/transitive properties like *"part of"* or *"develops from"*. Example: \`allChildrenOf\` the Snomed CT term *Myocardial infarction (disorder)* (→ heart attack) results in returning direct subclasses, sub-subclasses, and all other descendant terms. The search term *Coronary artery occlusion* will return, among other things, *Coronary occlusion* because it is a causative agent of *Myocardial infarction*. |
| **rows**      | Set results per page. |
| **start**     | Set the results page number. |
| **lang**      | Set the language for the response, e.g., **\`en\`**, **\`de\`**, **\`fr\`**. The default value is **\`en\`**. |
| **collection** | Restrict a search to a terminology subset, e.g., \`collection=nfdi4health\`. |
| **database**  | Restrict a search via the API Gateway to specific terminology software stacks. Choose from **\`ols\`**, **\`ontoportal\`**, or **\`skosmos\`**. |
    `,
  },
};
export const parameterArgTypeHierarchy = {
  parameter: {
    required: false,
    type: { summary: "string" },
    defaultValue: { summary: undefined },
    description: `
**Only affecting OLS and Skosmos hierarchies** 
<br>
Additional parameters can be provided in URL format.
These are applied directly to the hierarchy queries.

| Parameter      | Description |
|---------------|------------|
| **lang**      | Set the language for the response, e.g., **\`en\`**, **\`de\`**, **\`fr\`**. The default value is **\`en\`**. |
    `,
  },
};
export const hasShortSelectedLabelArgType = {
  hasShortSelectedLabel: {
    required: false,
    description:
      "If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.",
    defaultValue: { summary: false },
    type: { summary: "boolean" },
  },
};
export const allowCustomTermsArgType = {
  allowCustomTerms: {
    required: true,
    description:
      "If true, custom terms that are not found in any ontology can be added.",
    defaultValue: { summary: false },
    type: { summary: "boolean" },
  },
};
export const singleSelectionArgType = {
  singleSelection: {
    required: true,
    description: "If true, only one concept can be selected at once.",
    defaultValue: { summary: false },
    type: { summary: "boolean" },
  },
};
export const singleSuggestionRowArgType = {
  singleSelection: {
    required: false,
    description:
      "Display options in a compact format without descriptions - when this mode is activated, not all information is shown in order to save space.",
    type: { summary: "boolean" },
  },
};
export const ts4nfdiGatewayArgType = {
  singleSelection: {
    required: false,
    description: "Use the TS4NFDI Gateway API",
    defaultValue: { summary: false },
    type: { summary: "boolean" },
  },
};
export const showApiSourceArgType = {
  singleSelection: {
    required: false,
    description:
      "Whether to show the api source in the result list or not. Default is true. Only when the API gateway is selected.",
    defaultValue: { summary: true },
    type: { summary: "boolean" },
  },
};
export const hasTitleArgType = {
  hasTitle: {
    required: false,
    description: "Show title.",
    table: {
      defaultValue: { summary: true },
    },
    type: { summary: "boolean" },
  },
};
export const showBadgesArgType = {
  showBadges: {
    required: false,
    description: "If true, badges linking to defining ontologies are shown.",
    table: {
      defaultValue: { summary: true },
    },
    type: { summary: "boolean" },
  },
};
export const apiQueryArgType = {
  apiQuery: {
    required: true,
    description:
      "The API query whose response JSON should be displayed on click.",
    type: { summary: "string" },
  },
};
export const buttonTextArgType = {
  buttonText: {
    required: true,
    description: "The text displayed on the button.",
    type: { summary: "string" },
  },
};
export const buttonSizeArgType = {
  buttonSize: {
    required: false,
    description: "Size of the button.",
    defaultValue: { summary: "m" },
    table: {
      type: { summary: `s | m` },
    },
    control: {
      type: "radio",
    },
    options: ["s", "m"],
  },
};
export const initialEntriesPerPageArgType = {
  initialEntriesPerPage: {
    required: false,
    description: "Initial number of entries displayed per page.",
    type: { summary: "number" },
    defaultValue: { summary: 10 },
    control: "number",
  },
};
export const pageSizeOptionsArgType = {
  pageSizeOptions: {
    required: false,
    description: "Possible values for number of entries displayed per page.",
    type: { summary: "number[]" },
    defaultValue: { summary: [10, 25, 50, 100] },
    control: "array",
  },
};
export const initialSortFieldArgType = {
  initialSortField: {
    required: false,
    description: "Column the table is sorted by initially.",
    type: { summary: "string" },
    defaultValue: { summary: "config.preferredPrefix" },
    control: {
      type: "radio",
    },
    options: ["config.title", "config.preferredPrefix", "config.loaded"],
  },
};
export const initialSortDirArgType = {
  initialSortDir: {
    required: false,
    description: "Initial sorting direction.",
    type: { summary: "string" },
    defaultValue: { summary: "asc" },
    table: {
      type: { summary: `asc | desc` },
    },
    control: {
      type: "radio",
    },
    options: ["ascending", "descending"],
  },
};
export const targetLinkArgType = {
  targetLink: {
    required: false,
    description:
      "Possible hyperlink to a corresponding terminology in a Resource Name cell. Set this if you want a hyperlink to the terminology overview of your terminology service. Leave it blank if your application isn't a terminology service.",
    type: { summary: "string" },
    control: "text",
  },
};
export const actionsArgType = {
  actions: {
    required: false,
    description: "Pass actions to each item in the table.",
    type: { summary: "Array<Action<OlsResource>>" },
  },
};
export const queryArgType = {
  query: {
    required: true,
    description: "The search query.",
    type: { summary: "string" },
  },
};
export const initialItemsPerPageArgType = {
  initialItemsPerPage: {
    required: false,
    description: "Initial number of items displayed per page.",
    type: { summary: "number" },
    defaultValue: { summary: 10 },
    control: "number",
  },
};
export const itemsPerPageOptionsArgType = {
  itemsPerPageOptions: {
    required: false,
    description: "Possible values for number of items displayed per page.",
    type: { summary: "number[]" },
    defaultValue: { summary: [10, 25, 50, 100] },
    control: "array",
  },
};
export const colorFirstArgType = {
  colorFirst: {
    required: false,
    description:
      "Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or a hex / rgb value",
    table: {
      type: { summary: `EuiLinkColor | string` },
    },
    control: {
      type: "radio",
    },
    options: [
      "primary",
      "accent",
      "success",
      "warning",
      "danger",
      "ghost",
      "text",
      "subdued",
      "#00FFFF",
    ],
  },
};
export const colorSecondArgType = {
  colorSecond: {
    required: false,
    description:
      "Color of the second badge, can be primary, accent, success, warning, danger, ghost, text, subdued or a hex / rgb value",
    table: {
      type: { summary: `EuiLinkColor | string` },
    },
    control: {
      type: "radio",
    },
    options: [
      "primary",
      "accent",
      "success",
      "warning",
      "danger",
      "ghost",
      "text",
      "subdued",
      "#00FFFF",
    ],
  },
};
export const colorArgType = {
  color: {
    required: false,
    description: "Color of the text, names, hex or rgb",
    table: {
      type: { summary: `EuiLinkColor | string` },
    },
    control: {
      type: "radio",
    },
    options: [
      "default",
      "subdued",
      "success",
      "accent",
      "danger",
      "warning",
      "ghost",
      "#00FFFF",
      "rgb(255,0,255)",
    ],
  },
};
export const descTextArgType = {
  descText: {
    required: false,
    description:
      "Set your own text manually that overwrites the text fetched from the API.",
    type: { summary: "string" },
  },
};
export const thingTypeArgType = {
  thingType: {
    description:
      "Sets the type of the object whose description you want to fetch. Accepts 'ontology', 'term', 'class', 'property', or 'individual'.",
    table: {
      type: { summary: `${thingTypeNames.join(" | ")}` },
    },
    control: {
      type: "radio",
    },
    options: [
      "ontology",
      "term",
      "class",
      "property",
      "individual",
      "",
      "INVALID STRING",
    ],
  },
};
export const iriTextArgType = {
  iriText: {
    required: false,
    description:
      "Set your own text manually, which will show as a clickable link instead of the IRI.",
    type: { summary: "string" },
  },
};
export const externalIconArgType = {
  externalIcon: {
    required: false,
    options: [true, false],
    defaultValue: true,
    description: "Indicates that the target is external and needs an icon.",
    type: { summary: "boolean" },
  },
};
export const urlPrefixArgType = {
  urlPrefix: {
    required: false,
    type: { summary: `string` },
    description:
      "The iri should get appended to the urlPrefix or not. When provided, the iri gets encoded and appended to the urlPrefix.",
  },
};
export const copyButtonArgType = {
  copyButton: {
    required: false,
    options: ["left", "right", "none"],
    defaultValue: false,
    control: {
      type: "radio",
    },
    description:
      "Position the copy button on the right or left side of the iri. Leave it none for hiding it.",
  },
};
export const titleTextArgType = {
  titleText: {
    required: false,
    description:
      "Set your own text manually that overwrites the text fetched from the API.",
    type: { summary: `string` },
  },
};
export const defaultValueArgType = {
  defaultValue: {
    required: false,
    description: "Set the default text shown if the API fails to retrieve one.",
    control: "text",
    type: { summary: `string` },
  },
};
export const classNameArgType = {
  className: {
    required: false,
    description:
      "CSS class for styling. Set no value or an empty string for " +
      "the TS4NFDI styling. Set 'none' for the basic Elastic UI styling " +
      "(recommended for apps based on Elastic UI).",
    control: "text",
    type: { summary: `string` },
    table: {
      defaultValue: { summary: "ts4nfdi-title-style" },
    },
  },
};

/*TODO: refactor these to be consistent with all widget's onNavigate functions*/
export const onNavigateToEntityArgType = {
  onNavigateToEntity: {
    required: false,
    type: { summary: "string" },
    action: "onNavigateToEntityArgType",
    description:
      "This function is called every time an entity link is clicked.",
    control: { type: "radio" },
    options: ["Console message", "Navigate to EBI page"],
    mapping: {
      "Console message": (
        ontologyId: string,
        entityType?: string,
        entity?: { iri: string; label?: string }
      ) => {
        console.log(
          "Triggered onNavigateToEntity()" +
            (entityType ? ` for ${entityType || "entity"}` : "") +
            (entity && entity.label ? ` "${entity.label}"` : "") +
            (entity && entity.iri ? ` (iri="${entity.iri}")` : "") +
            "."
        );
      },
      "Navigate to EBI page": (
        ontologyId: string,
        entityType?: string,
        entity?: { iri: string; label?: string }
      ) => {
        if (entity && entity.iri && entityType) {
          window.open(
            "https://www.ebi.ac.uk/ols4/ontologies/" +
              ontologyId +
              "/" +
              new Map([
                ["term", "classes"],
                ["class", "classes"],
                ["individual", "individuals"],
                ["property", "properties"],
                ["dataProperty", "properties"],
                ["objectProperty", "properties"],
                ["annotationProperty", "properties"],
              ]).get(entityType) +
              "/" +
              encodeURIComponent(encodeURIComponent(entity.iri)),
            "_top"
          );
        } else {
          window.open(
            "https://www.ebi.ac.uk/ols4/ontologies/" + ontologyId,
            "_top"
          );
        }
      },
    },
  },
};
export const onNavigateToOntologyArgType = {
  onNavigateToOntology: {
    required: false,
    type: { summary: `string` },
    action: "onNavigateToOntologyArgType",
    description:
      "This function is called every time a badge linking to an entity in its defining ontology is clicked.",
    control: { type: "radio" },
    options: ["Console message", "Navigate to EBI page"],
    mapping: {
      "Console message": (
        ontologyId: string,
        entityType?: string,
        entity?: { iri: string; label?: string }
      ) => {
        console.log(
          "Triggered onNavigateToOntology()" +
            (entityType ? ` for ${entityType || "entity"}` : "") +
            (entity && entity.label ? ` "${entity.label}"` : "") +
            (entity && entity.iri ? ` (iri="${entity.iri}")` : "") +
            ` for ontologyId "${ontologyId}".`
        );
      },
      "Navigate to EBI page": (
        ontologyId: string,
        entityType?: string,
        entity?: { iri: string; label?: string }
      ) => {
        if (entity && entity.iri && entityType) {
          window.open(
            "https://www.ebi.ac.uk/ols4/ontologies/" +
              ontologyId +
              "/" +
              new Map([
                ["term", "classes"],
                ["class", "classes"],
                ["individual", "individuals"],
                ["property", "properties"],
                ["dataProperty", "properties"],
                ["objectProperty", "properties"],
                ["annotationProperty", "properties"],
              ]).get(entityType) +
              "/" +
              encodeURIComponent(encodeURIComponent(entity.iri)),
            "_top"
          );
        } else {
          window.open(
            "https://www.ebi.ac.uk/ols4/ontologies/" + ontologyId,
            "_top"
          );
        }
      },
    },
  },
};
export const onNavigateToDisambiguateArgType = {
  onNavigateToDisambiguate: {
    required: false,
    type: { summary: `string` },
    action: "onNavigateToDisambiguateArgType",
    description:
      "This function is called every time a disambiguation badge is clicked.",
    control: { type: "radio" },
    options: ["Console message", "Navigate to EBI page"],
    mapping: {
      "Console message": (
        entityType?: string,
        entity?: { iri: string; label?: string }
      ) => {
        console.log(
          "Triggered onNavigateToDisambiguate()" +
            (entityType ? ` for ${entityType || "entity"}` : "") +
            (entity && entity.label ? ` "${entity.label}"` : "") +
            (entity && entity.iri ? ` (iri="${entity.iri}")` : "") +
            "."
        );
      },
      "Navigate to EBI page": (
        entityType?: string,
        entity?: { iri: string; label?: string }
      ) => {
        window.open(
          `https://www.ebi.ac.uk/ols4/search?q=${
            entity && entity.label ? entity.label : ""
          }&exactMatch=true&lang=en`,
          "_top"
        );
      },
    },
  },
};
export const onNavigateArgType = {
  onNavigate: {
    required: false,
    type: { summary: "string" },
    action: "onNavigateArgType",
    description:
      "This function is called every time an ontology link is clicked.",
    control: { type: "radio" },
    options: ["Console message", "Navigate to EBI page"],
    mapping: {
      "Console message": (ontologyId: string) => {
        console.log("Triggered onNavigate() with ontologyId = " + ontologyId);
      },
      "Navigate to EBI page": (ontologyId: string) => {
        if (ontologyId) {
          window.open("https://www.ebi.ac.uk/ols4/ontologies/" + ontologyId);
        } else {
          window.open("https://www.ebi.ac.uk/ols4/ontologies/" + ontologyId);
        }
      },
    },
  },
};
export const onNavigateToArgType = {
  onNavigateTo: {
    required: false,
    description:
      "This function is called if the title is clicked. Cannot be combined with `href`. Either use this custom function `onNavigateTo` (e.g. for navigation to the source terminology service) OR directly provide a link with `href`",
    type: { summary: "void" },
    control: "text",
  },
};
export const hrefArgType = {
  href: {
    required: false,
    description:
      "Creates a hyperlink. Specify the URL of the page to which the link will go.",
    type: { summary: `string` },
    control: "text",
  },
};
export const apiKeyArgType = {
  apiKey: {
    required: false,
    description: `
Only required for OntoPortal hierarchies.
An API key is required to access the OntoPortal API. To obtain an API key for the BioPortal REST API, see its [wiki page](https://www.bioontology.org/wiki/BioPortal_Help#Getting_an_API_key).
    `,
    type: { summary: `string` },
    control: "text",
  },
};
export const apiUrlArgType = {
  apiUrl: {
    required: true,
    description: `
The API URL for the API call.
    `,
    type: { summary: `string` },
    control: "text",
  },
};
export const backendTypeArgType = {
  backendType: {
    required: false,
    description: `
The backend key from which to request \`{ols, ontoportal, skosmos}\`. Default is \`ols\`
    `,
    control: {
      type: "radio",
    },
    options: ["ols", "skosmos", "ontoportal"],
    table: {
      defaultValue: {
        summary: "ols",
      },
    },
  },
};
export const includeObsoleteEntitiesArgType = {
  includeObsoleteEntities: {
    required: false,
    description: `
**Only affecting OLS hierarchies**
<br>
Toggle whether to include entities marked as obsolete by the API.
    `,
    table: {
      defaultValue: {
        summary: HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
      },
    },
  },
};
export const preferredRootsArgType = {
  preferredRoots: {
    required: false,
    description: `
**Only affecting OLS hierarchies**
<br>
When displaying an ontology's root hierarchy (i.e. no iri provided), all entities without parent entities are displayed by default.
If \`preferredRoots==true\`, only the entities specifically marked as preferred root entity by the API are shown.
    `,
    table: {
      defaultValue: {
        summary: HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
      },
    },
  },
};
export const keepExpansionStatesArgType = {
  keepExpansionStates: {
    required: false,
    description: `
If true, the expanded subtree of a node which gets closed stays expanded on re-expansion of this node.
Otherwise, if a node is closed, only the direct children will be shown on re-expansion.
    `,
    table: {
      defaultValue: {
        summary: HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
      },
    },
  },
};
export const showSiblingsOnInitArgType = {
  showSiblingsOnInit: {
    required: false,
    description: `
If false, only the entity with specified iri and its ancestors are displayed in a hierarchy.
If true, the siblings of every entity mentioned above is displayed as well (NOTE: this might, but does not have to, need more queries to the API).
    `,
    table: {
      defaultValue: {
        summary: HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
      },
    },
  },
};
export const ArgType = {};
