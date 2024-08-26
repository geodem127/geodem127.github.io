import React from "react";

import { styled, useTheme } from "@mui/material/styles";

const SIZE = {
  sm: 0.85,
  md: 1,
  lg: 1.5,
};
const LoadingContainerStyles = styled("div")(
  ({ theme, color, size = "sm" }) =>
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

export default LoadingPage;
