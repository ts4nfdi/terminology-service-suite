/**
 * Escape Solr special characters in a search token before building a query
 */
export declare function escapeSolrSpecialChars(input: string): string;
export declare function normalizeSearchText(raw: string): string;
/**
 * Build a Solr prefix query from the normalized search text
 *
 * Each token is escaped before it is added to the query.
 * Tokens with at least two characters are converted to prefix matches.
 * Multiple tokens are joined with AND.
 */
export declare function buildSolrPrefixQuery(raw: string): string;
/**
 * Compare two values as case-insensitive strings with numeric-aware ordering
 *
 * heart = Heart = HEART = HeaRt =...
 */
export declare function compareValues(a: unknown, b: unknown): number;
/**
 * Return the preferred identifier from a search result document
 * The identifier is selected from the first available field in the fallback chain.
 */
export declare function getPreferredIdFromSearchDoc(d: any): string;
/**
 * Return the preferred display label from a search result document
 *
 * The label is selected from the first available field in the fallback chain.
 * If the selected value is an array, the first item is used.
 */
export declare function getPreferredLabelFromSearchDoc(d: any): string;
