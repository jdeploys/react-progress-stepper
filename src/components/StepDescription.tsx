import React, { ReactNode } from 'react';
import styled, { StepContentTheme } from 'styled-components';

interface StepDescriptionProps {
  theme: StepContentTheme;
  children: ReactNode;
}

const StepDescriptionStyled = styled.p`
  margin: 0 0.75rem;
  font-size: 0.9em;
  color: ${(props) => props.theme.color};
`;

const StepDescription = (props: StepDescriptionProps) => {
  const { theme, children } = props;

  return (
    <StepDescriptionStyled theme={theme.description} className="description">
      {children}
    </StepDescriptionStyled>
  );
};

export default StepDescription;
