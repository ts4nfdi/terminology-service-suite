import React from "react";
import { IriWidget, IriWidgetProps } from "./IriWidget";

export default {
  title: "IriWidget",
  component: IriWidget,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    api: {
      description: "API",
      control: {
        type: "radio",
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
          "http://localhost:8080/api/",
          "http://localhost:5000/api/",
        ],
      },
    },
  },
};

const Template = (args: IriWidgetProps) => <IriWidget {...args} />;

export const IriWidget1 = Template.bind({});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
IriWidget1.args = {
  iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
  api: "https://semanticlookup.zbmed.de/ols/api/",
};
