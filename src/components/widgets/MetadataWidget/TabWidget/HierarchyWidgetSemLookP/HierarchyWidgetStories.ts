import {EntityDataForHierarchy} from "../../../../../app/types";
import {HIERARCHY_WIDGET_DEFAULT_VALUES} from "./HierarchyWidget";
import {entityTypeNames} from "../../../../../model/ModelTypeCheck";
import * as globals from '../../../../../app/globals';

export const HierarchyWidgetStoryArgTypes = {
    apiUrl: {},
    backendType: {
        control: {
            type: "radio"
        },
        options: [
            "ols",
            "skosmos",
            "ontoportal"
        ],
        table: {
            defaultValue: {
                summary: "ols"
            }
        }
    },
    apiKey: {
        table: {
            defaultValue: {
                summary: undefined
            }
        }
    },
    onNavigateToEntity: {
        control: {
            disabled: true
        },
        table: {
            defaultValue: {
                summary: undefined
            }
        }
    },
    onNavigateToOntology: {
        control: {
            disabled: true
        },
        table: {
            defaultValue: {
                summary: undefined
            }
        }
    },
    iri: {
        table: {
            defaultValue: {
                summary: undefined
            }
        }
    },
    ontologyId: {
        table: {
            defaultValue: {
                summary: undefined
            }
        }
    },
    entityType: {
        table: {
            type: { summary: `${entityTypeNames.join(" | ")}` },
            defaultValue: {
                summary: undefined
            }
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
            undefined,
            "INVALID STRING"
        ],
    },
    includeObsoleteEntities: {
        table: {
            defaultValue: {
                summary: HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES
            }
        }
    },
    preferredRoots: {
        table: {
            defaultValue: {
                summary: HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS
            }
        }
    },
    keepExpansionStates: {
        table: {
            defaultValue: {
                summary: HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES
            }
        }
    },
    showSiblingsOnInit: {
        table: {
            defaultValue: {
                summary: HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT
            }
        }
    },
    useLegacy: {
        table: {
            defaultValue: {
                summary: HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY
            }
        }
    }
}

export const HierarchyWidgetStoryArgs = {
    apiUrl: {},
    backendType: {},
    apiKey: {},
    onNavigateToEntity: (ontologyId: string, entityType: string, entity: EntityDataForHierarchy) => {console.log(`Triggered onNavigateToEntity() for ${entityType || "entity"} "${entity.label}" (iri="${entity.iri}").`)},
        onNavigateToOntology: (ontologyId: string, entityType: string, entity: EntityDataForHierarchy) => {console.log(`Trigerred onNavigateToOntology() for ${entityType || "entity"} "${entity.label}" (iri="${entity.iri}") and ontologyId "${ontologyId}".`)},
    iri: "",
    ontologyId: "",
    entityType: "",
    includeObsoleteEntities: HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
    preferredRoots: HIERARCHY_WIDGET_DEFAULT_VALUES.PREFERRED_ROOTS,
    keepExpansionStates: HIERARCHY_WIDGET_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
    showSiblingsOnInit: HIERARCHY_WIDGET_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
    useLegacy: HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY
}

export const ClassHierarchy = {
    args: {
        apiUrl: globals.EBI_API_ENDPOINT,
        backendType: "ols",
        iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
        entityType: "class",
        ontologyId: "efo",
    }
};

export const IndividualHierarchy = {
    args: {
        apiUrl: globals.EBI_API_ENDPOINT,
        backendType: "ols",
        iri: "http://purl.obolibrary.org/obo/IAO_0000120",
        entityType: "individual",
        ontologyId: "bco",
    }
};

export const PreferredRoots = {
    args: {
        apiUrl: globals.EBI_API_ENDPOINT,
        backendType: "ols",
        iri: "",
        entityType: "class",
        ontologyId: "uberon",
        preferredRoots: true
    }
};

export const IncludeObsoleteEntities = {
    args: {
        apiUrl: globals.EBI_API_ENDPOINT,
        backendType: "ols",
        iri: "",
        entityType: "class",
        ontologyId: "uberon",
        includeObsoleteEntities: true
    }
};

export const PropertyRoots = {
    args: {
        apiUrl: globals.EBI_API_ENDPOINT,
        backendType: "ols",
        iri: "",
        entityType: "property",
        ontologyId: "bco",
    }
};

export const IndividualRoots = {
    args: {
        apiUrl: globals.EBI_API_ENDPOINT,
        backendType: "ols",
        iri: "",
        entityType: "individual",
        ontologyId: "bco",
    }
};

export const LargeHierarchy = {
    args: {
        apiUrl: globals.EBI_API_ENDPOINT,
        backendType: "ols",
        iri: "http://purl.obolibrary.org/obo/UBERON_2001747",
        entityType: "class",
        ontologyId: "uberon",
    }
};

export const SkosHierarchy = {
    args: {
        apiUrl: globals.FINTO_V1_API_ENDPOINT,
        backendType: "skosmos",
        iri: "http://www.yso.fi/onto/yso/p864",
        ontologyId: "yso",
    }
};

export const OntoportalHierarchy = {
    args: {
        apiUrl: "https://data.biodivportal.gfbio.org",
        backendType: "ontoportal",
        iri: "http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",
        ontologyId: "IOC",
        entityType: "class",
        apiKey: ""
    }
}