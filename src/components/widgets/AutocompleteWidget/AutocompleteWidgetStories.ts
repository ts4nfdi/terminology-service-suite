import * as globals from '../../../app/globals';
import "../../../style/ts4nfdiAutocompleteStyle.css";
import "../../../style/customAutocompleteStyle.css";

import { action } from "@storybook/addon-actions";
import {
  allowCustomTermsArgType,
  apiArgType,
  hasShortSelectedLabelArgType,
  parameterArgType,
  placeholderArgType,
  preselectedArgType,
  selectionChangedEventArgType, showApiSourceArgType,
  singleSelectionArgType,
  singleSuggestionRowArgType,
  ts4nfdiGatewayArgType
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
    ...showApiSourceArgType
  }
}

export const AutocompleteWidgetStoryArgsReact = {
  args: {
    api: globals.ZBMED_OLS_API_ENDPOINT,
    ts4nfdiGateway: false,
    singleSelection: true,
    allowCustomTerms: false,
    selectionChangedEvent: action('selectionChangedEvent'),
    hasShortSelectedLabel: true,
    placeholder: "Search for a Concept",
    preselected: [],
    showApiSource: true,
    singleSuggestionRow: false,
    parameter: "ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
    className: ""
  },
};

export const AutocompleteWidgetStoryArgsHTML = {
  args: {
    api: globals.ZBMED_OLS_API_ENDPOINT,
    ts4nfdiGateway: false,
    singleSelection: true,
    allowCustomTerms: false,
    selectionChangedEvent: () => {return;},
    hasShortSelectedLabel: true,
    placeholder: "Search for a Concept",
    preselected: [],
    showApiSource: true,
    singleSuggestionRow: false,
    parameter: "ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
  },
};

export const WithDefaults = {
  args: {},
};

export const UseAPIGatewayWithOLS = {
  args: {
    api: globals.GATEWAY_API_ENDPOINT,
    ts4nfdiGateway: true,
    parameter: "database=ols&fieldList=description,label,iri,ontology_name,type,short_form"
  },
}
export const UseAPIGatewayWithOntoPortal = {
  args: {
    api: globals.GATEWAY_API_ENDPOINT,
    ts4nfdiGateway: true,
    parameter: "database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form"
  },
}

export const UseAPIGatewayWithSkosmos = {
  args: {
    api: globals.GATEWAY_API_ENDPOINT,
    ts4nfdiGateway: true,
    parameter: "database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form"
  },
}

export const HideApiSourceApiGateway = {
  args: {
    api: globals.GATEWAY_API_ENDPOINT,
    ts4nfdiGateway: true,
    showApiSource: false,
    parameter: "database=ols&fieldList=description,label,iri,ontology_name,type,short_form"
  },
}

export const WithDefaultsCompact = {
  args: {
    singleSuggestionRow: true
  },
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
    api: globals.ZBMED_API_ENDPOINT,
    parameter: "collection=nfdi4health&lang=de&type=class",
  }
};

export const WithDescriptionAndShortForm = {
  args: {
    api: globals.ZBMED_API_ENDPOINT,
    parameter: "fieldList=description,label,iri,ontology_name,type,short_form",
  }
};

export const WithLongForm = {
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
    api: globals.TIB_API_ENDPOINT,
    parameter: "classification=NFDI4CHEM&schema=collection",
  }
};

export const TibDataPlant = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    parameter: "classification=DataPLANT&schema=collection",
  }
};

export const WithCustomStyles = {
  args: {
    api: globals.TIB_API_ENDPOINT,
    parameter: "classification=NFDI4CHEM&schema=collection",
    className: "custom-autocomplete-style"
  }
};
