import { Entity } from '.';
import { default as Reified } from '../Reified';
export interface Property extends Entity {
    getDisjointWith(): any[];
    getInverseOf(): any[];
    getDomain(): any[];
    getRange(): any[];
    getPropertyChains(): Reified<any>[];
}
