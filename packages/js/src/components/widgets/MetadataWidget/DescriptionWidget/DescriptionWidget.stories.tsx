import {
  commonDescriptionWidgetPlay, DefiningOntologyUnavailableArgs,
  DescriptionWidget1Args,
  DescriptionWidgetStoryArgs,
  DescriptionWidgetStoryArgTypes, ErrorFetchingDataArgs, SelectingDefiningOntologyArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/DescriptionWidget/DescriptionWidgetStories";
import './index'
import { DescriptionDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { DescriptionWidget, DescriptionWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<DescriptionWidgetProps> = {
  title: "Entity Metadata/DescriptionWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: DescriptionDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: DescriptionWidgetProps) => {
    const num = getIncNum();

    return `
<div id="description_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDescription(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        descText:"${args.descText}",
        thingType:"${args.thingType}",
        parameter:"${args.parameter}",
        color:"${args.color}",
        useLegacy:"${args.useLegacy}",
        className:"${args.className}",
        
    },
    document.querySelector('#description_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: DescriptionWidgetStoryArgTypes,
  args: DescriptionWidgetStoryArgs,
} satisfies Meta<typeof DescriptionWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DescriptionWidget1: Story = {
  args: DescriptionWidget1Args,
  play: commonDescriptionWidgetPlay
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonDescriptionWidgetPlay
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonDescriptionWidgetPlay
};

export const ErrorFetchingData: Story = {
  args: ErrorFetchingDataArgs,
  play: commonDescriptionWidgetPlay
};
