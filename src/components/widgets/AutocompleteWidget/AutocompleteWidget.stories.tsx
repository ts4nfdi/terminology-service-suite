import { AutocompleteWidget } from "./AutocompleteWidget";
import "@elastic/eui/dist/eui_theme_light.json";
import {
  AutocompleteWidgetStoryArgTypes,
  AutocompleteWidgetStoryArgsReact
} from "./AutocompleteWidgetStories";

export default {
  title: "AutocompleteWidget",
  component: AutocompleteWidget,
  ...AutocompleteWidgetStoryArgTypes,
  ...AutocompleteWidgetStoryArgsReact,
}

export {
  WithDefaults,
  UseAPIGatewayWithOLS,
  UseAPIGatewayWithOntoPortal,
  UseAPIGatewayWithSkosmos,
  HideApiSourceApiGateway,
  WithDefaultsCompact,
  WithValue,
  WithCustomValue,
  WithInvalidValue,
  WithMultipleValues,
  AllowMultipleTerms,
  AllowAddingCustomTerms,
  WithGermanInput,
  DisplaySelectedEntityWithLongForm,
  WithDescriptionAndShortForm,
  TibNFDI4CHEM,
  TibDataPlant
} from "./AutocompleteWidgetStories"





