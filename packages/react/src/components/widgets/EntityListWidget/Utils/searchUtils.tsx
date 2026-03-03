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

// heart = Heart = HEART = HeaRt =...
export function compareValues(a: unknown, b: unknown) {
  const av = a == null ? "" : String(a);
  const bv = b == null ? "" : String(b);
  return av.localeCompare(bv, undefined, {
    numeric: true,
    sensitivity: "base",
  });
}

export function getPreferredIdFromSearchDoc(d: any) {
  const v =
    d?.curie ?? d?.obo_id ?? d?.short_form ?? d?.id ?? d?.iri ?? d?.ontologyId;
  return v ? String(v) : "—";
}

export function getPreferredLabelFromSearchDoc(d: any) {
  const v =
    d?.label ?? d?.label_autosuggest ?? d?.title ?? d?.name ?? d?.ontologyId;
  if (Array.isArray(v)) return v[0] ? String(v[0]) : "—";
  return v ? String(v) : "—";
}
