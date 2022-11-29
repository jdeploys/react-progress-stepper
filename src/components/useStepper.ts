import { useState } from 'react';

export const useStepper = (defaultValue: number, numberOfSteps: number) => {
  const [step, setStep] = useState(defaultValue || 0);

  const goToStep = (stepNumber: number) => {
    if (step !== 0 && step < numberOfSteps) setStep(stepNumber);
  };

  const incrementStep = () => {
    if (step < numberOfSteps) {
      setStep((prevState) => prevState + 1);
    }
  };

  const decrementStep = () => {
    if (step !== 0) {
      setStep((prevState) => prevState - 1);
    }
  };

  return { step, goToStep, incrementStep, decrementStep };
};
