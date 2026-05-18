import { Meta, StoryObj } from '@storybook/react-vite';
import { EntityOntoListWidgetProps } from '@ts4nfdi/terminology-service-suite/src';
declare const meta: Meta<EntityOntoListWidgetProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const v2ApiNCBITaxon: Story;
export declare const v2ApiFOODON: Story;
export declare const legacyApi: Story;
export declare const exceedsMaxDisplay: Story;
