import { AutocompleteWidget } from "./AutocompleteWidget";
import {
  AutocompleteWidgetStoryArgTypes,
  AutocompleteWidgetStoryArgsReact,
  HideApiSourceApiGatewayArgs,
  SubtreeDirectAndIndirectSubtypesArgs,
  SubtreeDirectSubtypesArgs,
  TibDataPlantArgs,
  TibNFDI4CHEMArgs,
  UseAPIGatewayWithOLSArgs,
  UseAPIGatewayWithOntoPortalArgs,
  UseAPIGatewayWithSkosmosArgs,
  WithDefaultsArgs,
  WithMultipleValuesArgs,
  AllowMultipleTermsArgs,
  AllowAddingCustomTermsArgs,
  WithDescriptionAndShortFormArgs,
  WithLongFormArgs,
  WithInvalidValueArgs,
  WithGermanInputArgs,
  WithPreselectedMultipleValuesOLS4Args,
  WithPreselectedValueAndUnresolvedIriOLS3Args,
  WithCustomValueArgs,
  WithPreselectedValueOLS4v2Args, WithDefaultsCompactArgs, commonAutocompleteWidgetPlay
} from "./AutocompleteWidgetStories";
import "../../../style/tssStyles.css";
import { AutocompleteDescription } from "../../../app/widgetDescriptions";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Search/AutocompleteWidget",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: AutocompleteDescription,
      },
    },
  },
  component: AutocompleteWidget,
  argTypes: AutocompleteWidgetStoryArgTypes,
  args: AutocompleteWidgetStoryArgsReact,
} satisfies Meta<typeof AutocompleteWidget>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithDefaults: Story = {
  args: WithDefaultsArgs,
  play: commonAutocompleteWidgetPlay
}

export const UseAPIGatewayWithOLS: Story = {
  args: UseAPIGatewayWithOLSArgs,
  play: commonAutocompleteWidgetPlay
};

export const UseAPIGatewayWithOntoPortal: Story = {
  args: UseAPIGatewayWithOntoPortalArgs,
  play: commonAutocompleteWidgetPlay
};

export const UseAPIGatewayWithSkosmos: Story = {
  args: UseAPIGatewayWithSkosmosArgs,
  play: commonAutocompleteWidgetPlay
};

export const HideApiSourceApiGateway: Story = {
  args: HideApiSourceApiGatewayArgs,
  play: commonAutocompleteWidgetPlay
};

export const WithDefaultsCompact: Story = {
  args: WithDefaultsCompactArgs,
  play: commonAutocompleteWidgetPlay
};

export const WithPreselectedValueOLS4v2: Story = {
  args: WithPreselectedValueOLS4v2Args,
  play: commonAutocompleteWidgetPlay
};

export const WithPreselectedValueAndUnresolvedIriOLS3: Story = {
  args: WithPreselectedValueAndUnresolvedIriOLS3Args,
  play: commonAutocompleteWidgetPlay
};

export const WithPreselectedMultipleValuesOLS4: Story = {
  args: WithPreselectedMultipleValuesOLS4Args,
  play: commonAutocompleteWidgetPlay
};

export const WithCustomValue: Story = {
  args: WithCustomValueArgs,
  play: commonAutocompleteWidgetPlay
};

export const WithInvalidValue: Story = {
  args: WithInvalidValueArgs,
  play: commonAutocompleteWidgetPlay
};

export const WithGermanInput: Story = {
  args: WithGermanInputArgs,
  play: commonAutocompleteWidgetPlay
};

export const WithDescriptionAndShortForm: Story = {
  args: WithDescriptionAndShortFormArgs,
  play: commonAutocompleteWidgetPlay
};

export const WithLongForm: Story = {
  args: WithLongFormArgs,
  play: commonAutocompleteWidgetPlay
};

export const AllowAddingCustomTerms: Story = {
  args: AllowAddingCustomTermsArgs,
  play: commonAutocompleteWidgetPlay
};

export const AllowMultipleTerms: Story = {
  args: AllowMultipleTermsArgs,
  play: commonAutocompleteWidgetPlay
};

export const WithMultipleValues: Story = {
  args: WithMultipleValuesArgs,
  play: commonAutocompleteWidgetPlay
};

export const TibNFDI4CHEM: Story = {
  args: TibNFDI4CHEMArgs,
  play: commonAutocompleteWidgetPlay
};

export const TibDataPlant: Story = {
  args: TibDataPlantArgs,
  play: commonAutocompleteWidgetPlay
};

export const SubtreeDirectSubtypes: Story = {
  args: SubtreeDirectSubtypesArgs,
  play: commonAutocompleteWidgetPlay
};

export const SubtreeDirectAndIndirectSubtypes: Story = {
  args: SubtreeDirectAndIndirectSubtypesArgs,
  play: commonAutocompleteWidgetPlay
};



