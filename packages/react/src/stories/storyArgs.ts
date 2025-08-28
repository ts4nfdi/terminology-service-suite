import { entityTypeNames, thingTypeNames } from "../model/ModelTypeCheck";
import { ArgTypes } from "@storybook/react";
import { HIERARCHY_WIDGET_DEFAULT_VALUES } from "../api/ols/OlsHierarchyApi";

export const apiArgType: ArgTypes = {
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
      "TS4NFDI API Gateway: [https://terminology.services.base4nfdi.de/api-gateway/](https://terminology.services.base4nfdi.de/api-gateway/)<br><br> " +
      "**[TIB:](https://www.tib.eu/de/)**<br> " +
      "TIB Terminology Service (OLS3): [https://service.tib.eu/ts4tib/api/](https://service.tib.eu/ts4tib/api/)<br> " +
      "TIB Terminology Service (OLS4): [https://api.terminology.tib.eu/api/](https://api.terminology.tib.eu/api/)<br><br> " +
      "**[ZB MED:](https://www.zbmed.de/)**<br> " +
      "SemLookP API (OLS3): [https://ols3-semanticlookup.zbmed.de/ols/api/](https://ols3-semanticlookup.zbmed.de/ols/api/)<br> " +
      "SemLookP API (OLS4): [https://semanticlookup.zbmed.de/ols/api/](https://semanticlookup.zbmed.de/ols/api/)<br><br> " +
      "**Others:**<br> " +
      "EMBL-EBI API (OLS4): [https://www.ebi.ac.uk/ols4/api/](https://www.ebi.ac.uk/ols4/api/)<br><br> ",
    table: {
      type: { summary: "string" },
    },
  },
} as const;
export const useLegacyArgType: ArgTypes = {
  useLegacy: {
    required: false,
    description: "Toggle between OLS3 (legacy) and OLS4 API versions.",
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
    defaultValue: {
      summary: String(HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY),
    },
    control: { type: "boolean" } as const,
  },
};
export const iriArgType: ArgTypes = {
  iri: {
    required: true,
    description: "Entity IRI whose information you want to fetch.",
    table: {
      type: { summary: "string" },
    },
  },
};
export const iriArgTypeHierarchy = {
  iri: {
    required: false,
    description: `
If provided, a hierarchy for the corresponding entity will be displayed, in which this entity is highlighted.
Otherwise, the root entities for the specified ontology and entityType will be displayed.
    `,
    table: {
      type: { summary: "string" },
    },
  },
};
export const ontologyIdArgType = {
  ontologyId: {
    required: false,
    description: "Select a specific ontology by ID.",
    table: {
      defaultValue: { summary: "-" },
      type: { summary: "string" },
    },
  },
};
export const ontologyIdReqArgType: ArgTypes = {
  ontologyId: {
    required: true,
    description: "Select a specific ontology by ID.",
    table: {
      defaultValue: { summary: "-" },
      type: { summary: "string" },
    },
  },
};
export const ontologyIdArgTypeHierarchy = {
  ontologyId: {
    ...ontologyIdArgType.ontologyId,
    description: `
**Mandatory:** OntoPortal, Skosmos <br>
**Optional:** OLS (however, it is still strongly recommended to provide)
    `,
  },
};
export const entityTypeArgType = {
  entityType: {
    required: false,
    description:
      "Sets the type of the entity whose information you want to fetch.",
    control: {
      type: "radio",
    } as const,
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
  },
};
export const selectionChangedEventArgType = {
  selectionChangedEvent: {
    required: true,
    action: "selectionChangedEvent",
    description: "A method that is called once the set of selection changes.",
    table: {
      type: {
        summary:
          "(selectedOptions: {" +
          "        label: string;" +
          "        iri?: string;" +
          "        ontology_name?: string;" +
          "        type?: string;" +
          "    }[]) => void;",
      },
    },
    control: "text" as const,
  },
};
export const placeholderArgType: ArgTypes = {
  placeholder: {
    required: false,
    description:
      "Placeholder to show if no user input nor selection is performed.",
    table: {
      type: { summary: "string" },
    },
  },
};
export const preselectedArgType: ArgTypes = {
  preselected: {
    required: false,
    description: "Pass pre-selected values.",
    table: {
      type: { summary: "{ label?: string; iri?: string }[]" },
    },
  },
};
export const parameterArgType: ArgTypes = {
  parameter: {
    required: false,
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "-" },
    },
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
    table: {
      type: { summary: "string" },
    },
    defaultValue: { summary: "-" },
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
export const hierarchyWrapArgType = {
  hierarchyWrap: {
    required: false,
    description:
        "If true, text wraps upon exceeding width. If false, content becomes scrollable.",
    table: {
      defaultValue: {
        summary: HIERARCHY_WIDGET_DEFAULT_VALUES.WRAP,
      },
    },
  },
};
export const hasShortSelectedLabelArgType = {
  hasShortSelectedLabel: {
    required: false,
    description:
      "If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.",
    table: {
      defaultValue: { summary: "-" },
      type: { summary: "boolean" },
    },
  },
};
export const allowCustomTermsArgType: ArgTypes = {
  allowCustomTerms: {
    required: true,
    description:
      "If true, custom terms that are not found in any ontology can be added.",
    table: {
      defaultValue: { summary: "-" },
      type: { summary: "boolean" },
    },
  },
};
export const singleSelectionArgType: ArgTypes = {
  singleSelection: {
    required: true,
    description: "If true, only one concept can be selected at once.",
    table: {
      defaultValue: { summary: "-" },
      type: { summary: "boolean" },
    },
  },
};
export const singleSuggestionRowArgType: ArgTypes = {
  singleSuggestionRow: {
    required: false,
    description:
      "Display options in a compact format without descriptions - when this mode is activated, not all information is shown in order to save space.",
    table: {
      type: { summary: "boolean" },
    },
  },
};
export const ts4nfdiGatewayArgType: ArgTypes = {
  ts4nfdiGateway: {
    required: false,
    description: "Use the TS4NFDI Gateway API",
    table: {
      defaultValue: { summary: "-" },
      type: { summary: "boolean" },
    },
  },
};
export const showApiSourceArgType: ArgTypes = {
  showApiSource: {
    required: false,
    description:
      "Whether to show the api source in the result list or not. Default is true. Only when the API gateway is selected.",
    table: {
      type: { summary: "boolean" },
    },
  },
};
export const hasTitleArgType: ArgTypes = {
  hasTitle: {
    required: false,
    description: "Show title.",
    table: {
      type: { summary: "boolean" },
    },
  },
};
export const showBadgesArgType: ArgTypes = {
  showBadges: {
    required: false,
    description: "If true, badges linking to defining ontologies are shown.",
    table: {
      type: { summary: "boolean" },
    },
  },
};
export const apiQueryArgType: ArgTypes = {
  apiQuery: {
    required: true,
    description:
      "The API query whose response JSON should be displayed on click.",
    table: {
      type: { summary: "string" },
    },
  },
};
export const buttonTextArgType: ArgTypes = {
  buttonText: {
    required: true,
    description: "The text displayed on the button.",
    table: {
      type: { summary: "string" },
    },
  },
};
export const buttonSizeArgType: ArgTypes = {
  buttonSize: {
    required: false,
    description: "Size of the button.",
    table: {
      type: { summary: `s | m` },
      defaultValue: { summary: "m" },
    },
    control: {
      type: "radio",
    },
    options: ["s", "m"],
  },
};
export const initialEntriesPerPageArgType: ArgTypes = {
  initialEntriesPerPage: {
    required: false,
    description: "Initial number of entries displayed per page.",
    table: {
      defaultValue: { summary: "-" },
      type: { summary: "number" },
    },
    control: "number",
  },
};
export const pageSizeOptionsArgType: ArgTypes = {
  pageSizeOptions: {
    required: false,
    description: "Possible values for number of entries displayed per page.",
    table: {
      type: { summary: "number[]" },
      defaultValue: { summary: "[10, 25, 50, 100]" },
    },
  },
};
export const initialSortFieldArgType: ArgTypes = {
  initialSortField: {
    required: false,
    description: "Column the table is sorted by initially.",
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "config.preferredPrefix" },
    },
    control: {
      type: "radio",
    },
    options: ["config.title", "config.preferredPrefix", "config.loaded"],
  },
};
export const initialSortDirArgType: ArgTypes = {
  initialSortDir: {
    required: false,
    description: "Initial sorting direction.",
    table: {
      type: { summary: `asc | desc` },
      defaultValue: { summary: "asc" },
    },
    control: {
      type: "radio",
    },
    options: ["ascending", "descending"],
  },
};
export const targetLinkArgType: ArgTypes = {
  targetLink: {
    required: false,
    description:
      "Possible hyperlink to a corresponding terminology in a Resource Name cell. Set this if you want a hyperlink to the terminology overview of your terminology service. Leave it blank if your application isn't a terminology service.",
    table: {
      type: { summary: "string" },
    },
    control: "text",
  },
};
export const actionsArgType: ArgTypes = {
  actions: {
    required: false,
    description: "Pass actions to each item in the table.",
  },
};
export const queryArgType: ArgTypes = {
  query: {
    required: true,
    description: "The search query.",
    table: {
      type: { summary: "string" },
    },
  },
};
export const initialItemsPerPageArgType: ArgTypes = {
  initialItemsPerPage: {
    required: false,
    description: "Initial number of items displayed per page.",
    table: {
      defaultValue: { summary: "-" },
      type: { summary: "number" },
    },
    control: "number",
  },
};
export const itemsPerPageOptionsArgType: ArgTypes = {
  itemsPerPageOptions: {
    required: false,
    description: "Possible values for number of items displayed per page.",
    table: {
      type: { summary: "number[]" },
      defaultValue: { summary: "[10, 25, 50, 100]" },
    },
  },
};
export const colorFirstArgType: ArgTypes = {
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
export const colorSecondArgType: ArgTypes = {
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
export const colorArgType: ArgTypes = {
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
export const descTextArgType: ArgTypes = {
  descText: {
    required: false,
    description:
      "Set your own text manually that overwrites the text fetched from the API.",
    table: {
      type: { summary: "string" },
    },
  },
};
export const thingTypeArgType: ArgTypes = {
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
export const iriTextArgType: ArgTypes = {
  iriText: {
    required: false,
    description:
      "Set your own text manually, which will show as a clickable link instead of the IRI.",
    table: {
      type: { summary: "string" },
    },
  },
};
export const externalIconArgType: ArgTypes = {
  externalIcon: {
    required: false,
    options: [true, false],
    description: "Indicates that the target is external and needs an icon.",
    table: {
      type: { summary: "boolean" },
    },
  },
};
export const urlPrefixArgType: ArgTypes = {
  urlPrefix: {
    required: false,
    table: {
      type: { summary: `string` },
    },
    description:
      "The iri should get appended to the urlPrefix or not. When provided, the iri gets encoded and appended to the urlPrefix.",
  },
};
export const copyButtonArgType: ArgTypes = {
  copyButton: {
    required: false,
    options: ["left", "right", "none"],
    table: {
      defaultValue: { summary: "-" },
    },
    control: {
      type: "radio",
    },
    description:
      "Position the copy button on the right or left side of the iri. Leave it none for hiding it.",
  },
};
export const titleTextArgType: ArgTypes = {
  titleText: {
    required: false,
    description:
      "Set your own text manually that overwrites the text fetched from the API.",
    table: {
      type: { summary: `string` },
    },
  },
};
export const defaultValueArgType: ArgTypes = {
  defaultValue: {
    required: false,
    description: "Set the default text shown if the API fails to retrieve one.",
    control: "text",
    table: {
      type: { summary: `string` },
    },
  },
};
export const classNameArgType: ArgTypes = {
  className: {
    required: false,
    description:
      "CSS class for styling. Set no value or an empty string for " +
      "the TS4NFDI styling. Set 'none' for the basic Elastic UI styling " +
      "(recommended for apps based on Elastic UI).",
    control: "text",
    table: {
      defaultValue: { summary: "ts4nfdi-title-style" },
      type: { summary: `string` },
    },
  },
};

/*TODO: refactor these to be consistent with all widget's onNavigate functions*/
export const onNavigateToEntityArgType: ArgTypes = {
  onNavigateToEntity: {
    required: false,
    table: {
      type: { summary: "string" },
    },
    action: "onNavigateToEntityArgType",
    description:
      "This function is called every time an entity link is clicked.",
    control: { type: "radio" },
    options: ["Console message", "Navigate to EBI page"],
    mapping: {
      "Console message": (
        ontologyId: string,
        entityType?: string,
        entity?: { iri: string; label?: string },
      ) => {
        console.log(
          "Triggered onNavigateToEntity()" +
            (entityType ? ` for ${entityType || "entity"}` : "") +
            (entity && entity.label ? ` "${entity.label}"` : "") +
            (entity && entity.iri ? ` (iri="${entity.iri}")` : "") +
            ".",
        );
      },
      "Navigate to EBI page": (
        ontologyId: string,
        entityType?: string,
        entity?: { iri: string; label?: string },
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
            "_top",
          );
        } else {
          window.open(
            "https://www.ebi.ac.uk/ols4/ontologies/" + ontologyId,
            "_top",
          );
        }
      },
    },
  },
};
export const onNavigateToOntologyArgType: ArgTypes = {
  onNavigateToOntology: {
    required: false,
    table: {
      type: { summary: `string` },
    },
    action: "onNavigateToOntologyArgType",
    description:
      "This function is called every time a badge linking to an entity in its defining ontology is clicked.",
    control: { type: "radio" },
    options: ["Console message", "Navigate to EBI page"],
    mapping: {
      "Console message": (
        ontologyId: string,
        entityType?: string,
        entity?: { iri: string; label?: string },
      ) => {
        console.log(
          "Triggered onNavigateToOntology()" +
            (entityType ? ` for ${entityType || "entity"}` : "") +
            (entity && entity.label ? ` "${entity.label}"` : "") +
            (entity && entity.iri ? ` (iri="${entity.iri}")` : "") +
            ` for ontologyId "${ontologyId}".`,
        );
      },
      "Navigate to EBI page": (
        ontologyId: string,
        entityType?: string,
        entity?: { iri: string; label?: string },
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
            "_top",
          );
        } else {
          window.open(
            "https://www.ebi.ac.uk/ols4/ontologies/" + ontologyId,
            "_top",
          );
        }
      },
    },
  },
};
export const onNavigateToDisambiguateArgType: ArgTypes = {
  onNavigateToDisambiguate: {
    required: false,
    table: {
      type: { summary: `string` },
    },
    action: "onNavigateToDisambiguateArgType",
    description:
      "This function is called every time a disambiguation badge is clicked.",
    control: { type: "radio" },
    options: ["Console message", "Navigate to EBI page"],
    mapping: {
      "Console message": (
        entityType?: string,
        entity?: { iri: string; label?: string },
      ) => {
        console.log(
          "Triggered onNavigateToDisambiguate()" +
            (entityType ? ` for ${entityType || "entity"}` : "") +
            (entity && entity.label ? ` "${entity.label}"` : "") +
            (entity && entity.iri ? ` (iri="${entity.iri}")` : "") +
            ".",
        );
      },
      "Navigate to EBI page": (
        entityType?: string,
        entity?: { iri: string; label?: string },
      ) => {
        window.open(
          `https://www.ebi.ac.uk/ols4/search?q=${
            entity && entity.label ? entity.label : ""
          }&exactMatch=true&lang=en`,
          "_top",
        );
      },
    },
  },
};
export const onNavigateArgType: ArgTypes = {
  onNavigate: {
    required: false,
    table: {
      type: { summary: "string" },
    },
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
export const onNavigateToArgType: ArgTypes = {
  onNavigateTo: {
    required: false,
    description:
      "This function is called if the title is clicked. Cannot be combined with `href`. Either use this custom function `onNavigateTo` (e.g. for navigation to the source terminology service) OR directly provide a link with `href`",
    table: {
      type: { summary: "void" },
    },
    control: "text",
  },
};
export const hrefArgType: ArgTypes = {
  href: {
    required: false,
    description:
      "Creates a hyperlink. Specify the URL of the page to which the link will go.",
    table: {
      type: { summary: `string` },
    },
    control: "text",
  },
};

export const rootWalkArgType: ArgTypes = {
  rootWalk: {
    required: false,
    description:
      "When true, the graph will show the tree hierarchy for the target node in form of a graph.",
    table: {
      defaultValue: { summary: "false" },
      type: { summary: "boolean" },
    },
    control: { type: "boolean" },
  },
};

export const apiKeyArgType = {
  apiKey: {
    required: false,
    description: `
Only required for OntoPortal hierarchies.
An API key is required to access the OntoPortal API. To obtain an API key for the BioPortal REST API, see its [wiki page](https://www.bioontology.org/wiki/BioPortal_Help#Getting_an_API_key).
    `,
    table: {
      type: { summary: "string" },
    },
    control: "text" as const,
  },
};
export const apiUrlArgType = {
  apiUrl: {
    required: true,
    description: `
The API URL for the API call.
    `,
    table: {
      type: { summary: "string" },
    },
    control: "text" as const,
  },
};
export const backendArgType = {
  backendType: {
    required: false,
    description: `
The backend key from which to request \`{ols, ontoportal, skosmos}\`. Default is \`ols\`
    `,
    control: {
      type: "radio" as const,
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
        summary: String(
          HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
        ),
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
        summary: String(HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS),
      },
    },
  },
};
export const hierarchyPreferredRootsArgType = {
  hierarchyPreferredRoots: preferredRootsArgType.preferredRoots
}
export const keepExpansionStatesArgType = {
  keepExpansionStates: {
    required: false,
    description: `
If true, the expanded subtree of a node which gets closed stays expanded on re-expansion of this node.
Otherwise, if a node is closed, only the direct children will be shown on re-expansion.
    `,
    table: {
      defaultValue: {
        summary: String(HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES),
      },
    },
  },
};
export const hierarchyKeepExpansionStatesArgType = {
  hierarchyKeepExpansionStates: keepExpansionStatesArgType.keepExpansionStates
}
export const showSiblingsOnInitArgType = {
  showSiblingsOnInit: {
    required: false,
    description: `
If false, only the entity with specified iri and its ancestors are displayed in a hierarchy.
If true, the siblings of every entity mentioned above is displayed as well (NOTE: this might, but does not have to, need more queries to the API).
    `,
    table: {
      defaultValue: {
        summary: String(HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT),
      },
    },
  },
};
export const hierarchyShowSiblingsOnInitArgType = {
  hierarchyShowSiblingsOnInit:  showSiblingsOnInitArgType.showSiblingsOnInit
}
export const entityArgType = {
  entity: {
    required: false,
    description: "Input data object.",
  },
};
