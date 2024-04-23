export const DataContentWidgetStoryArgTypes = {
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
    parameter: {
        type: { required: false }
    },
}

export const DataContentWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
}

export const NFDI4HealthDataContentWidget = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        parameter: "collection=nfdi4health",
    }
};

export const SafetyDataContentWidget = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        parameter: "collection=safety",
    }
};

export const ErrorDataContentWidget = {
    args: {
        api: "ht3ps://semanticlookup.zbmed.de/api/",
        parameter: "collection=safety",
    }
};
