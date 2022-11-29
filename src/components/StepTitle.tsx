import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { StepContentTheme } from '../types';

const StepTitleStyled = styled.p`
  margin: 0;
  margin-top: 0.75rem;
  font-weight: bold;
  color: ${(props) => props.theme.color};
`;

interface StepTitleProps {
  theme: StepContentTheme;
  children: ReactNode;
}

const StepTitle = (props: StepTitleProps) => {
  const { theme, children } = props;

  return (
    <StepTitleStyled theme={theme.title} className="title">
      {children}
    </StepTitleStyled>
  );
};

export default StepTitle;
