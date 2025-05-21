import "ts4nfdi-widgets";
import { SearchBarWidgetProps } from "@ts4nfdi/terminology-service-suite/src/app/types";
import {
  SearchBarWidgetStoryArgs,
  SearchBarWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchBarWidget/SearchBarWidgetStories";
import { SearchBarDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";

let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
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
  render: (args: SearchBarWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
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
};

export {
  SearchBarWidgetDefault,
  TibNFDI4CHEM,
  TibDataPlant,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/SearchBarWidget/SearchBarWidgetStories";
