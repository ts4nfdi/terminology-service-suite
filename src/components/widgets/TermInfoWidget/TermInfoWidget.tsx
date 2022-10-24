import React from "react";
import { EuiCard, EuiText } from "@elastic/eui";
import { OlsApi } from "../../../api/OlsApi";

export interface TermInfoWidgetProps {
    api: string;
}

const NOT_AVAILABLE = "n/a";

function TermInfoWidget(props: TermInfoWidgetProps) {
    const { api, ...rest } = props;
    const olsApi = new OlsApi(api);

    return (
        <>
            <EuiCard
                title="Term Information"
                layout="horizontal"
            >
                <EuiText {...rest}>
                    <dt>Label</dt>
                    <dd>Testlabel</dd>
                    <dt>Synonyms</dt>
                    <ul>
                        <li>test</li>
                    </ul>
                </EuiText>
            </EuiCard>
        </>
    );
}

export { TermInfoWidget };
