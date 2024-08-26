export const AutocompleteWidgetStoryArgTypes = {
  argTypes: {
    api: {
      control: {
        type: "radio",
      },
      options: [
        "https://www.ebi.ac.uk/ols4/api/",
        "https://semanticlookup.zbmed.de/ols/api/",
        "https://semanticlookup.zbmed.de/api/",
        "https://service.tib.eu/ts4tib/api/",
        "https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/"
      ],
    },
    selectionChangedEvent: {
      action: "selectionChangedEvent",
    },
    placeholder: {},
    preselected: {},
    parameter: {},
    hasShortSelectedLabel: {
     required: false,
    },
    allowCustomTerms: {
      required: false,
    },
    singleSelection: {
      required: false,
    },
    ts4nfdiGateway: {
      required: false,
    },
    singleSuggestionRow: {
      required: false,
    },
    showApiSource: {
      required: false,
    }
  }
}

export const AutocompleteWidgetStoryArgsReact = {
  args: {
    api: "https://semanticlookup.zbmed.de/ols/api/",
    ts4nfdiGateway: false,
    hasShortSelectedLabel: true,
    allowCustomTerms: false,
    singleSelection: true,
    placeholder: "Search for a Concept",
    preselected: [],
    parameter: "ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
  },
};

export const AutocompleteWidgetStoryArgs = {
  args: {
    api: "https://semanticlookup.zbmed.de/ols/api/",
    ts4nfdiGateway: false,
    hasShortSelectedLabel: true,
    allowCustomTerms: false,
    singleSelection: true,
    placeholder: "Search for a Concept",
    preselected: [],
    selectionChangedEvent: () => {return;},
    parameter: "ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
  },
};

export const WithDefaults = {
  args: {},
};

export const UseAPIGatewayWithOLS = {
  args: {
    api: "https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/",
    ts4nfdiGateway: true,
    parameter: "database=ols&fieldList=description,label,iri,ontology_name,type,short_form"
  },
}
export const UseAPIGatewayWithOntoPortal = {
  args: {
    api: "https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/",
    ts4nfdiGateway: true,
    parameter: "database=ontoportal&fieldList=description,label,iri,ontology_name,type,short_form"
  },
}

export const UseAPIGatewayWithSkosmos = {
  args: {
    api: "https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/",
    ts4nfdiGateway: true,
    parameter: "database=skosmos&fieldList=description,label,iri,ontology_name,type,short_form"
  },
}

export const HideApiSourceApiGateway = {
  args: {
    api: "https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/",
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
