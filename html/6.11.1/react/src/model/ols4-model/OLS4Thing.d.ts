import { Thing } from '../interfaces';
import { default as LinkedEntities } from '../ols-model/LinkedEntities';
import { default as Reified } from '../Reified';
import { ThingTypeName } from '../ModelTypeCheck';
export declare abstract class OLS4Thing implements Thing {
    properties: any;
    constructor(properties: any);
    getLabel(): string;
    getId(): string;
    getIri(): string;
    getType(): ThingTypeName;
    getTypePlural(): "ontologies" | "classes" | "properties" | "individuals" | "terms";
    getRdfTypes(): string[];
    getName(): string;
    getNames(): string[];
    getDescription(): string;
    getOntologyId(): string;
    getLabelForIri(id: string): string;
    abstract getAnnotationPredicates(): string[];
    getAnnotationById(id: string): Reified<any>[];
    getAnnotationTitleById(id: string): string;
    getLinkedEntities(): LinkedEntities;
    getDepictionUrl(): string[];
}
