import { entityTypeNames, thingTypeNames } from "../model/ModelTypeCheck";
import { pluralizeType } from "../app/util";

export const apiArgType = {
  api: {
    required: true,
    control: {
      type: "radio",
    },
    options: [
      "https://www.ebi.ac.uk/ols4/api/",
      "https://semanticlookup.zbmed.de/ols/api/",
      "https://semanticlookup.zbmed.de/api/",
      "https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/",
      "https://service.tib.eu/ts4tib/api/",
      "https://api.terminology.tib.eu/api/",
      "https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/",
    ],
    description:
      "The API instance for the API call.<br> " +
      "**Official OLS4 API of EMBL-EBI**: [https://www.ebi.ac.uk/ols4/api/](https://www.ebi.ac.uk/ols4/api/)<br> " +
      "**Official SemLookP API (based on OLS3)**: [https://semanticlookup.zbmed.de/ols/api/](https://semanticlookup.zbmed.de/ols/api/)<br> " +
      "**Improved SemLookP API (beta version)**: [https://semanticlookup.zbmed.de/api/](https://semanticlookup.zbmed.de/api/)<br> " +
      "**OLS4 API NFDI4Health collection**: [https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/](https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/)<br> " +
      "**TIB Terminology Service (OLS3)**: [https://service.tib.eu/ts4tib/api/](https://service.tib.eu/ts4tib/api/)<br> " +
      "**TIB Terminology Service (OLS4)**: [https://api.terminology.tib.eu/api/](https://api.terminology.tib.eu/api/)<br> " +
      "**TS4NFDI API Gateway**: [https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/](https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/)<br> ",
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
export const iriArgType = {
  iri: {
    required: true,
    description: "Entity IRI whose information you want to fetch.",
    type: { summary: "string" },
  },
};
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
    markdownDescription: `Additional parameters to pass to the API.<br><br>
      This parameters can be used to filter the search results. Each parameter can be combined with the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign (<i><b>,</b></i>). The following keys can be used:<br><br>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ontology</td>
            <td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td>
          </tr>
          <tr>
            <td>type</td>
            <td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td>
          </tr>
          <tr>
            <td>slim</td>
            <td>Restrict a search to a particular set of slims by name</td>
          </tr>
          <tr>
            <td>fieldList</td>
            <td>Specify the fields to return. Defaults are <b>iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type</b></td>
          </tr>
          <tr>
            <td>obsoletes</td>
            <td>Set to true to include obsolete terms in the results</td>
          </tr>
          <tr>
            <td>local</td>
            <td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td>
          </tr>
          <tr>
            <td>childrenOf</td>
            <td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td>
          </tr>
          <tr>
            <td>allChildrenOf</td>
            <td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td>
          </tr>
          <tr>
            <td>rows</td>
            <td>Set results per page</td>
          </tr>
          <tr>
            <td>start</td>
            <td>Set the results page number</td>
          </tr>
          <tr>
            <td>lang</td>
            <td>Set the language for the response e.g. <b><i>en</i></b>, <b><i>de</i></b>, <b><i>fr</i></b>. The default value is <b><i>en</i></b></td>
          </tr>
          <tr>
            <td>collection</td>
            <td>Restrict a search to a terminology subset e.g. <b><i>collection=nfdi4health</i></b></td>
          </tr>
          <tr>
            <td>database</td>
            <td>Restrict a search via the API Gateway to specific terminology software stacks, choose from <b><i>ols</i></b>, <b><i>ontoportal</i></b>, or <b><i>skosmos</i></b></td>
          </tr>
        </tbody>
      </table>`,
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
export const ArgType = {};
