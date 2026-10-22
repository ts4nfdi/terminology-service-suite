import { Meta } from '@storybook/react-vite';
import { ResourcesWidgetProps } from '@ts4nfdi/terminology-service-suite/src';
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
    };
    WithActionsArgs: {
        actions: import('@elastic/eui/src/components/basic_table/action_types').Action<import('@ts4nfdi/terminology-service-suite/src').OlsResource>[];
        api: string;
        initialEntriesPerPage: number;
        pageSizeOptions: number[];
        initialSortField: string;
        initialSortDir: "asc";
        onNavigate: string;
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
