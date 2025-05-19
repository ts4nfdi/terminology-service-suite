import React from "react";
import {useState} from 'react';
import { EuiProvider, EuiIcon, EuiText } from "@elastic/eui";

function EuiPOC() {
  return (
    <EuiProvider>
      <EuiIcon type="logoElasticsearch" size="xl" />
      <EuiText><p>Hello World!</p></EuiText>
    </EuiProvider>
  );
}

export default EuiPOC;