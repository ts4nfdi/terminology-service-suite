import { DataContentWidget } from './DataContentWidget';
import { StoryObj } from '@storybook/react-vite';
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
    component: typeof DataContentWidget;
    argTypes: {
        [x: string]: import('storybook/internal/csf').InputType;
    };
    args: {
        api: string;
        parameter: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const NFDI4HealthDataContentWidget: Story;
export declare const SafetyDataContentWidget: Story;
export declare const ErrorDataContentWidget: Story;
