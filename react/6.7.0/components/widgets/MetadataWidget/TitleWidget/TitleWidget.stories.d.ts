import { StoryObj } from '@storybook/react-vite';
import { TitleWidget } from './TitleWidget';
declare const meta: {
    title: string;
    component: typeof TitleWidget;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
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
        readonly api: "";
        readonly useLegacy: true;
        readonly iri: "";
        readonly ontologyId: "";
        readonly thingType: "term";
        readonly titleText: "";
        readonly defaultValue: "";
        readonly className: "";
        readonly parameter: "collection=nfdi4health";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const TitleWidgetDefault: Story;
export declare const OntologyTitle: Story;
export declare const SelectingDefiningOntology: Story;
export declare const TitleWidgetWithTitleText: Story;
export declare const IncorrectIriWithDefaultValue: Story;
export declare const IncorrectIriWithoutDefaultValue: Story;
export declare const DefiningOntologyUnavailable: Story;
export declare const WithStyles: Story;
export declare const WithoutStyles: Story;
export declare const OntologyTitleCustomOnNavigate: Story;
export declare const OntologyTitleCustomLink: Story;
