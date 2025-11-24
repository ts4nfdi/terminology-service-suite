import { EntityTypeName } from '../../../model/ModelTypeCheck';
export declare const EntityInfoWidgetStoryArgTypes: {
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
export declare const EntityInfoWidgetStoryArgs: {
    api: string;
    iri: string;
    useLegacy: boolean;
    ontologyId: string;
    entityType: EntityTypeName;
    hasTitle: boolean;
    showBadges: boolean;
    parameter: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const TermInfoWidgetArgs: {
    iri: string;
    entityType: EntityTypeName;
    ontologyId: string;
    hasTitle: boolean;
    api: string;
    useLegacy: boolean;
    showBadges: boolean;
    parameter: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const PropertyInfoWidgetArgs: {
    iri: string;
    entityType: EntityTypeName;
    ontologyId: string;
    api: string;
    useLegacy: boolean;
    hasTitle: boolean;
    showBadges: boolean;
    parameter: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const IndividualInfoWidgetArgs: {
    iri: string;
    entityType: EntityTypeName;
    ontologyId: string;
    api: string;
    useLegacy: boolean;
    hasTitle: boolean;
    showBadges: boolean;
    parameter: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const InfoWidgetBadgesArgs: {
    api: string;
    useLegacy: boolean;
    entityType: EntityTypeName;
    iri: string;
    ontologyId: string;
    hasTitle: boolean;
    showBadges: boolean;
    parameter: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const OptionalEntityTypeLegacyAPIArgs: {
    api: string;
    iri: string;
    useLegacy: boolean;
    ontologyId: string;
    entityType: EntityTypeName;
    hasTitle: boolean;
    showBadges: boolean;
    parameter: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const InfoWidgetDomainArgs: {
    api: string;
    useLegacy: boolean;
    iri: string;
    ontologyId: string;
    entityType: EntityTypeName;
    hasTitle: boolean;
    showBadges: boolean;
    parameter: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const InfoWidgetRangeArgs: {
    api: string;
    useLegacy: boolean;
    iri: string;
    ontologyId: string;
    entityType: EntityTypeName;
    hasTitle: boolean;
    showBadges: boolean;
    parameter: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const InfoWidgetPropertyAssertionArgs: {
    api: string;
    useLegacy: boolean;
    iri: string;
    ontologyId: string;
    entityType: EntityTypeName;
    hasTitle: boolean;
    showBadges: boolean;
    parameter: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const InfoWidgetPropertyCharacteristicsArgs: {
    api: string;
    useLegacy: boolean;
    iri: string;
    ontologyId: string;
    entityType: EntityTypeName;
    hasTitle: boolean;
    showBadges: boolean;
    parameter: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const NavigateToEBIPageArgs: {
    api: string;
    useLegacy: boolean;
    iri: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
    ontologyId: string;
    entityType: EntityTypeName;
    hasTitle: boolean;
    showBadges: boolean;
    parameter: string;
};
export declare const SkosmosImportArgs: {
    api: string;
    useLegacy: boolean;
    iri: string;
    ontologyId: string;
    entityType: EntityTypeName;
    hasTitle: boolean;
    showBadges: boolean;
    parameter: string;
    onNavigateToEntity: string;
    onNavigateToOntology: string;
    onNavigateToDisambiguate: string;
};
export declare const commonEntityInfoWidgetPlay: ({ canvasElement, }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
