export declare const SearchResultsListWidgetStoryArgTypes: {
    [x: string]: import('storybook/internal/csf').InputType;
};
export declare const SearchResultsListWidgetStoryArgs: {
    api: string;
    useLegacy: boolean;
    query: string;
    initialItemsPerPage: number;
    itemsPerPageOptions: number[];
    preselected: never[];
    targetLink: string;
    parameter: string;
    onNavigateToOntology: string;
    OnNavigateToSearchResult: string;
};
export declare const DefaultArgs: {
    api: string;
    query: string;
    targetLink: string;
    parameter: string;
    useLegacy: boolean;
};
export declare const ApiGatewayArgs: {
    api: string;
    query: string;
    targetLink: string;
    useLegacy: boolean;
};
export declare const ApiGatewayWithCollectionArgs: {
    api: string;
    query: string;
    targetLink: string;
    parameter: string;
    useLegacy: boolean;
};
export declare const NavigateToSearchResultArgs: {
    OnNavigateToSearchResult: string;
    api: string;
    query: string;
    targetLink: string;
    parameter: string;
    useLegacy: boolean;
};
export declare const NFDI4HealthArgs: {
    api: string;
    query: string;
    targetLink: string;
    parameter: string;
    preselected: {
        label: string;
    }[];
    useLegacy: boolean;
};
export declare const TibNFDI4CHEMArgs: {
    api: string;
    parameter: string;
    query: string;
    targetLink: string;
};
export declare const TibDataPlantArgs: {
    api: string;
    parameter: string;
    query: string;
    targetLink: string;
};
export declare const OpenEnergyPlatformArgs: {
    api: string;
    query: string;
    targetLink: string;
    parameter: string;
    useLegacy: boolean;
};
export declare const commonSearchResultsListWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
