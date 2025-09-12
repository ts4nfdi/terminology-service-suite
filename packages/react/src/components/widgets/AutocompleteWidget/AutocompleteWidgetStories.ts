import * as globals from "../../../app/globals";

import {
  allowCustomTermsArgType,
  apiArgType,
  classNameArgType,
  hasShortSelectedLabelArgType,
  parameterArgType,
  placeholderArgType,
  preselectedArgType,
  selectionChangedEventArgType,
  showApiSourceArgType,
  singleSelectionArgType,
  singleSuggestionRowArgType,
  ts4nfdiGatewayArgType,
} from "../../../stories/storyArgs";
import { AutocompleteWidgetProps } from "../../../app";
import { action } from "storybook/actions";
import { waitFor, within, expect } from "storybook/test";

export const AutocompleteWidgetStoryArgTypes = {
  ...apiArgType,
  ...selectionChangedEventArgType,
  ...placeholderArgType,
  ...preselectedArgType,
  ...parameterArgType,
  ...hasShortSelectedLabelArgType,
  ...allowCustomTermsArgType,
  ...singleSelectionArgType,
  ...ts4nfdiGatewayArgType,
  ...singleSuggestionRowArgType,
  ...showApiSourceArgType,
  ...classNameArgType,
};

export const AutocompleteWidgetStoryArgsReact = {
  api: globals.ZBMED_OLS4_API,
  ts4nfdiGateway: false,
  singleSelection: true,
  allowCustomTerms: false,
  selectionChangedEvent: action("selectionChangedEvent"),
  hasShortSelectedLabel: true,
  placeholder: "Type to search...",
  preselected: [],
  showApiSource: true,
  singleSuggestionRow: false,
  className: "",
  useLegacy: true,
  parameter:
    "fieldList=description,label,iri,ontology_name,type,short_form",
  initialSearchQuery: "",
};

export const AutocompleteWidgetStoryArgsHTML = {
  api: globals.ZBMED_OLS4_API,
  ts4nfdiGateway: false,
  singleSelection: true,
  allowCustomTerms: false,
  selectionChangedEvent: () => {
    return;
  },
  hasShortSelectedLabel: true,
  placeholder: "Type to search...",
  preselected: [],
  showApiSource: true,
  singleSuggestionRow: false,
  useLegacy: true,
  parameter:
    "fieldList=description,label,iri,ontology_name,type,short_form",
  initialSearchQuery: "",
};

export const WithDefaultsArgs = {};

export const UseAPIGatewayWithOLSArgs: AutocompleteWidgetProps = {
  api: globals.GATEWAY_API_ENDPOINT,
  ts4nfdiGateway: true,
  parameter:
    "database=ols&fieldList=description,label,iri,ontology_name,type,short_form",
  selectionChangedEvent: () => {},
};

export const UseAPIGatewayWithOntoPortalArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  api: globals.GATEWAY_API_ENDPOINT,
  ts4nfdiGateway: true,
  parameter:
    "database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form",
};

export const UseAPIGatewayWithSkosmosArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  api: globals.GATEWAY_API_ENDPOINT,
  ts4nfdiGateway: true,
  parameter:
    "database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form",
};

export const HideApiSourceApiGatewayArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  api: globals.GATEWAY_API_ENDPOINT,
  ts4nfdiGateway: true,
  showApiSource: false,
  parameter:
    "database=ols&fieldList=description,label,iri,ontology_name,type,short_form",
};

export const WithDefaultsCompactArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  singleSuggestionRow: true,
};

export const WithPreselectedValueOLS4v2Args: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  api: globals.ZBMED_OLS4_API,
  useLegacy: false,
  preselected: [
    {
      label: "COVID-19",
      iri: "http://purl.bioontology.org/ontology/MESH/D000086382",
    },
  ],
  parameter:
    "ontology=snomed,mesh&type=class&fieldList=description,label,iri,ontology_name,type,short_form",
  allowCustomTerms: true,
};

export const WithPreselectedValueAndUnresolvedIriOLS3Args: AutocompleteWidgetProps =
  {
    ...AutocompleteWidgetStoryArgsReact,
    api: globals.ZBMED_OLS3_API,
    useLegacy: true,
    preselected: [
      {
        label: "COVID-19",
        iri: "http://purl.bioontology.org/ontology/MESH/D00008",
      },
    ],
    allowCustomTerms: true,
  };

export const WithPreselectedMultipleValuesOLS4Args: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  api: globals.ZBMED_OLS4_API,
  useLegacy: false,
  preselected: [
    {
      label: "COVID-19",
      iri: "http://purl.bioontology.org/ontology/MESH/D000086382",
    },
    {
      label: "Survival Analysis",
      iri: "http://purl.bioontology.org/ontology/MESH/D016019",
    },
  ],
  singleSelection: false,
  parameter: "",
};

export const WithCustomValueArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  allowCustomTerms: true,
  preselected: [{ label: "freetext" }],
};

export const WithInvalidValueArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  preselected: [
    {
      iri: "ht3stp://purl.bioontology.org/ontology/MESH/D000086382",
    },
  ],
};

export const WithGermanInputArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  api: globals.ZBMED_OLS4_API,
  parameter: "collection=nfdi4health&lang=de&type=class",
};

export const WithDescriptionAndShortFormArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  api: globals.ZBMED_OLS4_API,
  parameter: "fieldList=description,label,iri,ontology_name,type,short_form",
};

export const WithLongFormArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  hasShortSelectedLabel: false,
};

export const AllowAddingCustomTermsArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  allowCustomTerms: true,
};

export const AllowMultipleTermsArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  singleSelection: false,
};

export const WithMultipleValuesArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  preselected: [
    { iri: "http://purl.bioontology.org/ontology/MESH/D000086382" },
    { iri: "http://purl.bioontology.org/ontology/MESH/D003920" },
  ],
  singleSelection: false,
};

export const TibNFDI4CHEMArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  api: globals.TIB_API_ENDPOINT,
  parameter: "classification=NFDI4CHEM&schema=collection",
};

export const TibDataPlantArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  api: globals.TIB_API_ENDPOINT,
  parameter: "classification=DataPLANT&schema=collection",
};

export const SubtreeDirectSubtypesArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  api: globals.ZBMED_OLS4_API,
  allowCustomTerms: true,
  useLegacy: true,
  parameter:
    "ontology=snomed&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form&childrenOf=http://snomed.info/id/22298006",
};

export const SubtreeDirectAndIndirectSubtypesArgs: AutocompleteWidgetProps = {
  ...AutocompleteWidgetStoryArgsReact,
  api: globals.ZBMED_OLS4_API,
  allowCustomTerms: true,
  useLegacy: true,
  parameter:
    "ontology=snomed&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form&AllChildrenOf=http://snomed.info/id/22298006",
};

export const InitialSearchQueryArgs: AutocompleteWidgetProps = {
  api: globals.ZBMED_OLS4_API,
  parameter:
    "ontology=iso3166&type=class&fieldList=description,label,iri,ontology_name,type,short_form",
  selectionChangedEvent: () => {},
  initialSearchQuery: "spain/france/germany",
  useLegacy: false,
};

export const commonAutocompleteWidgetPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  await waitFor(
    async () => {
      const content = canvas.getByTestId("autocomplete");
      await expect(content).toBeInTheDocument();
    },
    {
      timeout: 3000,
    },
  );
};
