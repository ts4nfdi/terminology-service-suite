import { EuiIcon, EuiLink, EuiPanel, EuiText, EuiTitle } from "@elastic/eui";

import { MappingDetailCardWidgetProps } from "../../../app";

function MappingDetailCardWidget(props: MappingDetailCardWidgetProps) {
  const { api, source } = props;

  const fields = [
    {
      label: "API",
      value: api || "—",
    },
    {
      label: "Source",
      value: source ? (
        <EuiLink href={source} target="_blank" rel="noreferrer">
          {source}
        </EuiLink>
      ) : (
        "—"
      ),
    },
    {
      label: "Identifier",
      value: "This is an Identifier",
    },
    {
      label: "Status",
      value: "This is a simple version of the card.",
    },
  ];

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

export function WrappedMappingDetailCardWidget() {
  return <MappingDetailCardWidget api={""} source={""} />;
}

export { MappingDetailCardWidget };
export default WrappedMappingDetailCardWidget;
