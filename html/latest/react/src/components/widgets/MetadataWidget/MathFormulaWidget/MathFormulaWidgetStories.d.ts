import { ArgTypes } from '@storybook/react';
export declare const SimpleMathMLExample = "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mi>x</mi><mo>=</mo><mn>1</mn></math>";
export declare const TextMathMLExample = "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mtext>formula example</mtext></math>";
export declare const FractionMathMLExample = "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mfrac><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow><mi>c</mi></mfrac></math>";
export declare const MathFormulaWidgetStoryArgTypes: ArgTypes;
export declare const MathMLInputStoryArgs: {
    api: string;
    ontologyId: string;
    iri: string;
    mathML: string;
};
export declare const MathMLTextInputStoryArgs: {
    api: string;
    ontologyId: string;
    iri: string;
    mathML: string;
};
export declare const MathMLFractionInputStoryArgs: {
    api: string;
    ontologyId: string;
    iri: string;
    mathML: string;
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
