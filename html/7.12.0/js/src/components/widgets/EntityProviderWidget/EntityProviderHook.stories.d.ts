import { Meta, StoryObj } from '@storybook/react-vite';
import { EntityProviderWidgetProps } from '@ts4nfdi/terminology-service-suite/src';
/**
 * The functions render nothing, so the story calls getEntityProvider and
 * getEntityProviders and prints their result, like the React demo does.
 */
declare const meta: Meta<EntityProviderWidgetProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const entityProvider: Story;
export declare const ontologyProvider: Story;
export declare const notFound: Story;
export declare const disabled: Story;
