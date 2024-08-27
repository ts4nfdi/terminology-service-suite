import * as globals from '../../../app/globals';

export const OntologyInfoWidgetStoryArgTypes = {
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
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "atc",
    }
};

export const OntologyInfoWidget2 = {
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        ontologyId: "ncit"
    }
};

export const OntologyInfoWidgetOLS4API = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        useLegacy: false,
        ontologyId: "mp" // "uberon" is also good for demonstration
    }
};
