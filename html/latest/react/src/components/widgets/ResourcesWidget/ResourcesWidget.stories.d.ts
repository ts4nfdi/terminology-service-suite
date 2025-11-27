import { ResourcesWidget } from './ResourcesWidget';
declare const meta: {
    title: string;
    component: typeof ResourcesWidget;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        [x: string]: import('storybook/internal/csf').InputType;
    };
    args: {
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
};
export default meta;
export declare const ResourcesWidget1: {
    args: {
        api: string;
        initialEntriesPerPage: number;
        pageSizeOptions: number[];
        initialSortField: string;
        initialSortDir: "asc";
        onNavigate: string;
        parameter: string;
    };
    play: ({ canvasElement, }: {
        canvasElement: HTMLElement;
    }) => Promise<void>;
};
export declare const WithActions: {
    args: {
        actions: {
            render: (item: import('../../..').OlsResource) => import("react/jsx-runtime").JSX.Element;
        }[];
        api: string;
        initialEntriesPerPage: number;
        pageSizeOptions: number[];
        initialSortField: string;
        initialSortDir: "asc";
        onNavigate: string;
        parameter: string;
    };
    play: ({ canvasElement, }: {
        canvasElement: HTMLElement;
    }) => Promise<void>;
};
export declare const ResourcesWidgetLogos: {
    args: {
        api: string;
        initialEntriesPerPage: number;
        pageSizeOptions: number[];
        initialSortField: string;
        initialSortDir: "asc";
        targetLink: string;
        parameter: string;
        useLegacy: boolean;
    };
    play: ({ canvasElement, }: {
        canvasElement: HTMLElement;
    }) => Promise<void>;
};
