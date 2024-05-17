import { Thing } from "./";
import Reified from "../Reified";
import {EntityTypeName} from "../ModelTypeCheck";

export interface Entity extends Thing {
    getParents(): Reified<any>[];
    getSuperEntities(): Reified<any>[];
    getEquivalents(): Reified<any>[];
    isCanonical(): boolean;
    isDeprecated(): boolean;
    getDeprecationVersion(): string;
    getDeprecationReason(): Reified<any>[];
    getDeprecationReplacement(): string;
    getRelatedFrom(): Reified<any>[];
    getDescriptionAsArray(): Reified<any>[];
    hasDirectChildren(): boolean;
    hasHierarchicalChildren(): boolean;
    hasChildren(): boolean;
    getAncestorIris(): string[];
    getHierarchicalAncestorIris(): string[];
    getSynonyms(): Reified<any>[];
    getAppearsIn(): string[];
    getDefinedBy(): string[];
    getShortForm(): string;
    getDepictedBy(): Reified<string>[];
    isPredicateFromInformalVocabulary(predicate: string): boolean;
    getNumHierarchicalDescendants(): number;
    getNumDescendants(): number;
    getHierarchicalParentReificationAxioms(parentIri: string): any;
    getIsDefiningOntology(): boolean;
    getCrossReferences(): any[];
    getType(): EntityTypeName;
    getTypePlural(): "entities" | "classes" | "properties" | "individuals";
}