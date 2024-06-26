import {OlsResource} from "../../../app/types";
import {EuiButton, EuiButtonIcon} from "@elastic/eui";
import React from "react";

export const ResourcesWidgetStoryArgTypes = {
    api: {
        control: {
            type: "radio",
        },
        options: [
            "https://www.ebi.ac.uk/ols4/api/",
            "https://semanticlookup.zbmed.de/ols/api/",
            "https://semanticlookup.zbmed.de/api/",
            "https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/",
            "https://service.tib.eu/ts4tib/api/"
        ],
    },
    initialEntriesPerPage: {
        control: "number",
    },
    pageSizeOptions: {
        control: "array",
    },
    initialSortField: {
        control: {
            type: "radio",
        },
        options: ["config.title", "config.preferredPrefix", "config.loaded"],
    },
    initialSortDir: {
        table: {
            type: { summary: `ascending | descending` },
        },
        control: {
            type: "radio",
        },
        options: ["ascending", "descending"],
    },
    targetLink: {
        control: "text",
    },
    actions: {},
    parameter: {
        type: { required: false }
    },
}

export const ResourcesWidgetStoryArgs = {
    parameter: "collection=nfdi4health",
    actions: []
}


export const ResourcesWidget1 = {
    args: {
        api: "https://semanticlookup.zbmed.de/api/",
        initialEntriesPerPage: 10,
        pageSizeOptions: [10, 25, 50, 100],
        initialSortField: "config.preferredPrefix",
        initialSortDir: "asc" as const,
        targetLink: "https://semanticlookup.zbmed.de/dev/",
        parameter: "collection=nfdi4health"
    }
};
export const WithActions = {
    args: {
        ...ResourcesWidget1.args,
        actions: [
            // TODO Allow usage of react-router links
            {
                render: (item: OlsResource) => (
                    <EuiButtonIcon
                        href="" // TODO Add working link
                        iconType="search"
                        aria-label="Search"
                    />),
            },
            {
                render: (item: OlsResource) => (
                    <EuiButton href="" size="s">
                        Show terms
                    </EuiButton> // TODO Add working link
                ),
            },
            {
                render: (item: OlsResource) => (
                    <EuiButton href="" size="s">
                        Show properties
                    </EuiButton> // TODO Add working link
                ),
            },
            {
                render: (item: OlsResource) => (
                    <EuiButton href="" size="s">
                        Show individuals
                    </EuiButton> // TODO Add working link
                ),
            },
        ],
    }
};

export const WithActionsAndSafety = {
    args: {
        ...WithActions.args,
        targetLink: "https://semanticlookup.zbmed.de/safety/",
        parameter: "collection=safety",
    }
}
