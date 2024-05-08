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
    externalIcon: {
        table: {
            type: { summary: `boolean` },
        },
        control: {
            type: "radio",
        },
        options: ["true", "false"],
        defaultValue: "true",
        description: "Whether the link should have an external icon in the end or not. Default is true when not given."
    },
    urlPrefix: {
        type: { summary: `string` },
        description: "Prefix to be added to the IRI before linking. Iri gets encoded before adding the prefix.",
    },
    copyButton: {
        table: {
            type: { summary: `boolean` },
        },
        control: {
            type: "radio",
        },
        options: ["true", "false"],
        defaultValue: "false",
        description: "Whether to show a copy button next to the link or not. Default is false when not given."
    
    },
}

export const IriWidgetStoryArgs = {
    color: "",
    iriText: "",
    iri: "",
    urlPrefix: "",
    copyButton: "false",
    externalIcon: "true",
}

export const IriWidget1 = {
    args: {
        iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    }
};