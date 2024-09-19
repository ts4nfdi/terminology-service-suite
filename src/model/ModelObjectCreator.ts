import {OLS3Ontology, OLS3Class, OLS3Property, OLS3Individual} from "./ols3-model";
import {OLS4Ontology, OLS4Class, OLS4Property, OLS4Individual} from "./ols4-model";
import {Thing} from "./interfaces";
import {ThingTypeName, isThingTypeName} from "./ModelTypeCheck";
import {asArray} from "../app/util";

export function createModelObject(response: any) {
    let useLegacy : boolean;
    if(response["_embedded"] !== undefined || response["numberOfTerms"] !== undefined) useLegacy = true;
    else if(response["elements"] !== undefined || response["numberOfClasses"] !== undefined) useLegacy = false;
    else throw Error(`Response structure does not correlate to any of the featured response structures: \n ${JSON.stringify(response)}`);

    let entityType : ThingTypeName | undefined = undefined;
    if(useLegacy) {
        if(response["_embedded"] === undefined) {
            entityType = "ontology";
        }
        else {
            if(response["_embedded"]["terms"] !== undefined) entityType = "term";
            else if(response["_embedded"]["properties"] !== undefined) entityType = "property";
            else if(response["_embedded"]["individuals"] !== undefined) entityType = "individual";
        }
    }
    else {
        if(response["elements"] === undefined) {
            entityType = "ontology";
        }
        else {
            if(response["elements"][0] === undefined) throw Error("Empty response.");

            let types : string[] = response["elements"][0]["type"];
            types = types.filter((elem : string) => isThingTypeName(elem)); // filter not matching strings
            types = [...new Set<string>(types)]; // remove duplicates

            if(types.length === 1) entityType = types[0] as ThingTypeName;
        }
    }

    if(entityType === undefined) throw Error("Entity type could not be correctly inferred.");

    return createModelObjectWithEntityTypeWithUseLegacy(response, entityType, useLegacy);
}

function createModelObjectWithEntityTypeWithUseLegacy(response: any, entityType: string, useLegacy: boolean): Thing {
    switch (entityType) {
        case "ontology":
            return useLegacy ? new OLS3Ontology(response) : new OLS4Ontology(response);

        case "term" :
        case "class": // allow BOTH, even if it should actually be "term"
            return useLegacy ? new OLS3Class(getPreferredOntologyJSON(asArray(response["_embedded"]["terms"]), useLegacy)) : new OLS4Class(getPreferredOntologyJSON(asArray(response["elements"]), useLegacy));

        case "property":
            return useLegacy ? new OLS3Property(getPreferredOntologyJSON(asArray(response["_embedded"]["properties"]), useLegacy)) : new OLS4Property(getPreferredOntologyJSON(asArray(response["elements"]), useLegacy));

        case "individual":
            return useLegacy ? new OLS3Individual(getPreferredOntologyJSON(asArray(response["_embedded"]["individuals"]), useLegacy)) : new OLS4Individual(getPreferredOntologyJSON(asArray(response["elements"]), useLegacy));

        default:
            throw Error('Invalid entity type "' + entityType + '". Must be one of {"term", "class", "ontology", "property", "individual"}');
    }
}

/**
 * Returns the JSON of the entity in its defining ontology, or, if not available, just the first JSON in the array.
 * If ontologyId was provided in the response request, the array should only contain one element, thus the functionality is as expected as well
 * @param entityArrayResponse the sub-response of the initial query response containing just the entity array
 * @param useLegacy api version (needed because key giving information about defining ontology has different names in both versions)
 */
function getPreferredOntologyJSON(entityArrayResponse: any[], useLegacy: boolean) {
    const definingOntologyArr = asArray(entityArrayResponse).filter((entity) => useLegacy ? entity["is_defining_ontology"] : entity["isDefiningOntology"]);
    if(definingOntologyArr.length > 0) return definingOntologyArr[0];
    else if(entityArrayResponse.length > 0) return entityArrayResponse[0];
    else throw Error("Empty response.");
}