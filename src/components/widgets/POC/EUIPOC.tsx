import React from "react";
import ReactDOM from "react-dom";
import { EuiProvider, EuiIcon, EuiText } from "@elastic/eui";
import registerDefaultIcons from "../../euiicons";

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

/**
 * to be used in plain html+js
 * @param container 
 * @param callback 
 */
function createEUIPoc(
  container: Element,
  callback?: () => void
) {

  registerDefaultIcons();
  ReactDOM.render(<WrappedEUIPOCWidget />, container, callback);
}

function WrappedEUIPOCWidget() {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
        <EuiPOC />
    </EuiProvider>
  );
}

export { EuiPOC, createEUIPoc };