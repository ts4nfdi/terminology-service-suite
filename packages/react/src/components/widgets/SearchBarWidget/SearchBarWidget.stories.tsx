import { SearchBarWidget } from "./SearchBarWidget";
import {
  SearchBarWidgetStoryArgsReact,
  SearchBarWidgetStoryArgTypes,
  SearchBarWidgetDefaultArgs,
  TibNFDI4CHEMArgs,
  TibDataPlantArgs, commonSearchBartWidgetPlay
} from "./SearchBarWidgetStories";
import { SearchBarDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Search/SearchBarWidget",
  component: SearchBarWidget,
  parameters: {
    docs: {
      description: {
        component: SearchBarDescription,
      },
    },
  },
  argTypes: SearchBarWidgetStoryArgTypes,
  args: SearchBarWidgetStoryArgsReact,
} satisfies Meta<typeof SearchBarWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SearchBarWidgetDefault: Story = {
  args: SearchBarWidgetDefaultArgs,
  play: commonSearchBartWidgetPlay
};

export const TibNFDI4CHEM: Story = {
  args: TibNFDI4CHEMArgs,
  play: commonSearchBartWidgetPlay
};

export const TibDataPlant: Story = {
  args: TibDataPlantArgs,
  play: commonSearchBartWidgetPlay
};