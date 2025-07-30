import {
  commonJsonApiWidgetPlay,
  JsonApiWidgetDefaultArgs,
  JsonApiWidgetStoryArgs,
  JsonApiWidgetStoryArgTypes
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/JsonApiWidget/JsonApiWidgetStories";
import './index'
import { JsonApiDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { JsonApiWidget, JsonApiWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<JsonApiWidgetProps> = {
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
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: JsonApiWidgetProps) => {
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
} satisfies Meta<typeof JsonApiWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const JsonApiWidgetDefault = {
  args: JsonApiWidgetDefaultArgs,
  play: commonJsonApiWidgetPlay
};