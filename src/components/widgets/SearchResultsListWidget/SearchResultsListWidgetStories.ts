import {
    apiArgType,
    initialItemsPerPageArgType,
    itemsPerPageOptionsArgType, parameterArgType,
    preselectedArgType,
    queryArgType, targetLinkArgType, useLegacyArgType
} from "../../../stories/storyArgs";

export const SearchResultsListWidgetStoryArgTypes = {
    ...apiArgType,
    ...queryArgType,
    ...preselectedArgType,
    ...initialItemsPerPageArgType,
    ...itemsPerPageOptionsArgType,
    ...targetLinkArgType,
    ...useLegacyArgType,
    ...parameterArgType
}

export const SearchResultsListWidgetStoryArgs = {
    api: "",
    useLegacy: true,
    query: "",
    initialItemsPerPage: 10,
    itemsPerPageOptions: [10, 25, 50, 100],
    preselected: [],
    targetLink: "",
    parameter: "collection=nfdi4health",

}


export const SearchResultsListSafety = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        query: "d*",
        targetLink: "",
        parameter: "collection=safety&fieldList=description,label,iri,ontology_name,type,short_form",
    }
};

export const SearchResultsListNFDI4Health = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        query: "d*",
        targetLink: "",
        parameter: "collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
        preselected: [{ label: "diabetes" }],
        useLegacy: true
    }
};

export const ErrorSearchResultsList = {
    args: {
        api: "ht3ps://semanticlookup.zbmed.de/api/",
        query: "d*",
        targetLink: "",
        parameter: "collection=nfdi4health",
    }
};

export const TibNFDI4CHEM = {
    args: {
        api: "https://service.tib.eu/ts4tib/api/",
        parameter: "classification=NFDI4CHEM&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",
        query: "assay",
        targetLink: "",
    }
};

export const TibDataPlant = {
    args: {
        api: "https://service.tib.eu/ts4tib/api/",
        parameter: "classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",
        query: "agriculture",
        targetLink: "",
    }
};

export const SearchResultsListOls4 = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        query: "*",
        targetLink: "/",
        parameter: "",
        useLegacy: false
    }
};
