import React, {useState} from "react";
import {OntologyEntityListWidgetProps} from "../../../app/types";
import {OlsApi} from "../../../api/OlsApi";
import {useQuery} from "react-query";
import {EuiBasicTable, EuiHorizontalRule, EuiLoadingSpinner, EuiSpacer, EuiText} from "@elastic/eui";
import {capitalize, getErrorMessageToDisplay, pluralizeType} from "../../../app/util";
import {Entity} from "../../../model/interfaces";
import {Criteria, EuiBasicTableColumn} from "@elastic/eui/src/components/basic_table/basic_table";
import {isClassTypeName, isIndividualTypeName, isPropertyTypeName} from "../../../model/ModelTypeCheck";


function OntologyEntityListWidget(props: OntologyEntityListWidgetProps) {

    const olsApi = new OlsApi(props.api);

    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const {
        data: totalItemCount,
        isLoadingTotalItemCount,
        isSuccessTotalItemCount,
        isErrorTotalItemCount,
        errorTotalItemCount
    } = useQuery(
        [props],
        async () => {
            // TODO: NumClasses etc. on ontology response do not correspond to NumClasses on /classes api route. This causes a pagination bug. Why is that?
            const response = await olsApi.getOntologyObject(props.ontologyId, undefined, props.useLegacy)

            // reset pagination
            setPageIndex(0);
            setPageSize(10);

            if(isClassTypeName(props.entityType)) return response.getNumClasses();
            if(isPropertyTypeName(props.entityType)) return response.getNumProperties();
            if(isIndividualTypeName(props.entityType)) return response.getNumIndividuals();
        });

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
            const { index: pageIndex, size: pageSize } = page;
            setPageIndex(pageIndex);
            setPageSize(pageSize);
        }
    }

    const {
        data: entities,
        isLoading,
        isSuccess,
        isError,
        error
    } = useQuery(
        [pageIndex, pageSize],
        async () => {
            return olsApi.getEntityObjects(props.entityType, props.ontologyId, `page=${pageIndex}&size=${pageSize}`, props.useLegacy)
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
                        {pageSize * pageIndex + 1}-{Math.min(pageSize * pageIndex + pageSize, totalItemCount)}
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
            {isLoading && <EuiLoadingSpinner />}
            {isError && <EuiText>{getErrorMessageToDisplay(error, "metadata")}</EuiText>}
            {isSuccess && entities && totalItemCount &&
                renderEntities(entities, totalItemCount)
            }
        </>
    )
}

export { OntologyEntityListWidget }