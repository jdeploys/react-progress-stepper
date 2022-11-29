"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StepDescriptionStyled = styled_components_1["default"].p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0 0.75rem;\n  font-size: 0.9em;\n  color: ", ";\n"], ["\n  margin: 0 0.75rem;\n  font-size: 0.9em;\n  color: ", ";\n"])), function (props) { return props.theme.color; });
var StepDescription = function (props) {
    var theme = props.theme, children = props.children;
    return (<StepDescriptionStyled theme={theme.description} className="description">
      {children}
    </StepDescriptionStyled>);
};
exports["default"] = StepDescription;
var templateObject_1;
