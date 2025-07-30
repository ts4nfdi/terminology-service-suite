import {
  commonEntityDefinedByWidgetPlay,
  emptyInDefiningOntologyArgs,
  EntityDefinedByWidgetStoryArgs,
  EntityDefinedByWidgetStoryArgTypes, legacyApiArgs, v2ApiONSArgs
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/EntityDefinedByWidget/EntityDefinedByWidgetStories";
import './index'
import { EntityDefinedByDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { EntityDefinedByWidget, EntityDefinedByWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";


let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<EntityDefinedByWidgetProps> = {
  title: "Additional Entity Metadata/EntityDefinedByWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityDefinedByDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: EntityDefinedByWidgetProps) => {
    const num = getIncNum();

    return `
<div id="entity_defined_by_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityDefinedBy(
    {
        iri:"${args.iri}",
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}",
        useLegacy:${args.useLegacy},
        onNavigateToOntology:${args.onNavigateToOntology},
        className:${args.className}
    },
    document.querySelector('#entity_defined_by_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: EntityDefinedByWidgetStoryArgTypes,
  args: EntityDefinedByWidgetStoryArgs,
} satisfies Meta<typeof EntityDefinedByWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const emptyInDefiningOntology: Story = {
  args: emptyInDefiningOntologyArgs,
  play: commonEntityDefinedByWidgetPlay
};

export const v2ApiONS: Story = {
  args: v2ApiONSArgs,
  play: commonEntityDefinedByWidgetPlay
};

export const legacyApi: Story = {
  args: legacyApiArgs,
  play: commonEntityDefinedByWidgetPlay
};