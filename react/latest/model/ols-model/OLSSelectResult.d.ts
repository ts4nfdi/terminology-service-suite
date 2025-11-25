import { SelectResult } from '../interfaces/SelectResult';
import { ThingTypeName } from '../ModelTypeCheck';
export declare class OLSSelectResult implements SelectResult {
    properties: any;
    constructor(properties: any);
    getDescription(): string;
    getIri(): string;
    getLabel(): string | undefined;
    getOntologyId(): string;
    getType(): ThingTypeName;
    getTypePlural(): "ontologies" | "classes" | "properties" | "individuals" | "terms";
    getShortForm(): string;
    getApiSourceName(): string;
    getApiSourceEndpoint(): string;
    getSynonyms(): [];
}
