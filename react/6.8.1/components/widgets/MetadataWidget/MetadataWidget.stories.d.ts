import { StoryObj } from '@storybook/react-vite';
import { manuallyEmbedOnNavigate } from '../../../app/util';
import { MetadataWidget } from './MetadataWidget';
declare const meta: {
    title: string;
    component: typeof MetadataWidget;
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
        hierarchyShowSiblingsOnInit: {
            required: boolean;
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        hierarchyKeepExpansionStates: {
            required: boolean;
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        hierarchyPreferredRoots: {
            required: boolean;
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        hierarchyWrap: {
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
        readonly api: "";
        readonly useLegacy: true;
        readonly ontologyId: "";
        readonly entityType: "term";
        readonly iri: "";
        readonly termLink: "";
        readonly altNamesTab: true;
        readonly hierarchyTab: true;
        readonly crossRefTab: true;
        readonly terminologyInfoTab: true;
        readonly graphViewTab: true;
        readonly termDepictionTab: true;
        readonly hierarchyPreferredRoots: false;
        readonly hierarchyKeepExpansionStates: false;
        readonly hierarchyShowSiblingsOnInit: false;
        readonly onNavigateToEntity: "Console message";
        readonly onNavigateToOntology: "Console message";
        readonly onNavigateToDisambiguate: "Console message";
        readonly hierarchyWrap: false;
        readonly parameter: "";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const MetadataWidget1: Story;
export declare const OLS3: Story;
export declare const OLS4V1: Story;
export declare const OLS4V2: Story;
export declare const SelectingDefiningOntology: Story;
export declare const DefiningOntologyUnavailable: Story;
export declare const DefinedByAlsoAppearsInWidgets: Story;
export declare const HiddenTabs: Story;
export declare const TermAsLink: Story;
