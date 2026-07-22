import { Thing } from '.';
export interface Ontology extends Thing {
    getOntologyId(): string;
    getName(): string;
    getDescription(): string;
    getCreators(): string[];
    getSourceFileTimestamp(): string;
    getNumEntities(): number;
    getNumClasses(): number;
    getNumProperties(): number;
    getNumIndividuals(): number;
    getLogoURL(): string | undefined;
    getOntologyPurl(): string;
    getHomepage(): string;
    getMailingList(): string;
    getTracker(): string;
    getVersionIri(): string;
    getVersion(): string;
    getVersionFromIri(): string;
    getLoaded(): string;
    getPreferredRoots(): string[];
    getPreferredPrefix(): string;
    getLanguages(): string[];
    getImportsFrom(): string[];
    getExportsTo(): string[];
    getAllowDownload(): boolean;
    getLicense(): string[];
}
