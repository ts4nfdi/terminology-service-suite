import { Property } from '../interfaces';
import { OLS4Entity } from './OLS4Entity';
import { default as Reified } from '../Reified';
export declare class OLS4Property extends OLS4Entity implements Property {
    getParents(): Reified<any>[];
    getSuperEntities(): Reified<any>[];
    getEquivalents(): Reified<any>[];
    getDisjointWith(): any[];
    getInverseOf(): any[];
    getDomain(): any[];
    getRange(): any[];
    getPropertyChains(): Reified<any>[];
}
