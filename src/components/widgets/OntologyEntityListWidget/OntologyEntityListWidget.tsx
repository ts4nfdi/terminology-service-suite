import React, {useState} from "react";
import {OntologyEntityListWidgetProps} from "../../../app/types";
import {OlsApi} from "../../../api/OlsApi";
import {useQuery} from "react-query";
import {EuiBasicTable, EuiHorizontalRule, EuiLoadingSpinner, EuiSpacer, EuiText} from "@elastic/eui";
import {capitalize, getErrorMessageToDisplay, pluralizeType} from "../../../app/util";
import {Entity} from "../../../model/interfaces";
import {Criteria, EuiBasicTableColumn} from "@elastic/eui/src/components/basic_table/basic_table";

function OntologyEntityListWidget(props: OntologyEntityListWidgetProps) {

    const olsApi = new OlsApi(props.api);

    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const columns: EuiBasicTableColumn<Entity>[] = [
        {
            name: "Name",
            render: (e: Entity) => (<EuiText>{e.getName()}</EuiText>)
        },
        {
            name: "ID",
            render: (e: Entity) => <EuiText>{e.getShortForm()}</EuiText>
        }
    ]

    const onTableChange = ({page}: Criteria<Entity>) => {
        if(page) {
            const { index, size } = page;

            if(size != pageSize) {
                const currStartEntity = pageSize * pageIndex + 1;

                // set index so that it approximately starts with the same entities depicted before
                const newIndex = Math.floor(currStartEntity / size);

                setPageIndex(newIndex);
                setPageSize(size);
            }
            else {
                setPageIndex(index);
            }
        }
    }

    const {
        data: totalItemCount,
        isLoadingTotalItemCount,
        isSuccessTotalItemCount,
        isErrorTotalItemCount,
        errorTotalItemCount
    } = useQuery(
        [props],
        async () => {
            // reset pagination
            setPageIndex(0);
            setPageSize(10);

            const response = await olsApi.getEntityResponse(undefined, props.entityType, props.ontologyId, undefined, props.useLegacy)

            const totalItems = props.useLegacy ? response["page"]["totalElements"] : response["totalElements"];

            return totalItems;
        });

    const {
        data: entities,
        isLoading,
        isSuccess,
        isError,
        error
    } = useQuery(
        [pageIndex, pageSize],
        async () => {
            const response = await olsApi.getEntityObjects(props.entityType, props.ontologyId, `page=${pageIndex}&size=${pageSize}`, props.useLegacy);
            return response;
        });

    function renderEntities(entities: Entity[], totalItemCount: number) {
        const pagination = {
            pageIndex,
            pageSize,
            totalItemCount,
            pageSizeOptions: [10, 20, 50],
            showPerPageOptions: true
        }

        const resultsCount =
            pageSize === 0 ? (
                <strong>All</strong>
            ) : (
                <>
                    <strong>
                        {
                            isLoading ?
                                <EuiLoadingSpinner size="s"/> :
                                <>{pageSize * pageIndex + 1}-{Math.min(pageSize * pageIndex + pageSize, totalItemCount)}</>
                        }
                    </strong>{' '}
                    of {totalItemCount}
                </>
            )

        return <>
            <EuiSpacer size="xl" />
            <EuiText size="xs">
                Showing {resultsCount} <strong>{capitalize(pluralizeType(props.entityType, props.useLegacy))}</strong>
            </EuiText>
            <EuiSpacer size="s" />
            <EuiHorizontalRule margin="none" style={{ height: 2 }} />
            <EuiBasicTable items={entities} columns={columns} pagination={pagination} onChange={onTableChange}/>
        </>
    }

    return (
        <>
            {(isLoading || isLoadingTotalItemCount) && <EuiLoadingSpinner />}
            {(isError || isErrorTotalItemCount) && <EuiText>{getErrorMessageToDisplay(error || errorTotalItemCount, "metadata")}</EuiText>}
            {entities != undefined && entities.length > 0 && totalItemCount != undefined &&
                renderEntities(entities, totalItemCount)
            }
            {entities != undefined && entities.length == 0 &&
                <EuiText>No entities found.</EuiText>
            }
        </>
    )
}

export { OntologyEntityListWidget }