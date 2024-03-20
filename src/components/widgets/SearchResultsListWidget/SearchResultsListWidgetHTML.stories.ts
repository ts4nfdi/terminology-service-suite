import 'semlookp-widgets';
import {SearchResultsListWidgetStoryArgs, SearchResultsListWidgetStoryArgTypes} from "./SearchResultsListWidgetStories"
import {SearchResultsListWidgetProps} from "../../../utils/types";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'SearchResultsListWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: SearchResultsListWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="search_results_list_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createSearchResultsList(
    {
        api:"${args.api}",
        query:"${args.query}",
        parameter:"${args.parameter}",
        initialItemsPerPage:${args.initialItemsPerPage},
        itemsPerPageOptions:[${args.itemsPerPageOptions}],
        targetLink:"${args.targetLink}",
    },
    document.querySelector('#search_results_list_widget_container_${num}')
)
</script>
        `
    },
    argTypes: SearchResultsListWidgetStoryArgTypes,
    args: SearchResultsListWidgetStoryArgs
}

export {
    SearchResultsListSafety,
    SearchResultsListNFDI4Health,
    ErrorSearchResultsList
} from "./SearchResultsListWidgetStories"
