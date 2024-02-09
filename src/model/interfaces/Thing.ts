import Reified from "../Reified";
import LinkedEntities from "../LinkedEntities";

export interface Thing {
    properties: any;

    getLabel(): string | undefined;
    getId(): string;
    getIri(): string;
    getType(): "ontology" | "class" | "property" | "individual";
    getTypePlural(): "ontologies" | "classes" | "properties" | "individuals";
    getRdfTypes(): string[];
    getName(): string;
    getNames(): string[];
    getDescription(): string;
    getOntologyId(): string;
    getLabelForIri(id: string): string;
    getAnnotationPredicates(): string[];
    getAnnotationTitleById(id: string): string;
    getAnnotationById(id: string):Reified<any>[];
    getLinkedEntities(): LinkedEntities;
}