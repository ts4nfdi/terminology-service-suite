import Entity from "./Entity";

export default interface Class extends Entity {
    getDisjointWith(): any[];
    getHasKey(): any[];
    getSubsets(): any[];
}