import { Entity } from '../interfaces';
import { OLS3Thing } from './OLS3Thing';
import { default as Reified } from '../Reified';
import { EntityTypeName } from '../ModelTypeCheck';
export declare abstract class OLS3Entity extends OLS3Thing implements Entity {
    abstract getParents(): Reified<any>[];
    abstract getSuperEntities(): Reified<any>[];
    abstract getEquivalents(): Reified<any>[];
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
    getCrossReferences(): any[];
    getDefinedBy(): string[];
    getIsDefiningOntology(): boolean;
    getShortForm(): string;
    getDepictedBy(): Reified<string>[];
    isPredicateFromInformalVocabulary(predicate: string): boolean;
    /** Can be just found under `properties["annotation"]`.
     *  Not present in ols4/api,
     *  but in semanticlookup.zbmed.de/api.
     */
    getAnnotationPredicates(): string[];
    getAnnotationTitleById(id: string): string;
    getAnnotationById(id: string): Reified<any>[];
    getNumHierarchicalDescendants(): number;
    getNumDescendants(): number;
    getHierarchicalParentReificationAxioms(parentIri: string): any;
    abstract getType(): EntityTypeName;
}
