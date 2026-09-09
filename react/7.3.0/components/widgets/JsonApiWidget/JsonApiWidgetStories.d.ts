export declare const JsonApiWidgetStoryArgTypes: {
    [x: string]: import('storybook/internal/csf').InputType;
};
export declare const JsonApiWidgetStoryArgs: {
    readonly apiQuery: "";
    readonly buttonText: "";
    readonly buttonSize: "m";
};
export declare const JsonApiWidgetDefaultArgs: {
    apiQuery: string;
    buttonText: string;
    buttonSize: string;
};
export declare const commonJsonApiWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
