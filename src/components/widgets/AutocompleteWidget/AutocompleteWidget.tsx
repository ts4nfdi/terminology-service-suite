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
  EuiProvider,
  EuiIcon, EuiText
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
    ts4nfdiGateway = false,
    showApiSource = true,
    apiEndpoint = "select",
    autosuggest = true,
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
   * The set of available OLS API search endpoint options.
   */
  const [searchOptions, setSearchOptions] = useState<Array<EuiComboBoxOptionOption<any>>>([]);
  /**
   * All options.
   */
  const [allOptions, setAllOptions] = useState<Array<EuiComboBoxOptionOption<any>>>([]);
  const [orderedOptions, setOrderedOptions] = useState<Array<EuiComboBoxOptionOption<any>>>([]);

  /**
   * Store current set of select Options. A subset of options.
   */
  const [selectedOptions, setSelectedOptions] = useState<Array<EuiComboBoxOptionOption<any>>>([]);


  useEffect(() => {
    console.log("a", allOptions)
    const selectOptions = allOptions.filter((option) => option.group === "select");
    const searchOptions = allOptions.filter((option) => option.group === "search");
    setOrderedOptions((prevList) => prevList.concat(selectOptions, searchOptions))
  }, [allOptions])

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const renderOption = (option, searchValue) => {
    const { label, value, group } = option;
    const dotColorIndex = visColorsBehindText.indexOf(value.type === "class" ? visColorsBehindText[5] :
      value.type === "individual" ? visColorsBehindText[3] :
        value.type === "property" ? visColorsBehindText[1] : "");
    const dotColor = visColors[dotColorIndex];

    if (allowCustomTerms && value.iri == "") {// if we have a custom term, just show the label
      return label;
    }

    let prefix = (value.type === "ontology")
      ? "Prefix: " + value.ontology_name
      : "Prefix > Short form: " + value.ontology_name + " > " + value.short_form;

    let hoverText = `Type: ${value.type}\n\nLabel: ${value.label}\n\n${prefix}`;
    if (value.description != undefined) {
      hoverText += `\n\nDescription: ${value.description}`;
    }
    if (showApiSource && value.source_url && value.source_url !== ""){
      hoverText += "\n\nSource: " + value.source;
      hoverText += "\n\nSource URL: " + value.source_url;
    }

    const renderOntology = () => {
      return (
        <EuiHealth
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
        <span title={hoverText} style={{ height: 200 + "px" }}>
          {group === "select" &&
            <EuiHealth
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
                  <EuiIcon
                    type={"iInCircle"}
                    style={{ marginLeft: 5 }}
                    title={hoverText}
                  />
                  {!singleSuggestionRow && value.description &&
                      <>
                      <br />
                      {value.description.substring(0, 40) + "..."}
                      </>
                  }
                </span>
            </EuiHealth>
          }
          {group === "search" &&
          <EuiText>
            {value.label}
          </EuiText>
          }
        </span>
      );
    };

    return value.type === "ontology" ? renderOntology() : renderEntityWithDescription();
  };

  /**
     * on mount: fetches term for preselected
     * sets its label or sets a given label if no iri is provided/the given iri cannot be resolved
     * only if allowCustomTerms is true
     */
    const {
        isLoading: isLoadingOnMount
    } = useQuery(
        [
            "onMount",
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
                      await olsApi.getSelectData(
                            {query: option.iri},
                            undefined,
                            undefined,
                            parameter,

                            ts4nfdiGateway
                        ).then((response) => {
                            if (response) {
                                response.properties.map((selection: any) => {
                                    if (option.iri === selection.getIri()) {
                                        preselectedValues.push({
                                            // label to display within the combobox either raw value or generated one
                                            // #renderOption() is used to display during selection.
                                            label: hasShortSelectedLabel ? selection.getLabel() : generateDisplayLabel(selection),
                                            // key to distinguish the options (especially those with same label)
                                            key: selection.getIri(),
                                            value: {
                                                iri: selection.getIri(),
                                                label: selection.getLabel(),
                                                ontology_name: selection.getOntologyId(),
                                                type: selection.getType(),
                                                short_form: selection.getShortForm(),
                                                description: selection.getDescription(),
                                                source: selection.getApiSourceName(),
                                                source_url: selection.getApiSourceEndpoint()
                                            },
                                        });
                                    }
                                })

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
                description: "",
                source: "",
                source_url: ""
              }
            });
          }
        }

        setOptions(preselectedValues);
        setSelectedOptions(preselectedValues);
      }
    }
  );

  async function fetchSelectResults(query: string): Promise<EuiComboBoxOptionOption<any>[]> {
      if (query.length === 0) return [];

      try {
          const response = await olsApi.getSelectData(
              { query },
              undefined,
              undefined,
              parameter,
              ts4nfdiGateway
          );

          if (response) {
              return response.properties.map((selection: any) => ({
                  label: hasShortSelectedLabel
                      ? selection.getLabel()
                      : generateDisplayLabel(selection),
                  key: selection.getIri(),
                  value: {
                      iri: selection.getIri(),
                      label: selection.getLabel(),
                      ontology_name: selection.getOntologyId(),
                      type: selection.getType(),
                      short_form: selection.getShortForm(),
                      description: selection.getDescription(),
                      source: selection.getApiSourceName(),
                      source_url: selection.getApiSourceEndpoint(),
                  },
                  group: "select",
              }));
          }
      } catch (error) {
          console.error("Error fetching select results:", error);
      }
      return [];
  }

  async function fetchSearchResults(query: string): Promise<EuiComboBoxOptionOption<any>[]> {
      if (query.length === 0) return [];

      try {
          const response = await olsApi.getSearchData(
              { query },
              undefined,
              undefined,
              parameter,
              ts4nfdiGateway
          );

          if (response) {
              return response.properties.map((selection: any) => ({
                  label: hasShortSelectedLabel
                      ? selection.getLabel()
                      : generateDisplayLabel(selection),
                  key: selection.getIri(),
                  value: {
                      iri: selection.getIri(),
                      label: selection.getLabel(),
                      ontology_name: selection.getOntologyId(),
                      type: selection.getType(),
                      short_form: selection.getShortForm(),
                      description: selection.getDescription(),
                      source: selection.getApiSourceName(),
                      source_url: selection.getApiSourceEndpoint(),
                  },
                  group: "search",
              }));
          }
      } catch (error) {
          console.error("Error fetching select results:", error);
      }
      return [];
  }

  async function updateOptions(query: string) {
    const fetchResults = apiEndpoint === "search" ? fetchSearchResults : fetchSelectResults;
    const options = await fetchResults(query);
    const searchOptions = await fetchSearchResults(query);

    if (autosuggest){
      setAllOptions((prevList) => prevList.concat(options, searchOptions))
    } else {
     setOptions(options);
    }
  }

  /**
   * fetches new options when searchValue changes
   */
  const { isLoading: isLoadingTerms } = useQuery(
      ["onSearchChange", searchValue],
      async () => {
          await updateOptions(searchValue);
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
            description: x.value.description,
            source: x.value.source
          };
        } else if (x.value.iri == "") {
          return {
            iri: "",
            label: "",
            ontology_name: "",
            type: "",
            short_form: "",
            description: "",
            source: ""
          };
        } else {
          return {
            iri: x.value.iri,
            label: x.value.label,
            ontology_name: x.value.ontology_name,
            type: x.value.type,
            short_form: x.value.short_form,
            description: x.value.description,
            source: x.value.source
          };
        }
      })
    );
  }, [selectedOptions]);

  function generateDisplayLabel(item: any) {

    return (
      item.getLabel() +
      " (" +
      item.getOntologyId().toUpperCase() +
      " " +
      item.getShortForm() +
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
        description: "",
        source: ""
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
      options={autosuggest ? orderedOptions : options}
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
  // @ts-ignore
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
          singleSelection={props.singleSelection as boolean}
          placeholder={props.placeholder}
          hasShortSelectedLabel={props.hasShortSelectedLabel}
          allowCustomTerms={props.allowCustomTerms}
          ts4nfdiGateway={props.ts4nfdiGateway}
          singleSuggestionRow={props.singleSuggestionRow}
          showApiSource={props.showApiSource}
          apiEndpoint={props.apiEndpoint}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { AutocompleteWidget, createAutocomplete };
