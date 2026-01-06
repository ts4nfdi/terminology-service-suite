import { Thing } from '../interfaces';
import { default as LinkedEntities } from '../ols-model/LinkedEntities';
import { default as Reified } from '../Reified';
import { ThingTypeName } from '../ModelTypeCheck';
export declare abstract class OLS3Thing implements Thing {
    properties: any;
    constructor(properties: any);
    getLabel(): string;
    getId(): string;
    getIri(): string;
    abstract getType(): ThingTypeName;
    getTypePlural(): "ontologies" | "classes" | "terms" | "properties" | "individuals";
    getRdfTypes(): string[];
    getName(): string;
    getNames(): string[];
    getDescription(): string;
    getOntologyId(): string;
    getLabelForIri(id: string): string;
    abstract getAnnotationPredicates(): string[];
    abstract getAnnotationTitleById(id: string): string;
    abstract getAnnotationById(id: string): Reified<any>[];
    getLinkedEntities(): LinkedEntities;
    getDepictionUrl(): string[];
}
