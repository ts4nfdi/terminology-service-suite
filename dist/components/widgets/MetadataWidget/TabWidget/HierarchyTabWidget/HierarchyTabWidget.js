"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HierarchyTabWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var eui_1 = require("@elastic/eui");
function HierarchyTabWidget(props) {
    var _a = (0, react_1.useState)(''), mainLabel = _a[0], setMainLabel = _a[1];
    var _b = (0, react_1.useState)(), link = _b[0], setLink = _b[1];
    var _c = (0, react_1.useState)(), data = _c[0], setData = _c[1];
    var _d = (0, react_1.useState)(), childrenItems = _d[0], setChildrenItems = _d[1];
    var api = props.api, iri = props.iri;
    (0, react_1.useEffect)(function () {
        fetch("".concat(api, "terms?iri=").concat(iri), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Content_Type: 'application/json',
            },
        }).then(function (res) { return res.json(); })
            .then(function (res) { return res._embedded; })
            .then(function (res) {
            setData(res);
            setMainLabel(res.terms[0].label);
        })
            .catch(function (error) { return console.log(error); });
    }, [props.api, props.iri]);
    (0, react_1.useEffect)(function () {
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
            }).then(function (res) { return res.json(); })
                .then(function (res) { return console.log(res); })
                .catch(function (error) { return console.log(error); });
        }
    }, [data]);
    return ((0, jsx_runtime_1.jsx)(eui_1.EuiPanel, { children: (0, jsx_runtime_1.jsx)(eui_1.EuiText, { children: "Hierarchy not implemented" }, void 0) }, void 0));
}
exports.HierarchyTabWidget = HierarchyTabWidget;
