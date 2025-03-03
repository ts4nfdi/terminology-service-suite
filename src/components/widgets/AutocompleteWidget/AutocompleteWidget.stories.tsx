import { AutocompleteWidget } from "./AutocompleteWidget";
import {
  AutocompleteWidgetStoryArgTypes,
  AutocompleteWidgetStoryArgsReact,
} from "./AutocompleteWidgetStories";
import "../../../style/tssStyles.css";
import { AutocompleteDescription } from "../../../app/widgetDescriptions";

export default {
  title: "Search/AutocompleteWidget",
  parameters: {
    docs: {
      description: {
        component: AutocompleteDescription,
      },
    },
  },
  component: AutocompleteWidget,
  ...AutocompleteWidgetStoryArgTypes,
  ...AutocompleteWidgetStoryArgsReact,
};

export {
  WithDefaults,
  UseAPIGatewayWithOLS,
  UseAPIGatewayWithOntoPortal,
  UseAPIGatewayWithSkosmos,
  HideApiSourceApiGateway,
  WithDefaultsCompact,
  WithCustomValue,
  WithInvalidValue,
  WithMultipleValues,
  AllowMultipleTerms,
  AllowAddingCustomTerms,
  WithGermanInput,
  WithLongForm,
  WithDescriptionAndShortForm,
  TibNFDI4CHEM,
  TibDataPlant,
  WithPreselectedValueOLS3,
  WithPreselectedIriOLS3,
  WithPreselectedLabelOLS3,
  WithPreselectedValueAndUnresolvedIriOLS3,
  WithPreselectedValueAndMeshIriOLS3,
  WithPreselectedMultipleValuesOLS3,
  WithPreselectedMultipleIrisOLS3,
  WithPreselectedMultipleLabelsOLS3,
  WithPreselectedMultipleValuesAndUnresolvedIriOLS3,
  WithPreselectedMultipleValuesAndMeshIriOLS3,
  WithPreselectedSingleOLS3,
  WithPreselectedValueOLS4v2,
  WithPreselectedIriOLS4v2,
  WithPreselectedLabelOLS4v2,
  WithPreselectedValueAndUnresolvedIriOLS4v2,
  WithPreselectedValueAndMeshIriOLS4v2,
  WithPreselectedMultipleValuesOLS4,
  WithPreselectedMultipleIrisOLS4,
  WithPreselectedMultipleLabelsOLS4,
  WithPreselectedMultipleValuesAndUnresolvedIriOLS4,
  WithPreselectedMultipleValuesAndMeshIriOLS4,
  WithPreselectedValueAndMeshIriOLS3Gateway,
  WithPreselectedValueAndMeshIriOLS4v2Gateway,
  WithPreselectedMultipleValuesAndMeshIriGateway,
} from "./AutocompleteWidgetStories";
