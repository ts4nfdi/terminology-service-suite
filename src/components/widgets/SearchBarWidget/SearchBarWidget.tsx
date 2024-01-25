import { EuiSuggest, EuiSuggestionProps } from "@elastic/eui";
import { EuiSuggestProps } from "@elastic/eui/src/components";
import React, { useEffect, useState } from "react";
import { OlsApi } from "../../../api/OlsApi";
import {useQuery} from "react-query";

export type SearchBarWidgetProps = {
  api: string;
  query: string;
  /**
   * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
   */
  onSearchValueChange: (suggestion: string) => void;
  /**
     * Additional parameters to pass to the API.
     *
     * This parameters can be used to filter the search results. Each parameter can be combined via
     * the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
     * <i><b>,</b></i>. The following keys could be used:<br/> <br/>
     *  <table>
     *  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
     *  <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>
     *  <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>
     *  <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>
     *  <tr><td>fieldList</td><td>Specify the fields to return. Defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>
     *  <tr><td>obsoletes</td><td>Set to true to include obsolete terms in the results</td></tr>
     *  <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology, e.g. only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>
     *  <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>
     *  <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>
     *  <tr><td>rows</td><td>Set results per page</td></tr>
     *  <tr><td>start</td><td>Set the results page number</td></tr>
     *  <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. collection=nfdi4health</td></tr>
     * </table>
     */
  parameter?: string
} & Omit<EuiSuggestProps, "suggestions" | "onChange" | "onItemClick" | "value">;

function SearchBarWidget(props: SearchBarWidgetProps) {
  const {
    api,
    query,
    onSearchValueChange,
    ...rest
  } = props;
  const olsApi = new OlsApi(api);

  const [searchValue, setSearchValue] = useState(query);
  const [suggestions, setSuggestions] = useState<Array<EuiSuggestionProps>>([]);

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  useEffect(() => {
    onSearchValueChange(searchValue);
  }, [searchValue]);

  /**
   * fetches suggestions when searchValue changes (setSearchValue is passed as EuiSuggest onChange)
   */
  useQuery(
      [
          "onChange",
          searchValue
      ],
      async () => {
          return olsApi.suggest(
              {
                query: searchValue,
              },
              undefined,
              undefined,
              props.parameter,
          ).then((response) => {
            if (response.response && response.response.docs) {
              setSuggestions(response.response.docs.map((suggestion: any) => (
                  {
                    label: suggestion.autosuggest,
                    type: { color: "tint1", iconType: ""},
                  }
              )));
            }
          });
      }
  )

  function onItemClick(item: EuiSuggestionProps) {
    setSearchValue(item.label);
  }

  return (
    <>
      <EuiSuggest
        aria-label="Search for Concept"
        placeholder="Search for Concept"
        isClearable
        {...rest}
        suggestions={suggestions}
        onChange={setSearchValue}
        onItemClick={onItemClick}
        value={searchValue}
      />
    </>
  );
}

export { SearchBarWidget };
