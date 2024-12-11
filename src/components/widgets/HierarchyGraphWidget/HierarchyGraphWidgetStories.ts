import {entityTypeNames} from "../../../model/ModelTypeCheck";
import * as globals from '../../../app/globals';
import {
    onNavigateToDisambiguateArgType,
    onNavigateToEntityArgType,
    onNavigateToOntologyArgType
} from "../../../stories/storyArgs";
import {HIERARCHY_WIDGET_DEFAULT_VALUES} from "../MetadataWidget/TabWidget/HierarchyWidgetSemLookP/HierarchyWidget";

export const HierarchyGraphWidgetStoryArgTypes =  {
    api: {
        control: {
            type: "radio",
        },
        options: [
            globals.EBI_API_ENDPOINT,
            globals.ZBMED_OLS_API_ENDPOINT,
            globals.ZBMED_API_ENDPOINT,
            globals.TIB_API_ENDPOINT
        ],
    },
    ontologyId: {},
    iri: {
        description: "Iri of the entity you want to fetch the tab information for.",
    },
    parameter: {
        type: { required: false }
    },
    entityType: {
        type: { required: false },
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
            "ontology",
            "",
            "INVALID STRING"
        ],
    },
    rootWalk: {
        required: false,
        description: "When true, the graph will show the tree hierarchy for the target node in form of a graph.",
        table: {
            defaultValue: { summary: false }
        },
        type: { summary: "boolean" }
    },
    ...onNavigateToEntityArgType,
    ...onNavigateToOntologyArgType,
    ...onNavigateToDisambiguateArgType
}

export const HierarchyGraphWidgetStoryArgs = {
    api: "",
    parameter: "",
    useLegacy: true,
    ontologyId: "",
    entityType: "",
    iri: "",
    rootWalk: false,
    preferredRoots: HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
    includeObsoleteEntities: HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
    keepExpansionStates: HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
    showSiblingsOnInit: HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
    onNavigateToEntity: "Console message",
    onNavigateToOntology: "Console message",
    onNavigateToDisambiguate: "Console message",
}

export const OLS4V2Class = {
    storyName: "OLS4 V2 Class",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "efo",
        entityType: "class",
        iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
        useLegacy: false
    }
};

export const OLS4V2Ontology = {
    storyName: "OLS4 V2 Ontology",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "uberon",
        entityType: "ontology",
        useLegacy: false
    }
};

export const OLS4V2Property = {
    storyName: "OLS4 V2 Property",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "snomed",
        entityType: "property",
        iri: "http://snomed.info/id/116676008",
        useLegacy: false
    }
};

export const OLS4V2Individual = {
    storyName: "OLS4 V2 Individual",
    args: {
        api: globals.EBI_API_ENDPOINT,
        ontologyId: "envo",
        entityType: "individual",
        iri: "http://purl.obolibrary.org/obo/ENVO_01001569",
        useLegacy: false
    }
};

export const SemlookPTerm = {
    storyName: "SemLookP Term",
    args: {
        api: globals.ZBMED_OLS_API_ENDPOINT,
        ontologyId: "uberon",
        entityType: "class",
        iri: "http://purl.obolibrary.org/obo/UBERON_0013701",
        useLegacy: true
    }
};

