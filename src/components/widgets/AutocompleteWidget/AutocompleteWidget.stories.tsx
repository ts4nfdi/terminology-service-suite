import React from "react";
import { AutocompleteWidget } from "./AutocompleteWidget";
import "@elastic/eui/dist/eui_theme_light.json";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof AutocompleteWidget> = {
  title: "Autocomplete Widget",
  component: AutocompleteWidget,
  argTypes: {
    api: {
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
      ],
    },
    selectionChangedEvent: {
      action: "selectionChangedEvent",
    },
    placeholder: {
    },
    selectOption: {},
    parameter: {
    },
    hasShortSelectedLabel: {
      description: "If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.",
    },
    allowCustomTerms: {
      description: "If true, custom terms that are not found in any ontology can be added.",
    }
  },
  args: {
    api: "https://semanticlookup.zbmed.de/ols/api/",
    selectionChangedEvent: () => {return;},
    placeholder: "Search for Term",
    selectOption: {},
    parameter: "ontology=mesh,efo&type=class&collection=nfdi4health",
    hasShortSelectedLabel: true,
    allowCustomTerms: false,
  },
  render: (args) => <AutocompleteWidget {...args} />,
};
export default meta;

type Story = StoryObj<typeof AutocompleteWidget>;

export const withDefaults: Story = {
}

export const withValue: Story = {
  args: {
    selectOption: { iri: "http://purl.bioontology.org/ontology/MESH/D000086382" },
  },
}

export const withCustomValue: Story = {
  args: {
    allowCustomTerms: true,
    selectOption: { label: "freetext" },
  },
}

export const withInvalidValue: Story = {
  args: {
    selectOption: { iri: "ht3stp://purl.bioontology.org/ontology/MESH/D000086382", },
  },
}

export const withGermanInput: Story = {
  args: {
    api: "https://semanticlookup.zbmed.de/api/",
    parameter: "collection=nfdi4health&lang=de&type=class",
  },
}

export const displaySelectedEntityWithLongForm: Story = {
  args: {
    hasShortSelectedLabel: false
  },
}

export const allowAddingCustomTerms: Story = {
  args: {
    allowCustomTerms: true
  },
}


