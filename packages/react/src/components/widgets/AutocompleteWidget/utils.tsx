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