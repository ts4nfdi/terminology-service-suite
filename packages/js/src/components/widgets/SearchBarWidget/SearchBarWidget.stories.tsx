import { SearchBarWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import {
  commonSearchBartWidgetPlay,
  SearchBarWidgetDefaultArgs,
  SearchBarWidgetStoryArgs,
  SearchBarWidgetStoryArgTypes, TibDataPlantArgs, TibNFDI4CHEMArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchBarWidget/SearchBarWidgetStories";
import { SearchBarDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import './index'
import type { Meta, StoryObj } from "@storybook/react";
import { SearchBarWidget } from "@ts4nfdi/terminology-service-suite/src";

let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<SearchBarWidgetProps> = {
  title: "Search/SearchBarWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: SearchBarDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: SearchBarWidgetProps) => {
    const num = getIncNum();
    return `
<div id="search_bar_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createSearchBar(
    {
      api:"${args.api}",
      query:"${args.query}",
      selectionChangedEvent:${args.selectionChangedEvent
        .toString()
        .replace(/(\r\n|\n|\r)/gm, "")},
      parameter:"${args.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: SearchBarWidgetStoryArgTypes,
  args: SearchBarWidgetStoryArgs,
} satisfies Meta<typeof SearchBarWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SearchBarWidgetDefault: Story = {
  args: SearchBarWidgetDefaultArgs,
  play: commonSearchBartWidgetPlay
};

export const TibNFDI4CHEM: Story = {
  args: TibNFDI4CHEMArgs,
  play: commonSearchBartWidgetPlay
};

export const TibDataPlant: Story = {
  args: TibDataPlantArgs,
  play: commonSearchBartWidgetPlay
};