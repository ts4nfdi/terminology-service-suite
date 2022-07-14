import React, { useState } from 'react';
import { EuiComboBox } from '@elastic/eui';

function SearchWidget(props: { searchTerm?: any; api?: any; }) {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelected] = useState([]);

  function searchTerm(searchValue: string) {
    const optionsData: any[] = [];
    const { api } = props;
    if (searchValue.length > 0) {
      fetch(`${api}search?q=${searchValue}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Content_Type: 'application/json',
        },
      }).then((res) => res.json())
        .then((res) => res.response.docs)
        .then((res) => {
          for (const item in res) {
            const obo_short_form = res[item].hasOwnProperty('obo_id')
              ? res[item].obo_id.toUpperCase() : res[item].ontology_name == 'mesh' ? `MESH: ${res[item].short_form.toUpperCase()}` : res[item].short_form.toUpperCase();
            optionsData.push({
              label: `${res[item].label.toLowerCase()} | ${obo_short_form}`,
              value: {
                id: res[item].id,
                iri: res[item].iri,
                obo_id: res[item].obo_id,
                short_form: res[item].short_form,
                label: res[item].label,
                description: res[item].description,
                onto_name: res[item].ontology_name,
                onto_prefix: res[item].ontology_prefix,
                result_type: res[item].result_type,
                is_defining_ontology: res[item].is_defining_ontology,
              },
            });
            if (optionsData.length > 7) {
              break;
            }
          }
          setOptions(optionsData);
        });
    } else {
      setOptions([]);
    }
  }

  const onSearchChange = (searchValue: string) => {
    searchTerm(searchValue);
  };

  // @ts-ignore
  function onChangeHandler(selectedOptions) {
    setSelected(selectedOptions);
    return props.searchTerm(options);
  }

  return (
    <EuiComboBox
      aria-label="searchBar"
      placeholder="Search for Term"
      options={options}
      selectedOptions={selectedOptions}
      onChange={onChangeHandler}
      onSearchChange={onSearchChange}
      isClearable
      async
      singleSelection={{ asPlainText: true }}
      className="comboBox"
      fullWidth
    />
  );
}

export { SearchWidget };
