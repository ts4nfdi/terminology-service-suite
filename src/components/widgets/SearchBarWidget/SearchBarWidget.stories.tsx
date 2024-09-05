import { SearchBarWidget } from "./SearchBarWidget";
import {
  SearchBarWidgetStoryArgs,
  SearchBarWidgetStoryArgsReact,
  SearchBarWidgetStoryArgTypes
} from "./SearchBarWidgetStories";

export default {
  title: "SearchBarWidget",
  component: SearchBarWidget,
  argTypes: SearchBarWidgetStoryArgTypes,
  args: SearchBarWidgetStoryArgsReact
};

export {
  SearchBarWidgetDefault,
  TibNFDI4CHEM,
  TibDataPlant
} from "./SearchBarWidgetStories";
