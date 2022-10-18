import React from "react";
import { AutocompleteWidget, AutocompleteWidgetProps } from "./AutocompleteWidget";
import "@elastic/eui/dist/eui_theme_light.json";

export default {
  title: "Autocomplete Widget",
  component: AutocompleteWidget,
  argTypes: {
    api: {
      description: "Instance of the OLS API to call.",
      control: {
        type: "radio",
        options: [
          "https://www.ebi.ac.uk/ols/api/",
          "https://semanticlookup.zbmed.de/ols/api/",
        ],
      },
      defaultValue: "https://semanticlookup.zbmed.de/ols/api/",
    },
    onChange: {
      description:
        "Will be called everytime a suggestion is selected. Returns array of the selected suggestions. " +
        "Pass as argument a function that takes this array.",
    },
    onSearchChange: {
      description:
        "Will be called everytime the text in the input field is parsed. Returns Object of the OLS API answer. " +
        "Pass as argument a function that takes the result of the search.",
    },
    onSearchButtonClick: {
      description:
        "Will be called everytime the search button is clicked." +
        "Pass as argument a function that takes the current search value. " +
        "If this argument is not provided, the search button will not be rendered.",
    },
    placeholder: {
      description: "Placeholder for the input field.",
      defaultValue: "Search for Term",
    },
    parameter: {
      description: "This parameter could be used to filter the search results. Each parameter could be combined via " +
          "the special character <i><b>&</b></i>. The values of a parameter key could be combined with a comma sign " +
          "<i><b>,</b></i>. The following keys could be used:<br/> <br/> " +
          "<table>" +
          "<thead><tr><th>Parameter</th><th>Description</th></tr></thead>" +
          "<tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>" +
          "<tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>" +
          "<tr><td>stdm</td><td>Restrict a search to an particular set of slims by name</td></tr>" +
          "<tr><td>fieldtdst</td><td>Specify the fields to return, the defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>" +
          "<tr><td>obsoletes</td><td>Set to true to include obsoleted terms in the results</td></tr>" +
          "<tr><td>local</td><td>Set to true to only return terms that are in a defining ontology e.g. Only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>" +
          "<tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>" +
          "<tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>" +
          "<tr><td>rows</td><td>How many results per page</td></tr>" +
          "<tr><td>start</td><td>The results page number</td></tr>" +
          "</table>",
      defaultValue: "ontology=mesh,efo&type=class",
    },
    prefill: {
      description: "This parameter can be used to prefill the input field.",
    }
  },
};

const Template = (args: AutocompleteWidgetProps) => <AutocompleteWidget {...args} />;

export const AutocompleteWidget1 = Template.bind({});
