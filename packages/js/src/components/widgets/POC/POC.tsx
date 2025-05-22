import React from "react";
import ReactDOM from "react-dom";
import { EuiProvider } from "@elastic/eui";
import { EuiPOC } from "@ts4nfdi/terminology-service-suite";

/**
 * to be used in plain html+js
 * @param container 
 * @param callback 
 */
function createEUIPoc(
  container: Element,
  callback?: () => void
) {

  // registerDefaultIcons();
  ReactDOM.render(<WrappedEUIPOCWidget />, container, callback);
}

function WrappedEUIPOCWidget() {
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
        <EuiPOC />
    </EuiProvider>
  );
}

export { createEUIPoc };