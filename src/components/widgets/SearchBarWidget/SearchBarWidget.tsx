import { EuiSuggest, EuiSuggestionProps } from "@elastic/eui";
import { EuiSuggestProps } from "@elastic/eui/src/components";
import React, { useEffect, useState } from "react";
import { OlsApi } from "../../../api/OlsApi";

export type SearchBarWidgetProps = {
  api: string;
  query: string;
  /**
   * This parameter specifies which set of ontologies should be shown for a specific frontend like 'nfdi4health'
   */
  frontend?: string;
  onSearchValueChange: (suggestion: string) => void;
  parameters?: string
} & Omit<EuiSuggestProps, "suggestions" | "onChange" | "onItemClick" | "value">;

function SearchBarWidget(props: SearchBarWidgetProps) {
  const {
    api,
    query,
    frontend,
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

  async function onChange(value: string) {
    setSearchValue(value);
    return olsApi.suggest(
      {
        query: value,
      },
      undefined,
      undefined,
        props.parameters,
    ).then((response) => {
      if (response.response && response.response.docs) {
        setSuggestions(response.response.docs.map((suggestion: any) => (
          {
            label: suggestion.autosuggest,
            type: { color: "tint1" },
          }
        )));
      }
    });
  }

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
        onChange={onChange}
        onItemClick={onItemClick}
        value={searchValue}
      />
    </>
  );
}

export { SearchBarWidget };
