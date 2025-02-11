import {entityTypeNames} from "../../../model/ModelTypeCheck";
import * as globals from '../../../app/globals';
import {
    onNavigateToDisambiguateArgType,
    onNavigateToEntityArgType,
    onNavigateToOntologyArgType
} from "../../../stories/storyArgs";
import {HIERARCHY_WIDGET_DEFAULT_VALUES} from "./TabWidget/HierarchyWidget/HierarchyWidget";

export const MetadataWidgetStoryArgTypes = {
    api: {
        control: {
            type: "radio",
        },
        options: [
            globals.EBI_API_ENDPOINT,
            globals.ZBMED_OLS_API_ENDPOINT,
            globals.ZBMED_API_ENDPOINT,
            globals.TIB_API_ENDPOINT,
          "http://127.0.0.1:5000/api/"
        ],
    },
    ontologyId: {
        description: "Ontology ID from where the term metadata should be taken.",
    },
    iri: {
        description: "Iri of the term you want to fetch the metadata for.",
    },
    entityType: {
        table: {
            type: { summary: `${entityTypeNames.join(" | ")}` },
        },
        control: {
            type: "radio",
        },
        options: [
            "term",
            "class",
            "property",
            "individual",
            "",
            "INVALID STRING"
        ],
    },
    parameter: {
        type: { required: false }
    },
    ...onNavigateToEntityArgType,
    ...onNavigateToOntologyArgType,
    ...onNavigateToDisambiguateArgType,
}

export const MetadataWidgetStoryArgs = {
    api: "",
    parameter: "collection=nfdi4health",
    useLegacy: true,
    ontologyId: "",
    entityType: "",
    iri: "",
    termLink: "",
    altNamesTab: true,
    hierarchyTab: true,
    crossRefTab: true,
    terminologyInfoTab: true,
    hierarchyPreferredRoots: HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
    hierarchyKeepExpansionStates: HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
    hierarchyShowSiblingsOnInit: HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
    onNavigateToEntity: "Console message",
    onNavigateToOntology: "Console message",
    onNavigateToDisambiguate: "Console message",
}

export const MetadataWidget1 = {
    storyName: "Metadata Widget",
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: true
    }
};

export const OLS3 = {
    storyName: "OLS3",
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: true
    }
};

export const OLS4V1 = {
    storyName: "OLS4 V1",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: true
    }
};

export const OLS4V2 = {
    storyName: "OLS4 V2",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: false,
        parameter: ""
    }
};

export const SelectingDefiningOntology = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://purl.obolibrary.org/obo/IAO_0000631",
        entityType: "term",
        parameter: ""
    }
};

export const DefiningOntologyUnavailable = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://identifiers.org/uniprot/Q9VAM9",
        entityType: "term",
        parameter: ""
    }
};

export const DefinedByAlsoAppearsInWidgets = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://purl.obolibrary.org/obo/HP_0000819",
        ontologyId: "efo"
    }
}

export const HiddenTabs = {
    storyName: "Hidden Tabs",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "ncit",
        iri: "http://purl.obolibrary.org/obo/NCIT_C2984",
        entityType: "term",
        useLegacy: false,
        parameter: "",
        altNamesTab: false,
        hierarchyTab: false,
        crossRefTab: false,
        terminologyInfoTab: false
    }
};

export const TermAsLink = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        iri: "http://purl.obolibrary.org/obo/HP_0000819",
        ontologyId: "efo",
        termLink: "https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819"
    }
}
