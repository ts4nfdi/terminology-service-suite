import { JsonApiWidget } from './JsonApiWidget';
declare const meta: {
    title: string;
    component: typeof JsonApiWidget;
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
        readonly apiQuery: "";
        readonly buttonText: "";
        readonly buttonSize: "m";
    };
};
export default meta;
export declare const JsonApiWidgetDefault: {
    args: {
        apiQuery: string;
        buttonText: string;
        buttonSize: string;
    };
    play: ({ canvasElement, }: {
        canvasElement: HTMLElement;
    }) => Promise<void>;
};
