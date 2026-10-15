export declare const IriWidgetStoryArgTypes: {
    [x: string]: import('storybook/internal/csf').InputType;
};
export declare const IriWidgetStoryArgs: {
    readonly iri: "";
    readonly color: "text";
    readonly iriText: "";
    readonly urlPrefix: "";
    readonly externalIcon: true;
    readonly className: "";
};
export declare const IriWidget1Args: {
    iri: string;
};
export declare const withoutExternalIconArgs: {
    iri: string;
    externalIcon: boolean;
};
export declare const withCopyButtonArgs: {
    readonly iri: "http://purl.obolibrary.org/obo/NCIT_C2985";
    readonly copyButton: "left";
    readonly color: "text";
    readonly iriText: "";
    readonly urlPrefix: "";
    readonly externalIcon: true;
    readonly className: "";
};
export declare const withUrlPrefixArgs: {
    iri: string;
    urlPrefix: string;
};
export declare const commonIriWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
