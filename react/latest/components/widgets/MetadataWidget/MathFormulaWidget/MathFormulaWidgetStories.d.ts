export declare const MathFormulaWidgetStoryArgTypes: {
    iri: {
        required: boolean;
        description: string;
        table: {
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
export declare const MathFormulaWidgetStoryArgs: {
    readonly api: "";
    readonly ontologyId: "";
    readonly iri: "";
};
export declare const MathmodP983StoryArgs: {
    api: string;
    ontologyId: string;
    iri: string;
    mathProperty: string;
};
export declare const MathmodP989StoryArgs: {
    api: string;
    ontologyId: string;
    iri: string;
    mathProperty: string;
};
export declare const commonMathFormulaWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
