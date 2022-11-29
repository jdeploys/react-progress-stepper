"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var CheckMark_1 = require("@/src/components/CheckMark");
var animationOpacity = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"], ["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var completedBarAnimation = (0, styled_components_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n"], ["\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n"])));
var progressBarAnimation = (0, styled_components_1.keyframes)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  from {\n    width: 0;\n  }\n  to {\n    width: 50%;\n  }\n"], ["\n  from {\n    width: 0;\n  }\n  to {\n    width: 50%;\n  }\n"])));
var completedProgressBarVerticalAnimation = (0, styled_components_1.keyframes)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  from {\n    height: 0;\n  }\n  to {\n    height: 100%;\n  }\n"], ["\n  from {\n    height: 0;\n  }\n  to {\n    height: 100%;\n  }\n"])));
var progressBarVerticalAnimation = (0, styled_components_1.keyframes)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  from {\n    height: 0;\n  }\n  to {\n    height: 50%;\n  }\n"], ["\n  from {\n    height: 0;\n  }\n  to {\n    height: 50%;\n  }\n"])));
var stepAnimationOpacityText = (0, styled_components_1.keyframes)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"], ["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"])));
var StepStyled = styled_components_1["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  flex-shrink: 0;\n  position: relative;\n  width: 2.5em;\n  height: 2.5em;\n  border-radius: 50%;\n  background: ", ";\n  color: ", ";\n  ", "\n"], ["\n  flex-shrink: 0;\n  position: relative;\n  width: 2.5em;\n  height: 2.5em;\n  border-radius: 50%;\n  background: ", ";\n  color: ", ";\n  ", "\n"])), function (props) { return props.theme.background; }, function (props) { return props.theme.color; }, function (props) {
    return (props.isStepInProgress || props.isStepCompleted) && (0, styled_components_1.css)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n      animation: ", " 1s ease;\n    "], ["\n      animation: ", " 1s ease;\n    "])), animationOpacity);
});
var Number = styled_components_1["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: ", " 1s ease;\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: ", " 1s ease;\n"])), stepAnimationOpacityText);
var Content = styled_components_1["default"].div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 200px;\n  margin-top: 1em;\n  ", "\n  ", "\n    ", "\n"], ["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 200px;\n  margin-top: 1em;\n  ", "\n  ", "\n    ", "\n"])), function (props) {
    return props.isLastStep && (0, styled_components_1.css)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n      left: auto;\n      right: 0;\n      text-align: right;\n    "], ["\n      left: auto;\n      right: 0;\n      text-align: right;\n    "])));
}, function (props) {
    return props.vertical && (0, styled_components_1.css)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n      top: 0;\n      left: 100%;\n      margin: 0;\n      margin-left: 1em;\n    "], ["\n      top: 0;\n      left: 100%;\n      margin: 0;\n      margin-left: 1em;\n    "])));
}, function (props) {
    return props.vertical &&
        props.isLastStep && (0, styled_components_1.css)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n      top: auto;\n      right: 0;\n      bottom: 0;\n      text-align: left;\n    "], ["\n      top: auto;\n      right: 0;\n      bottom: 0;\n      text-align: left;\n    "])));
});
var ProgressBar = styled_components_1["default"].div(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  & {\n    position: relative;\n    width: 100%;\n    height: 0.3em;\n    border-radius: 2.375rem;\n    margin: 0 1em;\n    background: ", ";\n    ", "\n  }\n  ", "\n  }\n  ", "\n  ", "\n"], ["\n  & {\n    position: relative;\n    width: 100%;\n    height: 0.3em;\n    border-radius: 2.375rem;\n    margin: 0 1em;\n    background: ", ";\n    ", "\n  }\n  ", "\n  }\n  ", "\n  ", "\n"])), function (props) { return props.theme.background; }, function (props) {
    return props.vertical && (0, styled_components_1.css)(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n        width: 0.3em;\n        height: 100%;\n        margin: 1em 0;\n      "], ["\n        width: 0.3em;\n        height: 100%;\n        margin: 1em 0;\n      "])));
}, function (props) {
    return (props.isStepInProgress || props.isStepCompleted) && (0, styled_components_1.css)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n      &:after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: ", ";\n        height: 100%;\n        border-radius: 2.375rem;\n        background: ", ";\n        animation: ", "\n          1s ease;\n      }\n    "], ["\n      &:after {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: ", ";\n        height: 100%;\n        border-radius: 2.375rem;\n        background: ", ";\n        animation: ", "\n          1s ease;\n      }\n    "])), function (props) { return (props.isStepInProgress ? '50%' : '100%'); }, function (props) { return props.theme.fill; }, function (props) {
        return props.isStepInProgress ? progressBarAnimation : completedBarAnimation;
    });
}, function (props) {
    return props.isStepInProgress &&
        props.vertical && (0, styled_components_1.css)(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n      &:after {\n        width: 100%;\n        height: 50%;\n        animation: ", " 1s ease;\n      }\n    "], ["\n      &:after {\n        width: 100%;\n        height: 50%;\n        animation: ", " 1s ease;\n      }\n    "])), progressBarVerticalAnimation);
}, function (props) {
    return props.isStepCompleted &&
        props.vertical && (0, styled_components_1.css)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n      &:after {\n        animation: ", " 1s ease;\n      }\n    "], ["\n      &:after {\n        animation: ", " 1s ease;\n      }\n    "])), completedProgressBarVerticalAnimation);
});
var Step = function (props) {
    var currentStep = props.currentStep, isLastStep = props.isLastStep, isStepInProgress = props.isStepInProgress, isStepCompleted = props.isStepCompleted, isStepPending = props.isStepPending, vertical = props.vertical, numbered = props.numbered, customContent = props.customContent, theme = props.theme;
    var status = isStepInProgress
        ? 'progress'
        : isStepCompleted
            ? 'completed'
            : 'pending';
    return (<>
      <StepStyled isStepInProgress={isStepInProgress} isStepCompleted={isStepCompleted} theme={theme.step[status]} className={"step ".concat(isStepInProgress ? 'progress' : '', "\n      ").concat(isStepCompleted ? 'completed' : '', " ").concat(isStepPending ? 'pending' : '')}>
        {!customContent ? (<>
            {!isStepCompleted && numbered && (<Number className="number">{currentStep}</Number>)}
            {isStepCompleted && <CheckMark_1.default theme={theme.step.completed}/>}
          </>) : (<>{customContent}</>)}
        {props.children && (<Content isLastStep={isLastStep} vertical={vertical} className={"content ".concat(isLastStep ? 'last' : '')}>
            {props.children.constructor === Array
                ? props.children.map(function (children, i) {
                    return (<react_1.Fragment key={i}>
                      {(0, react_1.cloneElement)(children, {
                            currentStep: currentStep,
                            isStepInProgress: isStepInProgress,
                            isStepCompleted: isStepCompleted,
                            isStepPending: isStepPending,
                            theme: theme.content[status]
                        })}
                    </react_1.Fragment>);
                })
                : (0, react_1.cloneElement)(props.children, {
                    currentStep: currentStep,
                    isStepInProgress: isStepInProgress,
                    isStepCompleted: isStepCompleted,
                    isStepPending: isStepPending,
                    theme: theme.content[status]
                })}
          </Content>)}
      </StepStyled>
      {!isLastStep && (<ProgressBar isStepInProgress={isStepInProgress} isStepCompleted={isStepCompleted} vertical={vertical} theme={theme.progressBar[status]} className={"progress-bar ".concat(isStepInProgress ? 'progress' : '', "\n          ").concat(isStepCompleted ? 'completed' : '', " ").concat(isStepPending ? 'pending' : '')}/>)}
    </>);
};
exports["default"] = Step;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;
