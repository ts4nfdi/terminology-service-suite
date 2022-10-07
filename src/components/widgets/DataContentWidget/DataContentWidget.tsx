import React, { useEffect, useState } from "react";
import { EuiText, EuiLoadingSpinner, EuiCard } from "@elastic/eui";
import { EuiTextProps } from "@elastic/eui/src/components/text/text";
import { useQuery } from 'react-query'

export interface DataContentWidgetProps {
    api: string;
}

function DataContentWidget(props: DataContentWidgetProps) {
    const { api, ...rest } = props;
    const [totalOntologies, setTotalOntologies] = useState("Not available")

    const {
        data: ontologiesData,
        isSuccess: isSuccessOntologies,
        isLoading: isLoadingOntologies,
        isError: isErrorOntologies
    } = useQuery(
        ["ontologiesData", api],
        () => {
            return fetch(`${api}ontologies`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    Content_Type: "application/json",
                },
            }).then(response => response.json())
                .then(response => {
                    if (response.page.totalElements != null) {
                        return response.page.totalElements;
                    } else {
                        return "Not available"
                    }
                });
        }
    )

    useEffect(() => {
        if (isSuccessOntologies) {
            setTotalOntologies(ontologiesData)
        }
    }, [ontologiesData])


    return (
        <>
            <EuiCard title={"Data Content"}>
                <EuiText {...rest}>
                    <ul>
                        {isSuccessOntologies && <li>{totalOntologies} ontologies and terminologies</li>}
                        {isLoadingOntologies && <EuiLoadingSpinner/>}
                        {isErrorOntologies && <li>An error occured</li>}
                    </ul>

                </EuiText>
            </EuiCard>
        </>
    );
}

export { DataContentWidget };
