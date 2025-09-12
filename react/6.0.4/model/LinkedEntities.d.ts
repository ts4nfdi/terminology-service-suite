export interface LinkedEntity {
    definedBy?: string[];
    iri?: string;
    url?: string;
    numAppearsIn: string;
    hasLocalDefinition: boolean;
    label: string | string[];
    type: string[];
}
export default class LinkedEntities {
    linkedEntities: {
        [key: string]: LinkedEntity;
    };
    constructor(linkedEntities: any);
    mergeWith(linkedEntities: any): LinkedEntities;
    getLabelForIri(iri: string): string | undefined;
    get(iri: string): LinkedEntity | undefined;
}
