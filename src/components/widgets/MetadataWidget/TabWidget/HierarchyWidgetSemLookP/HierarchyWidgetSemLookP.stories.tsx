import {HierarchyWidgetSemLookP} from "./HierarchyWidgetSemLookP";
import {EntityDataForHierarchy} from "../../../../../model/interfaces/Hierarchy";

export default {
    title: "HierarchyWidgetSemLookP",
    component: HierarchyWidgetSemLookP,
    parameters: {
        layout: "centered",
    },
    argTypes: {

    },
    args: {
        onNavigateToEntity: (entity: EntityDataForHierarchy) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.label}" (iri="${entity.iri}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: EntityDataForHierarchy) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.label}" (iri="${entity.iri}") and ontologyId "${pOntologyId}".`)},
        entityType: "",
        includeObsoleteEntities: false,
        preferredRoots: false,
        keepExpansionStates: true,
        showSiblingsOnInit: false,
        useLegacy: false,
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