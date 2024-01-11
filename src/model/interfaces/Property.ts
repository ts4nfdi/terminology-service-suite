import Entity from "./Entity";
import Reified from "../Reified";

export default interface Property extends Entity {
    getDisjointWith(): any[];
    getInverseOf(): any[];
    getDomain(): any[];
    getRange(): any[];
    getPropertyChains(): Reified<any>[];
}