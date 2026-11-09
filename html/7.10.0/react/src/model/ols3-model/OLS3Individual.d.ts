import { Individual } from '../interfaces';
import { OLS3Entity } from './OLS3Entity';
import { default as Reified } from '../Reified';
import { IndividualTypeName } from '../ModelTypeCheck';
export declare class OLS3Individual extends OLS3Entity implements Individual {
    getType(): IndividualTypeName;
    getParents(): Reified<any>[];
    getEquivalents(): never[];
    getSuperEntities(): Reified<any>[];
    getDifferentFrom(): any[];
    getSameAs(): any[];
    getIndividualTypes(): string[];
}
