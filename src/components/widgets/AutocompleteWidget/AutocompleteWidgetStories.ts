import {
  allowCustomTermsArgType,
  apiArgType, hasShortSelectedLabelArgType, parameterArgType,
  placeholderArgType,
  preselectedArgType,
  selectionChangedEventArgType, singleSelectionArgType
} from "../../../stories/storyArgs";
import { action } from "@storybook/addon-actions";

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
  }
}

export const AutocompleteWidgetStoryArgsReact = {
  args: {
    api: "https://semanticlookup.zbmed.de/ols/api/",
    singleSelection: true,
    allowCustomTerms: false,
    selectionChangedEvent: action('selectionChangedEvent'),
    hasShortSelectedLabel: true,
    placeholder: "Search for a Concept",
    preselected: [],
    parameter: "ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
  },
};

export const AutocompleteWidgetStoryArgsHTML = {
  args: {
    api: "https://semanticlookup.zbmed.de/ols/api/",
    singleSelection: true,
    allowCustomTerms: false,
    selectionChangedEvent: () => {return;},
    hasShortSelectedLabel: true,
    placeholder: "Search for a Concept",
    preselected: [],
    parameter: "ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
  },
};

export const WithDefaults = {
  args: {},
};

export const WithValue = {
  args: {
    preselected: [{ iri: "http://purl.bioontology.org/ontology/MESH/D000086382" }],
  }
};

export const WithCustomValue = {
  args: {
    allowCustomTerms: true,
    preselected: [{ label: "freetext" }],
  }
};

export const WithInvalidValue = {
  args: {
    preselected: [{
      iri: "ht3stp://purl.bioontology.org/ontology/MESH/D000086382",
    }],
  }
};

export const WithGermanInput = {
  args: {
    api: "https://semanticlookup.zbmed.de/api/",
    parameter: "collection=nfdi4health&lang=de&type=class",
  }
};

export const WithDescriptionAndShortForm = {
  args: {
    api: "https://semanticlookup.zbmed.de/api/",
    parameter: "fieldList=description,label,iri,ontology_name,type,short_form",
  }
};

export const DisplaySelectedEntityWithLongForm = {
  args: {
    hasShortSelectedLabel: false
  }
};

export const AllowAddingCustomTerms = {
  args: {
    allowCustomTerms: true
  }
};

export const AllowMultipleTerms = {
  args: {
    singleSelection: false,
  }
};

export const WithMultipleValues = {
  args: {
    preselected: [{ iri: "http://purl.bioontology.org/ontology/MESH/D000086382" }, { iri: "http://purl.bioontology.org/ontology/MESH/D003920" }],
    singleSelection: false,
  }
};

export const TibNFDI4CHEM = {
  args: {
    api: "https://service.tib.eu/ts4tib/api/",
  parameter: "classification=NFDI4CHEM&schema=collection",
  }
};

export const TibDataPlant = {
  args: {
    api: "https://service.tib.eu/ts4tib/api/",
    parameter: "classification=DataPLANT&schema=collection",
  }
};