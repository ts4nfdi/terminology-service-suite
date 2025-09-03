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
};
export declare const SearchResultsListSafetyArgs: {
    api: string;
    query: string;
    targetLink: string;
    parameter: string;
};
export declare const SearchResultsListNFDI4HealthArgs: {
    api: string;
    query: string;
    targetLink: string;
    parameter: string;
    preselected: {
        label: string;
    }[];
    useLegacy: boolean;
};
export declare const ErrorSearchResultsListArgs: {
    api: string;
    query: string;
    targetLink: string;
    parameter: string;
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
export declare const SearchResultsListOls4Args: {
    api: string;
    query: string;
    targetLink: string;
    parameter: string;
    useLegacy: boolean;
};
export declare const commonSearchResultsListWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
