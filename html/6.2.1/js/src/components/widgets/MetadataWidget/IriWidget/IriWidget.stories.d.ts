import { IriWidgetProps } from '@ts4nfdi/terminology-service-suite/src';
import { Meta, StoryObj } from '@storybook/react-vite';
declare const meta: Meta<IriWidgetProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const IriWidget1: Story;
export declare const withoutExternalIcon: Story;
export declare const withCopyButton: Story;
export declare const withUrlPrefix: Story;
