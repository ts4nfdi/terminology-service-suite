import { apiArgType, iriArgType, ontologyIdArgType, parameterArgType } from "../../../../../stories/storyArgs";

export const HierarchyWidgetDeprecatedStoryArgTypes =  {
    ...apiArgType,
    ...ontologyIdArgType,
    ...iriArgType,
    ...parameterArgType
}

export const HierarchyWidgetDeprecatedStoryArgs = {
    api: "",
    iri: "",
    ontologyId: "",
    parameter: "",
}

export const HierarchyWidgetDeprecated1 = {
    args: {
        iri: "http://purl.bioontology.org/ontology/MESH/D003704",
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "mesh",
        parameter: "nfdi4health",
    }
};