import React, { useState, useEffect } from 'react';
import { EuiFlexItem, EuiText, EuiLink, EuiBadge, EuiPanel, EuiFlexGroup, EuiTabbedContent, EuiComboBox } from '@elastic/eui';

function DescriptionWidget(props) {
    const [description, setDescription] = useState('No description available.');
    const { api, iri, descText, ...rest } = props;
    useEffect(() => {
        const getDescription = async () => {
            const descriptionData = await fetch(`${api}terms?iri=${iri}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            })
                .then((response) => response.json())
                .then((response) => {
                if (response._embedded.terms[0].description[0] != null) {
                    return response._embedded.terms[0].description[0];
                }
            });
            setDescription(descriptionData);
        };
        getDescription().catch((error) => console.log(error));
    }, [api, iri]);
    return (React.createElement("div", null,
        React.createElement(EuiFlexItem, null,
            React.createElement(EuiText, { ...rest }, descText || description))));
}

function IriWidget(props) {
    const [fetchedIri, setFetchediri] = useState('undefined');
    const { api, iri, iriText } = props;
    useEffect(() => {
        const getIri = async () => {
            const description = await fetch(`${api}terms?iri=${iri}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            })
                .then((response) => response.json())
                .then((response) => response._embedded.terms[0].iri);
            setFetchediri(description);
        };
        getIri().catch((error) => console.log(error));
    }, [api, iri]);
    return (React.createElement(EuiFlexItem, { grow: false }, iriText
        ? (React.createElement(EuiLink, { href: iriText, target: "_blank" }, iriText))
        : (React.createElement(EuiLink, { href: fetchedIri, target: "_blank" }, fetchedIri))));
}

function OntologyHierarchyWidget(props) {
    const [hierarchy, setHierarchy] = useState([]);
    const { api, iri, } = props;
    useEffect(() => {
        const getHierarchy = async () => {
            const hierarchyData = await fetch(`${api}terms?iri=${iri}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            })
                .then((response) => response.json())
                .then((response) => [response._embedded.terms[0].ontology_prefix,
                response._embedded.terms[0].obo_id]);
            // @ts-ignore
            setHierarchy(hierarchyData);
        };
        getHierarchy().catch((error) => console.log(error));
    }, [props.api, props.iri]);
    return (React.createElement(EuiFlexItem, null,
        React.createElement("span", null,
            React.createElement(EuiBadge, { color: "primary" }, hierarchy[0]),
            ' > ',
            React.createElement(EuiBadge, { color: "success" }, hierarchy[1]))));
}

function TermWidget(props) {
    const [label, setLabel] = useState('undefined');
    const { iri, api, } = props;
    useEffect(() => {
        const getTerm = async () => {
            const fetchedLabel = await fetch(`${api}terms?iri=${iri}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            })
                .then((response) => response.json())
                .then((response) => response._embedded.terms[0].label);
            setLabel(fetchedLabel);
        };
        getTerm().catch((error) => console.log(error));
    }, [props.api, props.iri]);
    return (React.createElement(EuiText, null, props.termText ? props.termText : label));
}

function AlternativeNameTabWidget(props) {
    const [altLabel, setAltLabel] = useState([]);
    const { term, api } = props;
    function renderAltLabel() {
        if (altLabel != null && altLabel.length > 0) {
            const table = altLabel.map((value, index) => React.createElement(EuiFlexItem, { key: value + index }, value));
            return table;
        }
        return React.createElement(EuiText, null, "No alternative names exit for this concept.");
    }
    useEffect(() => {
        const getAltLabel = async () => {
            const altLabelData = await fetch(`${api}terms?iri=${term}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            })
                .then((response) => response.json())
                .then((response) => response._embedded.terms[0].synonyms);
            setAltLabel(altLabelData);
        };
        getAltLabel().catch((error) => console.log(error));
    }, [props.api, props.term]);
    return (React.createElement(EuiPanel, null,
        React.createElement(EuiFlexGroup, { style: { padding: 10 }, direction: "column" }, renderAltLabel())));
}

function CrossRefTabWidget(props) {
    const [crossRef, setCrossRef] = useState();
    const { term, api } = props;
    useEffect(() => {
        const getDescription = async () => {
            const crossRefData = await fetch(`${api}terms?iri=${term}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            })
                .then((response) => response.json())
                .then((response) => response._embedded.terms[0].obo_xref);
            setCrossRef(crossRefData);
        };
        getDescription().catch((error) => console.log(error));
    }, [api, term]);
    return (React.createElement(EuiPanel, null,
        React.createElement(EuiFlexGroup, { style: { padding: 7 }, direction: "column" }, crossRef
            ? (crossRef.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            React.createElement(EuiFlexItem, { key: index }, item.url
                ? (React.createElement(EuiLink, { href: item.url, external: true, target: "_blank" },
                    item.database,
                    ":",
                    item.id))
                : (`${item.database}:${item.id}`)))))
            : (React.createElement(EuiText, null, "No cross references exists for this concept.")))));
}

function HierarchyTabWidget(props) {
    const [mainLabel, setMainLabel] = useState('');
    useState();
    const [data, setData] = useState();
    useState();
    const { api, iri } = props;
    useEffect(() => {
        fetch(`${api}terms?iri=${iri}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Content_Type: 'application/json',
            },
        }).then((res) => res.json())
            .then((res) => res._embedded)
            .then((res) => {
            setData(res);
            setMainLabel(res.terms[0].label);
        })
            .catch((error) => console.log(error));
    }, [props.api, props.iri]);
    useEffect(() => {
        // console.log(data)
        if (data != undefined) {
            // console.log(data)
            // @ts-ignore
            fetch(data.terms[0]._links.children.href, {
                method: 'GET',
                mode: 'same-origin',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            }).then((res) => res.json())
                .then((res) => console.log(res))
                .catch((error) => console.log(error));
        }
    }, [data]);
    return (React.createElement(EuiPanel, null,
        React.createElement(EuiText, null, "Hierarchy not implemented")));
}

function TabWidget(props) {
    const tabs = [
        {
            content: React.createElement(AlternativeNameTabWidget, { api: props.api, term: props.iri }),
            id: 'tab1',
            name: 'Alternative Names',
        },
        {
            content: (React.createElement(HierarchyTabWidget, { api: props.api, iri: props.iri })),
            id: 'tab2',
            name: 'Hierarchy',
        },
        {
            content: React.createElement(CrossRefTabWidget, { api: props.api, term: props.iri }),
            id: 'tab3',
            name: 'Cross references',
        },
    ];
    return (React.createElement("div", null,
        React.createElement(EuiFlexItem, null,
            React.createElement(EuiTabbedContent, { size: "s", tabs: tabs }))));
}

function MetadataWidget(props) {
    return (React.createElement(EuiFlexGroup, { direction: "column", style: { maxWidth: 600 } },
        React.createElement(EuiFlexItem, { grow: false },
            React.createElement("span", null,
                React.createElement(OntologyHierarchyWidget, { iri: props.iri, api: props.api }))),
        React.createElement(EuiFlexItem, null,
            React.createElement(EuiFlexGroup, { direction: "column" },
                React.createElement(EuiFlexItem, null,
                    React.createElement(EuiFlexGroup, null,
                        React.createElement(EuiFlexItem, { grow: false },
                            React.createElement(IriWidget, { iri: props.iri, api: props.api })))),
                React.createElement(EuiFlexItem, { grow: false },
                    React.createElement(TermWidget, { iri: props.iri, api: props.api })))),
        React.createElement(EuiFlexItem, null,
            React.createElement(DescriptionWidget, { iri: props.iri, api: props.api })),
        React.createElement(EuiFlexItem, null,
            React.createElement(TabWidget, { iri: props.iri, api: props.api }))));
}

function SearchWidget(props) {
    const [options, setOptions] = useState([]);
    const [selectedOptions, setSelected] = useState([]);
    function searchTerm(searchValue) {
        const optionsData = [];
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
                // @ts-ignore
                setOptions(optionsData);
            });
        }
        else {
            setOptions([]);
        }
    }
    const onSearchChange = (searchValue) => {
        searchTerm(searchValue);
    };
    // // @ts-ignore
    // function onChangeHandler(selectedOptions) {
    //   setSelected(selectedOptions);
    //   return props.searchTerm(options);
    // }
    return (React.createElement(EuiComboBox, { "aria-label": "searchBar", placeholder: "Search for Term", options: options, selectedOptions: selectedOptions, 
        // onChange={onChangeHandler}
        onSearchChange: onSearchChange, isClearable: true, async: true, singleSelection: { asPlainText: true }, className: "comboBox", fullWidth: true }));
}

export { DescriptionWidget, IriWidget, MetadataWidget, OntologyHierarchyWidget, SearchWidget, TermWidget };
//# sourceMappingURL=index.js.map
