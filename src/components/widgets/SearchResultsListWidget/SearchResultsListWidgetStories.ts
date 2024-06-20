export const SearchResultsListWidgetStoryArgTypes = {
    api: {
        control: {
            type: "radio",
        },
        options: [
            "https://www.ebi.ac.uk/ols4/api/",
            "https://semanticlookup.zbmed.de/ols/api/",
            "https://semanticlookup.zbmed.de/api/",
            "https://service.tib.eu/ts4tib/api/"
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
        api: "https://semanticlookup.zbmed.de/api/",
        query: "d*",
        targetLink: "",
        parameter: "collection=safety",
    }
};

export const SearchResultsListNFDI4Health = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        query: "d*",
        targetLink: "",
        parameter: "collection=nfdi4health",
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
        parameter: "classification=NFDI4CHEM&schema=collection",
        query: "assay",
        targetLink: "",
    }
};

export const TibDataPlant = {
    args: {
        api: "https://service.tib.eu/ts4tib/api/",
        parameter: "classification=DataPLANT&schema=collection",
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