"use client";
import {
  EuiBasicTable,
  EuiBasicTableColumn,
  EuiFieldSearch,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLoadingSpinner,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { css } from "@emotion/react";
import { useMemo } from "react";
import { EntityListPresentationProps, EntityRow } from "../../../app";
import { getErrorMessageToDisplay } from "../../../app/util";
import {
  isIndividualEntityType,
  isPropertyEntityType,
} from "./EntityListWidget";
import { compareValues } from "./Utils/searchUtils";

function EntityListPresentation(props: EntityListPresentationProps) {
  const {
    isLoading,
    isFetching,
    totalItemCount,
    searchText,
    onSearchTextChange,
    onTableChange,
    pageIndex,
    pageSize,
    sortField,
    sortDirection,
    entityType,
    error,
    rows,
  } = props;

  const columns: Array<EuiBasicTableColumn<EntityRow>> = useMemo(() => {
    const baseColumns: Array<EuiBasicTableColumn<EntityRow>> = [
      { field: "name", name: "Name", truncateText: true, sortable: true },
      { field: "id", name: "ID", truncateText: true, sortable: true },
    ];

    if (isPropertyEntityType(entityType)) {
      baseColumns.push(
        {
          field: "domain",
          name: "Domain",
          truncateText: true,
          sortable: true,
        },
        { field: "range", name: "Range", truncateText: true, sortable: true },
      );
    }

    if (isIndividualEntityType(entityType)) {
      baseColumns.push({
        field: "type",
        name: "Type",
        truncateText: true,
        sortable: true,
      });
    }

    return baseColumns;
  }, [entityType]);

  const rowsSorted = useMemo(() => {
    const sorted = [...rows].sort((a, b) => {
      const r = compareValues(a[sortField], b[sortField]);
      return sortDirection === "asc" ? r : -r;
    });
    return sorted;
  }, [rows, sortField, sortDirection]);

  if (isLoading) {
    return (
      <div>
        <EuiLoadingSpinner size="s" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <EuiText color="danger">{getErrorMessageToDisplay(error)}</EuiText>
      </div>
    );
  }

  return (
    <EuiPanel paddingSize="m">
      <EuiFlexGroup gutterSize="s" alignItems="center" responsive={false}>
        <EuiFlexItem grow={false}>
          <EuiText size="s" color="subdued">
            Loaded: {rowsSorted.length}
            {totalItemCount ? ` / ${totalItemCount}` : ""}
            {isFetching ? " (loading…)" : ""}
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiSpacer size="s" />

      <EuiFieldSearch
        fullWidth
        incremental
        placeholder="Search by Name or ID"
        value={searchText}
        onChange={(e) => {
          onSearchTextChange(e.target.value);
        }}
        isClearable
        aria-label="Search by Name or ID"
      />

      <EuiSpacer size="m" />

      <EuiBasicTable<EntityRow>
        css={css`
          tbody .euiTableRow:nth-of-type(odd) {
            background-color: #ffffff;
          }
          tbody .euiTableRow:nth-of-type(even) {
            background-color: #f0f6ff;
          }
        `}
        tableCaption="Entity list"
        responsiveBreakpoint={false}
        items={rowsSorted}
        columns={columns}
        loading={isFetching}
        onChange={onTableChange}
        pagination={{
          pageIndex,
          pageSize,
          totalItemCount,
        }}
        sorting={{
          sort: { field: sortField, direction: sortDirection },
        }}
      />
    </EuiPanel>
  );
}

export { EntityListPresentation };
