import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { OlsApi } from "../../../api/OlsApi";
import { EuiComboBoxOptionOption } from "@elastic/eui/src/components/combo_box/types";
import {
  EuiComboBox,
  euiPaletteColorBlindBehindText,
  euiPaletteColorBlind,
  EuiHighlight,
  EuiHealth,
  EuiProvider
} from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { AutocompleteWidgetProps } from "../../../app/types";
import { BreadcrumbPresentation } from "../MetadataWidget/BreadcrumbWidget/BreadcrumbPresentation";

/**
 * A React component to provide Autosuggestion based on SemLookP.
 */
function AutocompleteWidget(props: AutocompleteWidgetProps) {
  const {
    api,
    parameter,
    hasShortSelectedLabel,
    allowCustomTerms,
    selectionChangedEvent,
    preselected,
    placeholder,
    singleSelection,
    singleSuggestionRow,
    ...rest
  } = props;

  const olsApi = new OlsApi(api);

  const visColors = euiPaletteColorBlind();
  const visColorsBehindText = euiPaletteColorBlindBehindText();

  /**
   * The current search value
   */
  const [searchValue, setSearchValue] = useState<string>("");

  /**
   * The set of available options.s
   */
  const [options, setOptions] = useState<Array<EuiComboBoxOptionOption<any>>>([]);

  /**
   * Store current set of select Options. A subset of options.
   */
  const [selectedOptions, setSelectedOptions] = useState<Array<EuiComboBoxOptionOption<any>>>([]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const renderOption = (option, searchValue) => {
    const { label, value } = option;
    const dotColorIndex = visColorsBehindText.indexOf(value.type === "class" ? visColorsBehindText[5] :
      value.type === "individual" ? visColorsBehindText[3] :
        value.type === "property" ? visColorsBehindText[1] : "");
    const dotColor = visColors[dotColorIndex];

    if (allowCustomTerms && value.iri == "") {// if we have a custom term, just show the label
      return label;
    }

    let hoverText = "";
    if (value.description != undefined) {
      if (value.type === "ontology") {
        hoverText = "Type: " + value.type +
          "\n\nLabel: " + value.label +
          "\n\nPrefix: " + value.ontology_name +
          "\n\nDescription: " + value.description;
      } else {
        hoverText = "Type: " + value.type +
          "\n\nLabel: " + value.label +
          "\n\nPrefix > Short form: " + value.ontology_name + " > " + value.short_form +
          "\n\nDescription: " + value.description;
      }
    } else {
      if (value.type === "ontology") {
        hoverText = "Type: " + value.type +
          "\n\nLabel: " + value.label +
          "\n\nPrefix: " + value.ontology_name;
      } else {
        hoverText = "type: " + value.type +
          "\n\nLabel: " + value.label +
          "\n\nPrefix > Short form: " + value.ontology_name + " > " + value.short_form;
      }
    }

    const renderOntology = () => {
      return (
        <EuiHealth
          title={hoverText}
          color={dotColor}>
              <span>
                  <EuiHighlight search={searchValue}>{value.label}</EuiHighlight>
                  <br />
                {value.description}
              </span>
        </EuiHealth>
      );
    };

    const renderEntityWithDescription = () => {
      return (
        <span style={{ height: 200 + "px" }}>
            <EuiHealth
              title={hoverText}
              color={dotColor}>
                <span>
                    <EuiHighlight search={searchValue}>{value.label}</EuiHighlight>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <BreadcrumbPresentation
                    ontologyName={value.ontology_name}
                    shortForm={value.short_form}
                    colorFirst={"primary"}
                    colorSecond={"success"}
                  />
                  {!singleSuggestionRow && value.description ?
                    <>
                      <br />
                      {value.description.substring(0, 40) + "..."}
                    </> : ""}
                </span>
            </EuiHealth>
        </span>
      );
    };

    return value.type === "ontology" ? renderOntology() : renderEntityWithDescription();
  };

  /**
   * on mount: fetches term for selectOption and sets it is label or sets a given label if no iri is provided or the given iri cannot be resolved only if allowCustomTerms is true
   */
  const {
    isLoading: isLoadingOnMount
  } = useQuery(
    [
      "onMount", // no dependencies - does only need to be executed once when mounting the component
      preselected
    ],
    async () => {
      let preselectedValues: EuiComboBoxOptionOption<any>[] = [];

      let uniqueValues = [...new Set(preselected)]
        .filter((option) => {
          return (allowCustomTerms && option.label) || option.iri;
        });

      if (uniqueValues.length > 0) {
        if (singleSelection) uniqueValues = [uniqueValues[0]];

        for (const option of uniqueValues) {
          if (option && option.iri && option.iri.startsWith("http")) {
            await olsApi.select(
              { query: option.iri },
              undefined,
              undefined,
              parameter
            ).then((response) => {
              if (response.response && response.response.docs) {
                response.response.docs.map((selection: any) => {
                  if (option.iri === selection.iri) {
                    preselectedValues.push({
                      // label to display within the combobox either raw value or generated one
                      // #renderOption() is used to display during selection.
                      label: hasShortSelectedLabel ? selection.label : generateDisplayLabel(selection),
                      // key to distinguish the options (especially those with same label)
                      key: selection.iri,
                      value: {
                        iri: selection.iri,
                        label: selection.label,
                        ontology_name: selection.ontology_name,
                        type: selection.type,
                        short_form: selection.short_form,
                        description: selection.description?.join()
                      }
                    });
                  }
                });

                if (singleSelection && preselectedValues.length > 1) preselectedValues = [preselectedValues[0]];
              }
            });
          } else if (option && option.label && allowCustomTerms) {
            preselectedValues.push({
              label: option.label,
              key: option.label,
              value: {
                iri: "",
                label: "",
                ontology_name: "",
                type: "",
                short_form: "",
                description: ""
              }
            });
          }
        }

        setOptions(preselectedValues);
        setSelectedOptions(preselectedValues);
      }
    }
  );

  /**
   * fetches new options when searchValue changes
   */
  const {
    isLoading: isLoadingTerms
  } = useQuery(
    [
      "onSearchChange",
      searchValue
    ],
    async () => {
      if (searchValue.length > 0) {
        return olsApi.select(
          { query: searchValue },
          undefined,
          undefined,
          parameter
        ).then((response) => {
          if (response.response && response.response.docs) {
            setOptions(response.response.docs.map((selection: any) => (
              {
                // label to display within the combobox either raw value or generated one
                // #renderOption() is used to display during selection.
                label: hasShortSelectedLabel ? selection.label : generateDisplayLabel(selection),
                // key to distinguish the options (especially those with same label)
                key: selection.iri,
                // values to pass to clients
                value: {
                  iri: selection.iri,
                  label: selection.label,
                  ontology_name: selection.ontology_name,
                  type: selection.type,
                  short_form: selection.short_form,
                  description: selection.description?.join()
                }
              })
            ));
          }
        });
      }
    }
  );

  /**
   * Once the set of selected options changes, pass the event by invoking the passed function.
   */
  useEffect(() => {
    selectionChangedEvent(
      selectedOptions.map((x) => {
        // return the value object with the raw values from OLS to a client
        if (allowCustomTerms && x.value.iri == "") {
          return {
            iri: "",
            label: x.label,
            ontology_name: "",
            type: "",
            short_form: x.value.short_form,
            description: x.value.description
          };
        } else if (x.value.iri == "") {
          return {
            iri: "",
            label: "",
            ontology_name: "",
            type: "",
            short_form: "",
            description: ""
          };
        } else {
          return {
            iri: x.value.iri,
            label: x.value.label,
            ontology_name: x.value.ontology_name,
            type: x.value.type,
            short_form: x.value.short_form,
            description: x.value.description
          };
        }
      })
    );
  }, [selectedOptions]);

  function generateDisplayLabel(item: any) {
    return (
      item.label +
      " (" +
      item.ontology_name.toUpperCase() +
      " " +
      item.short_form +
      ")"
    );
  }

  function onChangeHandler(options: Array<any>): void {
    setSelectedOptions(options);
  }

  function onCreateOptionHandler(searchValue: string) {
    const newOption = {
      label: searchValue,
      value: {
        iri: "",
        label: "",
        ontology_name: "",
        type: "",
        short_form: "",
        description: ""
      }
    };

    setOptions([...options, newOption]);
    setSelectedOptions(singleSelection ? [newOption] : [...selectedOptions, newOption]);
  }

  return (
    <EuiComboBox
      isClearable
      aria-label="searchBar"
      fullWidth={true}
      {...rest} // items above can be overridden by a client
      async={true}
      isLoading={isLoadingTerms || isLoadingOnMount}
      singleSelection={singleSelection ? { asPlainText: true } : false}
      placeholder={
        placeholder ? placeholder : "Search for a Concept"
      }
      options={options}
      selectedOptions={selectedOptions}
      onSearchChange={setSearchValue}
      onChange={onChangeHandler}
      renderOption={renderOption}
      onCreateOption={allowCustomTerms ? onCreateOptionHandler : undefined}
      rowHeight={singleSuggestionRow ? 30 : 50}
    />
  );
}

function createAutocomplete(props: AutocompleteWidgetProps, container: any, callback?: () => void) {
  ReactDOM.render(WrappedAutocompleteWidget(props), container, callback);
}

function WrappedAutocompleteWidget(props: AutocompleteWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light">
      <QueryClientProvider client={queryClient}>
        <AutocompleteWidget
          api={props.api}
          parameter={props.parameter}
          selectionChangedEvent={props.selectionChangedEvent}
          preselected={props.preselected}
          singleSelection={props.singleSelection}
          placeholder={props.placeholder}
          hasShortSelectedLabel={props.hasShortSelectedLabel}
          allowCustomTerms={props.allowCustomTerms}
          singleSuggestionRow={props.singleSuggestionRow}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { AutocompleteWidget, createAutocomplete };
