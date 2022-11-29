import React from 'react';
import styled, { StepContentTheme } from 'styled-components';

const StepStatusStyled = styled.p`
  display: inline-block;
  margin: 0.75rem 0;
  padding: 0.4rem 0.75rem;
  border-radius: 2.375rem;
  font-size: 0.8em;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

interface StepStatusProps {
  isStepInProgress?: boolean;
  isStepCompleted?: boolean;
  isStepPending?: boolean;
  textProgress?: string;
  textCompleted?: string;
  textPending?: string;
  theme: StepContentTheme;
}

const StepStatus = (props: StepStatusProps) => {
  const {
    isStepInProgress,
    isStepCompleted,
    isStepPending,
    textProgress,
    textCompleted,
    textPending,
    theme,
  } = props;

  const getText = () => {
    let text;

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

  return (
    <StepStatusStyled theme={theme.status} className="status">
      {getText()}
    </StepStatusStyled>
  );
};

export default StepStatus;
