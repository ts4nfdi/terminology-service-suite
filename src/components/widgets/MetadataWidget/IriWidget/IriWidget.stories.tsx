import React from "react";
import { IriWidget, IriWidgetProps } from "./IriWidget";
import { EuiPanel } from "@elastic/eui";

export default {
  title: "IriWidget",
  component: IriWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      Iri: "Color of the text, names, hex or rgb",
      control: {
        type: "radio",
        options: [
          "default",
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
    },
    descText: {
      Iri:
          "Set your own text manually that overwrites the text fetched from the API",
    },
    iri: {
      Iri: "Object IRI whose Iri you want to fetch. For ontologies this is ignored, since the 'ontologyID' arg is sufficient.",
    },
  },
};

const Template = (args: IriWidgetProps) => (
    <>
      <EuiPanel>
        <IriWidget {...args} />
      </EuiPanel>
    </>
);

export const IriWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
IriWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
};
