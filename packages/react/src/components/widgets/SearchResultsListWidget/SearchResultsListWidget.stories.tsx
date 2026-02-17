import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchResultsListDescription } from "../../../app/widgetDescriptions";
import { SearchResultsListWidget } from "./SearchResultsListWidget";
import {
  commonSearchResultsListWidgetPlay,
  DefaultArgs,
  NFDI4HealthArgs,
  OpenEnergyPlatformArgs,
  SearchResultsListWidgetStoryArgs,
  SearchResultsListWidgetStoryArgTypes,
  TibDataPlantArgs,
  TibNFDI4CHEMArgs,
} from "./SearchResultsListWidgetStories";

const meta = {
  title: "Search/SearchResultsListWidget",
  component: SearchResultsListWidget,
  parameters: {
    docs: {
      description: {
        component: SearchResultsListDescription,
      },
    },
  },
  argTypes: SearchResultsListWidgetStoryArgTypes,
  args: SearchResultsListWidgetStoryArgs,
} satisfies Meta<typeof SearchResultsListWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: DefaultArgs,
  play: commonSearchResultsListWidgetPlay,
};

export const NFDI4Health: Story = {
  args: NFDI4HealthArgs,
  play: commonSearchResultsListWidgetPlay,
};

export const TibNFDI4CHEM: Story = {
  args: TibNFDI4CHEMArgs,
  play: commonSearchResultsListWidgetPlay,
};

export const TibDataPlant: Story = {
  args: TibDataPlantArgs,
  play: commonSearchResultsListWidgetPlay,
};

export const OpenEnergyPlatform: Story = {
  args: OpenEnergyPlatformArgs,
  play: commonSearchResultsListWidgetPlay,
};
