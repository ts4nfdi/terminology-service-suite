import Reified from "../Reified";
import LinkedEntities from "../LinkedEntities";
import { ThingTypeName } from "../ModelTypeCheck";

export interface Thing {
  properties: any;

  getLabel(): string;
  getId(): string;
  getIri(): string;
  getType(): ThingTypeName;
  getTypePlural():
    | "ontologies"
    | "classes"
    | "terms"
    | "properties"
    | "individuals";
  getRdfTypes(): string[];
  getName(): string;
  getNames(): string[];
  getDescription(): string;
  getOntologyId(): string;
  getLabelForIri(id: string): string;
  getAnnotationPredicates(): string[];
  getAnnotationTitleById(id: string): string;
  getAnnotationById(id: string): Reified<any>[];
  getLinkedEntities(): LinkedEntities;
  getDepictionUrl(): string;
}
