"use client";

import { EuiComboBox, EuiProvider } from "@elastic/eui";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { SearchBarWidgetProps } from "../../../app/types";
import { EuiComboBoxOptionOption } from "@elastic/eui/src/components/combo_box/types";
import { OlsSearchApi } from "../../../api/ols/OlsSearchApi";

function SearchBarWidget(props: SearchBarWidgetProps) {
  const { api, query, selectionChangedEvent, ...rest } = props;
  const olsApi = new OlsSearchApi(api);

  /**
   * suggestions
   */
  const [options, setOptions] = useState<Array<EuiComboBoxOptionOption<any>>>();

  /**
   * selected suggestion (on click)
   */
  const [selectedOptions, setSelected] = useState<
    Array<EuiComboBoxOptionOption<any>>
  >([]);

  /**
   * current search value
   */
  const [searchValue, setSearchValue] = useState<string>(query);

  const onChange = (selectedOption: Array<EuiComboBoxOptionOption<any>>) => {
    setSelected(selectedOption);
  };

  const onCreateOption = (searchValue: string) => {
    const normalizedSearchValue = searchValue.trim().toLowerCase();

    if (!normalizedSearchValue) {
      return;
    }

    const newOption: Array<EuiComboBoxOptionOption<any>> = [
      {
        label: searchValue,
      },
    ];

    setSelected(newOption);
  };

  /**
   * fetches suggestions when searchValue changes
   */
  const { isLoading } = useQuery(["suggestions", searchValue], async () => {
    if (!searchValue.trim()) {
      return; // Exit early if searchValue is empty
    }
    return olsApi
      .suggest(
        {
          query: searchValue,
        },
        undefined,
        undefined,
        props.parameter,
      )
      .then((response) => {
        if (response.response && response.response.docs) {
          setOptions(
            response.response.docs.map((suggestion: any) => ({
              label: suggestion.autosuggest,
              type: { color: "tint1", iconType: "" },
            })),
          );
        }
      });
  });

  /**
   * Once the selected option changes, pass the event by invoking the passed function.
   */
  useEffect(() => {
    selectionChangedEvent(
      selectedOptions.map((selectedOption) => {
        return {
          label: selectedOption.label,
        };
      }),
    );
  }, [selectedOptions]);

  return (
    <div data-testid="search-bar">
      <EuiComboBox
        id={"suggest"}
        isClearable
        aria-label="searchBar"
        fullWidth={true}
        async={true}
        placeholder={"Search"}
        singleSelection={true}
        isLoading={isLoading}
        options={options}
        selectedOptions={selectedOptions}
        onChange={onChange}
        onCreateOption={onCreateOption}
        onSearchChange={(item) => {
          setSearchValue(item);
        }}
      />
    </div>
  );
}

function WrappedSearchBarWidget(props: SearchBarWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <SearchBarWidget
          api={props.api}
          query={props.query}
          selectionChangedEvent={props.selectionChangedEvent}
          parameter={props.parameter}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { SearchBarWidget, WrappedSearchBarWidget };
