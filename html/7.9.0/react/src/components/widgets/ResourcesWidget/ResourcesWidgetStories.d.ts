import { Action } from '@elastic/eui/src/components/basic_table/action_types';
import { OlsResource } from '../../../app/';
export declare const ResourcesWidgetStoryArgTypes: {
    [x: string]: any;
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
};
export declare const WithActionsArgs: {
    actions: Action<OlsResource>[];
    api: string;
    initialEntriesPerPage: number;
    pageSizeOptions: number[];
    initialSortField: string;
    initialSortDir: "asc";
    onNavigate: string;
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
