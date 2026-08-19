import { Entity } from '.';
export interface Individual extends Entity {
    getDifferentFrom(): any[];
    getSameAs(): any[];
    getIndividualTypes(): string[];
}
