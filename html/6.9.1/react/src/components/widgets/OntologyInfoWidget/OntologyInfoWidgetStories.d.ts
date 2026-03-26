export declare const OntologyInfoWidgetStoryArgTypes: {
    [x: string]: import('storybook/internal/csf').InputType;
};
export declare const OntologyInfoWidgetStoryArgs: {
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
export declare const OntologyInfoWidget1Args: {
    api: string;
    ontologyId: string;
};
export declare const OntologyInfoWidget2Args: {
    api: string;
    ontologyId: string;
};
export declare const OntologyInfoWidgetOLS4APIArgs: {
    api: string;
    useLegacy: boolean;
    ontologyId: string;
};
export declare const NavigateToEBIPageArgs: {
    api: string;
    useLegacy: boolean;
    ontologyId: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const commonOntologyInfoWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
