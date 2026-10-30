import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  EntityListWidget,
  EntityListWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import { EntityListDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  EntityListWidgetIndividualsArgs,
  EntityListWidgetMeshTermsArgs,
  EntityListWidgetStoryArgs,
  EntityListWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityListWidget/EntityListWidgetStories";
import "./index";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<EntityListWidgetProps> = {
  title: "Search/EntityListWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityListDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: EntityListWidgetProps) => {
    const num = getIncNum();

    return `
<div id="entity_list_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityList(
    {
        api:"${args.api}",
        ontologyId:"${args.ontologyId}",
        entityType:"${args.entityType}",
        parameter:"${args.parameter}"
    },
    document.querySelector('#entity_list_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: EntityListWidgetStoryArgTypes,
  args: EntityListWidgetStoryArgs,
} satisfies Meta<typeof EntityListWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Classes: Story = {
  args: EntityListWidgetMeshTermsArgs,
};

export const Individuals: Story = {
  args: EntityListWidgetIndividualsArgs,
};
