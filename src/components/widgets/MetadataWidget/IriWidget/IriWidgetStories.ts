export const IriWidgetStoryArgTypes = {
    color: {
        table: {
            type: { summary: `EuiLinkColor | string` },
        },
        control: {
            type: "radio",
        },
        options: [
            "primary",
            "subdued",
            "success",
            "accent",
            "danger",
            "warning",
            "ghost",
            "#00FFFF",
            "rgb(255,0,255)",
        ],
    },
    iriText: {},
    iri: {
        description: "Object IRI that you want to link.",
    },
}

export const IriWidgetStoryArgs = {
    color: "",
    iriText: "",
    iri: ""
}

export const IriWidget1 = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    }
};