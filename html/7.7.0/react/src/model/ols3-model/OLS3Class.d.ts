import { Class } from '../interfaces';
import { OLS3Entity } from './OLS3Entity';
import { default as Reified } from '../Reified';
import { ClassTypeName } from '../ModelTypeCheck';
export declare class OLS3Class extends OLS3Entity implements Class {
    getType(): ClassTypeName;
    getTypePlural(): "classes" | "properties" | "individuals";
    getParents(): Reified<any>[];
    getSuperEntities(): Reified<any>[];
    getEquivalents(): Reified<any>[];
    getDisjointWith(): any[];
    getHasKey(): any[];
    getSubsets(): any[];
}
