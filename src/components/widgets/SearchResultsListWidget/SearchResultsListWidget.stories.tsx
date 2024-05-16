import { SearchResultsListWidget } from "./SearchResultsListWidget";
import {SearchResultsListWidgetStoryArgs, SearchResultsListWidgetStoryArgTypes} from "./SearchResultsListWidgetStories"

export default {
  title: "SearchResultsListWidget",
  component: SearchResultsListWidget,
  argTypes: SearchResultsListWidgetStoryArgTypes,
  args: SearchResultsListWidgetStoryArgs,
};

export {
    CollectionSafety,
    CollectionNFDI4HealthOLS3,
    CollectionNFDI4HealthOLS4,
    ErrorSearchResultsList,
    TibNFDI4CHEM,
    TibDataPlant,
    EBIOLS4
} from "./SearchResultsListWidgetStories"
