import {
  commonCrossRefWidgetPlay,
  CrossRefTabWidget1Args,
  CrossRefWidgetStoryArgs,
  CrossRefWidgetStoryArgTypes, DefiningOntologyUnavailableArgs, SelectingDefiningOntologyArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/CrossRefWidget/CrossRefWidgetStories";
import './index'
import { CrossRefTabDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { CrossRefTabWidget, CrossRefWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react";



let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<CrossRefWidgetProps> = {
  title: "Additional Entity Metadata/CrossRefTabWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: CrossRefTabDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: CrossRefWidgetProps) => {
    const num = getIncNum();

    return `
<div id="cross_ref_tab_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createCrossRefTab(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:"${args.useLegacy}",
        className:"${args.className}"
    },
    document.querySelector('#cross_ref_tab_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: CrossRefWidgetStoryArgTypes,
  args: CrossRefWidgetStoryArgs,
} satisfies Meta<typeof CrossRefTabWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CrossRefTabWidget1: Story = {
  args: CrossRefTabWidget1Args,
  play: commonCrossRefWidgetPlay
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonCrossRefWidgetPlay
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonCrossRefWidgetPlay
};
