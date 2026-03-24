"use client";

import {
  EuiButton,
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
        <EuiFormRow
          label="Compare terms"
          helpText="Enter a target IRI to compare against"
          fullWidth
          style={{ marginBottom: -10 }}
        >
          <EuiFlexGroup gutterSize="s" alignItems="center">
            <EuiFlexItem>
              <EuiFieldText
                placeholder="Enter target IRI"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                fullWidth
                compressed
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                size="s"
                onClick={handleApply}
                disabled={!inputValue.trim()}
                color="text"
              >
                Apply
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFormRow>
      </EuiPanel>
    </>
  );
}
