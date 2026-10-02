/**
 * One mapping, flattened to the strings the card shows and downloads.
 * MappingDetailWidget builds it from what it fetches, MappingListWidget from
 * the row the user expanded.
 */
export type MappingDetail = {
    type?: string;
    from?: string;
    fromUri?: string;
    fromScheme?: string;
    to?: string;
    toUri?: string;
    toScheme?: string;
    creator?: string;
    created?: string;
    modified?: string;
    identifier?: string;
    partOf?: string;
    uri?: string;
};
type MappingDetailPresentationProps = {
    mapping: MappingDetail;
    MappingDetailBackgroundColor?: string;
    /**
     * Puts a close button in the top corner of the card.
     * MappingListWidget uses it to collapse the row again.
     */
    onClose?: () => void;
};
/**
 * The card itself: its fields, downloads and layout. It renders the mapping it
 * is handed and fetches nothing, so both mapping widgets can show it.
 */
export default function MappingDetailPresentation(props: MappingDetailPresentationProps): import("react").JSX.Element;
export {};
