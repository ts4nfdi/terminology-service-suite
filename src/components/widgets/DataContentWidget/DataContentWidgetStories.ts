import * as globals from '../../../app/globals';

export const DataContentWidgetStoryArgTypes = {
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
    parameter: {
        type: { required: false }
    },
}

export const DataContentWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
}

export const NFDI4HealthDataContentWidget = {
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        parameter: "collection=nfdi4health",
    }
};

export const SafetyDataContentWidget = {
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        parameter: "collection=safety",
    }
};

export const ErrorDataContentWidget = {
    args: {
        api: globals.ZBMED_API_ENDPOINT,
        parameter: "collection=safety",
    }
};
