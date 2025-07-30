import {
  commonEntityOntoListWidgetPlay,
  EntityOntoListWidgetStoryArgs,
  EntityOntoListWidgetStoryArgTypes, exceedsMaxDisplayArgs, legacyApiArgs, v2ApiEFOArgs, v2ApiONSArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/EntityOntoListWidget/EntityOntoListWidgetStories";
import './index'
import { EntityOntoListDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { EntityOntoListWidget, EntityOntoListWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react";


let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<EntityOntoListWidgetProps> = {
  title: "Additional Entity Metadata/EntityOntoListWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityOntoListDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: EntityOntoListWidgetProps) => {
    const num = getIncNum();

    return `
<div id="entity_onto_list_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityOntoList(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:"${args.useLegacy}",
        onNavigateToOntology:${args.onNavigateToOntology},
        className:"${args.className}"
    },
    document.querySelector('#entity_onto_list_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: EntityOntoListWidgetStoryArgTypes,
  args: EntityOntoListWidgetStoryArgs,
} satisfies Meta<typeof EntityOntoListWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const v2ApiEFO: Story = {
  args: v2ApiEFOArgs,
  play: commonEntityOntoListWidgetPlay
};

export const v2ApiONS: Story = {
  args: v2ApiONSArgs,
  play: commonEntityOntoListWidgetPlay
};

export const legacyApi: Story = {
  args: legacyApiArgs,
  play: commonEntityOntoListWidgetPlay
};

export const exceedsMaxDisplay: Story = {
  args: exceedsMaxDisplayArgs,
  play: commonEntityOntoListWidgetPlay
};