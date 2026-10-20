import type { Meta, StoryObj } from "@storybook/react-vite";
import { EntityProviderWidgetProps } from "../../../app/types";
import { EntityProviderHookDescription } from "../../../app/widgetDescriptions";
import {
  disabledArgs,
  entityProviderArgs,
  EntityProviderHookStoryArgs,
  EntityProviderHookStoryArgTypes,
  notFoundArgs,
  ontologyProviderArgs,
} from "./EntityProviderHookStories";
import { useEntityProvider } from "./useEntityProvider";

/**
 * The widget itself renders nothing - it is a hook. This demo exists only so
 * that Storybook has something to show: it calls the hook and dumps the result.
 * It is intentionally local to this file and not exported from the package.
 */
function EntityProviderDemo(
  props: EntityProviderWidgetProps,
): React.JSX.Element {
  const { provider, providers, isLoading, isSuccess, isError, error } =
    useEntityProvider(props);

  return (
    <div data-testid="entity-provider" data-loading={String(isLoading)}>
      <pre style={{ margin: 0 }}>
        {JSON.stringify(
          {
            isLoading,
            isSuccess,
            isError,
            error: error?.message,
            provider,
            providers,
          },
          null,
          2,
        )}
      </pre>
    </div>
  );
}

const meta = {
  title: "API Gateway/EntityProviderHook",
  component: EntityProviderDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityProviderHookDescription,
      },
    },
  },
  argTypes: EntityProviderHookStoryArgTypes,
  args: EntityProviderHookStoryArgs,
} satisfies Meta<typeof EntityProviderDemo>;

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
