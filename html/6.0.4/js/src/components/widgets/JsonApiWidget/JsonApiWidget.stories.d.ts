import { JsonApiWidgetProps } from '@ts4nfdi/terminology-service-suite/src';
import { Meta } from '@storybook/react-vite';
declare const meta: Meta<JsonApiWidgetProps>;
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
