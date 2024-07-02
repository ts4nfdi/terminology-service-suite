import 'semlookp-widgets';
import {AutocompleteWidgetStoryArgTypes, AutocompleteWidgetStoryArgs} from "./AutocompleteWidgetStories";
import {AutocompleteWidgetProps} from "../../../app/types";

let counter = 0;

function getIncNum() {
    return counter++;
}

export default {
    title: 'AutocompleteWidget',
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    render: (args: AutocompleteWidgetProps) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        const num = getIncNum();

        return `
<div id="autocomplete_widget_container_${num}"></div>

<script type="text/javascript">
window['SemLookPWidgets'].createAutocomplete(
    {
        api:"${args.api}",
        parameter:"${args.parameter}",
        selectionChangedEvent:${args.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm, "")},
        preselected:${JSON.stringify(args.preselected).replace(/"([^"]+)":/g, '$1:')},
        placeholder:"${args.placeholder}",
        hasShortSelectedLabel:${args.hasShortSelectedLabel},
        allowCustomTerms:${args.allowCustomTerms},
        singleSelection:${args.singleSelection},
        compactStyle:${args.compactStyle},
    },
    document.querySelector('#autocomplete_widget_container_${num}')
)
</script>
        `
    },
    ...AutocompleteWidgetStoryArgTypes,
    ...AutocompleteWidgetStoryArgs,
}

export {
    WithDefaults,
    WithDefaultsCompact,
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