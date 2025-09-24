import { EuiComboBoxProps } from "@elastic/eui/src/components/combo_box/combo_box";
import { EntityTypeName, ThingTypeName } from "../model/ModelTypeCheck";
import { EuiTextProps } from "@elastic/eui/src/components/text/text";
import { Action } from "@elastic/eui/src/components/basic_table/action_types";
import { EuiCardProps } from "@elastic/eui";
import { EuiLinkColor } from "@elastic/eui/src/components/link/link";
import { Thing } from "../model/interfaces";
import { BuildHierarchyProps, HierarchyIriProp } from "../model/interfaces/HierarchyBuilder";
import Reified from "../model/Reified";

type ParameterObj = {
  parameter?: string;
};

type TermParameterObj = {
  /**
   * Additional parameters to pass to the API.
   *
   * Each parameter can be combined via
   * the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
   * <i><b>,</b></i>. The following keys could be used:<br/> <br/>
   *  <table>
   *  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
   *  <tr><td>lang</td><td>Set the language for the response e.g. <b><i>en</i></b>, <b><i>de</i></b>, <b><i>fr</i></b>. The default value is <b><i>en</i></b>.</td></tr>
   *  <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. <b><i>collection=nfdi4health</i></b></td></tr>
   *  <tr><td>database</td><td>Restrict a search via the API Gateway to specific terminology software stacks, choose from <b><i>ols</i></b>, <b><i>ontoportal</i></b>, or <b><i>skosmos</i></b></td></tr>
   * </table>
   */
  parameter?: string;
};

type ApiObj = {
  /**
   * The API instance for the API call.
   */
  api: string;
};

type UseLegacyObj = {
  /**
   * Toggle between OLS3 (legacy) and OLS4 API versions.
   */
  useLegacy?: boolean;
};

type OptionalThingTypeObj = {
  /**
   * Sets the type of the thing whose information you want to fetch.
   */
  thingType?: ThingTypeName;
};

type OptionalEntityTypeObj = {
  /**
   * Sets the type of the entity whose information you want to fetch.
   */
  entityType?: EntityTypeName;
};

type OptionalOntologyIdObj = {
  /**
   * Select a specific ontology by id
   */
  ontologyId?: string;
};

type ForcedOntologyIdObj = {
  /**
   * Select a specific ontology by id
   */
  ontologyId: string;
};

type OptionalIriObj = {
  /**
   * Entity IRI whose information you want to fetch.
   */
  iri?: string;
};

type ForcedIriObj = {
  /**
   * Entity IRI whose information you want to fetch.
   */
  iri: string;
};

type HasTitleObj = {
  /**
   * Show title, default is true
   */
  hasTitle?: boolean;
};

type ShowBadgesObj = {
  /**
   * If true (default), entity badges linking to their defining ontologies are shown.
   */
  showBadges?: boolean;
};

type TargetLinkObj = {
  /**
   * Possible hyperlink to a corresponding terminology in a Resource Name cell. Set this if you want
   * a hyperlink to the terminology overview of your terminology service. Leave it blank if your application
   * isn't a terminology service.
   */
  targetLink?: string;
};

type ContainerWidthObj = {
  /**
   * The container width for a target widget render function. Example: EuiCard for OntologyInfoWidget
   */
  width?: number;
};

export type CssClassNameObj = {
  /**
   * CSS class for styling
   */
  className?: string;
};

type TabList = {
  /**
   * It is possible to show and hide the Alternative Names tab. **True** shows the tab. **False** hides the tab.
   */
  altNamesTab?: boolean;
  /**
   * It is possible to show and hide the Hierarchy tab. **True** shows the tab. **False** hides the tab.
   */
  hierarchyTab?: boolean;
  /**
   * It is possible to show and hide the Cross-references tab. **True** shows the tab. **False** hides the tab.
   */
  crossRefTab?: boolean;
  /**
   * It is possible to show and hide the About Terminology Info tab. **True** shows the tab. **False** hides the tab.
   */
  terminologyInfoTab?: boolean;
  /**
   * It is possible to show and hide the Graph view tab. **True** shows the tab. **False** hides the tab.
   * */
  graphViewTab?: boolean;
  /**
   * It is possible to show and hide the TermDepiction tab. **True** shows the tab. **False** hides the tab.
   * */
  termDepictionTab?: boolean;
};

export type AutocompleteWidgetSelectedOptions = {
  /**
   * The terms metadata that autocomplete selection change event returns to the client.
   */
  iri?: string;
  description?: string;
  label: string;
  ontology_name?: string;
  short_form?: string;
  source?: string;
  type?: string;
};

export type AutocompleteWidgetProps = EuiComboBoxProps<string> &
  ParameterObj &
  ApiObj &
  CssClassNameObj &
  UseLegacyObj &
  OnNavigateToOntology &
    {
    /**
     * A method that is called once the set of selection changes
     */
    selectionChangedEvent: (
      selectedOptions: AutocompleteWidgetSelectedOptions[],
    ) => void;
    /**
     * Pass pre-selected values. If `singleSelection == true`, only the first one is displayed.
     */
    preselected?: { label?: string; iri?: string }[];
    /**
     * Placeholder to show if no user input nor selection is performed.
     */
    placeholder?: string;
    /**
     * If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.
     */
    hasShortSelectedLabel?: boolean;
    /**
     * If true, custom terms that are not found in any ontology can be added.
     */
    allowCustomTerms?: boolean;
    /**
     * If true, only one concept can be selected at once.
     */
    singleSelection?: boolean;
    /**
     * Display options in a compact format without descriptions - when this mode is activated, not all information is shown in order to save space.
     */
    singleSuggestionRow?: boolean;
    /**
     * Use the TS4NFDI Gateway API
     */
    ts4nfdiGateway?: boolean;
    /**
     * Whether to show the api source in the result list or not. Default is true. Only when the API gateway is selected.
     */
    showApiSource?: boolean;
    /**
     * Initial search value to show results on first render.
     */
    initialSearchQuery?: string;
  };

export type DataContentWidgetProps = ApiObj & ParameterObj;

export type EntityInfoWidgetProps = ApiObj &
  OptionalEntityTypeObj &
  OptionalOntologyIdObj &
  ForcedIriObj &
  HasTitleObj &
  ShowBadgesObj &
  ParameterObj &
  UseLegacyObj &
  OnNavigates;

export type EntityRelationsWidgetProps = ApiObj &
  OptionalEntityTypeObj &
  OptionalOntologyIdObj &
  ForcedIriObj &
  HasTitleObj &
  ShowBadgesObj &
  ParameterObj &
  OnNavigates;

export type JsonApiWidgetProps = {
  /**
   * The API query whose response JSON should be displayed on click.
   */
  apiQuery: string;

  /**
   * The text displayed on the button.
   */
  buttonText: string;

  /**
   * Size of the button.
   */
  buttonSize?: "s" | "m";
};

export type ColorObj = {
    /**
     * Color object, can be primary, accent, success, warning, danger, ghost, text, subdued or a hex / rgb value
     */
    color?: EuiLinkColor | string;
}

export type ColorFirstObj = {
  /**
   * Color of the first badge, can be primary, accent, success, warning, danger, ghost, text, subdued or a hex / rgb value
   */
  colorFirst?: EuiLinkColor | string;
};

export type ColorSecondObj = {
  /**
   * Color of the second badge, can be primary, accent, success, warning, danger, ghost, text, subdued or a hex / rgb value
   */
  colorSecond?: EuiLinkColor | string;
};

export type BreadcrumbWidgetProps = ApiObj &
  OptionalEntityTypeObj &
  OptionalOntologyIdObj &
  ForcedIriObj &
  ParameterObj &
  UseLegacyObj &
  ColorFirstObj &
  ColorSecondObj &
  OnNavigateToOntology &
  CssClassNameObj;

export type BreadcrumbPresentationProps = OptionalOntologyIdObj &
  ColorFirstObj &
  ColorSecondObj &
  CssClassNameObj &
  OnNavigateToOntology & {
    ontologyId?: string;
    shortForm?: string;
    entity?: {
      properties: {
        ontologyId: string;
        shortForm: string;
        [key: string]: any;
      };
    };
  };

export type DescTextObj = {
  /**
   * Set your own text manually that overwrites the text fetched from the API
   */
  descText?: string;
};

export type DescriptionWidgetProps = EuiTextProps &
  ApiObj &
  OptionalThingTypeObj &
  OptionalOntologyIdObj &
  OptionalIriObj &
  ParameterObj &
  UseLegacyObj &
  DescTextObj &
  CssClassNameObj & {
    /**
     * Color of the text, names, hex or rgb
     */
    color?: EuiLinkColor | string;
  };

export type DescriptionPresentationProps = DescTextObj &
  CssClassNameObj & {
    description: string;
    isLoading?: boolean;
    error?: string | unknown;
  };

export type IriWidgetProps = ForcedIriObj &
  CssClassNameObj & {
    /**
     * Set your own text manually, which will show as a clickable link instead of the IRI.
     */
    iriText?: string;
    /**
     * Color of the text: "text", "accent", "primary", "success", "warning", "danger"
     */
    color?: EuiLinkColor;

    /**
     * Indicates that the target is external and needs an icon.
     */
    externalIcon?: boolean;

    /**
     * The iri should get appended to the urlPrefix or not. When provided, the iri gets encoded and appended to the urlPrefix.
     */
    urlPrefix?: string;

    /**
     * Position a copy to clipboard button for the iri link. 'none' or not providing the option means hiding the button.
     * left/right means showing the button on the left or right side of the iri link.
     */

    copyButton?: "right" | "left" | "none";
  };

export type TabSubwidgetsProps = ApiObj &
  OptionalEntityTypeObj &
  OptionalOntologyIdObj &
  ForcedIriObj &
  TermParameterObj &
  UseLegacyObj &
  CssClassNameObj;

export type TabWidgetProps = TabSubwidgetsProps &
  TabList &
  OnNavigates &
  CssClassNameObj & {
    hierarchyPreferredRoots?: boolean;
    hierarchyKeepExpansionStates?: boolean;
    hierarchyShowSiblingsOnInit?: boolean;
    hierarchyWrap?: boolean;
  };

export type TabPresentationProps = TabWidgetProps &
  CssClassNameObj & {
    data: Thing;
    isLoading?: boolean;
    error?: string | unknown;
  };

export type EntityOntoListWidgetProps = TabSubwidgetsProps &
  ForcedOntologyIdObj &
  OnNavigateToOntology &
  CssClassNameObj;

export type NavigateToOntologyProps = OnNavigateToOntology & OptionalEntityTypeObj & OptionalIriObj & { label?: string; };

export type OntologyBadgeProps = NavigateToOntologyProps & OptionalOntologyIdObj & CssClassNameObj & ColorObj;

export type ExpandableOntologyBadgeListProps = NavigateToOntologyProps & { ontolist: any[]; } & CssClassNameObj & ColorObj;

export type EntityOntoListPresentationProps = ExpandableOntologyBadgeListProps;
export type EntityDefinedByPresentationProps = ExpandableOntologyBadgeListProps;

export type EntityDefinedByWidgetProps = EntityOntoListWidgetProps;

export type AlternativeNameTabWidgetProps = TabSubwidgetsProps;

export type AlternativeNameTabWidgetPresentationProps = CssClassNameObj & {
  synonyms: any[];
  isLoading?: boolean;
  error?: string | unknown;
};

export type CrossRefWidgetProps = TabSubwidgetsProps;

export type CrossRefPresentationProps = CssClassNameObj & {
  crossrefs: any[];
  isLoading?: boolean;
  error?: string | unknown;
};

// Is mainly used for Hierarchy
export type EntityData = {
  iri: string;
  label?: string;
  definedBy?: string[];
  /**
   * should be present for use with hierarchy
   */
  hasChildren?: boolean;
  numDescendants?: number;
  /**
   * should be present for use with hierarchy
   */
  parents?: Reified<string>[];
};

export type OnNavigateToEntity = {
  /**
   * This function is called every time an entity link is clicked
   * @param ontologyId obtains the ontologyId of the current ontology
   * @param entityType obtains the entityType of the clicked entity
   * @param entity.iri obtains the iri of the clicked entity
   * @param entity.label obtains the label of the clicked entity
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToEntity?:
    | ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
    | string;
};

export type OnNavigateToOntology = {
  /**
   * This function is called every time an entity link is clicked
   * @param ontologyId obtains the ontologyId of the clicked badge
   * @param entityType obtains the entityType of the clicked badge
   * @param entity.iri obtains the iri of the clicked badge (can be empty)
   * @param entity.label obtains the label of the clicked badge
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToOntology?:
    | ((ontologyId: string, entityType?: string, entity?: EntityData) => void)
    | string;
};

export type OnNavigateToDisambiguate = {
  /**
   * This function is called every time a disambiguation badge is clicked
   * @param entityType obtains the entityType of the clicked badge
   * @param entity.iri obtains the iri of the clicked badge (can be empty)
   * @param entity.label obtains the label of the clicked badge
   * @param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
   * @param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
   * @param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
   * @param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)
   */
  onNavigateToDisambiguate?:
    | ((entityType: string, entity?: EntityData) => void)
    | string;
};

export type OnNavigates = OnNavigateToEntity & OnNavigateToOntology & OnNavigateToDisambiguate;

export type HierarchyWidgetProps = CssClassNameObj & {
  apiUrl: string;
  apiKey?: string;
  backendType?: string;
  hierarchyWrap?: boolean;
} & BuildHierarchyProps &
  HierarchyIriProp &
  OnNavigateToEntity &
  OnNavigateToOntology &
  ParameterObj;

export type TitleTextObj = {
  /**
   * Set your own text manually that overwrites the text fetched from the API
   */
  titleText?: string;
};

export type TitleWidgetProps = ApiObj &
  OptionalThingTypeObj &
  OptionalOntologyIdObj &
  OptionalIriObj &
  ParameterObj &
  UseLegacyObj &
  TitleTextObj &
  CssClassNameObj & {
    /**
     * Set the default text shown if the API fails to retrieve one.
     */
    defaultValue?: string;
    /**
     * If this function is defined, the title becomes a link. The function is called every time the link is clicked.
     */
    onNavigateTo?: (iri: string, ontologyId: string, thingType: string) => void;
    /**
     * A hyperlink directly passed to the component.
     */
    href?: string;
  };

export type TitlePresentationProps = TitleTextObj &
  CssClassNameObj &
  OptionalThingTypeObj &
  OptionalOntologyIdObj & {
    iri?: string | null;
    title?: string | null;
    defaultValue?: string;
    isLoading?: boolean;
    error?: string | unknown;
    onNavigateTo?: (iri: string, ontologyId: string, thingType: string) => void;
    href?: string;
  };

export type MetadataWidgetProps = TabWidgetProps &
  CssClassNameObj & {
    /**
     * The term backlink. User can use this to make the term's label a link. For example, a link to the term page on a terminology service.
     */
    termLink?: string;
  };

export type OntologyInfoWidgetProps = ApiObj &
  ForcedOntologyIdObj &
  HasTitleObj &
  ShowBadgesObj &
  ParameterObj &
  UseLegacyObj &
  ContainerWidthObj &
  OnNavigates &
  CssClassNameObj;

export type ResourcesWidgetProps = ApiObj &
  ParameterObj &
  UseLegacyObj &
  CssClassNameObj & {
    /**
     * Initial number of entries displayed per page.
     */
    initialEntriesPerPage?: number;

    /**
     * Possible values for number of entries displayed per page.
     */
    pageSizeOptions?: number[];

    /**
     * Column the table is sorted by initially.
     */
    initialSortField?: string;

    /**
     * Initial sorting direction.
     */
    initialSortDir?: "asc" | "desc";

    /**
     * Pass actions to each item in the table.
     */
    actions?: Array<Action<OlsResource>>;

    /**
     * This function is called every time an ontology link is clicked.
     */
    onNavigate?: ((ontologyId: string) => void) | string;
  };

export type OlsResource = ForcedOntologyIdObj & {
  loaded: string;
  numberOfTerms: number;
  numberOfProperties: number;
  numberOfIndividuals: number;
  config: {
    logo?: string;
    title: string;
    description: string;
    preferredPrefix: string;
    allowDownload: boolean;
    fileLocation: string;
    version?: string;
    [otherFields: string]: unknown;
  };
  [otherFields: string]: unknown;
};

export type SearchBarWidgetProps = ApiObj &
  ParameterObj & {
    /**
     * The search term to receive suggestions for.
     */
    query: string;

    /**
     * A method that is called once the set of selection changes
     * @param selectedOptions  The selected items
     */
    selectionChangedEvent: (
      selectedOptions: {
        label: string;
        iri?: string;
        ontology_name?: string;
        type?: string;
      }[],
    ) => void;
  };

export type SearchResultsListWidgetProps = Partial<
  Omit<EuiCardProps, "layout">
> &
  ApiObj &
  TargetLinkObj &
  ParameterObj &
  UseLegacyObj &
  OnNavigateToOntology &
  CssClassNameObj & {
    /**
     * The terms to search. By default, the search is performed over term labels, synonyms, descriptions, identifiers and annotation properties.
     */
    query: string;

    /**
     * Initial number of items displayed per page.
     */
    initialItemsPerPage?: number;

    /**
     * Possible values for number of items displayed per page.
     */
    itemsPerPageOptions?: number[];

    /**
     * Pass pre-selected values. If `singleSelection == true`, only the first one is displayed.
     */
    preselected?: { label?: string; iri?: string }[];
  };

export type SearchResultProps = {
  description: string[];
  id: string;
  iri: string;
  is_defining_ontology: boolean;
  label: string;
  ontology_name: string;
  ontology_prefix: string;
  short_form: string;
  type: ThingTypeName;
};

export type MetadataCompactProps = Partial<Omit<EuiCardProps, "layout">> &
  ApiObj &
  TargetLinkObj &
  ParameterObj &
  CssClassNameObj &
  OptionalEntityTypeObj &
  OnNavigateToOntology & {
    result: SearchResultProps;
    iri: string;
    ontologyId: string;
    useLegacy: boolean;
  };

export type TermDepictionWidgetProps = ApiObj &
  ForcedIriObj &
  ForcedOntologyIdObj &
  UseLegacyObj;

export type GraphViewWidgetProps = ApiObj &
  ForcedIriObj &
  ForcedOntologyIdObj &
  CssClassNameObj & {
    /**
     * When true, the graph will show the tree hierarchy for the target node in form of a graph.
     */
    rootWalk?: boolean;
    /**
     * When true, the graph shows the nodes in their hierarchy based on their position in the tree. It should be used with the rootWalk mode to true.
     */
    hierarchy?: boolean;
    /**
     * The edge label in the graph. Default is "is a". Only for sub-class predicators.
     */
    edgeLabel?: string;

    /**
     * Callback function for double clicking on a node in graph. The default behaviour is to expand the node.
     * */
    onNodeClick?: (iri: string) => void;
  };

export type OlsGraphNode = {
  /**
   * Used in the GraphView widget for rendering a graph's node
   */
  node: {
    iri?: string;
    label?: string;
  };
};

export type OlsGraphEdge = {
  /**
   * Used in the GraphView widget for rendering a graph's edge
   */
  edge: {
    uri?: string;
    label?: string;
    source?: string;
    target?: string;
  };
};
