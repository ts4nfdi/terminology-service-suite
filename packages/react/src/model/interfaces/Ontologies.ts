import { Ontology } from "./Ontology";

export interface Ontologies {
  properties: Ontology[];

  getTotalOntologies(): number;

  getNumEntities(): number;

  getNumClasses(): number;

  getNumProperties(): number;

  getNumIndividuals(): number;
}
