import React, { useEffect, useState } from "react";

import { OlsApi } from "../../../api/OlsApi";
import { EuiComboBoxProps } from "@elastic/eui/src/components/combo_box/combo_box";
import { EuiComboBoxOptionOption } from "@elastic/eui/src/components/combo_box/types";
import {
    EuiComboBox,
    euiPaletteColorBlindBehindText,
    euiPaletteColorBlind,
    EuiHighlight,
    EuiHealth,
    EuiBadge
} from "@elastic/eui";

export interface AutocompleteWidgetProps extends EuiComboBoxProps<string> {
    /**
     * Instance of the OLS API to call.
     */
    api: string;
    /**
     * Additional parameter to pass to the API.
     *
     * This parameter could be used to filter the search results. Each parameter could be combined via
     * the special character <i><b>&</b></i>. The values of a parameter key could be combined with a comma sign
     * <i><b>,</b></i>. The following keys could be used:<br/> <br/>
     *  <table>
     *  <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
     *  <tr><td>ontology</td><td>Restrict a search to a set of ontologies e.g. ontology=uberon,mesh</td></tr>
     *  <tr><td>type</td><td>Restrict a search to an entity type, one of {class,property,individual,ontology}</td></tr>
     *  <tr><td>slim</td><td>Restrict a search to a particular set of slims by name</td></tr>
     *  <tr><td>fieldList</td><td>Specify the fields to return, the defaults are {iri,label,short_form,obo_id,ontology_name,ontology_prefix,description,type}</td></tr>
     *  <tr><td>obsoletes</td><td>Set to true to include obsoleted terms in the results</td></tr>
     *  <tr><td>local</td><td>Set to true to only return terms that are in a defining ontology e.g. Only return matches to gene ontology terms in the gene ontology, and exclude ontologies where those terms are also referenced</td></tr>
     *  <tr><td>childrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a relation only)</td></tr>
     *  <tr><td>allChildrenOf</td><td>You can restrict a search to all children of a given term. Supply a list of IRI for the terms that you want to search under (subclassOf/is-a plus any hierarchical/transitive properties like 'part of' or 'develops from')</td></tr>
     *  <tr><td>rows</td><td>How many results per page</td></tr>
     *  <tr><td>start</td><td>The results page number</td></tr>
     * </table>
     */
    parameter?: string;
    /**
     * A method that is called once the set of selection changes
     * @param selectedOptions  The selected items
     */
    selectionChangedEvent: (selectedOption: {
        label: string | undefined;
        iri: string | undefined;
        ontology_name: string | undefined;
        type: string | undefined;
    }) => void;
    /**
     * Pass a pre select value.
     */
    selectOption?: { label?: string; iri: string };
    /**
     * Placeholder to show if no user input nor selection is performed.
     */
    placeholder?: string;
    /**
     * If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.
     */
    hasShortSelectedLabel?: boolean;
}

/**
 * A React component to provide Autosuggestion based on SemLookP.
 */
function AutocompleteWidget(props: AutocompleteWidgetProps) {
    const { api, parameter, hasShortSelectedLabel, ...rest } = props;

    const olsApi = new OlsApi(api);

    const visColors = euiPaletteColorBlind();
    const visColorsBehindText = euiPaletteColorBlindBehindText();

    /**
     * The set of available options.
     */
    const [options, setOptions] = useState<Array<EuiComboBoxOptionOption<any>>>([]);
    /**
     * Store current set of selected options. A subset of options.
     */
    const [selectedOptions, setSelectedOptions] = useState<Array<EuiComboBoxOptionOption<any>>>([]);

    const [hasLoadingState, setLoadingState] = useState<boolean>(false);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const renderOption = (option, searchValue) => {
        const { label, value } = option;
        let color = "";
        if (value.type === "class") {
            color = visColorsBehindText[5];
        } else if  (value.type === "individual") {
            color = visColorsBehindText[3];
        } else if (value.type === "property") {
            color = visColorsBehindText[1];
        }
        const dotColor = visColors[visColorsBehindText.indexOf(color)];
        return (
            <EuiHealth title={value.type} color={dotColor}>
                <span>
                  <EuiHighlight search={searchValue}>{label}</EuiHighlight>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{/* TODO: replace that afterwards with the refactored breadcrumb widget */}
                        <EuiBadge color={"primary"}>{value.ontology_name.toUpperCase()}</EuiBadge>
                                {" > "}
                        <EuiBadge color={"success"}>{value.short_form}</EuiBadge>
                    </span>
                </span>
            </EuiHealth>
        );
    };

    /**
     * If a selectOption is provided, we obtain the label via API
     */
    useEffect(() => {
        if (props.selectOption?.iri && props.selectOption?.iri.startsWith("http")) {
            setLoadingState(true);
            olsApi.select(
                {query: props.selectOption?.iri},
                undefined,
                undefined,
                props.parameter,
            ).then((response) => {
                if (response.response && response.response.docs) {
                    response.response.docs.map((selection: any) => {
                        if (props.selectOption?.iri === selection.iri) {
                            setOptions([
                                {
                                    label: selection.label,
                                    value: {
                                        iri: selection.iri,
                                        label: selection.label,
                                        ontology_name: selection.ontology_name,
                                        type: selection.type,
                                        short_form: selection.short_form,
                                    },
                                },
                            ]);
                            setSelectedOptions([
                                {
                                    label: hasShortSelectedLabel ? selection.label : generateDisplayLabel(selection.label, selection.ontology_name, selection.short_form),
                                    value: {
                                        iri: selection.iri,
                                        label: selection.label,
                                        ontology_name: selection.ontology_name,
                                        type: selection.type,
                                        short_form: selection.short_form,
                                    },
                                },
                            ]);
                            setLoadingState(false);
                        }
                    })
                }
            });
        }
    }, []); // no dependencies - does only need to be executed once when mounting the component

    /**
     * Once the set of selected options changes, pass the event by invoking the passed function.
     */
    useEffect(() => {
        if (selectedOptions.length >= 1) {
            props.selectionChangedEvent(
                selectedOptions.map((x) => {
                    return {
                        iri: x.value.iri,
                        label: x.value.label,
                        ontology_name: x.value.ontology_name,
                        type: x.value.type
                    };
                })[0]
            );
        }
    }, [selectedOptions]);

    /**
     * A function for generating the long form of the displayed label
     * @param label
     * @param ontology_name
     * @param short_form
     */
    function generateDisplayLabel(label: string, ontology_name: string, short_form: string) {
    return (
      label +
      " | " +
      ontology_name.toUpperCase() +
      " > " +
      short_form
    );
  }

    const onSearchChange = (searchValue: string) => {
        if (searchValue.length > 0) {
            setLoadingState(true);
            return olsApi.select(
                {query: searchValue},
                undefined,
                undefined,
                props.parameter,
            ).then((response) => {
                if (response.response && response.response.docs) {
                    setOptions(response.response.docs.map((selection: any) => (
                        {
                            label: selection.label,
                            value: {
                                iri: selection.iri,
                                label: selection.label,
                                ontology_name: selection.ontology_name,
                                type: selection.type,
                                short_form: selection.short_form,
                            },
                        })

                    ));
                    setSelectedOptions([]);
                    setLoadingState(false);
                }
            });
        }
    };



    function onChangeHandler(options: EuiComboBoxOptionOption<any>[]): void {
        setSelectedOptions([
            {
                label: hasShortSelectedLabel ? options[0].label : generateDisplayLabel(options[0].label, options[0].value.ontology_name, options[0].value.short_form),
                value: {
                    iri: options[0].value.iri,
                    label: options[0].label,
                    ontology_name: options[0].value.ontology_name,
                    type: options[0].value.type,
                    short_form: options[0].value.short_form,
                },
            },
        ]);
    }

    return (
        <EuiComboBox
            isClearable
            aria-label="searchBar"
            fullWidth={true}
            {...rest} // items above can be overriden by a client
            async={true}
            isLoading={hasLoadingState}
            singleSelection={{ asPlainText: true }}
            placeholder={
                props.placeholder ? props.placeholder : "Search for a Concept"
            }
            options={options}
            selectedOptions={selectedOptions}
            onSearchChange={onSearchChange}
            onChange={onChangeHandler}
            renderOption={renderOption}
        />
    );
}

export { AutocompleteWidget };
