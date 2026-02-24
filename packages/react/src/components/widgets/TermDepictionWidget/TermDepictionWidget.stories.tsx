import type { Meta, StoryObj } from "@storybook/react-vite";
import { TermDepictionDescription } from "../../../app/widgetDescriptions";
import { TermDepictionWidget } from "./TermDepictionWidget";
import {
  commonTermDepictionWidgetPlay,
  TermDepictionWidget3DArgs,
  TermDepictionWidgetExampleArgs,
  TermDepictionWidgetStoryArgs,
  TermDepictionWidgetStoryArgTypes,
  OntologyIdAsIriArgs
} from "./TermDepictionWidgetStories";

const meta = {
  title: "Additional Entity Metadata/TermDepictionWidget",
  component: TermDepictionWidget,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: TermDepictionDescription,
      },
    },
  },
  argTypes: TermDepictionWidgetStoryArgTypes,
  args: TermDepictionWidgetStoryArgs,
} satisfies Meta<typeof TermDepictionWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TermDepictionWidgetExample: Story = {
  args: TermDepictionWidgetExampleArgs,
  play: commonTermDepictionWidgetPlay,
};

export const TermDepictionWidget3D: Story = {
  args: TermDepictionWidget3DArgs,
  play: commonTermDepictionWidgetPlay,
};

export const OntologyIdAsIri: Story = {
  args: OntologyIdAsIriArgs,
  play: commonTermDepictionWidgetPlay
};
