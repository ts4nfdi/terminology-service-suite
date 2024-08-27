import * as globals from '../../../app/globals';

export const SearchResultsListWidgetStoryArgTypes = {
    api: {
        control: {
            type: "radio",
        },
        options: [
            globals.EBI_API_ENDPOINT,
            globals.ZBMED_OLS_API_ENDPOINT,
            globals.ZBMED_API_ENDPOINT,
            globals.TIB_API_ENDPOINT
        ],
    },
    query: {},
    initialItemsPerPage: {
        control: "number",
    },
    itemsPerPageOptions: {
        control: "array",
    },
    targetLink: {},
    parameter: {
        type: { required: false }
    },
    useLegacy: {
        type: { required: false }
    }
}

export const SearchResultsListWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
    initialItemsPerPage: 10,
    itemsPerPageOptions: [10, 25, 50, 100]

}


export const SearchResultsListSafety = {
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        query: "d*",
        targetLink: "",
        parameter: "collection=safety&fieldList=description,label,iri,ontology_name,type,short_form",
    }
};

export const SearchResultsListNFDI4Health = {
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        query: "d*",
        targetLink: "",
        parameter: "collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
        preselected: [{ label: "diabetes" }],
        useLegacy: true
    }
};

export const ErrorSearchResultsList = {
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        query: "d*",
        targetLink: "",
        parameter: "collection=nfdi4health",
    }
};

export const TibNFDI4CHEM = {
    args: {
        api: globals.TIB_API_ENDPOINT,
        parameter: "classification=NFDI4CHEM&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",
        query: "assay",
        targetLink: "",
    }
};

export const TibDataPlant = {
    args: {
        api: globals.TIB_API_ENDPOINT,
        parameter: "classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form",
        query: "agriculture",
        targetLink: "",
    }
};

export const SearchResultsListOls4 = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        query: "*",
        targetLink: "/",
        parameter: "",
        useLegacy: false
    }
};
