import { LinkedEntity } from './LinkedEntity';
export default class LinkedEntities {
    linkedEntities: {
        [key: string]: LinkedEntity;
    };
    constructor(linkedEntities: any);
    mergeWith(linkedEntities: any): LinkedEntities;
    getLabelForIri(iri: string): string | undefined;
    get(iri: string): LinkedEntity | undefined;
}
