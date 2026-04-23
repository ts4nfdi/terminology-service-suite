import { Class } from '../interfaces';
import { OLS4Entity } from './OLS4Entity';
import { default as Reified } from '../Reified';
export declare class OLS4Class extends OLS4Entity implements Class {
    getParents(): Reified<any>[];
    getSuperEntities(): Reified<any>[];
    getEquivalents(): Reified<any>[];
    getDisjointWith(): any[];
    getHasKey(): any[];
    getSubsets(): any[];
}
