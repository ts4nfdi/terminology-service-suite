"use client";

import { useEffect, useState } from "react";

import {
  EuiButton,
  EuiComboBox,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHealth,
  EuiHighlight,
  euiPaletteColorBlind,
  EuiProvider,
  EuiToolTip,
} from "@elastic/eui";
import { EuiComboBoxOptionOption } from "@elastic/eui/src/components/combo_box/types";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { OlsEntityApi } from "../../../api/ols/OlsEntityApi";
import { OlsSearchApi } from "../../../api/ols/OlsSearchApi";
import { AutocompleteWidgetProps } from "../../../app";
import { Entity } from "../../../model/interfaces";
import "../../../style/ts4nfdiStyles/ts4nfdiAutocompleteStyle.css";
import "../../../style/ts4nfdiStyles/ts4nfdiBreadcrumbStyle.css";
import Tooltip from "../../helperComponents/Tooltip";
import { BreadcrumbPresentation } from "../MetadataWidget";
import { getConstrainedSynonym } from "./utils";

export interface EntityValue {
  iri?: string;
  label?: string;
  ontology_name?: string;
  type?: string;
  short_form?: string;
  description?: string;
  provider_name?: string;
  provider_type?: string;
  provider_api?: string;
  synonyms?: string[];
}

const EMPTY_ENTITY_VALUE: EntityValue = {
  iri: "",
  label: "",
  ontology_name: "",
  type: "",
  short_form: "",
  description: "",
  provider_name: "",
  provider_type: "",
  provider_api: "",
  synonyms: [],
};

function buildValueFromGetters(
  source: any,
  overrides: Partial<EntityValue> = {},
): EntityValue {
  return {
    iri: source?.getIri?.() ?? "",
    label: source?.getLabel?.() ?? "",
    ontology_name: source?.getOntologyId?.() ?? "",
    type: source?.getType?.() ?? "",
    short_form: source?.getShortForm?.() ?? "",
    description: source?.getDescription?.() ?? "",
    provider_name: source?.getProviderName?.() ?? "",
    provider_type: source?.getProviderType?.() ?? "",
    provider_api: source?.getProviderApi?.() ?? "",
    synonyms: source?.getSynonyms?.() ?? [],
    ...overrides,
  };
}

function buildValueFromPlainObject(
  source: any,
  overrides: Partial<EntityValue> = {},
): EntityValue {
  return {
    ...EMPTY_ENTITY_VALUE,
    iri: source?.iri ?? "",
    label: source?.label ?? "",
    ontology_name: source?.ontology_name ?? "",
    type: source?.type ?? "",
    short_form: source?.short_form ?? "",
    description: source?.description ?? "",
    provider_name: source?.provider_name ?? "",
    provider_type: source?.provider_type ?? "",
    provider_api: source?.provider_api ?? "",
    ...overrides,
  };
}

/**
 * A React component to provide Autosuggestion based on SemLookP.
 */
function AutocompleteWidget(props: AutocompleteWidgetProps): JSX.Element {
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
    showApiSource = true,
    className,
    useLegacy,
    initialSearchQuery,
    onNavigateToOntology,
    showApiRequestButton = true,
    ...rest
  } = props;

  const olsApi = new OlsSearchApi(api);
  const olsEntityApi = new OlsEntityApi(api);

  const visColors = euiPaletteColorBlind();

  /**
   * The current search value
   */
  const [searchValue, setSearchValue] = useState<string>(
    initialSearchQuery ?? "",
  );

  /**
   * The set of available options
   */
  const [options, setOptions] = useState<
    Array<EuiComboBoxOptionOption<EntityValue>>
  >([]);

  /**
   * Store current set of select Options. A subset of options.
   */
  const [selectedOptions, setSelectedOptions] = useState<
    Array<EuiComboBoxOptionOption<EntityValue>>
  >([]);

  const finalClassName = className || "ts4nfdi-autocomplete-style";

  const [displaySuggestions, setDisplaySuggestions] = useState<boolean>(false);

  const [currentJsonUrl, setCurrentJsonUrl] = useState<string>("");

  useEffect(() => {
    if (searchValue.length > 0) {
      setCurrentJsonUrl(
        olsApi.getSelectRequestUrl(
          { query: searchValue },
          undefined,
          undefined,
          parameter,
        ),
      );
    } else {
      setCurrentJsonUrl("");
    }
  }, [searchValue, parameter]);

  function openJsonInNewWindow(): void {
    if (currentJsonUrl) {
      window.open(currentJsonUrl, "_blank", "noopener,noreferrer");
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const renderOption = (option, searchValue) => {
    const { label, value } = option;

    const colorMap = new Map([
      ["class", 8],
      ["individual", 4],
      ["property", 2],
      ["objectProperty", 1],
      ["dataProperty", 0],
      ["annotationProperty", 7],
    ]);
    const dotColorIndex = colorMap.get(value.type) ?? -1;

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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.2",
              }}
            >
              <EuiHighlight search={searchValue}>
                {value.label || value.ontology_name}
              </EuiHighlight>

              {!singleSuggestionRow && value.description && (
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "block",
                    marginTop: "2px",
                    color: "#666",
                  }}
                >
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
      const bestSynonym = getConstrainedSynonym(
        value.label,
        allSynonyms,
        searchValue,
      );

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
                <EuiHighlight search={searchValue}>{value.label}</EuiHighlight>

                {bestSynonym && (
                  <>
                    {" ("}
                    <EuiHighlight search={searchValue}>
                      {`SYN: ${bestSynonym || ""}`}
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

            <Tooltip text={hoverText} />
          </div>

          {!singleSuggestionRow && value.description && (
            <span
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                display: "block",
                marginTop: "4px",
                color: "#666",
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
      value: buildValueFromPlainObject(preselectedElement),
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
      value: buildValueFromGetters(selection),
    };
  }

  /**
   * For preselected property
   * Creates option from OLS4 API entity response
   * @param entity The Entity object response
   * @param customMetadata custom metadata to be added to the option. This metadata comes from the provided preselected object by the client. if an metadata exists in the custom metadata, the component should give a higher priority to it than the target TS resonse.
   */
  function createEntityOption(
    entity: Entity,
    customMetadata: any,
  ): EuiComboBoxOptionOption<any> {
    return {
      label: hasShortSelectedLabel
        ? entity.getLabel()
        : generateDisplayLabel(entity),
      key: `${entity.getOntologyId()}::${entity.getIri()}::${entity.getType()}`,
      value: buildValueFromGetters(entity, customMetadata),
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
      const preselectedOptions: EuiComboBoxOptionOption<any>[] = [];

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
          )
          .then((response) => {
            if (response) {
              setOptions(
                response.properties.map((selection: any) => {
                  const type = selection.getType
                    ? selection.getType()
                    : "ontology";
                  const isOntology = type === "ontology";

                  const label = isOntology
                    ? (selection.getLabel && selection.getLabel()) ||
                      (selection.getOntologyId && selection.getOntologyId()) ||
                      "Unknown ontology name"
                    : hasShortSelectedLabel
                      ? selection.getLabel()
                      : generateDisplayLabel(selection);

                  return {
                    label,
                    key: `${selection.getOntologyId ? selection.getOntologyId() : "unknown"}::${
                      selection.getIri ? selection.getIri() : "unknown"
                    }::${isOntology ? "unknown" : type}`,
                    value: buildValueFromGetters(selection, {
                      label,
                      type: isOntology ? "ontology" : type,
                      short_form: isOntology ? "" : selection.getShortForm(),
                    }),
                  };
                }),
              );
            }
          });
      }
    },
  );

  useEffect(() => {
    if (
      isLoadingTerms ||
      isLoadingOnMount ||
      (preselected !== undefined && preselected?.length > 0) ||
      initialSearchQuery ||
      searchValue.length > 0
    ) {
      setDisplaySuggestions(true);
    } else {
      setDisplaySuggestions(false);
    }
  }, [isLoadingTerms, isLoadingOnMount, preselected, initialSearchQuery]);

  /**
   * Once the set of selected options changes, pass the event by invoking the passed function.
   */
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      selectionChangedEvent(
        selectedOptions.map((x) => {
          const value: EntityValue = x.value ?? EMPTY_ENTITY_VALUE;

          if (value.iri === "") {
            return allowCustomTerms
              ? { ...value, label: x.label ?? "" }
              : { ...EMPTY_ENTITY_VALUE };
          }
          return { ...value };
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
      value: { ...EMPTY_ENTITY_VALUE },
    };

    setOptions([...options, newOption]);
    setSelectedOptions(
      singleSelection ? [newOption] : [...selectedOptions, newOption],
    );
  }

  return (
    <div className={finalClassName}>
      <EuiFlexGroup gutterSize="xs" alignItems="center" responsive={false}>
        <EuiFlexItem>
          <EuiComboBox<EntityValue>
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
            onCreateOption={
              allowCustomTerms ? onCreateOptionHandler : undefined
            }
            rowHeight={singleSuggestionRow ? 30 : 50}
            noSuggestions={!displaySuggestions}
          />
        </EuiFlexItem>
        {showApiRequestButton && (
          <EuiFlexItem grow={false}>
            <EuiToolTip
              content="Open current search request as JSON in a new tab"
              delay={"regular"}
            >
              <EuiButton
                iconType="document"
                iconSide="left"
                aria-label="Open current search request as JSON"
                onClick={openJsonInNewWindow}
                isDisabled={!currentJsonUrl}
                size={"s"}
                color="text"
                textProps={{ style: { marginLeft: -6 } }}
              >
                JSON
              </EuiButton>
            </EuiToolTip>
          </EuiFlexItem>
        )}
      </EuiFlexGroup>
    </div>
  );
}

function WrappedAutocompleteWidget(
  props: AutocompleteWidgetProps,
): JSX.Element {
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
