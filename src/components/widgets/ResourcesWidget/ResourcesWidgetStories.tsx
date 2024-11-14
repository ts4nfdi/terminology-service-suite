import {OlsResource} from "../../../app/types";
import {EuiButton, EuiButtonIcon} from "@elastic/eui";
import React from "react";
import * as globals from '../../../app/globals';
import {
    actionsArgType,
    apiArgType,
    initialEntriesPerPageArgType, initialSortDirArgType,
    initialSortFieldArgType,
    pageSizeOptionsArgType, parameterArgType, targetLinkArgType, useLegacyArgType
} from "../../../stories/storyArgs";

export const ResourcesWidgetStoryArgTypes = {
    ...apiArgType,
    ...initialEntriesPerPageArgType,
    ...pageSizeOptionsArgType,
    ...initialSortFieldArgType,
    ...initialSortDirArgType,
    ...targetLinkArgType,
    ...actionsArgType,
    ...parameterArgType,
    ...useLegacyArgType
}

export const ResourcesWidgetStoryArgs = {
    api: "",
    useLegacy: true,
    initialEntriesPerPage: 10,
    pageSizeOptions: [10, 25, 50, 100],
    initialSortField: "config.preferredPrefix",
    initialSortDir: "asc",
    targetLink: "",
    actions: [],
    parameter: "collection=nfdi4health"
}

export const ResourcesWidget1 = {
    args: {
        api: globals.ZBMED_API_ENDPOINT,
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

export const ResourcesWidgetLogos = {
    args: {
        api: globals.EBI_API_ENDPOINT,
        initialEntriesPerPage: 10,
        pageSizeOptions: [10, 25, 50, 100],
        initialSortField: "config.preferredPrefix",
        initialSortDir: "asc" as const,
        targetLink: "https://semanticlookup.zbmed.de/dev/",
        parameter: "",
        useLegacy: false,
    }
};