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

/**
 * Returns {@link type}. If {@link type} equals 'term', 'class' gets returned instead.
 */
export function getEntityTypeName(type: string) : string {
    return type === "term" ? "class" : type;
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

export function pluralizeType(typeArray: string[]) : "classes" | "properties" | "individuals" | undefined {
    for(const type of typeArray) {
        switch (type) {
            case "class": case "term":
                return "classes";
            case "property":
                return "properties";
            case "individuals":
                return "individuals";
        }
    }
    return undefined;
}

/**
 * Returns a random string used mainly for component keys.
 */
export function randomString() {
    return (Math.random() * Math.pow(2, 54)).toString(36);
}