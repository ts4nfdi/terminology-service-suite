import { SearchResultsListWidget } from "./SearchResultsListWidget";
import {SearchResultsListWidgetStoryArgs, SearchResultsListWidgetStoryArgTypes} from "root/src/components/widgets/SearchResultsListWidget/SearchResultsListWidgetStories"

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
} from "root/src/components/widgets/SearchResultsListWidget/SearchResultsListWidgetStories"
