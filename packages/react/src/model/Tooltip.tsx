import React, {ReactElement} from "react";
import {EuiIconTip} from "@elastic/eui";

export default function Tooltip(
    {
        text
    }: {
        text: string
    }
): ReactElement {
    return <EuiIconTip type="iInCircle" color={"subdued"} content={text} />;
}