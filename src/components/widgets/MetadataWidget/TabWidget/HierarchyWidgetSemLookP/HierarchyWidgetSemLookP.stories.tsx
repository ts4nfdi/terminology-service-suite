import {HierarchyWidgetSemLookP} from "./HierarchyWidgetSemLookP";
import {Entity} from "../../../../../model/interfaces";

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
        iri: "http://www.ebi.ac.uk/efo/EFO_0000400",
        entityType: "class",
        ontologyId: "efo",
        onNavigateToEntity: (entity: Entity) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.getLabel()}" (iri="${entity.getIri()}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: Entity) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.getLabel()}" (iri="${entity.getIri()}") and ontologyId "${pOntologyId}".`)}
    }
};

export const IndividualHierarchy = {
    args: {
        iri: "http://purl.obolibrary.org/obo/IAO_0000120",
        entityType: "individual",
        ontologyId: "bco",
        onNavigateToEntity: (entity: Entity) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.getLabel()}" (iri="${entity.getIri()}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: Entity) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.getLabel()}" (iri="${entity.getIri()}") and ontologyId "${pOntologyId}".`)}
    }
};

export const ClassRoots = {
    args: {
        iri: "",
        entityType: "class",
        ontologyId: "bco",
        onNavigateToEntity: (entity: Entity) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.getLabel()}" (iri="${entity.getIri()}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: Entity) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.getLabel()}" (iri="${entity.getIri()}") and ontologyId "${pOntologyId}".`)}
    }
};

export const PropertyRoots = {
    args: {
        iri: "",
        entityType: "property",
        ontologyId: "bco",
        onNavigateToEntity: (entity: Entity) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.getLabel()}" (iri="${entity.getIri()}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: Entity) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.getLabel()}" (iri="${entity.getIri()}") and ontologyId "${pOntologyId}".`)}
    }
};

export const IndividualRoots = {
    args: {
        iri: "",
        entityType: "individual",
        ontologyId: "bco",
        onNavigateToEntity: (entity: Entity) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.getLabel()}" (iri="${entity.getIri()}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: Entity) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.getLabel()}" (iri="${entity.getIri()}") and ontologyId "${pOntologyId}".`)}
    }
};

export const LargeHierarchy = {
    args: {
        iri: "http://purl.obolibrary.org/obo/UBERON_2001747",
        entityType: "class",
        ontologyId: "uberon",
        onNavigateToEntity: (entity: Entity) => {console.log(`Triggered onNavigateToEntity() for entity "${entity.getLabel()}" (iri="${entity.getIri()}").`)},
        onNavigateToOntology: (pOntologyId: string, entity: Entity) => {console.log(`Trigerred onNavigateToOntology() for entity "${entity.getLabel()}" (iri="${entity.getIri()}") and ontologyId "${pOntologyId}".`)}
    }
};
