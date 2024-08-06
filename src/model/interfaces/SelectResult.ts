import { ThingTypeName } from "../ModelTypeCheck";

export interface SelectResult {
  properties: any;

  getLabel(): string | undefined;
  getIri(): string;
  getType(): ThingTypeName;
  getTypePlural(): "ontologies" | "classes" | "terms" | "properties" | "individuals";
  getDescription(): [];
  getOntologyId(): string;
  getShortForm(): string;
}