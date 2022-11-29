"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StepNumberStyled = styled_components_1["default"].p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  margin-top: 0.75rem;\n  font-size: 0.8em;\n  color: ", ";\n"], ["\n  margin: 0;\n  margin-top: 0.75rem;\n  font-size: 0.8em;\n  color: ", ";\n"])), function (props) { return props.theme.color; });
var StepNumber = function (props) {
    var text = props.text, currentStep = props.currentStep, theme = props.theme;
    return (<StepNumberStyled theme={theme.stepNumber} className="step-number">{"".concat(text || 'STEP', " ").concat(currentStep)}</StepNumberStyled>);
};
exports["default"] = StepNumber;
var templateObject_1;
