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
    }
  }
}

export const AutocompleteWidgetStoryArgsReact = {
  args: {
    api: "https://semanticlookup.zbmed.de/ols/api/",
    parameter: "ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
    hasShortSelectedLabel: true,
    allowCustomTerms: false,
    singleSelection: true,
    placeholder: "Search for a Concept",
    preselected: [],
  },
};

export const AutocompleteWidgetStoryArgs = {
  args: {
    api: "https://semanticlookup.zbmed.de/ols/api/",
    parameter: "ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form",
    hasShortSelectedLabel: true,
    allowCustomTerms: false,
    singleSelection: true,
    placeholder: "Search for a Concept",
    preselected: [],
    selectionChangedEvent: () => {return;}
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