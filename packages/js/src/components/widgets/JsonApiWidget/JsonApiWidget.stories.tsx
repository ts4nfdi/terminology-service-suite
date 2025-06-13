import {
  JsonApiWidgetStoryArgs,
  JsonApiWidgetStoryArgTypes
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/JsonApiWidget/JsonApiWidgetStories";
import './index'
import { JsonApiDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { JsonApiWidgetProps } from "@ts4nfdi/terminology-service-suite/src";

let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "API/JsonApiWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: JsonApiDescription,
      },
    },
  },
  render: (args: JsonApiWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `
<div id="json_api_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createJsonApi(
    {
        apiQuery:"${args.apiQuery}",
        buttonText:"${args.buttonText}",
        buttonSize:"${args.buttonSize}",
    },
    document.querySelector('#json_api_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: JsonApiWidgetStoryArgTypes,
  args: JsonApiWidgetStoryArgs,
};

export { JsonApiWidgetDefault } from "@ts4nfdi/terminology-service-suite/src/components/widgets/JsonApiWidget/JsonApiWidgetStories";

