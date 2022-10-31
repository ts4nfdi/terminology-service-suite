import React, { useState } from "react";
import { EuiButtonIcon, EuiComboBox, EuiComboBoxOptionOption, EuiComboBoxProps, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

export type AutocompleteWidgetProps = {
  api: string;
  onChange?: (obj: any) => void;
  onSearchChange?: (searchValue: string, hasMatchingOptions?: boolean) => void;
  onSearchButtonClick?: (searchValue: string) => void;
  placeholder?: string;
  parameter?: string;
} & Omit<EuiComboBoxProps<string>, "onCreateOption">;

function AutocompleteWidget(props: AutocompleteWidgetProps) {
  const { api, onChange, onSearchChange, onSearchButtonClick, placeholder, parameter, ...rest } = props;

  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  const [selectedOptions, setSelected] = useState<Array<EuiComboBoxOptionOption<string>>>([]);
  const [currentSearchValue, setCurrentSearchValue] = useState("");

  function searchTerm(searchValue: string) {
    const options_data: { label: string; value: string }[] = [];
    if (searchValue.length > 0) {
      fetch(`${api}select?q=${searchValue}&${parameter}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Content_Type: "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => res?.response?.docs)
        .then((res) => {
          for (const item in res) {
            options_data.push({
              label: res[item]?.label.toLowerCase() + " | " + res[item].ontology_name.toUpperCase() + " > " + res[item].short_form,
              value: res[item],
            });
            if (options_data.length > 9) {
              break;
            }
          }
          setOptions(options_data);
        });
    } else {
      setOptions([]);
    }
  }

  const onSearchChangeHandler = (searchValue: string, hasMatchingOptions?: boolean) => {
    setCurrentSearchValue(searchValue);
    searchTerm(searchValue);
    if (onSearchChange) {
      onSearchChange(searchValue, hasMatchingOptions);
    }
  };

  //@ts-ignore
  function onChangeHandler(selectedOptions: Array<EuiComboBoxOptionOption<string>>) {
    setSelected(selectedOptions);
    //due to singleSelection being true, selectedOptions contains only 1 entry when searching a term
    //on deletion of the search term, selectedOptions is empty -> "selectedOption" is undefined
    if (onChange) {
      onChange({
        "options": options,
        "selectedOption": selectedOptions[0]
      });
    }
  }

  const onSearchButtonClickHandler = () => {
    if (onSearchButtonClick) {
      onSearchButtonClick(selectedOptions.length > 0 ? selectedOptions[0].label : currentSearchValue);
    }
  };

  return (
    <EuiFlexGroup>
      <EuiFlexItem>
        <EuiComboBox
          aria-label="searchBar"
          placeholder={placeholder || "Search for Concept"}
          options={options}
          selectedOptions={selectedOptions}
          onChange={onChangeHandler}
          onSearchChange={onSearchChangeHandler}
          isClearable
          async={true}
          singleSelection={{ asPlainText: true }}
          className="comboBox"
          fullWidth={true}
          {...rest}
        />
      </EuiFlexItem>
      {onSearchButtonClick && <EuiFlexItem grow={false}>
        <EuiButtonIcon
          onClick={onSearchButtonClickHandler}
          iconType="search"
          aria-label="Search"
          display="base"
          size="m"
        />
      </EuiFlexItem>}
    </EuiFlexGroup>
  );
}

export { AutocompleteWidget };
