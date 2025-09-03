import { TermDepictionWidgetProps } from '@ts4nfdi/terminology-service-suite/src';
declare const meta: {
    title: string;
    tags: string[];
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    render: (args: TermDepictionWidgetProps) => string;
    argTypes: {
        [x: string]: import('storybook/internal/csf').InputType;
    };
    args: {
        api: string;
        iri: string;
        ontologyId: string;
        useLegacy: boolean;
    };
};
export default meta;
export declare const TermDepictionWidgetExample: {
    args: {
        api: string;
        iri: string;
        ontologyId: string;
        useLegacy: boolean;
    };
    play: ({ canvasElement, }: {
        canvasElement: HTMLElement;
    }) => Promise<void>;
};
export declare const TermDepictionWidget3D: {
    args: {
        api: string;
        iri: string;
        ontologyId: string;
        useLegacy: boolean;
    };
    play: ({ canvasElement, }: {
        canvasElement: HTMLElement;
    }) => Promise<void>;
};
