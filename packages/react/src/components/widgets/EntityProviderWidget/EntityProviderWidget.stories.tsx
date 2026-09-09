import type { Meta, StoryObj } from "@storybook/react-vite";
import { EntityProviderWidgetProps } from "../../../app/types";
import { EntityProviderDescription } from "../../../app/widgetDescriptions";
import {
  commonEntityProviderWidgetPlay,
  disabledArgs,
  EntityProviderWidgetStoryArgs,
  EntityProviderWidgetStoryArgTypes,
  notFoundArgs,
  withOntologyIdArgs,
} from "./EntityProviderWidgetStories";
import { useEntityProvider } from "./useEntityProvider";

/**
 * The widget itself renders nothing - it is a hook. This demo exists only so
 * that Storybook has something to show: it calls the hook and dumps the result.
 * It is intentionally local to this file and not exported from the package.
 */
function EntityProviderDemo(props: EntityProviderWidgetProps): JSX.Element {
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
  title: "Additional Entity Metadata/EntityProviderWidget",
  component: EntityProviderDemo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: EntityProviderDescription,
      },
    },
  },
  argTypes: EntityProviderWidgetStoryArgTypes,
  args: EntityProviderWidgetStoryArgs,
} satisfies Meta<typeof EntityProviderDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const withOntologyId: Story = {
  args: withOntologyIdArgs,
  play: commonEntityProviderWidgetPlay,
};

export const notFound: Story = {
  args: notFoundArgs,
  play: commonEntityProviderWidgetPlay,
};

export const disabled: Story = {
  args: disabledArgs,
  play: commonEntityProviderWidgetPlay,
};
