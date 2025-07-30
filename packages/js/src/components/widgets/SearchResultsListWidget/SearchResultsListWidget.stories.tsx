import { SearchResultsListWidget, SearchResultsListWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import {
  commonSearchResultsListWidgetPlay,
  ErrorSearchResultsListArgs,
  SearchResultsListNFDI4HealthArgs,
  SearchResultsListOls4Args,
  SearchResultsListSafetyArgs,
  SearchResultsListWidgetStoryArgs,
  SearchResultsListWidgetStoryArgTypes,
  TibDataPlantArgs,
  TibNFDI4CHEMArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchResultsListWidget/SearchResultsListWidgetStories";
import { SearchResultsListDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import './index'
import type { Meta, StoryObj } from "@storybook/react-vite";

let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<SearchResultsListWidgetProps> = {
  title: "Search/SearchResultsListWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: SearchResultsListDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: SearchResultsListWidgetProps) => {
    const num = getIncNum();

    return `
<div id="search_results_list_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createSearchResultsList(
    {
        api:"${args.api}",
        query:"${args.query}",
        parameter:"${args.parameter}",
        initialItemsPerPage:${args.initialItemsPerPage},
        itemsPerPageOptions:[${args.itemsPerPageOptions}],
        targetLink:"${args.targetLink}",
        useLegacy:"${args.useLegacy}",
    },
    document.querySelector('#search_results_list_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: SearchResultsListWidgetStoryArgTypes,
  args: SearchResultsListWidgetStoryArgs,
} satisfies Meta<typeof SearchResultsListWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SearchResultsListSafety: Story = {
  args: SearchResultsListSafetyArgs,
  play: commonSearchResultsListWidgetPlay
};

export const SearchResultsListNFDI4Health: Story = {
  args: SearchResultsListNFDI4HealthArgs,
  play: commonSearchResultsListWidgetPlay
};

export const ErrorSearchResultsList: Story = {
  args: ErrorSearchResultsListArgs,
  play: commonSearchResultsListWidgetPlay
};

export const TibNFDI4CHEM: Story = {
  args: TibNFDI4CHEMArgs,
  play: commonSearchResultsListWidgetPlay
};

export const TibDataPlant: Story = {
  args: TibDataPlantArgs,
  play: commonSearchResultsListWidgetPlay
};

export const SearchResultsListOls4: Story = {
  args: SearchResultsListOls4Args,
  play: commonSearchResultsListWidgetPlay
};