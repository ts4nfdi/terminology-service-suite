import { Entity } from '.';
export interface Class extends Entity {
    getDisjointWith(): any[];
    getHasKey(): any[];
    getSubsets(): any[];
}
