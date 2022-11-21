import React from "react";
import { EuiCard, EuiFlexItem, EuiLoadingSpinner, EuiSpacer, EuiText } from "@elastic/eui";
import { apiCallFn, OlsApi } from "../../../api/OlsApi";
import { useQuery } from 'react-query'

export interface TermInfoWidgetProps {
    api: string;
    termIri: string;
    ontologyId?: string;
    hasTitle?: boolean;
}

interface TermInfo {
    label: string,
    synonyms: [],
    annotation: {},
}

const DEFAULT_HAS_TITLE = true;

async function getTermData(apiCall: apiCallFn, termIri: string, ontologyId?: string): Promise<TermInfo> {
    const response = await apiCall(undefined, undefined, { termIri, ontologyId });
    return {
        label: response._embedded.terms[0].label,
        synonyms: response._embedded.terms[0].synonyms,
        annotation: response._embedded.terms[0].annotation,
    };
}

function TermInfoWidget(props: TermInfoWidgetProps) {
    const { api, termIri, ontologyId, hasTitle = DEFAULT_HAS_TITLE, ...rest } = props;
    const olsApi = new OlsApi(api);

    const {
        data: termInfo,
        isLoading: isLoadingTermInfo,
        isSuccess: isSuccessTermInfo,
    } = useQuery([api, termIri, ontologyId, "termInfo"], () => {
        return getTermData(olsApi.getTerm, termIri, ontologyId);
    });

    function generateDisplayItems(item: any) {
        return (
            item ?
                item.length > 1 ?
                    item.map((element: string, i: any) =>
                        <dd key={i}>{element.split(",")}</dd>)
                    : item
                : "-"
        );
    }


    return (
        <>
            <EuiCard
                title={hasTitle ? "Term Information" : ""}
                layout="horizontal"
            >
                {isLoadingTermInfo && <EuiLoadingSpinner size={'s'}/>}
                {isSuccessTermInfo &&
                    <EuiText {...rest}>
                        <EuiFlexItem>
                            <b>Label</b>
                            <p>{termInfo?.label ? termInfo?.label : "-"}</p>
                        </EuiFlexItem>
                        <EuiFlexItem>
                            <b>Synonyms</b>
                            {generateDisplayItems(termInfo?.synonyms)}
                        </EuiFlexItem>
                        <EuiSpacer/>
                        {termInfo ? Object.entries(termInfo.annotation).map(([annoKey, annoVal]) => (
                            <EuiFlexItem grow={false} key={annoKey}>
                                <b>{annoKey}:</b>
                                <p>{generateDisplayItems(annoVal)}</p>
                            </EuiFlexItem>
                        )) : ""}
                    </EuiText>
                }
            </EuiCard>
        </>
    );
}

export { TermInfoWidget };
