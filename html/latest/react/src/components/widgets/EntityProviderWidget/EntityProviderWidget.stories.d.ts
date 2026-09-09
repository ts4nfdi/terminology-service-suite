import { StoryObj } from '@storybook/react-vite';
import { EntityProviderWidgetProps } from '../../../app/types';
/**
 * The widget itself renders nothing - it is a hook. This demo exists only so
 * that Storybook has something to show: it calls the hook and dumps the result.
 * It is intentionally local to this file and not exported from the package.
 */
declare function EntityProviderDemo(props: EntityProviderWidgetProps): JSX.Element;
declare const meta: {
    title: string;
    component: typeof EntityProviderDemo;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        api: any;
        enabled: {
            required: boolean;
            description: string;
            control: {
                readonly type: "boolean";
            };
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
        };
        ontologyId: {
            required: boolean;
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
        };
    };
    args: {
        readonly api: "https://terminology.services.base4nfdi.de/api-gateway/ols4/api/";
        readonly iri: "";
        readonly ontologyId: "";
        readonly enabled: true;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const withOntologyId: Story;
export declare const notFound: Story;
export declare const disabled: Story;
