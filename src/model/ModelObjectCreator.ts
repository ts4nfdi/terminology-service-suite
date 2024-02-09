import {OLS3Ontology, OLS3Class, OLS3Property, OLS3Individual, OLS3Entity} from "./ols3-model";
import {OLS4Ontology, OLS4Class, OLS4Property, OLS4Individual} from "./ols4-model";
import {Thing} from "./interfaces";
import {ThingTypeName, isThingTypeName} from "./ModelTypeCheck";

export function createModelObject(response: any) {
    let useLegacy : boolean;
    if(response["_embedded"] !== undefined || response["numberOfTerms"] !== undefined) useLegacy = true;
    else if(response["elements"] !== undefined || response["numberOfClasses"] !== undefined) useLegacy = false;
    else throw Error("Response structure does not correlate to any of the featured response structures: \n ${response.toString()}");

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
            return useLegacy ? new OLS3Class(response["_embedded"]["terms"][0]) : new OLS4Class(response["elements"][0]);

        case "property":
            return useLegacy ? new OLS3Property(response["_embedded"]["properties"][0]) : new OLS4Property(response["elements"][0]);

        case "individual":
            return useLegacy ? new OLS3Individual(response["_embedded"]["individuals"][0]) : new OLS4Individual(response["elements"][0]);

        default:
            throw Error('Invalid entity type "' + entityType + '". Must be one of {"term", "class", "ontology", "property", "individual"}');
    }
}

