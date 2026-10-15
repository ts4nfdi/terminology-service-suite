import { MappingDetail } from '../MappingDetailPresentation';
/**
 * Turns a JSKOS timestamp into "11 May 2026, 12:48", or a dash when it cannot
 * be read. MappingListWidget formats its table dates with it too.
 */
export declare function formatMappingDate(value?: string): string;
/**
 * Reads the values the card needs out of one JSKOS mapping, with a dash for
 * whatever the server left out.
 */
export declare function toMappingDetail(mapping: any): MappingDetail;
