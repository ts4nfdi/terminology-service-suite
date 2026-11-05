import { EntityProvider } from '../../../app/types';
export declare const EntityProviderPresentationStoryArgTypes: {
    providers: {
        required: boolean;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    provider: {
        required: boolean;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    isLoading: {
        required: boolean;
        description: string;
        control: {
            readonly type: "boolean";
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    isError: {
        required: boolean;
        description: string;
        control: {
            readonly type: "boolean";
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    error: {
        required: boolean;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
    showRaw: {
        required: boolean;
        description: string;
        control: {
            readonly type: "boolean";
        };
        table: {
            defaultValue: {
                summary: string;
            };
            type: {
                summary: string;
            };
        };
    };
    className: {
        required: boolean;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
};
export declare const EntityProviderPresentationStoryArgs: {
    providers: EntityProvider[];
    provider: undefined;
    isLoading: boolean;
    isError: boolean;
    error: undefined;
    showRaw: boolean;
};
export declare const singleProviderArgs: {
    providers: EntityProvider[];
    provider: EntityProvider;
};
export declare const multipleProvidersArgs: {
    providers: EntityProvider[];
    provider: EntityProvider;
};
export declare const withoutRawArgs: {
    providers: EntityProvider[];
    provider: EntityProvider;
    showRaw: boolean;
};
export declare const missingFieldsArgs: {
    providers: EntityProvider[];
    provider: EntityProvider;
};
export declare const loadingArgs: {
    providers: never[];
    isLoading: boolean;
};
export declare const emptyArgs: {
    providers: never[];
};
export declare const errorArgs: {
    providers: never[];
    isError: boolean;
    error: Error;
};
export declare const singleProviderPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
export declare const multipleProvidersPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
export declare const withoutRawPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
export declare const missingFieldsPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
export declare const loadingPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
export declare const emptyPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
export declare const errorPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
