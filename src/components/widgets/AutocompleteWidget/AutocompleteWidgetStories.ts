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
  argTypes: {
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
  },
};

export const AutocompleteWidgetStoryArgsReact = {
  args: {
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
  },
};

export const AutocompleteWidgetStoryArgsHTML = {
  args: {
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
  },
};

export const WithDefaults = {
  args: {},
};

export const UseAPIGatewayWithOLS = {
  args: {
    api: globals.GATEWAY_API_ENDPOINT,
    ts4nfdiGateway: true,
    parameter:
      "database=ols&fieldList=description,label,iri,ontology_name,type,short_form",
  },
};

export const UseAPIGatewayWithOntoPortal = {
  args: {
    api: globals.GATEWAY_API_ENDPOINT,
    ts4nfdiGateway: true,
    parameter:
      "database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form",
  },
};

export const UseAPIGatewayWithSkosmos = {
  args: {
    api: globals.GATEWAY_API_ENDPOINT,
    ts4nfdiGateway: true,
    parameter:
      "database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form",
  },
};

export const HideApiSourceApiGateway = {
  args: {
    api: globals.GATEWAY_API_ENDPOINT,
    ts4nfdiGateway: true,
    showApiSource: false,
    parameter:
      "database=ols&fieldList=description,label,iri,ontology_name,type,short_form",
  },
};

export const WithDefaultsCompact = {
  args: {
    singleSuggestionRow: true,
  },
};

export const WithPreselectedValueOLS4v2 = {
  args: {
    api: globals.ZBMED_OLS4_API,
    useLegacy: false,
    preselected: [
      {
        label: "COVID-19",
        iri: "http://purl.bioontology.org/ontology/MESH/D000086382",
      },
    ],
    parameter: "",
  },
};

export const WithPreselectedValueAndUnresolvedIriOLS3 = {
  args: {
    api: globals.ZBMED_OLS3_API,
    useLegacy: true,
    preselected: [
      {
        label: "COVID-19",
        iri: "http://purl.bioontology.org/ontology/MESH/D00008",
      },
    ],
    allowCustomTerms: true,
  },
};

export const WithPreselectedMultipleValuesOLS4 = {
  args: {
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
  },
};

export const WithCustomValue = {
  args: {
    allowCustomTerms: true,
    preselected: [{ label: "freetext" }],
  },
};

export const WithInvalidValue = {
  args: {
    preselected: [
      {
        iri: "ht3stp://purl.bioontology.org/ontology/MESH/D000086382",
      },
    ],
  },
};

export const WithGermanInput = {
  args: {
    api: globals.ZBMED_OLS4_API,
    parameter: "collection=nfdi4health&lang=de&type=class",
  },
};

export const WithDescriptionAndShortForm = {
  args: {
    api: globals.ZBMED_OLS4_API,
    parameter: "fieldList=description,label,iri,ontology_name,type,short_form",
  },
};

export const WithLongForm = {
  args: {
    hasShortSelectedLabel: false,
  },
};

export const AllowAddingCustomTerms = {
  args: {
    allowCustomTerms: true,
  },
};

export const AllowMultipleTerms = {
  args: {
    singleSelection: false,
  },
};

export const WithMultipleValues = {
  args: {
    preselected: [
      { iri: "http://purl.bioontology.org/ontology/MESH/D000086382" },
      { iri: "http://purl.bioontology.org/ontology/MESH/D003920" },
    ],
    singleSelection: false,
  },
};

export const TibNFDI4CHEM = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    parameter: "classification=NFDI4CHEM&schema=collection",
  },
};

export const TibDataPlant = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    parameter: "classification=DataPLANT&schema=collection",
  },
};
