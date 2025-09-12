import { EuiLinkColor } from '@elastic/eui/src/components/link/link';
import { ThingTypeName } from '../model/ModelTypeCheck';
import { StoryContext } from '@storybook/react';
export declare const OBO_FOUNDRY_REPO_URL_RAW: "https://raw.githubusercontent.com/OBOFoundry/OBOFoundry.github.io/master";
export declare function asArray<T>(obj: T | T[]): T[];
/**
 * Returns `useLegacy` if undefined, otherwise returns default value for useLegacy
 * @param useLegacy
 */
export declare function getUseLegacy(useLegacy?: boolean): boolean;
/**
 * Returns {@link type}. If {@link type} equals 'term', 'class' gets returned instead.
 */
export declare function getEntityTypeName(type: string): string;
export declare function capitalize(str: string): string;
export declare function deCamelCase(str: string): string;
export declare function deUnderscore(str: string): string;
/**
 * Returns trimmed api (omits /api/v2 at the end)
 * @param api
 */
export declare function getFrontEndApi(api: string): string;
/**
 * Returns "ontologies/{ontologyId}/{entityType}/{iri}", which can be concatenated with frontendApi to get full link
 * @param ontologyId the entities' ontologyId
 * @param iri the entities' iri
 * @param entityTypeArray the entities' type array (from api JSON linkedEntities)
 * @param useLegacy
 */
export declare function getEntityInOntologySuffix(ontologyId: string, entityTypeArray: string[] | string, iri?: string, useLegacy?: boolean): string;
export declare function pluralizeType(typeArray: string[] | string, useLegacy?: boolean): "terms" | "classes" | "properties" | "individuals" | "ontologies";
export declare function singularizeType(typeArray: string[] | string, useLegacy?: boolean): ThingTypeName;
/**
 * Returns a random string used mainly for component keys.
 */
export declare function randomString(): string;
export declare function isHexColor(str: string): boolean;
export declare function isRgbColor(str: string): boolean;
export declare function isEuiLinkColor(str: string): str is EuiLinkColor;
export declare function isEuiButtonColor(str: string): str is EuiLinkColor;
export declare function getErrorMessageToDisplay(error: any, messagePlaceholder?: string): string;
export declare function inferTypeFromTypeArray(types: string[]): "term" | "class" | "individual" | "property" | "annotationProperty" | "dataProperty" | "objectProperty" | "ontology";
export declare function manuallyEmbedOnNavigate(code: string, storyContext: StoryContext): string;
export declare function dictFromParamString(parameter?: string): any;
