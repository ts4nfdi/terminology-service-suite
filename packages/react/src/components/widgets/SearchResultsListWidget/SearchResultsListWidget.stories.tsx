import { SearchResultsListWidget } from "./SearchResultsListWidget";
import {
  SearchResultsListWidgetStoryArgs,
  SearchResultsListWidgetStoryArgTypes,
  SearchResultsListSafetyArgs,
  SearchResultsListNFDI4HealthArgs,
  ErrorSearchResultsListArgs,
  TibNFDI4CHEMArgs,
  TibDataPlantArgs,
  SearchResultsListOls4Args,
  commonSearchResultsListWidgetPlay,
} from "./SearchResultsListWidgetStories";
import { SearchResultsListDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";

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

export const SearchResultsListSafety: Story = {
  args: SearchResultsListSafetyArgs,
  play: commonSearchResultsListWidgetPlay,
};

export const SearchResultsListNFDI4Health: Story = {
  args: SearchResultsListNFDI4HealthArgs,
  play: commonSearchResultsListWidgetPlay,
};

export const ErrorSearchResultsList: Story = {
  args: ErrorSearchResultsListArgs,
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

export const SearchResultsListOls4: Story = {
  args: SearchResultsListOls4Args,
  play: commonSearchResultsListWidgetPlay,
};
