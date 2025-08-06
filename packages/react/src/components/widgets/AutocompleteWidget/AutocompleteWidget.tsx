"use client";

import React, { useEffect, useState } from "react";

import { OlsSearchApi } from "../../../api/ols/OlsSearchApi";
import { EuiComboBoxOptionOption } from "@elastic/eui/src/components/combo_box/types";
import {
  EuiComboBox,
  euiPaletteColorBlindBehindText,
  euiPaletteColorBlind,
  EuiHighlight,
  EuiHealth,
  EuiIcon, EuiProvider
} from "@elastic/eui";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { AutocompleteWidgetProps } from "../../../app/types";
import { BreadcrumbPresentation } from "../MetadataWidget/BreadcrumbWidget/BreadcrumbPresentation/BreadcrumbPresentation";
import "../../../style/ts4nfdiStyles/ts4nfdiAutocompleteStyle.css";
import "../../../style/ts4nfdiStyles/ts4nfdiBreadcrumbStyle.css";
import { Entity } from "../../../model/interfaces";
import {OlsEntityApi} from "../../../api/ols/OlsEntityApi";

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
    ...rest
  } = props;

  const olsApi = new OlsSearchApi(api);
  const olsEntityApi = new OlsEntityApi(api);

  const visColors = euiPaletteColorBlind();
  const visColorsBehindText = euiPaletteColorBlindBehindText();

  /**
   * The current search value
   */
  const [searchValue, setSearchValue] = useState<string>("");

  /**
   * The set of available options.s
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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const renderOption = (option, searchValue) => {
    const { label, value } = option;
    const dotColorIndex = visColorsBehindText.indexOf(
      value.type === "class"
        ? visColorsBehindText[5]
        : value.type === "individual"
          ? visColorsBehindText[3]
          : value.type === "property"
            ? visColorsBehindText[1]
            : "",
    );
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
    if (value.description != undefined) {
      hoverText += `\n\nDescription: ${value.description}`;
    }
    if (showApiSource && value.source_url && value.source_url !== "") {
      hoverText += "\n\nSource: " + value.source;
      hoverText += "\n\nSource URL: " + value.source_url;
    }

    const renderOntology = () => {
      return (
        <span className={finalClassName}>
          <EuiHealth color={dotColor}>
            <span>
              <EuiHighlight search={searchValue}>{value.label}</EuiHighlight>
              <br />
              {value.description}
            </span>
          </EuiHealth>
        </span>
      );
    };

    const renderEntity = () => {
      return (
        <span title={hoverText} className={finalClassName}>
          <span>
            <EuiHealth color={dotColor}>
              <EuiHighlight search={searchValue}>{value.label}</EuiHighlight>
            </EuiHealth>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <BreadcrumbPresentation
              shortForm={value.short_form}
              colorFirst={"primary"}
              colorSecond={"success"}
              className={`${finalClassName}-breadcrumb`}
            />
            <EuiIcon
              type="iInCircle"
              style={{ marginLeft: "5px" }}
              title={hoverText}
            />
          </span>
          {!singleSuggestionRow && value.description && (
            <span
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                display: "block",
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
        ontology_name: "",
        type: "",
        short_form: "",
        description: "",
        source: "",
        source_url: "",
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
   */
  function createEntityOption(entity: Entity): EuiComboBoxOptionOption<any> {
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

      preselectedOptions.push(createEntityOption(response));

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
                response.properties.map((selection: any) => ({
                  // label to display within the combobox either raw value or generated one
                  // #renderOption() is used to display during selection.
                  label: hasShortSelectedLabel
                    ? selection.getLabel()
                    : generateDisplayLabel(selection),
                  // key to distinguish the options (especially those with same label)
                  key: `${selection.getOntologyId()}::${selection.getIri()}::${selection.getType()}`,
                  // values to pass to clients
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
                })),
              );
            }
          });
      }
    },
  );

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
    return (
      item?.getLabel() ??
      "-" + " (" + item?.getOntologyId()?.toUpperCase() ??
      "-" + " " + item?.getShortForm() ??
      "-" + ")"
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
        placeholder={placeholder ? placeholder : "Search for a Concept"}
        options={options}
        selectedOptions={selectedOptions}
        onSearchChange={setSearchValue}
        onChange={onChangeHandler}
        renderOption={renderOption}
        onCreateOption={allowCustomTerms ? onCreateOptionHandler : undefined}
        rowHeight={singleSuggestionRow ? 30 : 50}
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
