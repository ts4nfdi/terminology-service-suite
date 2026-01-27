import { ArgTypes } from '@storybook/react';
export declare const apiArgType: ArgTypes;
export declare const useLegacyArgType: ArgTypes;
export declare const useLegacyArgTypeHierarchy: {
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
};
export declare const iriArgType: ArgTypes;
export declare const iriArgTypeHierarchy: {
    iri: {
        required: boolean;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
};
export declare const ontologyIdArgType: {
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
export declare const ontologyIdReqArgType: ArgTypes;
export declare const ontologyIdArgTypeHierarchy: {
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
};
export declare const entityTypeArgType: {
    entityType: {
        required: boolean;
        description: string;
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
};
export declare const entityTypeArgTypeHierarchy: {
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
};
export declare const selectionChangedEventArgType: {
    selectionChangedEvent: {
        required: boolean;
        action: string;
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
        control: "text";
    };
};
export declare const placeholderArgType: ArgTypes;
export declare const preselectedArgType: ArgTypes;
export declare const parameterArgType: ArgTypes;
export declare const parameterArgTypeHierarchy: {
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
};
export declare const hierarchyWrapArgType: {
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
};
export declare const hasShortSelectedLabelArgType: {
    hasShortSelectedLabel: {
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
export declare const allowCustomTermsArgType: ArgTypes;
export declare const singleSelectionArgType: ArgTypes;
export declare const singleSuggestionRowArgType: ArgTypes;
export declare const ts4nfdiGatewayArgType: ArgTypes;
export declare const showApiSourceArgType: ArgTypes;
export declare const hasTitleArgType: ArgTypes;
export declare const showBadgesArgType: ArgTypes;
export declare const apiQueryArgType: ArgTypes;
export declare const buttonTextArgType: ArgTypes;
export declare const buttonSizeArgType: ArgTypes;
export declare const initialEntriesPerPageArgType: ArgTypes;
export declare const pageSizeOptionsArgType: ArgTypes;
export declare const initialSortFieldArgType: ArgTypes;
export declare const initialSortDirArgType: ArgTypes;
export declare const targetLinkArgType: ArgTypes;
export declare const actionsArgType: ArgTypes;
export declare const queryArgType: ArgTypes;
export declare const initialItemsPerPageArgType: ArgTypes;
export declare const itemsPerPageOptionsArgType: ArgTypes;
export declare const colorFirstArgType: ArgTypes;
export declare const colorSecondArgType: ArgTypes;
export declare const colorArgType: ArgTypes;
export declare const descTextArgType: ArgTypes;
export declare const thingTypeArgType: ArgTypes;
export declare const iriTextArgType: ArgTypes;
export declare const externalIconArgType: ArgTypes;
export declare const urlPrefixArgType: ArgTypes;
export declare const copyButtonArgType: ArgTypes;
export declare const titleTextArgType: ArgTypes;
export declare const defaultValueArgType: ArgTypes;
export declare const classNameArgType: ArgTypes;
export declare const onNavigateToEntityArgType: ArgTypes;
export declare const onNavigateToOntologyArgType: ArgTypes;
export declare const onNavigateToDisambiguateArgType: ArgTypes;
export declare const onNavigateArgType: ArgTypes;
export declare const onNavigateToArgType: ArgTypes;
export declare const hrefArgType: ArgTypes;
export declare const rootWalkArgType: ArgTypes;
export declare const hierarchyArgType: ArgTypes;
export declare const targetIriArgType: ArgTypes;
export declare const showHeaderArgType: ArgTypes;
export declare const showComparisonTitleInHeaderArgType: ArgTypes;
export declare const edgeLabelArgType: ArgTypes;
export declare const onNodeClickArgType: ArgTypes;
export declare const apiKeyArgType: {
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
};
export declare const apiUrlArgType: {
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
export declare const backendArgType: {
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
};
export declare const includeObsoleteEntitiesArgType: {
    includeObsoleteEntities: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
};
export declare const preferredRootsArgType: {
    preferredRoots: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
};
export declare const hierarchyPreferredRootsArgType: {
    hierarchyPreferredRoots: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
};
export declare const keepExpansionStatesArgType: {
    keepExpansionStates: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
};
export declare const hierarchyKeepExpansionStatesArgType: {
    hierarchyKeepExpansionStates: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
};
export declare const showSiblingsOnInitArgType: {
    showSiblingsOnInit: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
};
export declare const hierarchyShowSiblingsOnInitArgType: {
    hierarchyShowSiblingsOnInit: {
        required: boolean;
        description: string;
        table: {
            defaultValue: {
                summary: string;
            };
        };
    };
};
export declare const entityArgType: {
    entity: {
        required: boolean;
        description: string;
    };
};
