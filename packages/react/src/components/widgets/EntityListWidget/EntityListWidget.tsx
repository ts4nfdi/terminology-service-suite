"use client";

import React, { useMemo, useState } from "react";
import axios from "axios";
import {
    EuiBasicTable,
    EuiLoadingSpinner,
    EuiPanel,
    EuiProvider,
    EuiText,
} from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

type EntityRow = { name: string; id: string; nextRowIndex: number };
export type EntityListWidgetProps = { apiUrl?: string };
type QueryResult = { rows: EntityRow[]; totalItemCount: number };

const DEFAULT_API_URL =
    "https://www.ebi.ac.uk/ols4/api/v2/ontologies/uberon/classes?search=mid";

function buildPagedUrl(baseUrl: string, pageIndex: number, pageSize: number) {
    const url = new URL(baseUrl);
    url.searchParams.set("page", String(pageIndex));
    url.searchParams.set("size", String(pageSize));
    return url.toString();
}

function pickLabel(item: any) {
    const v = item?.label;
    if (Array.isArray(v)) return v[0] ? String(v[0]) : "—";
    return v ? String(v) : "—";
}

function pickId(item: any) {
    return item?.curie ?
        String(item.curie) : item?.obo_id ?
            String(item.obo_id) : "—";
}

function EntityListWidget({ apiUrl }: EntityListWidgetProps) {
    const baseUrl = apiUrl ?? DEFAULT_API_URL;

    const [{ pageIndex, pageSize }, setPage] = useState(() => {
        const url = new URL(baseUrl);
        const pi = Number(url.searchParams.get("page"));
        const ps = Number(url.searchParams.get("size"));
        return {
            pageIndex: Number.isFinite(pi) ? pi : 0,
            pageSize: Number.isFinite(ps) ? ps : 10,
        };
    });

    const pagedUrl = useMemo(
        () => buildPagedUrl(baseUrl, pageIndex, pageSize),
        [baseUrl, pageIndex, pageSize]
    );

    const { data, isLoading, isError, error } = useQuery<QueryResult>(
        ["entityList", pagedUrl],
        () => {
            return axios
                .get(pagedUrl)
                .then((res) => {
                    const elements: any[] = Array.isArray(res.data?.elements)
                        ? res.data.elements
                        : [];

                    const baseIndex = pageIndex * pageSize;

                    const rows: EntityRow[] = elements.map((item, i) => ({
                        name: pickLabel(item),
                        id: pickId(item),
                        nextRowIndex: baseIndex + i,
                    }));

                    const totalItemCount =
                        typeof res.data?.totalElements === "number"
                            ? res.data.totalElements
                            : typeof res.data?.numElements === "number"
                                ? res.data.numElements
                                : rows.length;

                    return { rows, totalItemCount };
                })
                .catch((err) => {
                    throw err;
                });
        },
        {
            keepPreviousData: true,
        }
    );

    if (isError) {
        return (
            <EuiPanel paddingSize="m">
                <EuiText color="danger">{String(error)}</EuiText>
            </EuiPanel>
        );
    }

    if (isLoading && !data) {
        return (
            <EuiPanel paddingSize="m" style={{ textAlign: "center" }}>
                <EuiLoadingSpinner size="l" />
            </EuiPanel>
        );
    }

    const pagination = {
        pageIndex,
        pageSize,
        totalItemCount: data?.totalItemCount ?? 0,
        pageSizeOptions: [10, 25, 50],
    };

    const columns = [
        { field: "name", name: "Name", truncateText: true },
        { field: "id", name: "ID", truncateText: true },
    ] as const;

    return (
        <EuiPanel paddingSize="m">
            <EuiBasicTable<EntityRow>
                tableCaption="Entity list"
                items={data?.rows ?? []}
                columns={columns as any}
                loading={isLoading}
                pagination={pagination}
                rowProps={(item) => ({
                    style: {
                        backgroundColor: item.nextRowIndex % 2 === 0 ? "#f0f6ff" : "#ffffff",
                    },
                })}
                onChange={({ page }) => {
                    if (!page) return;
                    setPage({ pageIndex: page.index, pageSize: page.size });
                }}
            />
        </EuiPanel>
    );
}

const queryClient = new QueryClient();

function WrappedEntityListWidget(props: EntityListWidgetProps) {
    return (
        <EuiProvider colorMode="light">
            <QueryClientProvider client={queryClient}>
                <EntityListWidget {...props} />
            </QueryClientProvider>
        </EuiProvider>
    );
}

export { EntityListWidget, WrappedEntityListWidget };
export default WrappedEntityListWidget;
