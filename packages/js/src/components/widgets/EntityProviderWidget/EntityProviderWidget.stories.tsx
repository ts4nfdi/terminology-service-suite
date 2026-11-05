import type { Meta, StoryObj } from "@storybook/react-vite";
import { EntityProviderWidgetDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  entityProviderArgs,
  EntityProviderHookStoryArgs,
  EntityProviderHookStoryArgTypes,
  ontologyProviderArgs,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityProviderWidget/EntityProviderHookStories";
import {
  EntityProviderWidget,
  EntityProviderWidgetFullProps,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityProviderWidget/EntityProviderWidget";
import {
  DisabledArgs,
  fullDisabledPlay,
  fullNotFoundPlay,
  fullWithoutRawPlay,
  NotFoundArgs,
  WithoutRawArgs,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityProviderWidget/EntityProviderWidgetStories";
import "./index";

let counter = 0;

function getIncNum() {
  return counter++;
}

// @ts-ignore
const meta: Meta<EntityProviderWidgetFullProps> = {
  title: "API Gateway/EntityProviderWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityProviderWidgetDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: EntityProviderWidgetFullProps) => {
    const num = getIncNum();

    return `
<div id="entity_provider_widget_container_${num}" style="width: 520px; max-width: 100%"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityProvider(
    {
        api:"${args.api}",
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        parameter:"${args.parameter}",
        enabled:${args.enabled},
        showRaw:${args.showRaw}
    },
    document.querySelector('#entity_provider_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: EntityProviderHookStoryArgTypes,
  args: EntityProviderHookStoryArgs,
} satisfies Meta<typeof EntityProviderWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const entityProvider: Story = {
  args: entityProviderArgs,
};

export const ontologyProvider: Story = {
  args: ontologyProviderArgs,
};

export const withoutRawData: Story = {
  args: WithoutRawArgs,
  play: fullWithoutRawPlay,
};

export const notFound: Story = {
  args: NotFoundArgs,
  play: fullNotFoundPlay,
};

export const disabled: Story = {
  args: DisabledArgs,
  play: fullDisabledPlay,
};
