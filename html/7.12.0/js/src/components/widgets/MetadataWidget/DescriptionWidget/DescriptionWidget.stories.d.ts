import { Meta, StoryObj } from '@storybook/react-vite';
import { DescriptionWidgetProps } from '@ts4nfdi/terminology-service-suite/src';
declare const meta: Meta<DescriptionWidgetProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DescriptionWidget1: Story;
export declare const SelectingDefiningOntology: Story;
export declare const DefiningOntologyUnavailable: Story;
export declare const ErrorFetchingData: Story;
