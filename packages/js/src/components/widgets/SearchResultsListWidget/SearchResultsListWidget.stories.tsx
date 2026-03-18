import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  SearchResultsListWidget,
  SearchResultsListWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import { SearchResultsListDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  commonSearchResultsListWidgetPlay,
  DefaultArgs,
  NFDI4HealthArgs,
  OpenEnergyPlatformArgs,
  SearchResultsListWidgetStoryArgs,
  SearchResultsListWidgetStoryArgTypes,
  TibDataPlantArgs,
  TibNFDI4CHEMArgs,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchResultsListWidget/SearchResultsListWidgetStories";
import "./index";

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
        onNavigateToOntology:${args.onNavigateToOntology},
        className:"${args.className}"
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

export const Default: Story = {
  args: DefaultArgs,
  play: commonSearchResultsListWidgetPlay,
};

export const NFDI4Health: Story = {
  args: NFDI4HealthArgs,
  play: commonSearchResultsListWidgetPlay,
};

export const TibNFDI4CHEM: Story = {
  args: TibNFDI4CHEMArgs,
  play: commonSearchResultsListWidgetPlay,
};

export const TibDataPlant: Story = {
  args: TibDataPlantArgs,
  play: commonSearchResultsListWidgetPlay,
};

export const OpenEnergyPlatform: Story = {
  args: OpenEnergyPlatformArgs,
  play: commonSearchResultsListWidgetPlay,
};
