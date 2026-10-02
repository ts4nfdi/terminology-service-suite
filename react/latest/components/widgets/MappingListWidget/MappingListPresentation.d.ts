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
type MetadataTarget = {
    iri: string;
    ontologyId: string;
} | null;
/** Everything the list shows or changes, passed down by MappingListWidget. */
type MappingListPresentationProps = {
    fromLabel: string;
    rowColor: string;
    MappingDetailBackgroundColor?: string;
    labels: Record<string, string>;
    filteredRows: MappingRow[];
    search: EuiSearchBarProps;
    expandedRowIds: string[];
    toggleRowExpansion: (row: MappingRow) => void;
    metadataTarget: MetadataTarget;
    setMetadataTarget: Dispatch<SetStateAction<MetadataTarget>>;
    isTypeFilterOpen: boolean;
    setIsTypeFilterOpen: Dispatch<SetStateAction<boolean>>;
    selectedTypeFilters: string[];
    setSelectedTypeFilters: Dispatch<SetStateAction<string[]>>;
    setAppliedTypeFilters: Dispatch<SetStateAction<string[]>>;
    toggleTypeFilter: (type: string) => void;
    isPopoverOpen: boolean;
    onButtonClick: () => void;
    closePopover: () => void;
};
/** UI of the mapping list; all state and data come from MappingListWidget. */
export default function MappingListPresentation(props: MappingListPresentationProps): import("react").JSX.Element;
export {};
