import React from 'react';
import { StepContentTheme } from '../types';
import styled from 'styled-components';

interface StepNumberProps {
  text: string;
  currentStep: number;
  theme?: StepContentTheme;
}

const StepNumberStyled = styled.p`
  margin: 0;
  margin-top: 0.75rem;
  font-size: 0.8em;
  color: ${(props) => props.theme.color};
`;

const StepNumber = (props: StepNumberProps) => {
  const { text, currentStep, theme } = props;

  return (
    <StepNumberStyled theme={theme?.stepNumber} className="step-number">{`${
      text || 'STEP'
    } ${currentStep}`}</StepNumberStyled>
  );
};

export default StepNumber;
