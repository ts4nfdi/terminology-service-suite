/** One mapping, flattened to the strings the card shows and downloads. */
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
export type MappingDetailPresentationProps = {
    mapping: MappingDetail;
    MappingDetailBackgroundColor?: string;
    /** Shows a close button; the list widget uses it to collapse the row. */
    onClose?: () => void;
};
/** Renders the mapping it is handed, so both mapping widgets can show it. */
export default function MappingDetailPresentation(props: MappingDetailPresentationProps): React.JSX.Element;
declare function WrappedMappingDetailPresentation(props: MappingDetailPresentationProps): React.JSX.Element;
export { MappingDetailPresentation, WrappedMappingDetailPresentation };
