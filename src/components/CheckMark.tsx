import React from 'react';
import styled, { DefaultTheme, keyframes } from 'styled-components';

interface CheckMarkerProps {
  theme?: DefaultTheme;
}

const animateSuccessTip = keyframes`
  0% {
    width: 0;
    left: 0.0625em;
    top: 1.1875em;
  }
  54% {
    width: 0;
    left: 0.0625em;
    top: 1.1875em;
  }
  70% {
    width: 3.125em;
    left: -0.5em;
    top: 2.3125em;
  }
  84% {
    width: 1.0625em;
    left: 1.3125em;
    top: 3em;
  }
  100% {
    width: 1.5625em;
    left: 0.875em;
    top: 2.8125em;
  }
`;

const animateSuccessLong = keyframes`
  0% {
    width: 0;
    right: 2.875em;
    top: 3.375em;
  }
  65% {
    width: 0;
    right: 2.875em;
    top: 3.375em;
  }
  84% {
    width: 3.4375em;
    right: 0;
    top: 2.1875em;
  }
  100% {
    width: 2.9375em;
    right: 0.5em;
    top: 2.375em;
  }
`;

const AnimationCheckMark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.455em;
`;

const CheckMarkStyled = styled.div`
  width: 5.5em;
  height: 5.5em;
  border-radius: 50%;
  margin: 0 auto;
  background: ${(props) => props.theme.background};
  font-size: 1em;
`;

const SaIcon = styled.div`
  & {
    width: 5em;
    height: 5em;
    border: 0.25em solid ${(props) => props.theme.background};
    border-radius: 2.5em;
    border-radius: 50%;
    border-color: ${(props) => props.theme.background};
    margin: auto;
    padding: 0;
    position: relative;
    box-sizing: content-box;
    overflow: hidden;
  }
  &:before,
  &:after {
    content: '';
    border-radius: 2.5em;
    border-radius: 50%;
    position: absolute;
    width: 3.75em;
    height: 7.5em;
    background: ${(props) => props.theme.background};
    transform: rotate(45deg);
  }
  &:before {
    border-radius: 7.5em 0 0 7.5em;
    top: -0.4375em;
    left: -2.0625em;
    transform: rotate(-45deg);
    transform-origin: 3.75em 3.75em;
  }
  &:after {
    border-radius: 0 7.5em 7.5em 0;
    top: -0.6875em;
    left: 1.875em;
    transform: rotate(-45deg);
    transform-origin: 0 3.75em;
  }
`;

const SaTip = styled.span`
  height: 0.3125em;
  background-color: ${(props) => props.theme.color};
  display: block;
  border-radius: 0.125em;
  position: absolute;
  z-index: 2;
  width: 1.5625em;
  left: 0.875em;
  top: 2.875em;
  transform: rotate(45deg);
  animation: ${animateSuccessTip} 0.75s;
`;

const SaLong = styled.span`
  height: 0.3125em;
  background-color: ${(props) => props.theme.color};
  display: block;
  border-radius: 0.125em;
  position: absolute;
  z-index: 2;
  width: 2.9375em;
  right: 0.5em;
  top: 2.375em;
  transform: rotate(-45deg);
  animation: ${animateSuccessLong} 0.75s;
`;

const SaPlaceholder = styled.div`
  width: 5em;
  height: 5em;
  border-radius: 2.5em;
  border-radius: 50%;
  box-sizing: content-box;
  position: absolute;
  left: -0.25em;
  top: -0.25em;
  z-index: 2;
`;

const SaFix = styled.div`
  width: 0.3125em;
  height: 5.625em;
  background-color: ${(props) => props.theme.background};
  position: absolute;
  left: 1.75em;
  top: 0.5em;
  z-index: 1;
  transform: rotate(-45deg);
`;

const CheckMark = (props: CheckMarkerProps) => {
  const { theme } = props;

  return (
    <AnimationCheckMark className="animation-check-mark">
      <CheckMarkStyled theme={theme} className="check-mark">
        <SaIcon theme={theme} className="sa-icon">
          <SaTip theme={theme} className="sa-line sa-tip" />
          <SaLong theme={theme} className="sa-line sa-long" />
          <SaPlaceholder className="sa-placeholder" />
          <SaFix theme={theme} className="sa-fix" />
        </SaIcon>
      </CheckMarkStyled>
    </AnimationCheckMark>
  );
};

export default CheckMark;
