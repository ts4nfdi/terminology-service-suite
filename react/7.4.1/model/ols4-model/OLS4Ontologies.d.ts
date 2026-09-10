import { Ontologies } from '../interfaces';
import { OLS4Ontology } from './OLS4Ontology';
export declare class OLS4Ontologies implements Ontologies {
    properties: OLS4Ontology[];
    constructor(properties: OLS4Ontology[]);
    getTotalOntologies(): number;
    getNumEntities(): number;
    getNumClasses(): number;
    getNumProperties(): number;
    getNumIndividuals(): number;
}
