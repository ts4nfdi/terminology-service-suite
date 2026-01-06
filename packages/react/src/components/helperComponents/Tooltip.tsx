import { EuiIconTip } from "@elastic/eui";
import { ReactElement } from "react";

export default function Tooltip({ text }: { text: string }): ReactElement {
  return (
    <EuiIconTip
      css={{
        maxWidth: "580px",
        backgroundColor: "rgba(0,0,0,0.8)",
        font: "menu",
      }}
      type="iInCircle"
      color={"subdued"}
      position={"right"}
      content={<div style={{ whiteSpace: "pre-line" }}>{text}</div>}
    />
  );
}
