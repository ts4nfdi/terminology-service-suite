import * as globals from "../../../app/globals";

import { action } from "@storybook/addon-actions";
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
    placeholder: "Search for a Concept",
    preselected: [],
    showApiSource: true,
    singleSuggestionRow: false,
    className: "",
    useLegacy: true,
    parameter:
      "ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
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
    placeholder: "Search for a Concept",
    preselected: [],
    showApiSource: true,
    singleSuggestionRow: false,
    useLegacy: true,
    parameter:
      "ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
};

export const WithDefaultsArgs = {
};

export const UseAPIGatewayWithOLSArgs = {
  api: globals.GATEWAY_API_ENDPOINT,
  ts4nfdiGateway: true,
  parameter:
    "database=ols&fieldList=description,label,iri,ontology_name,type,short_form",
};

export const UseAPIGatewayWithOntoPortalArgs = {
  api: globals.GATEWAY_API_ENDPOINT,
  ts4nfdiGateway: true,
  parameter:
    "database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form",
};

export const UseAPIGatewayWithSkosmosArgs = {
    api: globals.GATEWAY_API_ENDPOINT,
    ts4nfdiGateway: true,
    parameter:
      "database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form",
};

export const HideApiSourceApiGatewayArgs = {
    api: globals.GATEWAY_API_ENDPOINT,
    ts4nfdiGateway: true,
    showApiSource: false,
    parameter:
      "database=ols&fieldList=description,label,iri,ontology_name,type,short_form",
};

export const WithDefaultsCompactArgs = {
    singleSuggestionRow: true,
};

export const WithPreselectedValueOLS4v2Args = {
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

export const WithPreselectedValueAndUnresolvedIriOLS3Args = {
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

export const WithPreselectedMultipleValuesOLS4Args = {
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

export const WithCustomValueArgs = {
    allowCustomTerms: true,
    preselected: [{ label: "freetext" }],
};

export const WithInvalidValueArgs = {
    preselected: [
      {
        iri: "ht3stp://purl.bioontology.org/ontology/MESH/D000086382",
      },
    ],
};

export const WithGermanInputArgs = {
    api: globals.ZBMED_OLS4_API,
    parameter: "collection=nfdi4health&lang=de&type=class",
};

export const WithDescriptionAndShortFormArgs = {
    api: globals.ZBMED_OLS4_API,
    parameter: "fieldList=description,label,iri,ontology_name,type,short_form",
};

export const WithLongFormArgs = {
    hasShortSelectedLabel: false,
};

export const AllowAddingCustomTermsArgs = {
    allowCustomTerms: true,
};

export const AllowMultipleTermsArgs = {
    singleSelection: false,
};

export const WithMultipleValuesArgs = {
    preselected: [
      { iri: "http://purl.bioontology.org/ontology/MESH/D000086382" },
      { iri: "http://purl.bioontology.org/ontology/MESH/D003920" },
    ],
    singleSelection: false,
};

export const TibNFDI4CHEMArgs = {
    api: globals.TIB_API_ENDPOINT,
    parameter: "classification=NFDI4CHEM&schema=collection",
};

export const TibDataPlantArgs = {
    api: globals.TIB_API_ENDPOINT,
    parameter: "classification=DataPLANT&schema=collection",
};

export const SubtreeDirectSubtypesArgs = {
    api: globals.ZBMED_OLS4_API,
    allowCustomTerms: true,
    useLegacy: true,
    parameter:
      "ontology=snomed&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form&childrenOf=http://snomed.info/id/22298006",
};

export const SubtreeDirectAndIndirectSubtypesArgs = {
    api: globals.ZBMED_OLS4_API,
    allowCustomTerms: true,
    useLegacy: true,
    parameter:
      "ontology=snomed&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form&AllChildrenOf=http://snomed.info/id/22298006",
};
