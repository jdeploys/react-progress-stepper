"use strict";
exports.__esModule = true;
exports.useStepper = void 0;
var react_1 = require("react");
var useStepper = function (defaultValue, numberOfSteps) {
    var _a = (0, react_1.useState)(defaultValue || 0), step = _a[0], setStep = _a[1];
    var goToStep = function (stepNumber) {
        if (step !== 0 && step < numberOfSteps)
            setStep(stepNumber);
    };
    var incrementStep = function () {
        if (step < numberOfSteps) {
            setStep(function (prevState) { return prevState + 1; });
        }
    };
    var decrementStep = function () {
        if (step !== 0) {
            setStep(function (prevState) { return prevState - 1; });
        }
    };
    return { step: step, goToStep: goToStep, incrementStep: incrementStep, decrementStep: decrementStep };
};
exports.useStepper = useStepper;
