import { SearchResultsListWidget } from "./SearchResultsListWidget";
import {SearchResultsListWidgetStoryArgs, SearchResultsListWidgetStoryArgTypes} from "./SearchResultsListWidgetStories"
import {SearchResultsListDescription} from "../../../app/widgetDescriptions";

export default {
  title: "Search and Autocomplete/SearchResultsListWidget",
  component: SearchResultsListWidget,
  parameters: {
      docs: {
          description: {
              component: SearchResultsListDescription
          }
      }
  },
  argTypes: SearchResultsListWidgetStoryArgTypes,
  args: SearchResultsListWidgetStoryArgs,
};

export {
    SearchResultsListSafety,
    SearchResultsListNFDI4Health,
    ErrorSearchResultsList,
    TibNFDI4CHEM,
    TibDataPlant,
    SearchResultsListOls4
} from "./SearchResultsListWidgetStories"
