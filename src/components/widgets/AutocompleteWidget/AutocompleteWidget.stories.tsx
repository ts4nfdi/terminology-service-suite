import { AutocompleteWidget } from "./AutocompleteWidget";
import "@elastic/eui/dist/eui_theme_light.json";
import { AutocompleteWidgetStoryArgTypes, AutocompleteWidgetStoryArgs } from "./AutocompleteWidgetStories";

export default {
  title: "AutocompleteWidget",
  component: AutocompleteWidget,
  ...AutocompleteWidgetStoryArgTypes,
  ...AutocompleteWidgetStoryArgs,
}

export {
  WithDefaults,
  WithValue,
  WithCustomValue,
  WithInvalidValue,
  WithMultipleValues,
  AllowMultipleTerms,
  AllowAddingCustomTerms,
  WithGermanInput,
  DisplaySelectedEntityWithLongForm,
  WithDescriptionAndShortForm
} from "./AutocompleteWidgetStories"





