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
} from "@elastic/eui";
import {useQuery} from "react-query";
import {BreadcrumbWidget} from "../MetadataWidget";

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
    selectionChangedEvent: (selectedOptions: {
        label: string;
        iri?: string;
        ontology_name?: string;
        type?: string;
    }[]) => void;
    /**
     * Pass preselected values. If `singleSelection == true`, only the first one is displayed.
     */
    preselected?: { label?: string; iri?: string }[];
    /**
     * Placeholder to show if no user input nor selection is performed.
     */
    placeholder?: string;
    /**
     * If true, only the selected label of the entity is displayed. If false, the ontology and the entity short form is displayed behind the label. Default is true.
     */
    hasShortSelectedLabel?: boolean;
    /**
     * If true, custom terms can be added that are not found via API.
     */
    allowCustomTerms: boolean;
    /**
     * If true, only one concept can be selected at once.
     */
    singleSelection: boolean;
}

/**
 * A React component to provide Autosuggestion based on SemLookP.
 */
function AutocompleteWidget(props: AutocompleteWidgetProps) {
    const { api, parameter, hasShortSelectedLabel, allowCustomTerms, selectionChangedEvent, ...rest } = props;

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
            props.preselected
        ],
        async () => {
            let preselectedValues : EuiComboBoxOptionOption<any>[] = [];

            let uniqueValues = [...new Set(props.preselected)]
                .filter((option) => {
                    return (props.allowCustomTerms && option.label) || option.iri;
                });

            if(props.singleSelection) uniqueValues = [uniqueValues[0]];

            for(let option of uniqueValues) {
                if (option.iri && option.iri.startsWith("http")) {
                    await olsApi.select(
                        {query: option.iri},
                        undefined,
                        undefined,
                        parameter,
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
                                        },
                                    });
                                }
                            })
                        }
                    });
                } else if (option.label && props.allowCustomTerms) {
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

    if (props.singleSelection) {
        if (props.allowCustomTerms) {
            return (
                <EuiComboBox
                    isClearable
                    aria-label="searchBar"
                    fullWidth={true}
                    {...rest} // items above can be overriden by a client
                    async={true}
                    isLoading={isLoadingTerms || isLoadingOnMount}
                    singleSelection={{ asPlainText: true }}
                    placeholder={
                        props.placeholder ? props.placeholder : "Search for a Concept"
                    }
                    options={options}
                    selectedOptions={selectedOptions}
                    onSearchChange={setSearchValue}
                    onChange={onChangeHandler}
                    renderOption={renderOption}
                    onCreateOption={onCreateOptionHandler}
                />
            );
        } else {
            return (
                <EuiComboBox
                    isClearable
                    aria-label="searchBar"
                    fullWidth={true}
                    {...rest} // items above can be overriden by a client
                    async={true}
                    isLoading={isLoadingTerms || isLoadingOnMount}
                    singleSelection={{ asPlainText: true }}
                    placeholder={
                        props.placeholder ? props.placeholder : "Search for a Concept"
                    }
                    options={options}
                    selectedOptions={selectedOptions}
                    onSearchChange={setSearchValue}
                    onChange={onChangeHandler}
                    renderOption={renderOption}
                />
            );
        }
    }
    else {
        if (props.allowCustomTerms) {
            return (
                <EuiComboBox
                    isClearable
                    aria-label="searchBar"
                    fullWidth={true}
                    {...rest} // items above can be overriden by a client
                    async={true}
                    isLoading={isLoadingTerms || isLoadingOnMount}
                    placeholder={
                        props.placeholder ? props.placeholder : "Search for a Concept"
                    }
                    options={options}
                    selectedOptions={selectedOptions}
                    onSearchChange={setSearchValue}
                    onChange={onChangeHandler}
                    renderOption={renderOption}
                    onCreateOption={onCreateOptionHandler}
                />
            );
        } else {
            return (
                <EuiComboBox
                    isClearable
                    aria-label="searchBar"
                    fullWidth={true}
                    {...rest} // items above can be overriden by a client
                    async={true}
                    isLoading={isLoadingTerms || isLoadingOnMount}
                    placeholder={
                        props.placeholder ? props.placeholder : "Search for a Concept"
                    }
                    options={options}
                    selectedOptions={selectedOptions}
                    onSearchChange={setSearchValue}
                    onChange={onChangeHandler}
                    renderOption={renderOption}
                />
            );
        }
    }
}

export { AutocompleteWidget };
