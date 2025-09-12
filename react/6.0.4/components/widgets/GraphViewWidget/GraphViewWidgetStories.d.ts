export declare const GraphViewWidgetStoryArgTypes: {
    [x: string]: import('storybook/internal/csf').InputType;
};
export declare const GraphViewWidgetStoryArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
};
export declare const GraphViewWidgetExampleArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
};
export declare const RootWalkGraphExampleArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
};
export declare const ChebiWaterArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
};
export declare const ChebiWaterRootWalkArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
};
export declare const ChebiCaffeineHierarchyArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
};
export declare const WithOnNodeDoubleClickCallbackArgs: {
    api: string;
    iri: string;
    ontologyId: string;
    rootWalk: boolean;
    hierarchy: boolean;
    onNodeClick: (iri: string) => void;
};
export declare const commonGraphViewWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
