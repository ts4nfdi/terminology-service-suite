import { SearchBarWidget } from "./SearchBarWidget";
import { SearchBarWidgetStoryArgs, SearchBarWidgetStoryArgTypes } from "./SearchBarWidgetStories";

export default {
  title: "SearchBarWidget",
  component: SearchBarWidget,
  argTypes: SearchBarWidgetStoryArgTypes,
  args: SearchBarWidgetStoryArgs
};

export {
  SearchBarWidgetDefault,
  TibNFDI4CHEM,
  TibDataPlant
} from "./SearchBarWidgetStories";
