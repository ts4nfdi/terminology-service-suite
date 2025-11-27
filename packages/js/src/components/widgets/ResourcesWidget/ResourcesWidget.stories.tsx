import {
  commonResourcesWidgetPlay,
  ResourcesWidget1Args,
  ResourcesWidgetLogosArgs,
  ResourcesWidgetStoryArgs,
  ResourcesWidgetStoryArgTypes,
  WithActionsArgs,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/ResourcesWidget/ResourcesWidgetStories";
import "./index";
import { ResourcesDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  ResourcesWidget,
  ResourcesWidgetProps,
} from "@ts4nfdi/terminology-service-suite/src";
import type { Meta, StoryObj } from "@storybook/react-vite";

let counter = 0;

function getIncNum() {
  return counter++;
}
// @ts-ignore
const meta: Meta<ResourcesWidgetProps> = {
  title: "Ontology Metadata/ResourcesWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: ResourcesDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: ResourcesWidgetProps) => {
    const num = getIncNum();

    return `
<div id="resources_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createResources(
    {
        api:"${args.api}",
        initialEntriesPerPage:${args.initialEntriesPerPage},
        pageSizeOptions:[${args.pageSizeOptions}],
        initialSortField:"${args.initialSortField}",
        initialSortDir:"${args.initialSortDir}",
        onNavigate:${args.onNavigate},
        actions:[${args.actions}],
        parameter:"${args.parameter}",
    },
    document.querySelector('#resources_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: ResourcesWidgetStoryArgTypes,
  args: ResourcesWidgetStoryArgs,
} satisfies Meta<typeof ResourcesWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ResourcesWidget1 = {
  args: ResourcesWidget1Args,
  play: commonResourcesWidgetPlay,
};

export const WithActions = {
  args: ResourcesWidget1Args,
  WithActionsArgs,
  play: commonResourcesWidgetPlay,
};

export const ResourcesWidgetLogos = {
  args: ResourcesWidgetLogosArgs,
  play: commonResourcesWidgetPlay,
};
