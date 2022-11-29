import React, { cloneElement, ReactNode } from 'react';
import styled, { css, StepTheme } from 'styled-components';

interface StepperProps {
  vertical?: boolean;
  step?: number;
  dark?: boolean;
  numbered?: boolean;
  theme?: StepTheme;
  children: ReactNode | ReactNode[];
}

const StepperStyled = styled.div<StepperProps>`
  width: 100%;
  height: 100%;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  ${(props) =>
    props.vertical &&
    css`
      flex-direction: column;
    `}
`;

const isObject = (item: any) => {
  return item && typeof item === 'object' && !Array.isArray(item) && item !== null;
};

const mergeDeep = (target: any, source: any) => {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return target;
};

const Stepper = (props: StepperProps) => {
  const { step = 0, vertical = false, dark = false, numbered = true, theme = {} } = props;

  const defaultTheme = {
    light: {
      step: {
        pending: {
          background: '#ededed',
          color: '#a1a3a7',
        },
        progress: {
          background: '#3c3fed',
          color: '#ffffff',
        },
        completed: {
          background: '#23c275',
          color: '#ffffff',
        },
      },
      content: {
        pending: {
          stepNumber: { color: '#a1a3a7' },
          title: { color: '#a1a3a7' },
          status: { background: '#f2f2f2', color: '#a1a3a7' },
          description: { color: '#a1a3a7' },
        },
        progress: {
          stepNumber: { color: '#131b26' },
          title: { color: '#131b26' },
          status: { background: '#e7e9fd', color: '#3c3fed' },
          description: { color: '#131b26' },
        },
        completed: {
          stepNumber: { color: '#131b26' },
          title: { color: '#131b26' },
          status: { background: '#e9faf2', color: '#23c275' },
          description: { color: '#131b26' },
        },
      },
      progressBar: {
        pending: {
          background: '#ededed',
        },
        progress: {
          background: '#e7e9fd',
          fill: '#3c3fed',
        },
        completed: {
          background: '#e9faf2',
          fill: '#23c275',
        },
      },
    },
    dark: {
      step: {
        pending: {
          background: '#1a1a1a',
          color: '#767676',
        },
        progress: {
          background: '#19b6fe',
          color: '#ffffff',
        },
        completed: {
          background: '#23c275',
          color: '#ffffff',
        },
      },
      content: {
        pending: {
          stepNumber: { color: '#767676' },
          title: { color: '#767676' },
          status: { background: '#1a1a1a', color: '#767676' },
          description: { color: '#767676' },
        },
        progress: {
          stepNumber: { color: '#ece4d9' },
          title: { color: '#ece4d9' },
          status: { background: '#08374c', color: '#19b6fe' },
          description: { color: '#ece4d9' },
        },
        completed: {
          stepNumber: { color: '#ece4d9' },
          title: { color: '#ece4d9' },
          status: { background: '#0b3a23', color: '#23c275' },
          description: { color: '#ece4d9' },
        },
      },
      progressBar: {
        pending: {
          background: '#1a1a1a',
        },
        progress: {
          background: '#08374c',
          fill: '#19b6fe',
        },
        completed: {
          background: '#0b3a23',
          fill: '#23c275',
        },
      },
    },
  };

  return (
    <>
      <StepperStyled
        vertical={vertical}
        className={`stepper ${vertical ? 'vertical' : ''} ${dark ? 'dark' : ''}`}
      >
        {props.children &&
          props.children.constructor === Array &&
          props.children.map((children, i) => {
            const isLastStep = (props.children as Array<ReactNode>).length - 1 === i;
            const isStepInProgress = step === i;
            const isStepCompleted = step > i;

            return (
              <React.Fragment key={i}>
                {cloneElement(children as JSX.Element, {
                  currentStep: i + 1,
                  isLastStep: isLastStep,
                  isStepInProgress: isStepInProgress,
                  isStepCompleted: isStepCompleted,
                  isStepPending: !isStepInProgress && !isStepCompleted,
                  vertical: vertical,
                  numbered: numbered,
                  theme: mergeDeep(defaultTheme, theme)[dark ? 'dark' : 'light'],
                })}
              </React.Fragment>
            );
          })}
      </StepperStyled>
    </>
  );
};

export default Stepper;
