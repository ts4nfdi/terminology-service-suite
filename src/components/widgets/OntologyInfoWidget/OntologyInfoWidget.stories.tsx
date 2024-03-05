import React from "react";
import { OntologyInfoWidget } from "./OntologyInfoWidget";
import {OntologyInfoWidgetProps} from "../../../utils/types";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "OntologyInfoWidget",
  component: OntologyInfoWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    api: {
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    hasTitle: {
      type: { required: false },
      table: {
        defaultValue: { summary: true }
      }
    },
    ontologyId: {
      table: {
        defaultValue: { summary: undefined }
      }
    },
    parameter: {
      type: { required: false },
      table: {
        defaultValue: { summary: undefined }
      }
    },
    showBadges: {
      type: { required: false },
      table: {
        defaultValue: { summary: true }
      }
    },
    useLegacy: {
      type: { required: false },
      table: {
        defaultValue: { summary: true }
      }
    }
  },
  args: {
    hasTitle: true,
    showBadges: true,
    useLegacy: true,
  }
};

const Template = (args: OntologyInfoWidgetProps) => (
  <EuiPanel>
    <OntologyInfoWidget {...args} />
  </EuiPanel>
);

export const OntologyInfoWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
OntologyInfoWidget1.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "atc",
};

export const OntologyInfoWidget2 = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
OntologyInfoWidget2.args = {
  api: "https://semanticlookup.zbmed.de/api/",
  ontologyId: "ncit"
};

export const OntologyInfoWidgetOLS4API = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
OntologyInfoWidgetOLS4API.args = {
  api: "https://www.ebi.ac.uk/ols4/api/",
  useLegacy: false,
  ontologyId: "mp" // "uberon" is also good for demonstration
};
