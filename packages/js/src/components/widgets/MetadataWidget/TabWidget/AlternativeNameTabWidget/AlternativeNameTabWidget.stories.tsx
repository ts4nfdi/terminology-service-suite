import {
  AlternativeNameTabWidget1Args,
  AlternativeNameTabWidgetStoryArgs,
  AlternativeNameTabWidgetStoryArgTypes,
  commonAlternativeNameTabWidgetPlay,
  DefiningOntologyUnavailableArgs,
  SelectingDefiningOntologyArgs,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TabWidget/AlternativeNameTabWidget/AlternativeNameTabWidgetStories";
import "./index";
import { AlternativeNameTabDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  AlternativeNameTabWidget,
  AlternativeNameTabWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";

let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<AlternativeNameTabWidgetProps> = {
  title: "Entity Metadata/AlternativeNameTabWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: AlternativeNameTabDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: AlternativeNameTabWidgetProps) => {
    const num = getIncNum();

    return `
<div id="alternative_name_tab_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createAlternativeNameTab(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:"${args.useLegacy}",
        className:"${args.className}"
    },
    document.querySelector('#alternative_name_tab_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: AlternativeNameTabWidgetStoryArgTypes,
  args: AlternativeNameTabWidgetStoryArgs,
} satisfies Meta<typeof AlternativeNameTabWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AlternativeNameTabWidget1: Story = {
  args: AlternativeNameTabWidget1Args,
  play: commonAlternativeNameTabWidgetPlay,
};

export const SelectingDefiningOntology: Story = {
  args: SelectingDefiningOntologyArgs,
  play: commonAlternativeNameTabWidgetPlay,
};

export const DefiningOntologyUnavailable: Story = {
  args: DefiningOntologyUnavailableArgs,
  play: commonAlternativeNameTabWidgetPlay,
};
