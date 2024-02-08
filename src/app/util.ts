const classTypeNames = ["class" , "term"] as const;
export type ClassTypeName = typeof classTypeNames[number];

export function isClassTypeName(type: string) : type is ClassTypeName {
    return classTypeNames.includes(type as ClassTypeName);
}

const propertyTypeNames = ["property"] as const;
export type PropertyTypeName = typeof propertyTypeNames[number];

export function isPropertyTypeName(type: string) : type is PropertyTypeName {
    return propertyTypeNames.includes(type as PropertyTypeName);
}

const individualTypeNames = ["individual"] as const;
export type IndividualTypeName = typeof individualTypeNames[number];

export function isIndividualTypeName(type: string) : type is IndividualTypeName {
    return individualTypeNames.includes(type as IndividualTypeName);
}

const ontologyTypeNames = ["ontology"] as const;
export type OntologyTypeName = typeof ontologyTypeNames[number];

export function isOntologyTypeName(type: string) : type is OntologyTypeName {
    return ontologyTypeNames.includes(type as OntologyTypeName);
}

const entityTypeNames = [...classTypeNames, ...individualTypeNames, ...propertyTypeNames] as const;
export type EntityTypeName = typeof entityTypeNames[number];

export function isEntityTypeName(type: string) : type is EntityTypeName {
    return entityTypeNames.includes(type as EntityTypeName);
}

const modelObjectTypeNames = [...entityTypeNames, ...ontologyTypeNames] as const;
export type ModelObjectTypeName = typeof modelObjectTypeNames[number];

export function isModelObjectTypeName(type: string) : type is ModelObjectTypeName {
    return modelObjectTypeNames.includes(type as ModelObjectTypeName);
}


export function asArray<T>(obj: T | T[]): T[] {
    if (Array.isArray(obj)) {
        return obj;
    } else if (obj) {
        return [obj];
    }
    return [] as T[];
}

const DEFAULT_USE_LEGACY = true;
/**
 * Returns `useLegacy` if undefined, otherwise returns default value for useLegacy
 * @param useLegacy
 */
export function getUseLegacy(useLegacy?: boolean) : boolean {
    return (useLegacy !== undefined) ? useLegacy : DEFAULT_USE_LEGACY;
}

export function capitalize(str: string) : string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function deCamelCase(str: string) : string {
    return capitalize(str).split(/(?=[A-Z])/).join(" ");
}

export function deUnderscore(str: string) : string {
    return capitalize(str).replace("_", " ");
}

/**
 * Returns trimmed api (omits /api/v2 at the end)
 * @param api
 */
export function getFrontEndApi(api: string) : string {
    return api.replace("/api/", "").replace("/api", "");
}

/**
 * Returns "/ontologies/{ontologyId}/{entities}?iri={termIri}", which can be concatenated with frontendApi to get full link
 * @param ontologyId the entities' ontologyId
 * @param termIri the entities' iri
 * @param entityTypeArray the entities' type array (from api JSON linkedEntities)
 */
export function getTermInOntologySuffix(ontologyId: string, termIri: string, entityTypeArray: string[]) : string {
    return "/ontologies/" + ontologyId + "/" + pluralizeType(entityTypeArray) + "?iri=" + termIri;
}

export function pluralizeType(typeArray: string[]) : string | undefined {
    let plural = undefined;
    for(let type of typeArray) {
        plural = {
            "class": "classes",
            "property": "properties",
            "individual": "individuals",
            "term": "classes" // just for convenience reasons
        }[type];

        if (plural !== undefined) return plural;
    }
    return undefined;
}

/**
 * Returns a random string used mainly for component keys.
 */
export function randomString() {
    return (Math.random() * Math.pow(2, 54)).toString(36);
}