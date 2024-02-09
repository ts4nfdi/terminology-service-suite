import { Thing, Entity, Class, Property, Individual, Ontology } from "./interfaces";

import {
    isClassTypeName, isEntityTypeName,
    isIndividualTypeName, isModelObjectTypeName,
    isOntologyTypeName,
    isPropertyTypeName
} from "../app/util";

export function isClass(thing: Thing) : thing is Class {
    return isClassTypeName(thing.getType());
}

export function isProperty(thing: Thing) : thing is Property {
    return isPropertyTypeName(thing.getType());
}

export function isIndividual(thing: Thing) : thing is Individual {
    return isIndividualTypeName(thing.getType());
}

export function isEntity(thing: Thing) : thing is Entity {
    return isEntityTypeName(thing.getType());
}

export function isOntology(thing: Thing) : thing is Ontology {
    return isOntologyTypeName(thing.getType());
}