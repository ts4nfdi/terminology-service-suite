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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossRefTabWidget = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var eui_1 = require("@elastic/eui");
function CrossRefTabWidget(props) {
    var _this = this;
    var _a = (0, react_1.useState)([]), crossRef = _a[0], setCrossRef = _a[1];
    var term = props.term, api = props.api;
    (0, react_1.useEffect)(function () {
        var getDescription = function () { return __awaiter(_this, void 0, void 0, function () {
            var crossRefData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(api, "terms?iri=").concat(term), {
                            method: 'GET',
                            headers: {
                                Accept: 'application/json',
                                Content_Type: 'application/json',
                            },
                        })
                            .then(function (response) { return response.json(); })
                            .then(function (response) { return response._embedded.terms[0].obo_xref; })];
                    case 1:
                        crossRefData = _a.sent();
                        setCrossRef(crossRefData);
                        return [2 /*return*/];
                }
            });
        }); };
        getDescription().catch(function (error) { return console.log(error); });
    }, [props.api, props.term]);
    return ((0, jsx_runtime_1.jsx)(eui_1.EuiPanel, { children: (0, jsx_runtime_1.jsx)(eui_1.EuiFlexGroup, __assign({ style: { padding: 7 }, direction: "column" }, { children: crossRef
                ? (crossRef.map(function (item, index) { return ((0, jsx_runtime_1.jsx)(eui_1.EuiFlexItem, { children: item.url
                        ? ((0, jsx_runtime_1.jsxs)(eui_1.EuiLink, __assign({ href: item.url, external: true, target: "_blank" }, { children: [item.database, ":", item.id] }), void 0))
                        : ("".concat(item.database, ":").concat(item.id)) }, index)); }))
                : ((0, jsx_runtime_1.jsx)(eui_1.EuiText, { children: "No cross references exists for this concept." }, void 0)) }), void 0) }, void 0));
}
exports.CrossRefTabWidget = CrossRefTabWidget;
