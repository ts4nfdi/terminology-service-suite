import type { Meta, StoryObj } from "@storybook/react-vite";
import { EntityProviderWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import { EntityProviderHookDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import {
  disabledArgs,
  entityProviderArgs,
  EntityProviderHookStoryArgs,
  EntityProviderHookStoryArgTypes,
  notFoundArgs,
  ontologyProviderArgs,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/EntityProviderWidget/EntityProviderHookStories";
import "./index";

let counter = 0;

function getIncNum() {
  return counter++;
}

/**
 * The functions render nothing, so the story calls getEntityProvider and
 * getEntityProviders and prints their result, like the React demo does.
 */
// @ts-ignore
const meta: Meta<EntityProviderWidgetProps> = {
  title: "API Gateway/EntityProviderHook",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityProviderHookDescription,
      },
    },
  },
  //@ts-expect-error: You can either use a function to create DOM elements or use a plain html string!
  render: (args: EntityProviderWidgetProps) => {
    const num = getIncNum();

    return `
<pre id="entity_provider_widget_container_${num}" data-testid="entity-provider" data-loading="true"></pre>

<script type="text/javascript">
(function () {
    const container = document.querySelector('#entity_provider_widget_container_${num}');
    const params = {
        api:"${args.api}",
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        parameter:"${args.parameter}"
    };

    const idle = {
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: undefined,
        provider: undefined,
        providers: []
    };

    function show(state) {
        container.textContent = JSON.stringify(state, null, 2);
        container.setAttribute('data-loading', String(state.isLoading));
    }

    if (!${args.enabled} || (!params.iri && !params.ontologyId)) {
        show(idle);
        return;
    }

    show({ ...idle, isLoading: true });

    Promise.all([
        window['ts4nfdiWidgets'].getEntityProvider(params),
        window['ts4nfdiWidgets'].getEntityProviders(params)
    ])
        .then(([provider, providers]) => show({ ...idle, isSuccess: true, provider, providers }))
        .catch((error) => show({ ...idle, isError: true, error: error.message }));
})();
</script>
        `;
  },
  argTypes: EntityProviderHookStoryArgTypes,
  args: EntityProviderHookStoryArgs,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const entityProvider: Story = {
  args: entityProviderArgs,
};

export const ontologyProvider: Story = {
  args: ontologyProviderArgs,
};

export const notFound: Story = {
  args: notFoundArgs,
};

export const disabled: Story = {
  args: disabledArgs,
};
