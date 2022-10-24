import React, { useState } from "react";
import { EuiComboBox } from "@elastic/eui";

export interface AutocompleteWidgetProps {
  api: string;
  onChange({}): void;
  placeholder?: string | undefined;
  parameter?: string | undefined;
}

function AutocompleteWidget(props: AutocompleteWidgetProps) {
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  const [selectedOptions, setSelected] = useState([]);

  function searchTerm(searchValue: string) {
    const options_data: { label: string; value: string }[] = [];
    if (searchValue.length > 0) {
      fetch(`${props.api}select?q=${searchValue}&${props.parameter}`, {
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

  const onSearchChange = (searchValue: string) => {
    searchTerm(searchValue);
  };

  //@ts-ignore
  function onChangeHandler(selectedOptions) {
    setSelected(selectedOptions);
    //due to singleSelection being true, selectedOptions contains only 1 entry when searching a term
    //on deletion of the search term, selectedOptions is empty -> "selectedOption" is undefined
    props.onChange({
      "options": options,
      "selectedOption": selectedOptions[0]
    });
  }

  return (
    <EuiComboBox
      aria-label="searchBar"
      placeholder={props.placeholder ? props.placeholder : "Search for Term"}
      options={options}
      selectedOptions={selectedOptions}
      onChange={onChangeHandler}
      onSearchChange={onSearchChange}
      isClearable
      async={true}
      singleSelection={{ asPlainText: true }}
      className="comboBox"
      fullWidth={true}
    />
  );
}

export { AutocompleteWidget };
