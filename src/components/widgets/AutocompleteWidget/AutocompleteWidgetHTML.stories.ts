import 'semlookp-widgets';
import {AutocompleteWidgetStoryArgTypes, AutocompleteWidgetStoryArgsHTML} from "./AutocompleteWidgetStories";
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
document.querySelector('#autocomplete_widget_container_${num}').attachShadow({ mode: "open" });

function addStylesheet(url, shadowRoot) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  shadowRoot.appendChild(link);
}


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
        ts4nfdiGateway:${args.ts4nfdiGateway},
        singleSuggestionRow:${args.singleSuggestionRow},
        showApiSource:${args.showApiSource},
    },
    document.querySelector('#autocomplete_widget_container_${num}').shadowRoot
)
addStylesheet('https://unpkg.com/@elastic/eui@62.2.4/dist/eui_theme_light.css', document.querySelector('#autocomplete_widget_container_${num}').shadowRoot);

</script>
        `
    },
    ...AutocompleteWidgetStoryArgTypes,
    ...AutocompleteWidgetStoryArgsHTML,
}

export {
    WithDefaults,
    UseAPIGatewayWithOLS,
    UseAPIGatewayWithOntoPortal,
    UseAPIGatewayWithSkosmos,
    HideApiSourceApiGateway,
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
