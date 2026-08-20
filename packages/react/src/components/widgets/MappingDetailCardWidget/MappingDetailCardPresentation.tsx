import { EuiIcon, EuiPanel, EuiText, EuiTitle } from "@elastic/eui";
import type { ReactNode } from "react";

type MappingDetailCardField = {
  label: string;
  value: ReactNode;
};

type MappingDetailCardPresentationProps = {
  fields: MappingDetailCardField[];
};

export default function MappingDetailCardPresentation(
  props: MappingDetailCardPresentationProps,
) {
  const { fields } = props;

  return (
    <EuiPanel
      hasShadow={false}
      paddingSize="m"
      style={{
        overflow: "hidden",
        border: "none",
        borderRadius: 14,
        background: "#fff5fa",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <div>
          <EuiTitle size="xs">
            <h2 style={{ margin: 0 }}>Mapping details</h2>
          </EuiTitle>
          <EuiText size="xs" color="subdued">
            Selected mapping summary
          </EuiText>
        </div>

        <EuiIcon type="iInCircle" size="m" color="primary" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "12px",
        }}
      >
        {fields.map((field) => (
          <div
            key={field.label}
            style={{
              borderRadius: 12,
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              padding: "14px 16px",
              minHeight: 84,
            }}
          >
            <EuiText size="xs" color="subdued">
              {field.label}
            </EuiText>
            <div
              style={{
                marginTop: "8px",
                color: "#172237",
                fontSize: "14px",
                lineHeight: 1.5,
                wordBreak: "break-word",
              }}
            >
              {field.value}
            </div>
          </div>
        ))}
      </div>
    </EuiPanel>
  );
}
