export const JsonApiWidgetStoryArgTypes = {
    apiQuery: {},
    buttonText: {},
    buttonSize: {
        table: {
            type: { summary: `s | m` },
        },
        control: {
            type: "radio",
        },
        options: [
            "s",
            "m",
        ],
    },
}

export const JsonApiWidgetStoryArgs = {

}

export const JsonApiWidget1 = {
    args: {
        apiQuery: "https://semanticlookup.zbmed.de/ols/api/ontologies/atc",
        buttonText: "show JSON",
        buttonSize: "m",
    }
};
