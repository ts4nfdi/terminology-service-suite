import { ResourcesWidgetProps } from '@ts4nfdi/terminology-service-suite/src';
import { Meta } from '@storybook/react-vite';
declare const meta: Meta<ResourcesWidgetProps>;
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
        api: string;
        initialEntriesPerPage: number;
        pageSizeOptions: number[];
        initialSortField: string;
        initialSortDir: "asc";
        onNavigate: string;
        parameter: string;
    };
    WithActionsArgs: {
        actions: {
            render: (item: import('@ts4nfdi/terminology-service-suite/src').OlsResource) => import("react/jsx-runtime").JSX.Element;
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
