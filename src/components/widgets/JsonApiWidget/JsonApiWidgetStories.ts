import * as globals from '../../../app/globals';

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
        apiQuery: globals.ZBMED_OLS_API_ENDPOINT + "ontologies/atc",
        buttonText: "show JSON",
        buttonSize: "m",
    }
};
