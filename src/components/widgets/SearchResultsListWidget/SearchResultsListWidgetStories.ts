export const SearchResultsListWidgetStoryArgTypes = {
    api: {
        control: {
            type: "radio",
        },
        options: [
            "https://www.ebi.ac.uk/ols4/api/",
            "https://semanticlookup.zbmed.de/ols/api/",
            "https://semanticlookup.zbmed.de/api/",
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
