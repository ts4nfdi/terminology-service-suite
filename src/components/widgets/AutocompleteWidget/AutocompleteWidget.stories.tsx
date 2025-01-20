import { AutocompleteWidget } from "./AutocompleteWidget";
import "@elastic/eui/dist/eui_theme_light.json";
import {
  AutocompleteWidgetStoryArgTypes,
  AutocompleteWidgetStoryArgsReact
} from "./AutocompleteWidgetStories";
import {AutocompleteDescription} from "../../../app/widgetDescriptions";

export default {
  title: "Search and Autocomplete/AutocompleteWidget",
  parameters: {
    docs: {
      description: {
        component: AutocompleteDescription
      }
    }
  },
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
  WithLongForm,
  WithDescriptionAndShortForm,
  TibNFDI4CHEM,
  TibDataPlant,
  SubTreeFiltering
} from "./AutocompleteWidgetStories"





