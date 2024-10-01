import {EuiLinkColor} from "@elastic/eui/src/components/link/link";
import {
    isClassTypeName,
    isIndividualTypeName,
    isOntologyTypeName,
    isPropertyTypeName,
    isThingTypeName, ThingTypeName
} from "../model/ModelTypeCheck";
import {StoryContext} from "@storybook/react";

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

export function singularizeType(typeArray: string[] | string, useLegacy?: boolean): ThingTypeName {
    for(const type of asArray(typeArray)) {
        switch (type) {
            case "terms": case "classes":
                return getUseLegacy(useLegacy) ? "term" : "class";
            case "properties": case "dataProperties": case "objectProperties": case "annotationProperties":
                return "property";
            case "individuals":
                return "individual";
            case "ontologies":
                return "ontology"
        }
    }
    throw new Error("No thingType found to singularize in provided typeArray.");
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

export function inferTypeFromTypeArray(types: string[]) {
    let res = types.filter((elem : string) => isThingTypeName(elem)); // filter not matching strings
    res = res.map(item => item === "annotationProperty" || item === "objectProperty" || item === "dataProperty" ? "property" : item);
    res = [...new Set<string>(res)]; // remove duplicates

    if(res.length === 1) return res[0] as ThingTypeName;
    else if(res.length === 0) throw Error("Entity type could not be correctly inferred: No suitable type found in array.");
    else throw Error(`Entity type could not be correctly inferred: Multiple types found in array, no definite choice possible - ${JSON.stringify(res)}`);
}

/*TODO: source is displayed in a weird font (maybe some string error with replaceValues?)*/
export function manuallyEmbedOnNavigate(code: string, storyContext: StoryContext) {
    switch (storyContext.args["onNavigateToEntity"]) {
        case "Console message":
            code = code.replace(
                "onNavigateToEntity={() => {}}",
                "onNavigateToEntity={\n    (ontologyId: string, entityType?: string, entity?: { iri: string, label?: string }) => {\n      console.log(`Triggered onNavigateToEntity()${entityType ? ` for ${entityType || \"entity\"}` : \"\"}${entity && entity.label ? ` \"${entity.label}\"` : \"\"}${entity && entity.iri ? ` (iri=\"${entity.iri}\")` : \"\"}.`);\n    }\n  }"
            );
            break;
        case "Navigate to EBI page":
            code = code.replace(
                "onNavigateToEntity={() => {}}",
                "onNavigateToEntity={\n    (ontologyId: string, entityType?: string, entity?: { iri: string, label?: string }) => {\n      if(entity && entity.iri && entityType) {\n        window.open(`https://www.ebi.ac.uk/ols4/ontologies/${ontologyId}/${pluralizeType(entityType, false)}/${encodeURIComponent(encodeURIComponent(entity.iri))}`, \"_top\");\n      }\n      else {\n        window.open(`https://www.ebi.ac.uk/ols4/ontologies/${ontologyId}`, \"_top\");\n      }\n    }\n  }"
            );
    }
    switch (storyContext.args["onNavigateToOntology"]) {
        case "Console message":
            code = code.replace(
                "onNavigateToOntology={() => {}}",
                "onNavigateToOntology={\n    (ontologyId: string, entityType?: string, entity?: { iri: string, label?: string }) => {\n      console.log(`Triggered onNavigateToOntology()${entityType ? ` for ${entityType || \"entity\"}` : \"\"}${entity && entity.label ? ` \"${entity.label}\"` : \"\"}${entity && entity.iri ? ` (iri=\"${entity.iri}\")` : \"\"} for ontologyId \"${ontologyId}\".`);\n    }\n  }"
            );
            break;
        case "Navigate to EBI page":
            code = code.replace(
                "onNavigateToOntology={() => {}}",
                "onNavigateToOntology={\n    (ontologyId: string, entityType?: string, entity?: { iri: string, label?: string }) => {\n      if(entity && entity.iri && entityType) {\n        window.open(`https://www.ebi.ac.uk/ols4/ontologies/${ontologyId}/${pluralizeType(entityType, false)}/${encodeURIComponent(encodeURIComponent(entity.iri))}`, \"_top\");\n      }\n      else {\n        window.open(`https://www.ebi.ac.uk/ols4/ontologies/${ontologyId}`, \"_top\");\n      }\n    }\n  }"
            );
    }
    switch (storyContext.args["onNavigateToDisambiguate"]) {
        case "Console message":
            code = code.replace(
                "onNavigateToDisambiguate={() => {}}",
                "onNavigateToDisambiguate={\n    (entityType?: string, entity?: { iri: string, label?: string }) => {\n       console.log(`Triggered onNavigateToDisambiguate()${entityType ? ` for ${entityType || \"entity\"}` : \"\"}${entity && entity.label ? ` \"${entity.label}\"` : \"\"}${entity && entity.iri ? ` (iri=\"${entity.iri}\")` : \"\"}.`);\n    }\n  }"
            );
            break;
        case "Navigate to EBI page":
            code = code.replace(
                "onNavigateToDisambiguate={() => {}}",
                "onNavigateToDisambiguate={\n    (entityType?: string, entity?: { iri: string, label?: string }) => {\n       window.open(`https://www.ebi.ac.uk/ols4/search?q=${entity && entity.label ? entity.label : \"\"}&exactMatch=true&lang=en`, \"_top\");\n    }\n  }"
            )
    }

    return code;
}