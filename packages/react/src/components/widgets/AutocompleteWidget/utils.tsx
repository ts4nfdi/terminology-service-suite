/**
 * Calculates the similarity score between two strings based on overlapping characters
 * @param str1 - First string to compare
 * @param str2 - Second string to compare
 * @returns Similarity score between 0 and 1
 */
const calculateSimilarity = (str1: string, str2: string): number => {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();

  let matches = 0;
  const minLength = Math.min(s1.length, s2.length);

  for (let i = 0; i < minLength; i++) {
    if (s1[i] === s2[i]) {
      matches++;
    }
  }

  // Also check for substring matches
  const substringScore = s1.includes(s2) || s2.includes(s1) ? 0.5 : 0;

  return (matches / Math.max(s1.length, s2.length)) + substringScore;
};

/**
 * Gets the best matching synonym from a list based on similarity to search value
 * @param synonyms - Array of synonym strings
 * @param searchValue - The search string to match against
 * @returns The best matching synonym, or empty string if no synonyms
 */
export const getBestMatchingSynonym = (
  synonyms: string[],
  searchValue: string
): string => {
  if (!synonyms || synonyms.length === 0) {
    return '';
  }

  if (!searchValue) {
    return synonyms[0];
  }

  let bestMatch = synonyms[0];
  let highestScore = calculateSimilarity(synonyms[0], searchValue);

  for (let i = 1; i < synonyms.length; i++) {
    const score = calculateSimilarity(synonyms[i], searchValue);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = synonyms[i];
    }
  }

  return bestMatch;
};

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
export const getConstrainedSynonym = (
  label: string,
  synonyms: string[],
  searchValue: string
): string => {
  if (!searchValue) {
    return '';
  }

  const normalizedLabel = label.toLowerCase();
  const normalizedsearchValue = searchValue.toLowerCase();

  // Rule 1: Do not use synonym if label contains the searchValue
  if (normalizedLabel.includes(normalizedsearchValue)) {
    return '';
  }

  // Rule 2: Filter synonyms that MUST contain the searchValue
  const validSynonyms = synonyms.filter((synonym) =>
    synonym.toLowerCase().includes(normalizedsearchValue)
  );

  // Pick the best match from the valid list
  return getBestMatchingSynonym(validSynonyms, searchValue);
};