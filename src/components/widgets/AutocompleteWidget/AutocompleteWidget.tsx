import React, { useEffect, useState } from "react";

import { OlsApi } from "../../../api/OlsApi";
import { EuiComboBoxOptionOption } from "@elastic/eui/src/components/combo_box/types";
import {EuiComboBox, euiPaletteColorBlindBehindText, euiPaletteColorBlind, EuiHighlight, EuiHealth} from "@elastic/eui";
import {useQuery} from "react-query";
import {BreadcrumbWidget} from "../MetadataWidget";
import {AutocompleteWidgetProps} from "../../../utils/types";

/**
 * A React component to provide Autosuggestion based on SemLookP.
 */
function AutocompleteWidget(props: AutocompleteWidgetProps) {
    const { api, parameter, hasShortSelectedLabel, ...rest } = props;

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
        if(props.allowCustomTerms && value.iri==""){// if we have a custom term, just show the label
            return  label;
        } else { // otherwise can we can use the semantic information to show some context information like ontology name
            let color = "";
            if (value.type === "class") {
                color = visColorsBehindText[5];
            } else if (value.type === "individual") {
                color = visColorsBehindText[3];
            } else if (value.type === "property") {
                color = visColorsBehindText[1];
            }
            const dotColor = visColors[visColorsBehindText.indexOf(color)];
            if (value.type === "ontology") {
                return (
                    <EuiHealth title={value.type} color={dotColor}>
                        <span>
                            <EuiHighlight search={searchValue}>{value.label}</EuiHighlight>
                        </span>
                    </EuiHealth>
                );
            }
            return (
                <EuiHealth title={value.type} color={dotColor}>
                <span>
                  <EuiHighlight search={searchValue}>{value.label}</EuiHighlight>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <BreadcrumbWidget api={api} entityType={value.type} ontologyId={value.ontology_name} iri={value.iri} colorFirst={"primary"} colorSecond={"success"} parameter={value.parameter}></BreadcrumbWidget>
                </span>
                </EuiHealth>
            );
        }
    };

    /**
     * on mount: fetches term for selectOption and sets it's label or sets a given label if no iri is provided or the given iri cannot be resolved only if allowCustomTerms is true
     */
    const {
        isLoading: isLoadingOnMount
    } = useQuery(
        [
            "onMount", // no dependencies - does only need to be executed once when mounting the component
            props.selectOption
        ],
        async () => {
            if (props.selectOption?.iri && props.selectOption?.iri.startsWith("http")) {
                olsApi.select(
                    {query: props.selectOption?.iri},
                    undefined,
                    undefined,
                    parameter,
                ).then((response) => {
                    if (response.response && response.response.docs) {
                        response.response.docs.map((selection: any) => {
                            if (props.selectOption?.iri === selection.iri) {
                                setOptions([
                                    {
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
                                        },
                                    },
                                ]);
                                setSelectedOptions([
                                    {
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
                                        },
                                    },
                                ]);
                            }
                        })
                    }
                });
            } else if (props.selectOption?.label && props.allowCustomTerms) { // when a custom term is passed
                setOptions([
                    {
                        label: props.selectOption?.label,
                        value: {
                            iri: "",
                            label: "",
                            ontology_name: "",
                            type: "",
                            short_form: "",
                            description: ""
                        }
                    },
                ]);
                setSelectedOptions([
                    {
                        label: props.selectOption?.label,
                        value: {
                            iri: "",
                            label: "",
                            ontology_name: "",
                            type: "",
                            short_form: "",
                            description: ""
                        }
                    },
                ]);
            }
        }
    )

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
            if(searchValue.length > 0) {
                return olsApi.select(
                    {query: searchValue},
                    undefined,
                    undefined,
                    parameter,
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
                                },
                            })
                        ));
                    }
                });
            }
        }
    )

    /**
     * Once the set of selected options changes, pass the event by invoking the passed function.
     */
    useEffect(() => {
        props.selectionChangedEvent(
            selectedOptions.map((x) => {
                // return the value object with the raw values from OLS to a client
                if(props.allowCustomTerms && x.value.iri=="") {
                    return {
                        iri: "",
                        label: x.label,
                        ontology_name: "",
                        type: "",
                        short_form: x.value.short_form,
                        description: x.value.description
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
        setSelectedOptions([...selectedOptions, newOption]);
    }

    return (
        <EuiComboBox
            isClearable
            aria-label="searchBar"
            fullWidth={true}
            {...rest} // items above can be overriden by a client
            async={true}
            isLoading={isLoadingTerms || isLoadingOnMount}
            singleSelection={props.singleSelection ? { asPlainText: true } : false}
            placeholder={
                props.placeholder ? props.placeholder : "Search for a Concept"
            }
            options={options}
            selectedOptions={selectedOptions}
            onSearchChange={setSearchValue}
            onChange={onChangeHandler}
            renderOption={renderOption}
            onCreateOption={props.allowCustomTerms ? onCreateOptionHandler : undefined}
        />
    );
}

export { AutocompleteWidget };
