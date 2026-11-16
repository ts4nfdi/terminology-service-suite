import { Property } from '../interfaces';
import { OLS3Entity } from './OLS3Entity';
import { default as Reified } from '../Reified';
import { PropertyTypeName } from '../ModelTypeCheck';
export declare class OLS3Property extends OLS3Entity implements Property {
    getType(): PropertyTypeName;
    getParents(): Reified<any>[];
    getSuperEntities(): Reified<any>[];
    getEquivalents(): Reified<any>[];
    getDisjointWith(): any[];
    getInverseOf(): any[];
    getDomain(): any[];
    getRange(): any[];
    getPropertyChains(): Reified<any>[];
}
