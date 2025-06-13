import { AutocompleteDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { AutocompleteWidgetProps } from "@ts4nfdi/terminology-service-suite/src";
import {
  AutocompleteWidgetStoryArgsHTML,
  AutocompleteWidgetStoryArgTypes
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/AutocompleteWidget/AutocompleteWidgetStories";
import './index'

let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "Search/AutocompleteWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: AutocompleteDescription,
      },
    },
  },
  render: (args: AutocompleteWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `
<div id="autocomplete_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createAutocomplete(
    {
        api:"${args.api}",
        parameter:"${args.parameter}",
        selectionChangedEvent:${args.selectionChangedEvent
          .toString()
          .replace(/(\r\n|\n|\r)/gm, "")},
        preselected:${JSON.stringify(args.preselected).replace(
          /"([^"]+)":/g,
          "$1:",
        )},
        placeholder:"${args.placeholder}",
        hasShortSelectedLabel:${args.hasShortSelectedLabel},
        allowCustomTerms:${args.allowCustomTerms},
        singleSelection:${args.singleSelection},
        ts4nfdiGateway:${args.ts4nfdiGateway},
        singleSuggestionRow:${args.singleSuggestionRow},
        showApiSource:${args.showApiSource},
        className: "${args.className}"
    },
    document.querySelector('#autocomplete_widget_container_${num}')
)
</script>
        `;
  },
  ...AutocompleteWidgetStoryArgTypes,
  ...AutocompleteWidgetStoryArgsHTML,
};

export {
  WithDefaults,
  UseAPIGatewayWithOLS,
  UseAPIGatewayWithOntoPortal,
  UseAPIGatewayWithSkosmos,
  HideApiSourceApiGateway,
  WithDefaultsCompact,
  WithCustomValue,
  WithInvalidValue,
  WithMultipleValues,
  AllowMultipleTerms,
  AllowAddingCustomTerms,
  WithGermanInput,
  WithLongForm,
  WithDescriptionAndShortForm,
  TibNFDI4CHEM,
  TibDataPlant,
  WithPreselectedValueAndUnresolvedIriOLS3,
  WithPreselectedValueOLS4v2,
  WithPreselectedMultipleValuesOLS4,
  SubtreeDirectSubtypes,
  SubtreeDirectAndIndirectSubtypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/AutocompleteWidget/AutocompleteWidgetStories";
