import {EuiLinkColor} from "@elastic/eui/src/components/link/link";
import {
    isClassTypeName,
    isIndividualTypeName,
    isOntologyTypeName,
    isPropertyTypeName,
    isThingTypeName
} from "../model/ModelTypeCheck";

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
    return capitalize(str).split(/(?=[A-Z][a-z])/).join(" ");
}

export function deUnderscore(str: string) : string {
    return capitalize(str).replace("_", " ");
}

/**
 * Returns trimmed api (omits /api/v2 at the end)
 * @param api
 */
export function getFrontEndApi(api: string) : string {
    return api.replace(/\/api\/?$/, "/");
}

/**
 * Returns "ontologies/{ontologyId}/{entityType}/{iri}", which can be concatenated with frontendApi to get full link
 * @param ontologyId the entities' ontologyId
 * @param iri the entities' iri
 * @param entityTypeArray the entities' type array (from api JSON linkedEntities)
 * @param useLegacy
 */
export function getEntityInOntologySuffix(ontologyId: string, entityTypeArray: string[] | string, iri?: string, useLegacy?: boolean) : string {
    return `ontologies/${ontologyId}/${pluralizeType(asArray(entityTypeArray), useLegacy)}` + (iri != undefined ? `/${encodeURIComponent(encodeURIComponent(iri))}` : "");
}

export function pluralizeType(typeArray: string[] | string, useLegacy?: boolean) : "terms" | "classes" | "properties" | "individuals" | "ontologies" {
    for(const type of asArray(typeArray)) {
        if(isThingTypeName(type)) {
            if(isClassTypeName(type)) return getUseLegacy(useLegacy) ? "terms" : "classes";
            if(isPropertyTypeName(type)) return "properties";
            if(isIndividualTypeName(type)) return "individuals";
            if(isOntologyTypeName(type)) return "ontologies"
        }
    }
    throw new Error("No thingType found to pluralize in provided typeArray.");
}

/**
 * Returns a random string used mainly for component keys.
 */
export function randomString() {
    return (Math.random() * Math.pow(2, 54)).toString(36);
}

export function isHexColor(str: string) : boolean {
    return /^#[0-9A-F]{6}$/i.test(str);
}

export function isRgbColor(str: string) : boolean {
    return /^(rgb|hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/i.test(str);
}

export function isEuiLinkColor(str: string) : str is EuiLinkColor {
    return ["primary", "subdued", "success", "accent", "danger", "warning", "text", "ghost"].includes(str);
}

export function getErrorMessageToDisplay(error: any, messagePlaceholder = "information"): string {
    const error_msg : string = error.message;
    if(error_msg === ("Response contains 0 elements")) {
        return "No elements found";
    }
    else return `No ${messagePlaceholder} available`;
}