import {EuiComboBoxProps} from "@elastic/eui/src/components/combo_box/combo_box";
import {EntityTypeName, ThingTypeName} from "../model/ModelTypeCheck";
import {EuiTextProps} from "@elastic/eui/src/components/text/text";
import {Action} from "@elastic/eui/src/components/basic_table/action_types";
import {EuiSuggestProps} from "@elastic/eui/src/components";
import {EuiCardProps} from "@elastic/eui";

type ParameterObj = {
    /**
     * Additional parameters to pass to the API.
     *
     * This parameters can be used to filter the search results. Each parameter can be combined via
     * the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
     * <i><b>,</b></i>. The following keys could be used:<br/> <br/>
     *  <table>
     *  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
     *  <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>
     *  <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>
     *  <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>
     *  <tr><td>fieldList</td><td>Specify the fields to return. Defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>
     *  <tr><td>obsoletes</td><td>Set to true to include obsolete terms in the results</td></tr>
     *  <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>
     *  <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>
     *  <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>
     *  <tr><td>rows</td><td>Set results per page</td></tr>
     *  <tr><td>start</td><td>Set the results page number</td></tr>
     *  <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. collection=nfdi4health</td></tr>
     * </table>
     */
    parameter?: string;
};

type ApiObj = {
    /**
     * Instance of the OLS API to call.
     */
    api: string;
};

type UseLegacyObj = {
    /**
     * Specifies the API version used.
     */
     useLegacy?: boolean;
};

type EntityTypeObj = {
    /**
     * Sets the type of the entity whose information you want to fetch..
     */
    entityType?: EntityTypeName;
};

export type AutocompleteWidgetProps = EuiComboBoxProps<string> & ParameterObj & ApiObj & {
    /**
     * A method that is called once the set of selection changes
     * @param selectedOptions  The selected items
     */
    selectionChangedEvent: (selectedOptions: {
        label: string;
        iri?: string;
        ontology_name?: string;
        type?: string;
    }[]) => void;
    /**
     * Pass a pre select value.
     */
    selectOption?: { label?: string; iri?: string };
    /**
     * Placeholder to show if no user input nor selection is performed.
     */
    placeholder?: string;
    /**
     * If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.
     */
    hasShortSelectedLabel?: boolean;
    /**
     * If true, custom terms can be added that are not found via API.
     */
    allowCustomTerms: boolean;
    /**
     * If true, only one concept can be selected at once.
     */
    singleSelection: boolean;
};

export type DataContentWidgetProps = ApiObj & ParameterObj & UseLegacyObj;

export type EntityInfoWidgetProps = ApiObj & ParameterObj & UseLegacyObj & {
    iri: string;
    ontologyId?: string;
    hasTitle?: boolean;
    entityType?: EntityTypeName
    showBadges?: boolean; // default is true
}

export type EntityRelationsWidgetProps = ApiObj & ParameterObj & {
    iri: string;
    ontologyId?: string;
    hasTitle?: boolean;
    entityType?: EntityTypeName;
    showBadges?: boolean;
}

export type JsonApiWidgetProps = {
    apiQuery: string;
    buttonText: string;
    buttonSize?: "s" | "m";
}

export type BreadcrumbWidgetProps = ApiObj & ParameterObj & {
    iri: string;
    ontologyId?: string;
    entityType: EntityTypeName;
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
}

export type DescriptionWidgetProps = EuiTextProps & ApiObj & ParameterObj & {
    iri?: string;
    ontologyId?: string;
    descText?: string;
    thingType: ThingTypeName;
}

export type IriWidgetProps = ParameterObj & {
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
}

export type TabWidgetProps = ApiObj & ParameterObj & {
    iri: string;
    ontologyId?: string;
    thingType: ThingTypeName;
}

export type AlternativeNameTabWidgetProps = TabWidgetProps;

export type CrossRefWidgetProps = TabWidgetProps;

export type HierarchyWidgetProps = ApiObj & {
    iri?: string;
    ontologyId: string;
}

export type TitleWidgetProps = ApiObj & ParameterObj & {
    iri?: string;
    ontologyId?: string;
    titleText?: string;
    thingType: ThingTypeName;
    default_value?: string
}

export type MetadataWidgetProps = ApiObj & ParameterObj & {
    iri: string;
    ontologyId?: string;
    entityType: EntityTypeName;
}

export type OntologyInfoWidgetProps = ApiObj & ParameterObj & UseLegacyObj & {
    ontologyId: string;
    showBadges?: boolean;
    hasTitle?: boolean;
}

export type ResourcesWidgetProps = ApiObj & ParameterObj & {
    initialEntriesPerPage?: number;
    pageSizeOptions?: number[];
    initialSortField?: string;
    initialSortDir?: "asc" | "desc";
    /**
     * Pass actions to each item in the table.
     */
    targetLink?: string;
    actions?: Array<Action<OlsResource>>;
}

export type OlsResource = {
    ontologyId: string;
    loaded: string;
    numberOfTerms: number;
    numberOfProperties: number;
    numberOfIndividuals: number;
    config: {
        title: string;
        description: string;
        preferredPrefix: string;
        allowDownload: boolean;
        fileLocation: string;
        version?: string;
        [otherFields: string]: unknown;
    };
    [otherFields: string]: unknown;
}

export type SearchBarWidgetProps = Omit<EuiSuggestProps, "suggestions" | "onChange" | "onItemClick" | "value"> & ApiObj & ParameterObj & {
    query: string;
    /**
     * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
     */
    onSearchValueChange: (suggestion: string) => void;
};

export type SearchResultsListWidgetProps = Partial<Omit<EuiCardProps, "layout">> & ApiObj & ParameterObj & {
    query: string;
    initialItemsPerPage?: number;
    itemsPerPageOptions?: number[];
    targetLink?: string;
};

export type MetadataCompactProps = Partial<Omit<EuiCardProps, "layout">> & ApiObj & ParameterObj & {
    result: any;
    targetLink?: string;
};