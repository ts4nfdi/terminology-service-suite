export const apiArgType = {
  api: {
    control: {
      type: "radio"
    },
    options: [
      "https://www.ebi.ac.uk/ols4/api/",
      "https://semanticlookup.zbmed.de/ols/api/",
      "https://semanticlookup.zbmed.de/api/",
      "https://service.tib.eu/ts4tib/api/"
    ],
    description:
      "The API instance for the API call.<br> **Official OLS4 API of EMBL-EBI**: [https://www.ebi.ac.uk/ols4/api/](https://www.ebi.ac.uk/ols4/api/)<br> **Official SemLookP API (based on OLS3)**: [https://semanticlookup.zbmed.de/ols/api/](https://semanticlookup.zbmed.de/ols/api/)<br> **Improved SemLookP API (beta version)**: [https://semanticlookup.zbmed.de/api/](https://semanticlookup.zbmed.de/api/)<br> **OLS4 API NFDI4Health collection**: [https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/](https://ols4-nfdi4health.prod.km.k8s.zbmed.de/ols4/api/)<br> **TIB Terminology Service**: [https://service.tib.eu/ts4tib/api/](https://service.tib.eu/ts4tib/api/)",
    type: { summary: "string" }
  }
};

export const selectionChangedEventArgType = {
  selectionChangedEvent: {
    required: true,
    action: "selectionChangedEvent",
    description: "A method that is called once the set of selection changes",
    type: {
      summary: "(selectedOptions: {" +
        "        label: string;" +
        "        iri?: string;" +
        "        ontology_name?: string;" +
        "        type?: string;" +
        "    }[]) => void;"
    }
  }
};
export const placeholderArgType = {
  placeholder: {
    required: false,
    description: "Placeholder to show if no user input nor selection is performed.",
    type: { summary: "string" }
  }
};
export const preselectedArgType = {
  preselected: {
    required: false,
    description: "Pass pre-selected values. If `singleSelection == true`, only the first one is displayed.",
    type: { summary: "{ label?: string; iri?: string }[]" }
  }
};
export const parameterArgType = {
  parameter: {
    required: false,
    description:
      `Additional parameters to pass to the API.<br><br>
      This parameters can be used to filter the search results. Each parameter can be combined via the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign <i><b>,</b></i>. The following keys could be used:<br><br>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ontology</td>
            <td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td>
          </tr>
          <tr>
            <td>type</td>
            <td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td>
          </tr>
          <tr>
            <td>slim</td>
            <td>Restrict a search to a particular set of slims by name</td>
          </tr>
          <tr>
            <td>fieldList</td>
            <td>Specify the fields to return. Defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td>
          </tr>
          <tr>
            <td>obsoletes</td>
            <td>Set to true to include obsolete terms in the results</td>
          </tr>
          <tr>
            <td>local</td>
            <td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td>
          </tr>
          <tr>
            <td>childrenOf</td>
            <td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td>
          </tr>
          <tr>
            <td>allChildrenOf</td>
            <td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td>
          </tr>
          <tr>
            <td>rows</td>
            <td>Set results per page</td>
          </tr>
          <tr>
            <td>start</td>
            <td>Set the results page number</td>
          </tr>
          <tr>
            <td>collection</td>
            <td>Restrict a search to a terminology subset e.g. collection=nfdi4health</td>
          </tr>
        </tbody>
      </table>`,
    type: { summary: "string" }
  }
};
export const hasShortSelectedLabelArgType = {
  hasShortSelectedLabel: {
    required: false,
    description: "If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.",
    defaultValue: { summary: false },
    type: { summary: "boolean" }
  }
};
export const allowCustomTermsArgType = {
  allowCustomTerms: {
    required: true,
    description: "If true, custom terms that are not found in any ontology can be added.",
    defaultValue: { summary: false },
    type: { summary: "boolean" }
  }
};
export const singleSelectionArgType = {
  singleSelection: {
    required: true,
    description: "If true, only one concept can be selected at once.",
    defaultValue: { summary: false },
    type: { summary: "boolean" }
  }
};
