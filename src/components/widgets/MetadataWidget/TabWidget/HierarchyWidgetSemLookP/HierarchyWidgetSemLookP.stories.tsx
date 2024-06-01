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

    }
};

/*export {
    TitleWidget1,
    SelectingDefiningOntology,
    DefiningOntologyUnavailable
} from "./TitleWidgetStories";*/

export const ClassHierarchy = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
        entityType: "class",
        ontologyId: "efo",
        onNavigateToEntity: (entity: EntityDataForHierarchy) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.label}" (iri="${entity.iri}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: EntityDataForHierarchy) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.label}" (iri="${entity.iri}") and ontologyId "${pOntologyId}".`)}
    }
};

export const IndividualHierarchy = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "http://purl.obolibrary.org/obo/IAO_0000120",
        entityType: "individual",
        ontologyId: "bco",
        onNavigateToEntity: (entity: EntityDataForHierarchy) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.label}" (iri="${entity.iri}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: EntityDataForHierarchy) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.label}" (iri="${entity.iri}") and ontologyId "${pOntologyId}".`)}
    }
};

export const ClassRoots = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "",
        entityType: "class",
        ontologyId: "bco",
        onNavigateToEntity: (entity: EntityDataForHierarchy) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.label}" (iri="${entity.iri}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: EntityDataForHierarchy) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.label}" (iri="${entity.iri}") and ontologyId "${pOntologyId}".`)}
    }
};

export const PropertyRoots = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "",
        entityType: "property",
        ontologyId: "bco",
        onNavigateToEntity: (entity: EntityDataForHierarchy) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.label}" (iri="${entity.iri}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: EntityDataForHierarchy) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.label}" (iri="${entity.iri}") and ontologyId "${pOntologyId}".`)}
    }
};

export const IndividualRoots = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "",
        entityType: "individual",
        ontologyId: "bco",
        onNavigateToEntity: (entity: EntityDataForHierarchy) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.label}" (iri="${entity.iri}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: EntityDataForHierarchy) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.label}" (iri="${entity.iri}") and ontologyId "${pOntologyId}".`)}
    }
};

export const LargeHierarchy = {
    args: {
        apiUrl: "https://www.ebi.ac.uk/ols4/api",
        backend_type: "ols",
        iri: "http://purl.obolibrary.org/obo/UBERON_2001747",
        entityType: "class",
        ontologyId: "uberon",
        onNavigateToEntity: (entity: EntityDataForHierarchy) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.label}" (iri="${entity.iri}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: EntityDataForHierarchy) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.label}" (iri="${entity.iri}") and ontologyId "${pOntologyId}".`)}
    }
};

export const SkosHierarchy = {
    args: {
        apiUrl: "https://api.finto.fi/rest/v1",
        backend_type: "skosmos",
        iri: "http://www.yso.fi/onto/yso/p864",
        ontologyId: "yso",
        onNavigateToEntity: (entity: EntityDataForHierarchy) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.label}" (iri="${entity.iri}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: EntityDataForHierarchy) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.label}" (iri="${entity.iri}") and ontologyId "${pOntologyId}".`)}
    }
};