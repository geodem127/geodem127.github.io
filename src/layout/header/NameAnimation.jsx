import React, { useEffect, useState } from "react";

import { Box, Typography, styled } from "@mui/material";

// import { styled } from "@emotion/styled";

const TextContainer = styled(Typography)(({ theme }) => ({
  width: "0%",
  whiteSpace: "nowrap",
  overflow: "hidden",

  transition: "transform 400ms steps(10)",
  backgroundClip: "text",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}  0%, ${theme.palette.primary.dark} 25%, ${theme.palette.primary.light} 50%,${theme.palette.primary.dark} 75%,  ${theme.palette.primary.main} 100%)`,
  color: "transparent",
  backgroundSize: "400%",
  padding: "0 1px",
  animation: "text-animation linear 20s infinite 1s",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  overflow: "visible",
  "&.inView": { width: "100%!important" },

  "& > span": {
    ...theme.typography.h1,
    zIndex: 1,
    opacity: 1,
    display: "inline-block",
    transition: "all 200ms linear",
    textTransform: "uppercase",
    padding: ".05rem .05rem",
    fontWeight: 700,
    overflow: "visible",
    // transition: "all 200ms linear 100ms",
  },
  "@keyframes text-animation": {
    "100%": {
      backgroundPosition: "400%",
    },
  },
}));

const NameAnimation = ({
  text,
  variant = "body1",
  transitionDelay = "0ms",

  transitionTimeout = "0ms",
  animationDelay = "0ms",
  animationDuration = "0ms",
}) => {
  const [customClass, setCustomClass] = useState("");

  const charArray = [...text];

  const handleMouseOver = (e) => {
    const targetChar = e.target;
    const prevChar = targetChar.previousElementSibling;
    const nextChar = targetChar.nextElementSibling;
    targetChar.style.transform = "translateY(-8px)";
    prevChar.style.transform = "translateY(-4px)";
    nextChar.style.transform = "translateY(-4px)";
  };
  const handleMouseOut = (e) => {
    const targetChar = e.target;
    const prevChar = targetChar.previousElementSibling;
    const nextChar = targetChar.nextElementSibling;
    targetChar.style.transform = "translateY(0)";
    prevChar.style.transform = "translateY(0)";
    nextChar.style.transform = "translateY(0)";
  };

  useEffect(() => {
    setCustomClass("inView");
  }, []);

  return (
    <TextContainer
      className={customClass}
      variant={variant}
      component={variant}
      style={{
        transition: `all ${transitionTimeout} steps(${charArray?.length}) ${transitionDelay}`,
      }}
    >
      {charArray?.map((char) => (
        <span
          className="char"
          // onMouseOver={handleMouseOver}
          // onMouseOut={handleMouseOut}
        >
          {char}
        </span>
      ))}
    </TextContainer>
  );
};

export default NameAnimation;
