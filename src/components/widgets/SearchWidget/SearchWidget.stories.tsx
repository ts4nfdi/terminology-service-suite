import React from "react";
import { SearchWidget, SearchWidgetProps } from "./SearchWidget";
import "@elastic/eui/dist/eui_theme_light.json";

export default {
  title: "/Widgets/SearchWidget",
  component: SearchWidget,
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

const Template = (args: SearchWidgetProps) => <SearchWidget {...args} />;

export const SearchWidget1 = Template.bind({});
