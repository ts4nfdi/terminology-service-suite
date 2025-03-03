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
  WithPreselectedValueAndUnresolvedIriOLS3,
  WithPreselectedValueOLS4v2,
  WithPreselectedMultipleValuesOLS4,
} from "./AutocompleteWidgetStories";
