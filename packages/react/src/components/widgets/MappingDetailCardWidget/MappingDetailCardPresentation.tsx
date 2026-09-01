import { EuiButtonIcon, EuiIcon, EuiPanel, EuiText } from "@elastic/eui";
import type { ReactNode } from "react";

type MappingDetailCardField = {
  label: string;
  value: ReactNode;
};

type MappingDetailCardPresentationProps = {
  fields: MappingDetailCardField[];
  MappingDetailCardBackgroundColor?: string;
  onClose?: () => void;
};

export default function MappingDetailCardPresentation(
  props: MappingDetailCardPresentationProps,
) {
  const {
    fields,
    MappingDetailCardBackgroundColor = "#fff5fa",
    onClose,
  } = props;

  return (
    <EuiPanel
      hasShadow={false}
      paddingSize="m"
      style={{
        overflow: "hidden",
        border: "none",
        borderRadius: 14,
        background: MappingDetailCardBackgroundColor,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "8px",
        }}
      >
        {onClose ? (
          <EuiButtonIcon
            iconType="cross"
            aria-label="Close mapping details"
            title="Close"
            color="text"
            onClick={onClose}
          />
        ) : (
          <EuiIcon type="info" size="m" color="primary" />
        )}
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
