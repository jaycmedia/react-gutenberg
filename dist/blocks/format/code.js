"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const WPGCodeBlock = (props) => {
    const { attrs, innerBlocks, innerHTML } = props;
    return (react_1.default.createElement("div", { className: "wpg-block wpg-b_Code", dangerouslySetInnerHTML: { __html: innerHTML } }, "  "));
};
exports.default = WPGCodeBlock;
//# sourceMappingURL=code.js.map