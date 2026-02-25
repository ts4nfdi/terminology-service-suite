export function escapeSolrSpecialChars(input: string) {
  return input.replace(/([+\-!(){}\[\]^"~*?:\\\/&|])/g, "\\$1");
}

export function normalizeSearchText(raw: string) {
  return raw.trim().replace(/\s+/g, " ");
}

export function buildSolrPrefixQuery(raw: string) {
  const tokens = raw.trim().split(/\s+/).filter(Boolean);
  if (!tokens.length) return "";
  const parts = tokens.map((t) => {
    const escaped = escapeSolrSpecialChars(t);
    if (t.length < 2) return escaped;
    return `${escaped}*`;
  });
  return parts.length === 1 ? parts[0] : parts.join(" AND ");
}