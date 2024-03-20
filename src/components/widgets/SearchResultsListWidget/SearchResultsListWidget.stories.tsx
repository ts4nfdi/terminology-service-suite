import { SearchResultsListWidget } from "./SearchResultsListWidget";
import {SearchResultsListWidgetStoryArgs, SearchResultsListWidgetStoryArgTypes} from "./SearchResultsListWidgetStories"

export default {
  title: "SearchResultsListWidget",
  component: SearchResultsListWidget,
  argTypes: SearchResultsListWidgetStoryArgTypes,
  args: SearchResultsListWidgetStoryArgs,
};

export {
    SearchResultsListSafety,
    SearchResultsListNFDI4Health,
    ErrorSearchResultsList
} from "./SearchResultsListWidgetStories"
