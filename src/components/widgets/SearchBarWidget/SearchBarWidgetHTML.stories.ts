import "semlookp-widgets";
import { SearchBarWidgetProps } from "../../../app/types";
import { SearchBarWidgetStoryArgs, SearchBarWidgetStoryArgTypes } from "./SearchBarWidgetStories";

let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "SearchBarWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  render: (args: SearchBarWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `
<div id="search_bar_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createSearchBar(
    {
      api:"${args.api}",
      query:"${args.query}",
      onSearchValueChange:${args.onSearchValueChange.toString().replace(/(\r\n|\n|\r)/gm, "")},
      selectionChangedEvent:${args.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm, "")},
      parameter:"${args.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: SearchBarWidgetStoryArgTypes,
  args: SearchBarWidgetStoryArgs
};


export {
  SearchBarWidgetDefault,
  TibNFDI4CHEM,
  TibDataPlant
} from "./SearchBarWidgetStories";
