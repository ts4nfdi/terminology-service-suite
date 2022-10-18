import React, { useEffect, useState } from "react";
import { EuiButtonIcon, EuiComboBox, EuiComboBoxOptionOption, EuiComboBoxProps, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

export interface AutocompleteWidgetProps extends EuiComboBoxProps<string> {
  api: string;
  onChange?: (options: EuiComboBoxOptionOption<string>[]) => void;
  onSearchChange?: (searchValue: string, hasMatchingOptions?: boolean) => void;
  onSearchButtonClick?: (searchValue: string) => void;
  placeholder?: string | undefined;
  parameter?: string | undefined;
  prefill?: string;
}

function AutocompleteWidget(props: AutocompleteWidgetProps) {
  const { api, onChange, onSearchChange, onSearchButtonClick, placeholder, parameter, prefill, ...rest } = props;

  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  const [selectedOptions, setSelected] = useState(prefill ? [{ label: prefill }] : []);
  const [currentSearchValue, setCurrentSearchValue] = useState("");

  useEffect(() => {
    if (!prefill) return;
    onSearchChangeHandler(prefill);
  }, [prefill]);

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
  function onChangeHandler(selectedOptions) {
    setSelected(selectedOptions);
    if (onChange) {
      onChange(selectedOptions);
    }
  }

  const onSearchButtonClickHandler = (item: any) => {
    console.log(item);
    if (onSearchButtonClick) {
      onSearchButtonClick(currentSearchValue);
    }
  };

  return (
    <EuiFlexGroup>
      <EuiFlexItem>
        <EuiComboBox
          aria-label="searchBar"
          placeholder={placeholder ? placeholder : "Search for Term"}
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
