import { OntologyInfoWidget } from './OntologyInfoWidget';
import { manuallyEmbedOnNavigate } from '../../../app/util';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof OntologyInfoWidget;
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
        [x: string]: import('storybook/internal/csf').InputType;
    };
    args: {
        api: string;
        useLegacy: boolean;
        ontologyId: string;
        hasTitle: boolean;
        showBadges: boolean;
        parameter: string;
        onNavigateToEntity: string;
        onNavigateToOntology: string;
        onNavigateToDisambiguate: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const OntologyInfoWidget1: Story;
export declare const OntologyInfoWidget2: Story;
export declare const OntologyInfoWidgetOLS4API: Story;
export declare const NavigateToEBIPage: Story;
