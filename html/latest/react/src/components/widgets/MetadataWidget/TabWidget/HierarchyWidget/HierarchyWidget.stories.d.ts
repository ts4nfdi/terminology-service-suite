import { HierarchyWidget } from './HierarchyWidget';
import { manuallyEmbedOnNavigate } from '../../../../../app/util';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof HierarchyWidget;
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
        parameter: {
            required: boolean;
            table: {
                type: {
                    summary: string;
                };
            };
            defaultValue: {
                summary: string;
            };
            description: string;
        };
        useLegacy: {
            required: boolean;
            description: string;
            defaultValue: {
                summary: string;
            };
            control: {
                readonly type: "boolean";
            };
        };
        showSiblingsOnInit: {
            required: boolean;
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        keepExpansionStates: {
            required: boolean;
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        preferredRoots: {
            required: boolean;
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        includeObsoleteEntities: {
            required: boolean;
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        entityType: {
            description: string;
            required: boolean;
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
        ontologyId: {
            description: string;
            required: boolean;
            table: {
                defaultValue: {
                    summary: string;
                };
                type: {
                    summary: string;
                };
            };
        };
        iri: {
            required: boolean;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
        };
        apiKey: {
            required: boolean;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            control: "text";
        };
        backendType: {
            required: boolean;
            description: string;
            control: {
                type: "radio";
            };
            options: string[];
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        apiUrl: {
            required: boolean;
            description: string;
            table: {
                type: {
                    summary: string;
                };
            };
            control: "text";
        };
    };
    args: {
        readonly apiUrl: "";
        readonly backendType: "ols";
        readonly apiKey: "";
        readonly onNavigateToEntity: "Console message";
        readonly onNavigateToOntology: "Console message";
        readonly iri: "";
        readonly ontologyId: "";
        readonly entityType: "term";
        readonly includeObsoleteEntities: false;
        readonly preferredRoots: false;
        readonly keepExpansionStates: false;
        readonly showSiblingsOnInit: false;
        readonly useLegacy: false;
        readonly hierarchyWrap: false;
        readonly parameter: "";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ClassHierarchy: Story;
export declare const IndividualHierarchy: Story;
export declare const PreferredRoots: Story;
export declare const IncludeObsoleteEntities: Story;
export declare const PropertyRoots: Story;
export declare const IndividualRoots: Story;
export declare const LargeHierarchy: Story;
export declare const SkosHierarchy: Story;
export declare const SagePubHierarchy: Story;
export declare const OntoportalHierarchy: Story;
export declare const OLS3Hierarchy: Story;
export declare const OLSGerman: Story;
export declare const SkosmosAgrovocGerman: Story;
