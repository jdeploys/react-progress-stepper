import React, { cloneElement, ReactNode } from 'react';
import styled, { css, DefaultTheme, keyframes, StepTheme } from 'styled-components';
import CheckMark from '@/src/components/CheckMark';

export interface StepProps {
  currentStep?: number;
  isLastStep?: boolean;
  isStepInProgress?: boolean;
  isStepCompleted?: boolean;
  isStepPending?: boolean;
  vertical?: boolean;
  numbered?: boolean;
  children: JSX.Element | JSX.Element[];
  customContent?: ReactNode;
  theme: StepTheme;
}

const animationOpacity = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const completedBarAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const progressBarAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 50%;
  }
`;

const completedProgressBarVerticalAnimation = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

const progressBarVerticalAnimation = keyframes`
  from {
    height: 0;
  }
  to {
    height: 50%;
  }
`;

const stepAnimationOpacityText = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StepStyled = styled.div<StepProps>`
  flex-shrink: 0;
  position: relative;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  ${(props) =>
    (props.isStepInProgress || props.isStepCompleted) &&
    css`
      animation: ${animationOpacity} 1s ease;
    `}
`;

const Number = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${stepAnimationOpacityText} 1s ease;
`;

const Content = styled.div<StepProps>`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  margin-top: 1em;
  ${(props) =>
    props.isLastStep &&
    css`
      left: auto;
      right: 0;
      text-align: right;
    `}
  ${(props) =>
    props.vertical &&
    css`
      top: 0;
      left: 100%;
      margin: 0;
      margin-left: 1em;
    `}
    ${(props) =>
    props.vertical &&
    props.isLastStep &&
    css`
      top: auto;
      right: 0;
      bottom: 0;
      text-align: left;
    `}
`;

const ProgressBar = styled.div<Omit<StepProps, 'children'> & { theme: DefaultTheme }>`
  & {
    position: relative;
    width: 100%;
    height: 0.3em;
    border-radius: 2.375rem;
    margin: 0 1em;
    background: ${(props) => props.theme.background};
    ${(props) =>
      props.vertical &&
      css`
        width: 0.3em;
        height: 100%;
        margin: 1em 0;
      `}
  }
  ${(props) =>
    (props.isStepInProgress || props.isStepCompleted) &&
    css`
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: ${(props: StepProps) => (props.isStepInProgress ? '50%' : '100%')};
        height: 100%;
        border-radius: 2.375rem;
        background: ${(props) => props.theme.fill};
        animation: ${(props) =>
            props.isStepInProgress ? progressBarAnimation : completedBarAnimation}
          1s ease;
      }
    `}
  }
  ${(props) =>
    props.isStepInProgress &&
    props.vertical &&
    css`
      &:after {
        width: 100%;
        height: 50%;
        animation: ${progressBarVerticalAnimation} 1s ease;
      }
    `}
  ${(props) =>
    props.isStepCompleted &&
    props.vertical &&
    css`
      &:after {
        animation: ${completedProgressBarVerticalAnimation} 1s ease;
      }
    `}
`;

const Step = (props: StepProps) => {
  const {
    currentStep,
    isLastStep,
    isStepInProgress,
    isStepCompleted,
    isStepPending,
    vertical,
    numbered,
    customContent,
    theme,
  } = props;

  const status = isStepInProgress
    ? 'progress'
    : isStepCompleted
    ? 'completed'
    : 'pending';

  return (
    <>
      <StepStyled
        isStepInProgress={isStepInProgress}
        isStepCompleted={isStepCompleted}
        theme={theme.step[status]}
        className={`step ${isStepInProgress ? 'progress' : ''}
      ${isStepCompleted ? 'completed' : ''} ${isStepPending ? 'pending' : ''}`}
      >
        {!customContent ? (
          <>
            {!isStepCompleted && numbered && (
              <Number className="number">{currentStep}</Number>
            )}
            {isStepCompleted && <CheckMark theme={theme.step.completed} />}
          </>
        ) : (
          <>{customContent}</>
        )}
        {props.children && (
          <Content
            isLastStep={isLastStep}
            vertical={vertical}
            className={`content ${isLastStep ? 'last' : ''}`}
          >
            {props.children.constructor === Array
              ? props.children.map((children, i) => {
                  return (
                    <React.Fragment key={i}>
                      {cloneElement(children, {
                        currentStep: currentStep,
                        isStepInProgress: isStepInProgress,
                        isStepCompleted: isStepCompleted,
                        isStepPending: isStepPending,
                        theme: theme.content[status],
                      })}
                    </React.Fragment>
                  );
                })
              : cloneElement(props.children as JSX.Element, {
                  currentStep: currentStep,
                  isStepInProgress: isStepInProgress,
                  isStepCompleted: isStepCompleted,
                  isStepPending: isStepPending,
                  theme: theme.content[status],
                })}
          </Content>
        )}
      </StepStyled>
      {!isLastStep && (
        <ProgressBar
          isStepInProgress={isStepInProgress}
          isStepCompleted={isStepCompleted}
          vertical={vertical}
          theme={theme.progressBar[status]}
          className={`progress-bar ${isStepInProgress ? 'progress' : ''}
          ${isStepCompleted ? 'completed' : ''} ${isStepPending ? 'pending' : ''}`}
        />
      )}
    </>
  );
};

export default Step;
