import { OlsResource } from '../../../app/types';
export declare const ResourcesWidgetStoryArgTypes: {
    [x: string]: import('storybook/internal/csf').InputType;
};
export declare const ResourcesWidgetStoryArgs: {
    api: string;
    useLegacy: boolean;
    initialEntriesPerPage: number;
    pageSizeOptions: number[];
    initialSortField: string;
    initialSortDir: "asc" | "desc";
    actions: never[];
    onNavigate: string;
    parameter: string;
};
export declare const ResourcesWidget1Args: {
    api: string;
    initialEntriesPerPage: number;
    pageSizeOptions: number[];
    initialSortField: string;
    initialSortDir: "asc";
    onNavigate: string;
    parameter: string;
};
export declare const WithActionsArgs: {
    actions: {
        render: (item: OlsResource) => import("react/jsx-runtime").JSX.Element;
    }[];
};
export declare const WithActionsAndSafetyArgs: {
    parameter: string;
};
export declare const ResourcesWidgetLogosArgs: {
    api: string;
    initialEntriesPerPage: number;
    pageSizeOptions: number[];
    initialSortField: string;
    initialSortDir: "asc";
    targetLink: string;
    parameter: string;
    useLegacy: boolean;
};
export declare const commonResourcesWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
