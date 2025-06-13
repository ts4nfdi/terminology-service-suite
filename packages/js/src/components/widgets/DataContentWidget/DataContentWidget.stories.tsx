import { DataContentWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import {
  DataContentWidgetStoryArgs,
  DataContentWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/DataContentWidget/DataContentWidgetStories";
import { DataContentDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import './index'

let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "Search/DataContentWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: DataContentDescription,
      },
    },
  },
  render: (args: DataContentWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();
    return `
<div id="search_bar_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDataContent(
    {
      api:"${args.api}",
      parameter:"${args.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: DataContentWidgetStoryArgTypes,
  args: DataContentWidgetStoryArgs,
};

export {
  NFDI4HealthDataContentWidget,
  SafetyDataContentWidget,
  ErrorDataContentWidget,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/DataContentWidget/DataContentWidgetStories";
