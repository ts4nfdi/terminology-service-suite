import { ThingTypeName } from '../ModelTypeCheck';
import { default as Reified } from '../Reified';
import { default as LinkedEntities } from '../ols-model/LinkedEntities';
export interface Thing {
    properties: any;
    getLabel(): string;
    getId(): string;
    getIri(): string;
    getType(): ThingTypeName;
    getTypePlural(): "ontologies" | "classes" | "terms" | "properties" | "individuals";
    getRdfTypes(): string[];
    getName(): string;
    getNames(): string[];
    getDescription(): string;
    getOntologyId(): string;
    getLabelForIri(id: string): string;
    getAnnotationPredicates(): string[];
    getAnnotationTitleById(id: string): string;
    getAnnotationById(id: string): Reified<any>[];
    getLinkedEntities(): LinkedEntities;
    getDepictionUrl(): string[];
}
