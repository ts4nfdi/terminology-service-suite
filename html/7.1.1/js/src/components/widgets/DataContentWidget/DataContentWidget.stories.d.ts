import { Meta, StoryObj } from '@storybook/react-vite';
import { DataContentWidgetProps } from '@ts4nfdi/terminology-service-suite/src';
declare const meta: Meta<DataContentWidgetProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const NFDI4HealthDataContentWidget: Story;
export declare const SafetyDataContentWidget: Story;
export declare const ErrorDataContentWidget: Story;
