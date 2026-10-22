import { Ontology } from '../interfaces';
import { OLS3Thing } from './OLS3Thing';
import { default as Reified } from '../Reified';
import { ThingTypeName } from '../ModelTypeCheck';
export declare class OLS3Ontology extends OLS3Thing implements Ontology {
    getType(): ThingTypeName;
    getTypePlural(): "ontologies" | "classes" | "terms" | "properties" | "individuals";
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
    /** Can be just found under `properties["config"]["annotations"]`.
     *  Not present in ols4/api,
     *  but in semanticlookup.zbmed.de/api.
     */
    getAnnotationPredicates(): string[];
    getAnnotationTitleById(id: string): string;
    getAnnotationById(id: string): Reified<any>[];
    getPreferredRoots(): string[];
    getPreferredPrefix(): string;
    getLanguages(): string[];
    getImportsFrom(): string[];
    getExportsTo(): string[];
    getAllowDownload(): boolean;
    getLicense(): string[];
}
