import {HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES, HierarchyWidgetSemLookP} from "./HierarchyWidgetSemLookP";
import {EntityDataForHierarchy} from "../../../../../model/interfaces/Hierarchy";

export default {
    title: "HierarchyWidgetSemLookP",
    component: HierarchyWidgetSemLookP,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        apiUrl: {},
        backend_type: {
            control: {
                type: "radio"
            },
            options: [
                "ols",
                "skosmos",
                "ontoportal"
            ]
        },
        apikey: {},
        onNavigateToEntity: {
            control: {
                disabled: true
            }
        },
        onNavigateToOntology: {
            control: {
                disabled: true
            }
        },
        iri: {},
        ontologyId: {},
        entityType: {},
        includeObsoleteEntities: {},
        preferredRoots: {},
        keepExpansionStates: {},
        showSiblingsOnInit: {},
        useLegacy: {}
    },
    args: {
        apiUrl: {},
        backend_type: {},
        apikey: {},
        onNavigateToEntity: (entity: EntityDataForHierarchy) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.label}" (iri="${entity.iri}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: EntityDataForHierarchy) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.label}" (iri="${entity.iri}") and ontologyId "${pOntologyId}".`)},
        iri: "",
        ontologyId: "",
        entityType: "",
        includeObsoleteEntities: HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
        preferredRoots: HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES.PREFERRED_ROOTS,
        keepExpansionStates: HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES.KEEP_EXPANSION_STATES,
        showSiblingsOnInit: HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES.SHOW_SIBLINGS_ON_INIT,
        useLegacy: HIERARCHY_WIDGET_SEMLOOKP_DEFAULT_VALUES.USE_LEGACY
    }
};

export {
    ClassHierarchy,
    IndividualHierarchy,
    PreferredRoots,
    IncludeObsoleteEntities,
    PropertyRoots,
    IndividualRoots,
    LargeHierarchy,
    SkosHierarchy,
    OntoportalHierarchy
} from "./HierarchyWidgetSemLookPStories";