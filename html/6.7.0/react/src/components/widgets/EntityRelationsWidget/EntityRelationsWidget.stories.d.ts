import { StoryObj } from '@storybook/react-vite';
import { manuallyEmbedOnNavigate } from '../../../app/util';
import { EntityRelationsWidget } from './EntityRelationsWidget';
declare const meta: {
    title: string;
    component: typeof EntityRelationsWidget;
    parameters: {
        layout: string;
        docs: {
            source: {
                transform: typeof manuallyEmbedOnNavigate;
            };
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
        entityType: {
            required: boolean;
            description: string;
            control: {
                readonly type: "radio";
            };
            table: {
                type: {
                    summary: string;
                };
            };
            options: string[];
        };
    };
    args: {
        readonly api: "https://semanticlookup.zbmed.de/api/";
        readonly iri: "";
        readonly ontologyId: "";
        readonly entityType: "term";
        readonly hasTitle: true;
        readonly showBadges: true;
        readonly parameter: "";
        readonly onNavigateToEntity: "Console message";
        readonly onNavigateToOntology: "Console message";
        readonly onNavigateToDisambiguate: "Console message";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SubEntityOf: Story;
export declare const AllValuesFrom: Story;
export declare const DifferentFrom: Story;
export declare const EquivalentTo: Story;
export declare const SingleValue: Story;
export declare const InverseOf: Story;
export declare const PropertyChain: Story;
export declare const Instances: Story;
export declare const Axioms: Story;
export declare const QualifiedCardinality: Story;
export declare const NavigateToEBIPage: Story;
