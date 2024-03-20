import { Thing } from "./";
import Reified from "../Reified";

export interface Entity extends Thing {
    getParents(): Reified<any>[];
    getSuperEntities(): Reified<any>[];
    getEquivalents(): Reified<any>[];
    isCanonical(): boolean;
    isDeprecated(): boolean;
    getCrossReferences(): any[];
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
    getCrossReferences(): Reified<any>[];
    getTypePlural(): "entities" | "classes" | "properties" | "individuals";
}