import { TermDepictionWidget } from './TermDepictionWidget';
declare const meta: {
    title: string;
    component: typeof TermDepictionWidget;
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
