import Entity from "./Entity";

export default interface Individual extends Entity {
    getDifferentFrom(): any[];
    getSameAs(): any[];
    getIndividualTypes(): string[];
}