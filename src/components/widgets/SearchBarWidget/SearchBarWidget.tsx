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
