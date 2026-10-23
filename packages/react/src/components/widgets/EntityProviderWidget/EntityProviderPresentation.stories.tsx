import type { Meta, StoryObj } from "@storybook/react-vite";
import { WrappedEntityProviderPresentation } from "./EntityProviderPresentation";
import {
  emptyArgs,
  emptyPlay,
  EntityProviderPresentationStoryArgs,
  EntityProviderPresentationStoryArgTypes,
  errorArgs,
  errorPlay,
  loadingArgs,
  loadingPlay,
  missingFieldsArgs,
  missingFieldsPlay,
  multipleProvidersArgs,
  singleProviderArgs,
  singleProviderPlay,
  withoutRawArgs,
  withoutRawPlay,
} from "./EntityProviderPresentationStories";

const meta = {
  title: "API Gateway/EntityProviderPresentation",
  component: WrappedEntityProviderPresentation,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays the provider information resolved by `useEntityProvider`. " +
          "It is purely presentational: pass the hook result as props. " +
          "Handles loading, error, empty and multi-provider states.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 520, maxWidth: "100%" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: EntityProviderPresentationStoryArgTypes,
  args: EntityProviderPresentationStoryArgs,
} satisfies Meta<typeof WrappedEntityProviderPresentation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleProvider: Story = {
  args: singleProviderArgs,
  play: singleProviderPlay,
};

export const MultipleProviders: Story = {
  args: multipleProvidersArgs,
};

export const WithoutRawData: Story = {
  args: withoutRawArgs,
  play: withoutRawPlay,
};

export const MissingFields: Story = {
  args: missingFieldsArgs,
  play: missingFieldsPlay,
};

export const Loading: Story = {
  args: loadingArgs,
  play: loadingPlay,
};

export const Empty: Story = {
  args: emptyArgs,
  play: emptyPlay,
};

export const ErrorState: Story = {
  args: errorArgs,
  play: errorPlay,
};
