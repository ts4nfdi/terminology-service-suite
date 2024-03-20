import {EuiProvider, EuiSuggest, EuiSuggestionProps} from "@elastic/eui";
import React, { useEffect, useState } from "react";
import { OlsApi } from "../../../api/OlsApi";
import {QueryClient, QueryClientProvider, useQuery} from "react-query";
import {SearchBarWidgetProps} from "../../../app/types";
import ReactDOM from "react-dom";

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
  }, [onSearchValueChange, searchValue]);

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
