export * from "./MetadataWidget";
export * from "./AutocompleteWidget";
export * from "./JsonApiWidget";
export * from "./DataContentWidget";
export * from "./ResourcesWidget";
export * from "./OntologyInfoWidget";
export * from "./SearchBarWidget";
export * from "./SearchResultsListWidget";
export * from "./EntityInfoWidget";

export function getErrorMessageToDisplay(error: any): string {
    const error_msg : string = error.message;
    if(error_msg === ("Response contains 0 elements")) {
        return "No elements found. Are all parameters set correctly?";
    }
    else return "Error fetching the requested resource. Are all parameters set correctly?";
}