import {EuiProvider, EuiSuggest, EuiSuggestionProps} from "@elastic/eui";
import { EuiSuggestProps } from "@elastic/eui/src/components";
import React, { useEffect, useState } from "react";
import { OlsApi } from "../../../api/OlsApi";
import {QueryClient, QueryClientProvider} from "react-query";
import {AutocompleteWidget} from "../AutocompleteWidget";
import ReactDOM from "react-dom";

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

  async function onChange(value: string) {
    setSearchValue(value);
    return olsApi.suggest(
      {
        query: value,
      },
      undefined,
      undefined,
        props.parameter,
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

function createSearchBar(props: SearchBarWidgetProps, container: any, callback?: ()=>void) {
  ReactDOM.render(WrappedSearchBarWidget(props), container, callback);
}

function WrappedSearchBarWidget(props: SearchBarWidgetProps) {
  const queryClient = new QueryClient();
  return (
      <EuiProvider colorMode="light">
        <QueryClientProvider client={queryClient}>
          <SearchBarWidget
              api={props.api}
              query={props.query}
              onSearchValueChange={props.onSearchValueChange}
              parameter={props.parameter}
          />
        </QueryClientProvider>
      </EuiProvider>
  )
}

export { SearchBarWidget, createSearchBar };
