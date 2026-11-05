import { Ontologies } from '../interfaces';
import { OLS3Ontology } from './OLS3Ontology';
export declare class OLS3Ontologies implements Ontologies {
    properties: OLS3Ontology[];
    constructor(properties: OLS3Ontology[]);
    getTotalOntologies(): number;
    getNumEntities(): number;
    getNumClasses(): number;
    getNumProperties(): number;
    getNumIndividuals(): number;
}
