import {
  commonTermDepictionWidgetPlay,
  TermDepictionWidget3DArgs,
  TermDepictionWidgetExampleArgs,
  TermDepictionWidgetStoryArgs,
  TermDepictionWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/TermDepictionWidget/TermDepictionWidgetStories";
import "./index";
import { TermDepictionDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  TermDepictionWidget,
  TermDepictionWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";

let counter = 0;

function getIncNum() {
  return counter++;
}

const meta = {
  title: "Additional Entity Metadata/TermDepictionWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: TermDepictionDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: TermDepictionWidgetProps) => {
    const num = getIncNum();

    return `
<div id="term_depiction_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDepiction(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",                
        useLegacy:${args.useLegacy},
    },
    document.querySelector('#term_depiction_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: TermDepictionWidgetStoryArgTypes,
  args: TermDepictionWidgetStoryArgs,
} satisfies Meta<typeof TermDepictionWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TermDepictionWidgetExample = {
  args: TermDepictionWidgetExampleArgs,
  play: commonTermDepictionWidgetPlay,
};

export const TermDepictionWidget3D = {
  args: TermDepictionWidget3DArgs,
  play: commonTermDepictionWidgetPlay,
};
