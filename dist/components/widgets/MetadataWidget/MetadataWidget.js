"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var eui_1 = require("@elastic/eui");
var OntologyHierarchyWidget_1 = require("./OntologyHierarchyWidget");
var IriWidget_1 = require("./IriWidget");
var TermWidget_1 = require("./TermWidget");
var DescriptionWidget_1 = require("./DescriptionWidget");
var TabWidget_1 = require("./TabWidget");
function MetadataWidget(props) {
    return ((0, jsx_runtime_1.jsxs)(eui_1.EuiFlexGroup, __assign({ direction: "column", style: { maxWidth: 600 } }, { children: [(0, jsx_runtime_1.jsx)(eui_1.EuiFlexItem, __assign({ grow: false }, { children: (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(OntologyHierarchyWidget_1.OntologyHierarchyWidget, { iri: props.iri, api: props.api }, void 0) }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(eui_1.EuiFlexItem, { children: (0, jsx_runtime_1.jsxs)(eui_1.EuiFlexGroup, __assign({ direction: "column" }, { children: [(0, jsx_runtime_1.jsx)(eui_1.EuiFlexItem, { children: (0, jsx_runtime_1.jsx)(eui_1.EuiFlexGroup, { children: (0, jsx_runtime_1.jsx)(eui_1.EuiFlexItem, __assign({ grow: false }, { children: (0, jsx_runtime_1.jsx)(IriWidget_1.IriWidget, { iri: props.iri, api: props.api }, void 0) }), void 0) }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(eui_1.EuiFlexItem, __assign({ grow: false }, { children: (0, jsx_runtime_1.jsx)(TermWidget_1.TermWidget, { iri: props.iri, api: props.api }, void 0) }), void 0)] }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(eui_1.EuiFlexItem, { children: (0, jsx_runtime_1.jsx)(DescriptionWidget_1.DescriptionWidget, { iri: props.iri, api: props.api }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(eui_1.EuiFlexItem, { children: (0, jsx_runtime_1.jsx)(TabWidget_1.TabWidget, { iri: props.iri, api: props.api }, void 0) }, void 0)] }), void 0));
}
exports.MetadataWidget = MetadataWidget;
