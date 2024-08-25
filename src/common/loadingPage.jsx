import React from "react";

import { styled } from "@mui/material/styles";
// import { Typography } from './componentElements';
// border-bottom-color: ${theme.palette.primary.main};
const LoadingContainerStyles = styled("div")(
  ({ theme }) => `
  align-items: center;
  background: transparent;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  margin: 0;
  overflow: hidden;

  & .kinetic {
    height: 50px;
    position: relative;
    width: 50px;
  }

  & .kinetic::after,
  & .kinetic::before {
    animation: rotateA 2s linear infinite 0.5s;
    border: 25px solid transparent;
 border-bottom-color: ${theme.palette.primary.main};
 
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
  // width: 130px;
  // height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //   border: 1px solid red;
  gap: 1rem;
`;

const LoadingPage = () => {
  return (
    <LoadingContainerStyles>
      <WrapperStyles>
        <div className="kinetic"></div>
        <p>Loading...</p>
      </WrapperStyles>
    </LoadingContainerStyles>
  );
};

export default LoadingPage;
