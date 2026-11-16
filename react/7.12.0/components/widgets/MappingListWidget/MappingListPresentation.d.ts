import { EuiSearchBarProps } from '@elastic/eui';
import { Dispatch, SetStateAction } from '../../../../../../node_modules/react';
export type MappingRow = {
    /** Stable id the table uses to track which rows are expanded. */
    id: string;
    from: string;
    fromUri: string;
    to: string;
    toUri: string;
    creator: string;
    type: string;
    created: string;
    createdLabel: string;
    targetFromColiConc: string;
    fromScheme: string;
    toScheme: string;
    identifier: string;
    modified: string;
    uri: string;
    partOf: string;
};
/** Which side of the mappings the source sits on. */
export type ViewDirection = "from" | "to" | "both";
type MetadataTarget = {
    iri: string;
    ontologyId: string;
} | null;
/** Everything the list shows or changes, passed down by MappingListWidget. */
export type MappingListPresentationProps = {
    /** The entity the user asked for; its cells are shown in bold. */
    source: string;
    entityLabel: string;
    rowColor: string;
    MappingDetailBackgroundColor?: string;
    labels: Record<string, string>;
    fromLabels: Record<string, string>;
    filteredRows: MappingRow[];
    search: EuiSearchBarProps;
    expandedRowIds: string[];
    toggleRowExpansion: (row: MappingRow) => void;
    metadataTarget: MetadataTarget;
    setMetadataTarget: Dispatch<SetStateAction<MetadataTarget>>;
    typeFilters: string[];
    setTypeFilters: Dispatch<SetStateAction<string[]>>;
    toggleTypeFilter: (type: string) => void;
    isPopoverOpen: boolean;
    onButtonClick: () => void;
    closePopover: () => void;
    isFilterOpen: boolean;
    setIsFilterOpen: Dispatch<SetStateAction<boolean>>;
    viewDirection: ViewDirection;
    setViewDirection: Dispatch<SetStateAction<ViewDirection>>;
};
/** UI of the mapping list; all state and data come from MappingListWidget. */
declare function MappingListPresentation(props: MappingListPresentationProps): React.JSX.Element;
declare function WrappedMappingListPresentation(props: MappingListPresentationProps): React.JSX.Element;
export { MappingListPresentation, WrappedMappingListPresentation };
export default MappingListPresentation;
