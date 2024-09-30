import React from "react";

import { styled, useTheme } from "@mui/material";

const SIZE = {
  sm: 0.75,
  md: 1,
  lg: 1.5,
};
const LoadingContainerStyles = styled("div")(
  ({ theme, color, size }) =>
    `
  align-items: center;
  background: transparent;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  margin: 0;
  overflow: hidden;

  & .kinetic {
    height: calc(50px * ${SIZE?.[size]});
    width: calc(50px * ${SIZE?.[size]});
    position: relative;
    
  }

  & .kinetic::after,
  & .kinetic::before {
    animation: rotateA 2s linear infinite 0.5s;
    border: calc(25px * ${SIZE?.[size]}) solid transparent;
    border-bottom-color: ${color};
 
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    top: 0;
    width: 0;
  }

  & .kinetic::before {
    animation: rotateB 2s linear infinite;
    transform: rotate(90deg);
  }

  @keyframes rotateA {
    0%,
    25% {
      transform: rotate(0deg);
    }
    50%,
    75% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotateB {
    0%,
    25% {
      transform: rotate(90deg);
    }
    50%,
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(450deg);
    }
  }
`
);

const WrapperStyles = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const LoadingAnimationStyles = styled("div")(({ theme, color, size }) => {
  return `
  transform-origin: 50% center;
  visibility: visible;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: grid;
  place-content: center;
  & #loadingWrapper {
    width: fit-content;
    height: 50px;
    scale: ${SIZE?.[size] || 1};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    column-gap: .5rem;
  }
  & #dot1 {
  }
  & #dot2 {
    -webkit-animation-delay: 0.25s;
    animation-delay: 0.25s;
  }

  & #dot3 {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  & .dot {
    width: 20px;
    height: 20px;
    
    background-color: ${color || theme?.palette?.primary?.main};
    float: left;
    // margin-right: 20px;
    // margin-top: 65px;
    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    transform-origin: 50% center;
    opacity: 1;
    -webkit-animation: aniScale 1.5s infinite;
    animation: aniScale 1.5s infinite;
  }
  @keyframes aniScale {
    /* from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    } */
    75% {
      transform: scale(0);
    }
  }
`;
});

const LoadingPage = ({ label = null, color = null, size = "md" }) => {
  const theme = useTheme();
  const renderColor = !!color ? color : theme?.palette?.primary?.main;
  return (
    <LoadingContainerStyles color={renderColor} size={size}>
      <WrapperStyles>
        <div className="kinetic"></div>
        {!!label && <p>{label}</p>}
      </WrapperStyles>
    </LoadingContainerStyles>
  );
};

const LoadingAnimation = ({ color = null, size = "md" }) => {
  const theme = useTheme();

  const _color = !color ? "currentColor" : color;
  const _size = !size ? "md" : size;
  return (
    <LoadingAnimationStyles color={_color} size={_size}>
      <div id="loadingWrapper">
        <div className="dot" id="dot1"></div>
        <div className="dot" id="dot2"></div>
        <div className="dot" id="dot3"></div>
      </div>
    </LoadingAnimationStyles>
  );
};

export default LoadingPage;
export { LoadingAnimation };
