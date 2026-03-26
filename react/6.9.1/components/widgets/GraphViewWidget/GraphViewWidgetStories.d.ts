export declare const GraphViewWidgetStoryArgTypes: {
    [x: string]: import('storybook/internal/csf').InputType;
};
export declare const GraphViewWidgetStoryArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
};
export declare const ChebiIonArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
    targetIri: string;
};
export declare const ChebiIonComparisonArgs: {
    api: string;
    iri: string;
    targetIri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
};
export declare const ChebiIonRootWalkArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
    targetIri: string;
};
export declare const ChebiWaterArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
    targetIri: string;
};
export declare const ChebiWaterRootWalkArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
    targetIri: string;
};
export declare const ChebiCaffeineHierarchyArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
    targetIri: string;
};
export declare const WithOnNodeDoubleClickCallbackArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
    onNodeClick: (iri: string) => void;
    targetIri: string;
};
export declare const ChebiCaffeineHierarchyWithComparisonArgs: {
    api: string;
    iri: string;
    targetIri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
};
export declare const ChebiIonAndIonRadicalWithComparisonArgs: {
    api: string;
    iri: string;
    targetIri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
};
export declare const GraphWithGermanLabelArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
    targetIri: string;
    parameter: string;
};
export declare const commonGraphViewWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
