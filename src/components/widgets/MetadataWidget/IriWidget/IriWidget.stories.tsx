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
      description: "Color of the text, names, hex or rgb",
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
    iriText: {
      description:
          "Set your own text manually, which will show as a clickable link instead of the IRI.",
    },
    iri: {
      description: "Object IRI that you want to link.",
    },
    parameter: {
      defaultValue: "collection=nfdi4health",
      type: { required: false }
    },
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
