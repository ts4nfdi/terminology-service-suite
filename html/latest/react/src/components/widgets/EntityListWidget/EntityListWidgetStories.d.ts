export declare const EntityListWidgetStoryArgTypes: {
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
export declare const EntityListWidgetStoryArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly ontologyId: "uberon";
    readonly entityType: "class";
    readonly parameter: "";
};
export declare const EntityListWidgetIndividualsArgs: {
    readonly api: "https://www.ebi.ac.uk/ols4/api/";
    readonly ontologyId: "efo";
    readonly entityType: "individual";
    readonly parameter: "";
};
export declare const EntityListWidgetMeshTermsArgs: {
    readonly api: "https://semanticlookup.zbmed.de/ols/api/";
    readonly ontologyId: "mesh";
    readonly entityType: "term";
    readonly parameter: "";
};
