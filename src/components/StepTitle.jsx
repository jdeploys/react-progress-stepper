"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StepTitleStyled = styled_components_1["default"].p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  margin-top: 0.75rem;\n  font-weight: bold;\n  color: ", ";\n"], ["\n  margin: 0;\n  margin-top: 0.75rem;\n  font-weight: bold;\n  color: ", ";\n"])), function (props) { return props.theme.color; });
var StepTitle = function (props) {
    var theme = props.theme, children = props.children;
    return (<StepTitleStyled theme={theme.title} className="title">
      {children}
    </StepTitleStyled>);
};
exports["default"] = StepTitle;
var templateObject_1;
