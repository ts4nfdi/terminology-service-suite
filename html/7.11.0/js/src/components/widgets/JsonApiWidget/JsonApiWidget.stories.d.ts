import { Meta } from '@storybook/react-vite';
import { JsonApiWidgetProps } from '@ts4nfdi/terminology-service-suite/src';
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
