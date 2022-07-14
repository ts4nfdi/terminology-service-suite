"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var eui_1 = require("@elastic/eui");
function SearchWidget(props) {
    var _a = (0, react_1.useState)([]), options = _a[0], setOptions = _a[1];
    var _b = (0, react_1.useState)([]), selectedOptions = _b[0], setSelected = _b[1];
    function searchTerm(searchValue) {
        var optionsData = [];
        var api = props.api;
        if (searchValue.length > 0) {
            fetch("".concat(api, "search?q=").concat(searchValue), {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Content_Type: 'application/json',
                },
            }).then(function (res) { return res.json(); })
                .then(function (res) { return res.response.docs; })
                .then(function (res) {
                for (var item in res) {
                    var obo_short_form = res[item].hasOwnProperty('obo_id')
                        ? res[item].obo_id.toUpperCase() : res[item].ontology_name == 'mesh' ? "MESH: ".concat(res[item].short_form.toUpperCase()) : res[item].short_form.toUpperCase();
                    optionsData.push({
                        label: "".concat(res[item].label.toLowerCase(), " | ").concat(obo_short_form),
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
        }
        else {
            setOptions([]);
        }
    }
    var onSearchChange = function (searchValue) {
        searchTerm(searchValue);
    };
    // @ts-ignore
    function onChangeHandler(selectedOptions) {
        setSelected(selectedOptions);
        return props.searchTerm(options);
    }
    return ((0, jsx_runtime_1.jsx)(eui_1.EuiComboBox, { "aria-label": "searchBar", placeholder: "Search for Term", options: options, selectedOptions: selectedOptions, onChange: onChangeHandler, onSearchChange: onSearchChange, isClearable: true, async: true, singleSelection: { asPlainText: true }, className: "comboBox", fullWidth: true }, void 0));
}
exports.SearchWidget = SearchWidget;
