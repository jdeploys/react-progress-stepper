"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StepperStyled = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  font-size: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Montserrat', sans-serif;\n  ", "\n"], ["\n  width: 100%;\n  height: 100%;\n  font-size: 1em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Montserrat', sans-serif;\n  ", "\n"])), function (props) {
    return props.vertical && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      flex-direction: column;\n    "], ["\n      flex-direction: column;\n    "])));
});
var isObject = function (item) {
    return item && typeof item === 'object' && !Array.isArray(item) && item !== null;
};
var mergeDeep = function (target, source) {
    var _a, _b;
    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, (_a = {}, _a[key] = {}, _a));
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, (_b = {}, _b[key] = source[key], _b));
            }
        }
    }
    return target;
};
var Stepper = function (props) {
    var _a = props.step, step = _a === void 0 ? 0 : _a, _b = props.vertical, vertical = _b === void 0 ? false : _b, _c = props.dark, dark = _c === void 0 ? false : _c, _d = props.numbered, numbered = _d === void 0 ? true : _d, _e = props.theme, theme = _e === void 0 ? {} : _e;
    var defaultTheme = {
        light: {
            step: {
                pending: {
                    background: '#ededed',
                    color: '#a1a3a7'
                },
                progress: {
                    background: '#3c3fed',
                    color: '#ffffff'
                },
                completed: {
                    background: '#23c275',
                    color: '#ffffff'
                }
            },
            content: {
                pending: {
                    stepNumber: { color: '#a1a3a7' },
                    title: { color: '#a1a3a7' },
                    status: { background: '#f2f2f2', color: '#a1a3a7' },
                    description: { color: '#a1a3a7' }
                },
                progress: {
                    stepNumber: { color: '#131b26' },
                    title: { color: '#131b26' },
                    status: { background: '#e7e9fd', color: '#3c3fed' },
                    description: { color: '#131b26' }
                },
                completed: {
                    stepNumber: { color: '#131b26' },
                    title: { color: '#131b26' },
                    status: { background: '#e9faf2', color: '#23c275' },
                    description: { color: '#131b26' }
                }
            },
            progressBar: {
                pending: {
                    background: '#ededed'
                },
                progress: {
                    background: '#e7e9fd',
                    fill: '#3c3fed'
                },
                completed: {
                    background: '#e9faf2',
                    fill: '#23c275'
                }
            }
        },
        dark: {
            step: {
                pending: {
                    background: '#1a1a1a',
                    color: '#767676'
                },
                progress: {
                    background: '#19b6fe',
                    color: '#ffffff'
                },
                completed: {
                    background: '#23c275',
                    color: '#ffffff'
                }
            },
            content: {
                pending: {
                    stepNumber: { color: '#767676' },
                    title: { color: '#767676' },
                    status: { background: '#1a1a1a', color: '#767676' },
                    description: { color: '#767676' }
                },
                progress: {
                    stepNumber: { color: '#ece4d9' },
                    title: { color: '#ece4d9' },
                    status: { background: '#08374c', color: '#19b6fe' },
                    description: { color: '#ece4d9' }
                },
                completed: {
                    stepNumber: { color: '#ece4d9' },
                    title: { color: '#ece4d9' },
                    status: { background: '#0b3a23', color: '#23c275' },
                    description: { color: '#ece4d9' }
                }
            },
            progressBar: {
                pending: {
                    background: '#1a1a1a'
                },
                progress: {
                    background: '#08374c',
                    fill: '#19b6fe'
                },
                completed: {
                    background: '#0b3a23',
                    fill: '#23c275'
                }
            }
        }
    };
    return (<>
      <StepperStyled vertical={vertical} className={"stepper ".concat(vertical ? 'vertical' : '', " ").concat(dark ? 'dark' : '')}>
        {props.children &&
            props.children.constructor === Array &&
            props.children.map(function (children, i) {
                var isLastStep = props.children.length - 1 === i;
                var isStepInProgress = step === i;
                var isStepCompleted = step > i;
                return (<react_1.Fragment key={i}>
                {(0, react_1.cloneElement)(children, {
                        currentStep: i + 1,
                        isLastStep: isLastStep,
                        isStepInProgress: isStepInProgress,
                        isStepCompleted: isStepCompleted,
                        isStepPending: !isStepInProgress && !isStepCompleted,
                        vertical: vertical,
                        numbered: numbered,
                        theme: mergeDeep(defaultTheme, theme)[dark ? 'dark' : 'light']
                    })}
              </react_1.Fragment>);
            })}
      </StepperStyled>
    </>);
};
exports["default"] = Stepper;
var templateObject_1, templateObject_2;
