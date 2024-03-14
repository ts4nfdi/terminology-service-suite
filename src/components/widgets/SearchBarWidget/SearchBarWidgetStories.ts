export const SearchBarWidgetStoryArgTypes = {
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
    onSearchValueChange: {
        action: "onSearchValueChange"
    },
    parameter: {}
}

export const SearchBarWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
    onSearchValueChange: () => {return;}
}

export const SearchBarWidget1 = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        query: "diab",
    }
};