"use client";

import React, { useEffect, useState } from "react";

import { OlsSearchApi } from "../../../api/ols/OlsSearchApi";
import { EuiComboBoxOptionOption } from "@elastic/eui/src/components/combo_box/types";
import {
  EuiComboBox,
  euiPaletteColorBlind,
  EuiHighlight,
  EuiHealth,
  EuiProvider,
} from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { AutocompleteWidgetProps } from "../../../app";
import { BreadcrumbPresentation } from "../MetadataWidget";
import "../../../style/ts4nfdiStyles/ts4nfdiAutocompleteStyle.css";
import "../../../style/ts4nfdiStyles/ts4nfdiBreadcrumbStyle.css";
import { Entity } from "../../../model/interfaces";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { getConstrainedSynonym } from "./utils";
import Tooltip from "../../helperComponents/Tooltip";

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
    className,
    useLegacy,
    initialSearchQuery,
    onNavigateToOntology,
    ...rest
  } = props;

  const olsApi = new OlsSearchApi(api);
  const olsEntityApi = new OlsEntityApi(api);

  const visColors = euiPaletteColorBlind();

  /**
   * The current search value
   */
  const [searchValue, setSearchValue] = useState<string>(initialSearchQuery ?? "");

  /**
   * The set of available options
   */
  const [options, setOptions] = useState<Array<EuiComboBoxOptionOption<any>>>(
    [],
  );

  /**
   * Store current set of select Options. A subset of options.
   */
  const [selectedOptions, setSelectedOptions] = useState<
    Array<EuiComboBoxOptionOption<any>>
  >([]);

  const finalClassName = className || "ts4nfdi-autocomplete-style";

  const [displaySuggestions, setDisplaySuggestions] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const renderOption = (option, searchValue) => {
    const { label, value } = option;

    // @ts-ignore
    const dotColorIndex: number = {
      "class": 8,
      "individual": 4,
      "property": 2,
      "objectProperty": 1, // blue
      "dataProperty": 0, // green
      "annotationProperty": 7 // orange
    }[value.type] ?? -1;

    const dotColor = visColors[dotColorIndex];

    if (allowCustomTerms && value.iri == "") {
      // if we have a custom term, just show the label
      return label;
    }

    const prefix =
      value.type === "ontology"
        ? "Prefix: " + value.ontology_name
        : "Prefix > Short form: " +
        value.ontology_name +
        " > " +
        value.short_form;

    let hoverText = `Type: ${value.type}\n\nLabel: ${value.label}\n\n${prefix}`;
    if (value.description) {
      hoverText += `\n\nDescription: ${value.description}`;
    }
    if (showApiSource && value.source_url && value.source_url !== "") {
      hoverText += "\n\nSource: " + value.source;
      hoverText += "\n\nSource URL: " + value.source_url;
    }
    if (value.synonyms && value.synonyms.length > 1) {
      hoverText += "\n\nSynonyms: " + value.synonyms.join(", ");
    }

    const renderOntology = () => {
      return (
        <span className={finalClassName}>
          <EuiHealth color={dotColor}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
              <EuiHighlight search={searchValue}>{value.label || value.ontology_name}</EuiHighlight>

              {!singleSuggestionRow && value.description && (
                <span style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  display: "block",
                  marginTop: "2px",
                  color: '#666',
                }}>
                  {value.description}
                </span>
              )}
            </div>
          </EuiHealth>
        </span>
      );
    };

    const renderEntity = () => {
      const allSynonyms = value.synonyms ?? [];
      const bestSynonym = getConstrainedSynonym(value.label, allSynonyms, searchValue);

      return (
        <span title={""} className={finalClassName}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <EuiHealth color={dotColor}>
              <span>
                <EuiHighlight search={searchValue}>
                  {value.label}
                </EuiHighlight>

                {bestSynonym && (
                  <>
                    {" ("}
                    <EuiHighlight search={searchValue}>
                      {`SYN: ${bestSynonym || ''}`}
                    </EuiHighlight>
                    {")"}
                  </>
                )}
              </span>
            </EuiHealth>

            <BreadcrumbPresentation
              shortForm={value.short_form}
              ontologyId={value.ontology_name}
              colorFirst={"primary"}
              colorSecond={"success"}
              className={`${finalClassName}-breadcrumb`}
              onNavigateToOntology={onNavigateToOntology}
            />

            <Tooltip text={hoverText}/>
          </div>

          {!singleSuggestionRow && value.description && (
            <span
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                display: "block",
                marginTop: "4px",
                color: '#666'
              }}
            >
              {value.description}
            </span>
          )}
        </span>
      );
    };

    return value.type === "ontology" ? renderOntology() : renderEntity();
  };

  /**
   * For preselect property
   * Creates option from preselected label and iri
   * @param preselectedElement
   */
  function createCustomTermOption(
    preselectedElement: any,
  ): EuiComboBoxOptionOption<any> {
    return {
      label: preselectedElement.label,
      key: preselectedElement.label,
      value: {
        iri: preselectedElement.iri || "",
        label: preselectedElement.label,
        ontology_name: preselectedElement.ontology_name ?? "",
        type: preselectedElement.type ?? "",
        short_form: preselectedElement.short_form ?? "",
        description: preselectedElement.description ?? "",
        source: preselectedElement.source ?? "",
        source_url: preselectedElement.source_url ?? "",
      },
    };
  }

  /**
   * For preselected property
   * Creates option from OLS API select response
   * @param selection The select response
   */
  function createSelectOption(selection: any): EuiComboBoxOptionOption<any> {
    return {
      label: hasShortSelectedLabel
        ? selection.getLabel()
        : generateDisplayLabel(selection),
      key: `${selection.getOntologyId()}::${selection.getIri()}::${selection.getType()}`,
      value: {
        iri: selection.getIri(),
        label: selection.getLabel(),
        ontology_name: selection.getOntologyId(),
        type: selection.getType(),
        short_form: selection.getShortForm(),
        description: selection.getDescription(),
      },
    };
  }

  /**
   * For preselected property
   * Creates option from OLS4 API entity response
   * @param entity The Entity object response
   * @param customeMetadata custom metadata to be added to the option. This metadata comes from the provided preselected object by the client. if an metadata exists in the custom metadata, the component should give a higher priority to it than the target TS resonse.
   */
  function createEntityOption(entity: Entity, customeMetadata: any): EuiComboBoxOptionOption<any> {
    return {
      label: hasShortSelectedLabel
        ? entity.getLabel()
        : generateDisplayLabel(entity),
      key: `${entity.getOntologyId()}::${entity.getIri()}::${entity.getType()}`,
      value: {
        iri: entity.getIri(),
        label: entity.getLabel(),
        ontology_name: entity.getOntologyId(),
        type: entity.getType(),
        short_form: entity.getShortForm(),
        description: entity.getDescription(),
        ...customeMetadata,
      },
    };
  }

  /**
   * For preselected property
   * Request the OLS4 API entity endpoint and create the entity option
   * @param preselectedElement
   * @param preselectedOptions
   */
  async function fetchAndProcessEntityOption(
    preselectedElement: any,
    preselectedOptions: EuiComboBoxOptionOption<any>[],
  ) {
    try {
      const response = await olsEntityApi.getEntityObject(
        preselectedElement.iri,
        undefined,
        undefined,
        parameter,
        useLegacy,
      );

      preselectedOptions.push(createEntityOption(response, preselectedElement));

      if (singleSelection && preselectedOptions.length > 1) {
        preselectedOptions.length = 1;
      }
    } catch (error) {
      if (preselectedElement.label && allowCustomTerms)
        preselectedOptions.push(createCustomTermOption(preselectedElement));
      if (singleSelection && preselectedOptions.length > 1) {
        preselectedOptions.length = 1;
      }
      console.error(
        "Error fetching data for option:",
        preselectedElement,
        error,
      );
    }
  }

  /**
   * For preselected property
   * Request the OLS API select endpoint and create select option by either using select response or - if no response - use the preselected label and iri
   * @param preselectedElement
   * @param preselectedOptions
   */
  async function fetchAndProcessSelectOption(
    preselectedElement: any,
    preselectedOptions: EuiComboBoxOptionOption<any>[],
  ) {
    try {
      const response = await olsApi.getSelectData(
        { query: preselectedElement.iri },
        undefined,
        undefined,
        parameter,
        ts4nfdiGateway,
      );

      if (!response) return;

      const matchFound = processSelectResponse(
        response,
        preselectedElement,
        preselectedOptions,
      );

      if (!matchFound && preselectedElement.label && allowCustomTerms) {
        preselectedOptions.push(createCustomTermOption(preselectedElement));
      }

      if (singleSelection && preselectedOptions.length > 1) {
        preselectedOptions.length = 1;
      }
    } catch (error) {
      if (preselectedElement.label && allowCustomTerms)
        preselectedOptions.push(createCustomTermOption(preselectedElement));
      if (singleSelection && preselectedOptions.length > 1) {
        preselectedOptions.length = 1;
      }
      console.error(
        "Error fetching data for option:",
        preselectedElement,
        error,
      );
    }
  }

  /**
   * For preselected property
   * If the preselected element has a select response, create the select option
   * If no select response, return false
   * @param response
   * @param preselectedElement
   * @param preselectedOptions
   */
  function processSelectResponse(
    response: any,
    preselectedElement: any,
    preselectedOptions: EuiComboBoxOptionOption<any>[],
  ): boolean {
    let matchFound = false;

    response.properties.forEach((selection: any) => {
      if (preselectedElement.iri === selection.getIri()) {
        matchFound = true;
        preselectedOptions.push(createSelectOption(selection));
      }
    });

    return matchFound;
  }

  /**
   * on mount: fetches term for preselected
   * sets its label or sets a given label if no iri is provided/the given iri cannot be resolved
   * only if allowCustomTerms is true
   */
  const { isLoading: isLoadingOnMount } = useQuery(
    ["onMount", preselected],
    async () => {
      let preselectedOptions: EuiComboBoxOptionOption<any>[] = [];

      let uniqueValues = [...new Set(preselected ?? [])].filter(
        (option) => (allowCustomTerms && option.label) || option.iri,
      );

      if (uniqueValues.length === 0) return;

      if (singleSelection) uniqueValues = [uniqueValues[0]];

      for (const preselectedElement of uniqueValues) {
        if (useLegacy) {
          if (preselectedElement?.iri?.startsWith("http")) {
            await fetchAndProcessSelectOption(
              preselectedElement,
              preselectedOptions,
            );
          } else if (preselectedElement?.label && allowCustomTerms) {
            preselectedOptions.push(createCustomTermOption(preselectedElement));
          }
        } else {
          if (preselectedElement?.iri?.startsWith("http")) {
            await fetchAndProcessEntityOption(
              preselectedElement,
              preselectedOptions,
            );
          } else if (preselectedElement?.label && allowCustomTerms) {
            preselectedOptions.push(createCustomTermOption(preselectedElement));
          }
        }
      }
      setOptions(preselectedOptions);
      setSelectedOptions(preselectedOptions);
    },
  );

  /**
   * fetches new options when searchValue changes
   */
  const { isLoading: isLoadingTerms } = useQuery(
    ["onSearchChange", searchValue],
    async () => {
      if (searchValue.length > 0) {
        return olsApi
          .getSelectData(
            { query: searchValue },
            undefined,
            undefined,
            parameter,
            ts4nfdiGateway,
          )
          .then((response) => {
            if (response) {
              setOptions(
                response.properties
                  .map((selection: any) => {
                    const type = selection.getType();

                    if (type === "ontology") {
                      const label = (selection.getLabel && selection.getLabel()) ||
                        (selection.getOntologyId && selection.getOntologyId()) ||
                        "Unknown ontology name";

                      return {
                        label: hasShortSelectedLabel ? label : label,
                        key: `${selection.getOntologyId ? selection.getOntologyId() : 'unknown'}::${selection.getIri ? selection.getIri() : 'unknown'}::unknown`,
                        value: {
                          iri: selection.getIri ? selection.getIri() : "",
                          label: label,
                          ontology_name: selection.getOntologyId ? selection.getOntologyId() : "",
                          type: "ontology",
                          short_form: "",
                          description: selection.getDescription ? selection.getDescription() : "",
                          source: selection.getApiSourceName ? selection.getApiSourceName() : "",
                          source_url: selection.getApiSourceEndpoint ? selection.getApiSourceEndpoint() : "",
                          synonyms: selection.getSynonyms() ? selection.getSynonyms() : [],
                        },
                      };
                    } else {
                      return {
                        label: hasShortSelectedLabel
                          ? selection.getLabel()
                          : generateDisplayLabel(selection),
                        key: `${selection.getOntologyId()}::${selection.getIri()}::${selection.getType()}`,
                        value: {
                          iri: selection.getIri(),
                          label: selection.getLabel(),
                          ontology_name: selection.getOntologyId(),
                          type: selection.getType(),
                          short_form: selection.getShortForm(),
                          description: selection.getDescription(),
                          source: selection.getApiSourceName(),
                          source_url: selection.getApiSourceEndpoint(),
                          synonyms: selection.getSynonyms() ? selection.getSynonyms() : [],
                        },
                      };
                    }
                  })
              );
            }
          });
      }
    },
  );

  useEffect(() => {
    if (isLoadingTerms || isLoadingOnMount || (preselected !== undefined && preselected?.length > 0) || initialSearchQuery || searchValue.length > 0) {
      setDisplaySuggestions(true)
    } else {
      setDisplaySuggestions(false)
    }
  }, [isLoadingTerms, isLoadingOnMount, preselected, initialSearchQuery])

  /**
   * Once the set of selected options changes, pass the event by invoking the passed function.
   */
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
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
              source: x.value.source,
              synonyms: x.value.synonyms,
            };
          } else if (x.value.iri == "") {
            return {
              iri: "",
              label: "",
              ontology_name: "",
              type: "",
              short_form: "",
              description: "",
              source: "",
              synonyms: [],
            };
          } else {
            return {
              iri: x.value.iri,
              label: x.value.label,
              ontology_name: x.value.ontology_name,
              type: x.value.type,
              short_form: x.value.short_form,
              description: x.value.description,
              source: x.value.source,
              synonyms: x.value.synonyms,
            };
          }
        }),
      );
    }
    return () => {
      isMounted = false;
    };
  }, [selectedOptions]);

  function generateDisplayLabel(item: any): string {
    const label = item?.getLabel();
    if (label) return label;

    const ontologyId = item?.getOntologyId()?.toUpperCase();
    const shortForm = item?.getShortForm();

    return (
      (ontologyId ? `- (${ontologyId}` : "") +
      (shortForm ? `- (${shortForm}` : "") || "-"
    );
  }

  function onChangeHandler(options: Array<any>): void {
    setSelectedOptions(options);
  }

  function onCreateOptionHandler(searchValue: string) {
    const newOption = {
      label: searchValue,
      key: searchValue,
      value: {
        iri: "",
        label: "",
        ontology_name: "",
        type: "",
        short_form: "",
        description: "",
        source: "",
        synonyms: [],
      },
    };

    setOptions([...options, newOption]);
    setSelectedOptions(
      singleSelection ? [newOption] : [...selectedOptions, newOption],
    );
  }

  return (
    <div className={finalClassName}>
      <EuiComboBox
        data-testid="autocomplete"
        isClearable
        aria-label="searchBar"
        fullWidth={true}
        {...rest} // items above can be overridden by a client
        async={true}
        isLoading={isLoadingTerms || isLoadingOnMount}
        singleSelection={singleSelection ? { asPlainText: true } : false}
        placeholder={placeholder ? placeholder : ""}
        options={options}
        selectedOptions={selectedOptions}
        onSearchChange={setSearchValue}
        onChange={onChangeHandler}
        renderOption={renderOption}
        onCreateOption={allowCustomTerms ? onCreateOptionHandler : undefined}
        rowHeight={singleSuggestionRow ? 30 : 50}
        noSuggestions={!displaySuggestions}
      />
    </div>
  );
}

function WrappedAutocompleteWidget(props: AutocompleteWidgetProps) {
  const queryClient = new QueryClient();
  return (
    <EuiProvider colorMode="light" globalStyles={false}>
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
          className={props.className}
          useLegacy={props.useLegacy}
        />
      </QueryClientProvider>
    </EuiProvider>
  );
}

export { AutocompleteWidget, WrappedAutocompleteWidget };
