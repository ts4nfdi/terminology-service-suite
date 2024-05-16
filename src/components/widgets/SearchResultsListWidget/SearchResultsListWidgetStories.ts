export const SearchResultsListWidgetStoryArgTypes = {
    api: {
        control: {
            type: "radio",
        },
        options: [
            "https://www.ebi.ac.uk/ols4/api/",
            "https://semanticlookup.zbmed.de/ols/api/",
            "https://semanticlookup.zbmed.de/api/",
            "https://service.tib.eu/ts4tib/api/",
            "https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/",
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
}

export const SearchResultsListWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
    initialItemsPerPage: 10,
    itemsPerPageOptions: [10, 25, 50, 100]

}


export const CollectionSafety = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        query: "d*",
        targetLink: "",
        parameter: "collection=safety",
    }
};

export const CollectionNFDI4HealthOLS3 = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        query: "d*",
        targetLink: "/",
        parameter: "collection=nfdi4health",
        preselected: [{ label: "diabetes" }],
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
        parameter: "collection=NFDI4CHEM",
        query: "assay",
        targetLink: "",
    }
};

export const TibDataPlant = {
    args: {
        api: "https://service.tib.eu/ts4tib/api/",
        parameter: "collection=DataPLANT",
        query: "agriculture",
        targetLink: "",
    }
};

export const CollectionNFDI4HealthOLS4 = {
    args: {
        api: "https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api",
        parameter: "",
        query: "diabetes",
        targetLink: "/",
        useLegacy: false
    }
};

export const EBIOLS4 = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        parameter: "",
        query: "diabetes",
        targetLink: "/",
        useLegacy: false
    }
};