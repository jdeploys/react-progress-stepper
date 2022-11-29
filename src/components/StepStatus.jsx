"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StepStatusStyled = styled_components_1["default"].p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  margin: 0.75rem 0;\n  padding: 0.4rem 0.75rem;\n  border-radius: 2.375rem;\n  font-size: 0.8em;\n  background: ", ";\n  color: ", ";\n"], ["\n  display: inline-block;\n  margin: 0.75rem 0;\n  padding: 0.4rem 0.75rem;\n  border-radius: 2.375rem;\n  font-size: 0.8em;\n  background: ", ";\n  color: ", ";\n"])), function (props) { return props.theme.background; }, function (props) { return props.theme.color; });
var StepStatus = function (props) {
    var isStepInProgress = props.isStepInProgress, isStepCompleted = props.isStepCompleted, isStepPending = props.isStepPending, textProgress = props.textProgress, textCompleted = props.textCompleted, textPending = props.textPending, theme = props.theme;
    var getText = function () {
        var text;
        if (isStepInProgress) {
            text = textProgress || 'In progress';
        }
        if (isStepCompleted) {
            text = textCompleted || 'Completed';
        }
        if (isStepPending) {
            text = textPending || 'Pending';
        }
        return text;
    };
    return (<StepStatusStyled theme={theme.status} className="status">
      {getText()}
    </StepStatusStyled>);
};
exports["default"] = StepStatus;
var templateObject_1;
