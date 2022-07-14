"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var eui_1 = require("@elastic/eui");
var AlternativeNameTabWidget_1 = require("./AlternativeNameTabWidget");
var CrossRefWidget_1 = require("./CrossRefWidget");
var HierarchyTabWidget_1 = require("./HierarchyTabWidget");
function TabWidget(props) {
    var tabs = [
        {
            content: (0, jsx_runtime_1.jsx)(AlternativeNameTabWidget_1.AlternativeNameTabWidget, { api: props.api, term: props.iri }, void 0),
            id: 'tab1',
            name: 'Alternative Names',
        },
        {
            content: ((0, jsx_runtime_1.jsx)(HierarchyTabWidget_1.HierarchyTabWidget, { api: props.api, iri: props.iri }, void 0)),
            id: 'tab2',
            name: 'Hierarchy',
        },
        {
            content: (0, jsx_runtime_1.jsx)(CrossRefWidget_1.CrossRefTabWidget, { api: props.api, term: props.iri }, void 0),
            id: 'tab3',
            name: 'Cross references',
        },
    ];
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(eui_1.EuiFlexItem, { children: (0, jsx_runtime_1.jsx)(eui_1.EuiTabbedContent, { size: "s", tabs: tabs }, void 0) }, void 0) }, void 0));
}
exports.TabWidget = TabWidget;
