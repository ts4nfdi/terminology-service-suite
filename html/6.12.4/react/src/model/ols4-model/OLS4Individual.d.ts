import { Individual } from '../interfaces';
import { OLS4Entity } from './OLS4Entity';
import { default as Reified } from '../Reified';
export declare class OLS4Individual extends OLS4Entity implements Individual {
    getParents(): Reified<any>[];
    getEquivalents(): never[];
    getSuperEntities(): Reified<any>[];
    getDifferentFrom(): any[];
    getSameAs(): any[];
    getIndividualTypes(): string[];
}
