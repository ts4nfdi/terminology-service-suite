"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataWidget = void 0;
__exportStar(require("./DescriptionWidget"), exports);
__exportStar(require("./IriWidget"), exports);
__exportStar(require("./OntologyHierarchyWidget"), exports);
var MetadataWidget_1 = require("./MetadataWidget");
Object.defineProperty(exports, "MetadataWidget", { enumerable: true, get: function () { return MetadataWidget_1.MetadataWidget; } });
