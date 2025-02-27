import "ts4nfdi-widgets";
import {
  SearchResultsListWidgetStoryArgs,
  SearchResultsListWidgetStoryArgTypes,
} from "./SearchResultsListWidgetStories";
import { SearchResultsListWidgetProps } from "../../../app/types";
import { SearchResultsListDescription } from "../../../app/widgetDescriptions";

let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
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
  render: (args: SearchResultsListWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
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
};

export {
  SearchResultsListSafety,
  SearchResultsListNFDI4Health,
  ErrorSearchResultsList,
  TibNFDI4CHEM,
  TibDataPlant,
  SearchResultsListOls4,
} from "./SearchResultsListWidgetStories";
