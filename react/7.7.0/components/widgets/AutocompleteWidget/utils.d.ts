/**
 * Gets the best matching synonym from a list based on similarity to search value
 * @param synonyms - Array of synonym strings
 * @param searchValue - The search string to match against
 * @returns The best matching synonym, or empty string if no synonyms
 */
export declare const getBestMatchingSynonym: (synonyms: string[], searchValue: string) => string;
/**
 * Selects a synonym based on strict searchValue inclusion rules for both the label and the synonym.
 *
 * Rules:
 * 1. If the label contains the searchValue, return empty string.
 * 2. Only consider synonyms that contain the searchValue.
 *
 * @param label - The original label to check against
 * @param synonyms - The list of potential synonyms
 * @param searchValue - The string that must/must not be present
 * @returns The best matching valid synonym, or empty string
 */
export declare const getConstrainedSynonym: (label: string, synonyms: string[], searchValue: string) => string;
