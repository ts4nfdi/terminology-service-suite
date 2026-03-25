"use client";

import {
  EuiButton,
  EuiButtonIcon,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiPanel,
} from "@elastic/eui";
import React, { useCallback, useState } from "react";
import { ComparisonInputProps } from "../../../../../app";

export function ComparisonInput({
  entityLabel,
  onTargetIriChange,
  initialTargetIri,
  className,
}: ComparisonInputProps) {
  const [inputValue, setInputValue] = useState(initialTargetIri || "");
  const [appliedIri, setAppliedIri] = useState<string | undefined>(
    initialTargetIri,
  );

  const handleApply = useCallback(() => {
    const trimmed = inputValue.trim();
    const newIri = trimmed || undefined;
    setAppliedIri(newIri);
    onTargetIriChange(newIri);
  }, [inputValue, onTargetIriChange]);

  // reset input when initial changes (from prop)
  React.useEffect(() => {
    setInputValue(initialTargetIri || "");
    if (initialTargetIri !== appliedIri) {
      setAppliedIri(initialTargetIri);
    }
  }, [initialTargetIri]);

  return (
    <>
      <EuiPanel hasShadow={false} className={className} paddingSize={"m"}>
        <EuiFormRow fullWidth style={{ marginBottom: -10 }}>
          <EuiFlexGroup gutterSize="s" alignItems="center">
            <EuiFlexItem>
              <EuiFieldText
                placeholder="Enter a target IRI to compare against"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                fullWidth
                compressed
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onTargetIriChange(inputValue.trim() || undefined);
                  }
                }}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              {inputValue && (
                <EuiButtonIcon
                  iconType="cross"
                  aria-label="Clear target IRI"
                  onClick={() => {
                    setInputValue("");
                    onTargetIriChange(undefined);
                  }}
                />
              )}
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                size="s"
                onClick={handleApply}
                disabled={!inputValue.trim()}
                color="text"
              >
                Compare
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFormRow>
      </EuiPanel>
    </>
  );
}
