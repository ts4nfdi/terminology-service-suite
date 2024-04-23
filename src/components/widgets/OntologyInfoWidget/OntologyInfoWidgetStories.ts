export const OntologyInfoWidgetStoryArgTypes = {
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
    hasTitle: {
        type: { required: false },
        table: {
            defaultValue: { summary: true }
        }
    },
    ontologyId: {
        table: {
            defaultValue: { summary: undefined }
        }
    },
    parameter: {
        type: { required: false },
        table: {
            defaultValue: { summary: undefined }
        }
    },
    showBadges: {
        type: { required: false },
        table: {
            defaultValue: { summary: true }
        }
    },
    useLegacy: {
        type: { required: false },
        table: {
            defaultValue: { summary: true }
        }
    }
}

export const OntologyInfoWidgetStoryArgs = {
    hasTitle: true,
    showBadges: true,
    useLegacy: true,
}

export const OntologyInfoWidget1 = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "atc",
    }
};

export const OntologyInfoWidget2 = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        ontologyId: "ncit"
    }
};

export const OntologyInfoWidgetOLS4API = {
    args: {
        api: "https://www.ebi.ac.uk/ols4/api/",
        useLegacy: false,
        ontologyId: "mp" // "uberon" is also good for demonstration
    }
};
