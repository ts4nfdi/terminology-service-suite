import { SearchBarWidget } from "./SearchBarWidget";
import {
  SearchBarWidgetStoryArgsReact,
  SearchBarWidgetStoryArgTypes
} from "./SearchBarWidgetStories";
import {SearchBarDescription} from "../../../app/widgetDescriptions";

export default {
  title: "Search and Autocomplete/SearchBarWidget",
  component: SearchBarWidget,
  parameters: {
    docs: {
      description: {
        component: SearchBarDescription
      }
    }
  },
  argTypes: SearchBarWidgetStoryArgTypes,
  args: SearchBarWidgetStoryArgsReact
};

export {
  SearchBarWidgetDefault,
  TibNFDI4CHEM,
  TibDataPlant
} from "./SearchBarWidgetStories";
