import {
  Thing,
  Entity,
  Class,
  Property,
  Individual,
  Ontology,
} from "./interfaces";

// READONLY arrays containing the strings defining a Model Object Type
export const classTypeNames = ["class", "term"] as const;
export const propertyTypeNames = [
  "property",
  "annotationProperty",
  "dataProperty",
  "objectProperty",
] as const;
export const individualTypeNames = ["individual"] as const;
export const ontologyTypeNames = ["ontology"] as const;
export const entityTypeNames = [
  ...classTypeNames,
  ...individualTypeNames,
  ...propertyTypeNames,
] as const;
export const thingTypeNames = [
  ...entityTypeNames,
  ...ontologyTypeNames,
] as const;

// Type-creation out of READONLY arrays
export type ClassTypeName = (typeof classTypeNames)[number];
export type PropertyTypeName = (typeof propertyTypeNames)[number];
export type IndividualTypeName = (typeof individualTypeNames)[number];
export type OntologyTypeName = (typeof ontologyTypeNames)[number];
export type EntityTypeName = (typeof entityTypeNames)[number];
export type ThingTypeName = (typeof thingTypeNames)[number];

// Functions checking string against type names, returning string as type name if check passes
export function isClassTypeName(type: string): type is ClassTypeName {
  return classTypeNames.includes(type as ClassTypeName);
}
export function isPropertyTypeName(type: string): type is PropertyTypeName {
  return propertyTypeNames.includes(type as PropertyTypeName);
}
export function isIndividualTypeName(type: string): type is IndividualTypeName {
  return individualTypeNames.includes(type as IndividualTypeName);
}
export function isOntologyTypeName(type: string): type is OntologyTypeName {
  return ontologyTypeNames.includes(type as OntologyTypeName);
}
export function isEntityTypeName(type: string): type is EntityTypeName {
  return entityTypeNames.includes(type as EntityTypeName);
}
export function isThingTypeName(type: string): type is ThingTypeName {
  return thingTypeNames.includes(type as ThingTypeName);
}

// Functions checking Thing objects against specific type (via checking getType() against type names), returning object as specific type if check passes
export function isClass(thing: Thing): thing is Class {
  return isClassTypeName(thing.getType());
}
export function isProperty(thing: Thing): thing is Property {
  return isPropertyTypeName(thing.getType());
}
export function isIndividual(thing: Thing): thing is Individual {
  return isIndividualTypeName(thing.getType());
}
export function isEntity(thing: Thing): thing is Entity {
  return isEntityTypeName(thing.getType());
}
export function isOntology(thing: Thing): thing is Ontology {
  return isOntologyTypeName(thing.getType());
}
