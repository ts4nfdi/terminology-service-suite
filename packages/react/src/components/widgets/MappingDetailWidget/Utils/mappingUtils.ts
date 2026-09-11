import type { MappingDetail } from "../MappingDetailPresentation";

/**
 * Turns a JSKOS timestamp into "11 May 2026, 12:48", or a dash when it cannot
 * be read. MappingListWidget formats its table dates with it too.
 */
export function formatMappingDate(value?: string) {
  const date = new Date(value ?? "");

  if (isNaN(date.getTime())) return "—";

  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * One mapping can point at several entities, so both readers keep every member
 * instead of only the first. For the two targets of the B14C4A mapping:
 *
 *   [{ uri: ".../gnd/4113427-8", notation: ["4113427-8"] },
 *    { uri: ".../gnd/4152060-9", notation: ["4152060-9"] }]
 *
 * notationsOf() gives "4113427-8, 4152060-9" and urisOf() the two IRIs. A
 * member without a notation keeps its IRI, an empty side becomes a dash.
 */
function notationsOf(members: any[] = []) {
  return (
    members.map((member) => member.notation?.[0] ?? member.uri).join(", ") ||
    "—"
  );
}

function urisOf(members: any[] = []) {
  return members.map((member) => member.uri).join(", ") || "—";
}

/**
 * Reads the values the card needs out of one JSKOS mapping, with a dash for
 * whatever the server left out.
 */
export function toMappingDetail(mapping: any): MappingDetail {
  return {
    type: mapping.type?.[0]?.split("#").pop() ?? "—",
    from: notationsOf(mapping.from?.memberSet),
    fromUri: urisOf(mapping.from?.memberSet),
    fromScheme: mapping.fromScheme?.notation?.[0] ?? "—",
    to: notationsOf(mapping.to?.memberSet),
    toUri: urisOf(mapping.to?.memberSet),
    toScheme: mapping.toScheme?.notation?.[0] ?? "—",
    creator: mapping.creator?.[0]?.prefLabel?.en ?? "—",
    created: formatMappingDate(mapping.created),
    modified: formatMappingDate(mapping.modified),
    identifier: mapping.identifier?.[0] ?? "—",
    partOf: mapping.partOf?.[0]?.uri ?? "—",
    uri: mapping.uri ?? "—",
  };
}
