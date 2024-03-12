import React from "react";
import { IriWidget } from "./IriWidget";
import { IriWidgetProps } from "../../../../utils/types";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "IriWidget",
  component: IriWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      table: {
        type: { summary: `EuiLinkColor | string` },
      },
      control: {
        type: "radio",
      },
      options: [
        "primary",
        "subdued",
        "success",
        "accent",
        "danger",
        "warning",
        "ghost",
        "#00FFFF",
        "rgb(255,0,255)",
      ],
    },
    iriText: {},
    iri: {
      description: "Object IRI that you want to link.",
    },
    parameter: {},
  },
  args: {
    parameter: "collection=nfdi4health",
  }
};

const Template = (args: IriWidgetProps) => (
  <EuiPanel>
    <IriWidget {...args} />
  </EuiPanel>
);

export const IriWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
IriWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
};
