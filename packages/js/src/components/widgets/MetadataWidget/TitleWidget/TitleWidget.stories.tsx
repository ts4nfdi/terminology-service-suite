import {
  TitleWidgetStoryArgs,
  TitleWidgetStoryArgTypes,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TitleWidget/TitleWidgetStories";
import './index'
import { TitleDescription } from "@ts4nfdi/terminology-service-suite/src/app/widgetDescriptions";
import { TitleWidgetProps } from "@ts4nfdi/terminology-service-suite/src";


let counter = 0;

function getIncNum() {
  return counter++;
}

export default {
  title: "Entity Metadata/TitleWidget",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: TitleDescription,
      },
    },
  },
  render: (args: TitleWidgetProps) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    const num = getIncNum();

    return `
<div id="title_widget_container_${num}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createTitle(
    {
        iri:"${args.iri}",
        ontologyId:"${args.ontologyId}",
        api:"${args.api}",
        titleText:"${args.titleText}",
        thingType:"${args.thingType}",
        parameter:"${args.parameter}",
        useLegacy:"${args.useLegacy}",
        defaultValue:"${args.defaultValue}",
        className:"${args.className}",
        onNavigateTo:${args.onNavigateTo},
        href:"${args.href}",
    },
    document.querySelector('#title_widget_container_${num}')
)
</script>
        `;
  },
  argTypes: TitleWidgetStoryArgTypes,
  args: TitleWidgetStoryArgs,
};

export {
  TitleWidgetDefault,
  OntologyTitle,
  TitleWidgetWithTitleText,
  IncorrectIriWithDefaultValue,
  IncorrectIriWithoutDefaultValue,
  SelectingDefiningOntology,
  DefiningOntologyUnavailable,
  WithStyles,
  OntologyTitleCustomLink,
  OntologyTitleCustomOnNavigate,
} from "@ts4nfdi/terminology-service-suite/src/components/widgets/MetadataWidget/TitleWidget/TitleWidgetStories";