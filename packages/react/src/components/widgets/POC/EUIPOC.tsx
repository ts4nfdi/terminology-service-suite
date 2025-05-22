import React from "react";
import ReactDOM from "react-dom";
import { EuiProvider, EuiText, EuiIcon } from "@elastic/eui";

/**
 * react component
 */
function EuiPOC() {
  return (
    <EuiProvider>
      <EuiIcon type="logoElasticsearch" size="xl" />
      <EuiText><p>Hello World!</p></EuiText>
    </EuiProvider>
  );
}

export { EuiPOC };