import { Box, Typography, colors, styled } from "@mui/material";
import React from "react";

const TextContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "50px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  outline: "1px solid green",
  outlineOffset: "-1px",
  transition: "all 300ms steps(10) 100ms",
  "&:hover span": {
    opacity: 1,
  },
  "& > span": {
    ...theme.typography.h1,
    color: "currentColor",
    zIndex: 1,
    opacity: 0,
    display: "inline-block",
    backgroundClip: "text",
    backgroundImage: theme.gradients.primary,
    color: "transparent",
    backgroundAttachment: "fixed",
    padding: "0 1.5px",
    outline: "1px solid red",
    outlineOffset: "-1px",
    // transition: "all 300ms linear 100ms",
    transition: "all 300ms steps(10) 100ms",
    // "&:hover": {
    //   transform: "scale(1.1)",
    //   color: "red",
    //   transform: "scale(2)",
    //   zIndex: 1,
    // },
  },
  // "& > span:hover": {
  //   transform: "translateY(-20%)",
  //   transform: "rotateY(180deg)",
  //   zIndex: 1,
  // },
}));

const TextFlip = ({ text, variant = "body1" }) => {
  const charArray = [...text];
  return (
    <TextContainer
      // display="flex"
      // flexDirection={"row"}
      // justifyContent={"flex-start"}
      // alignItems={"center"}
      style={{ transition: `all 500ms steps(${charArray?.length}) 100ms` }}
    >
      {charArray?.map((char) => (
        <span>{char}</span>
      ))}
    </TextContainer>
  );
};

export default TextFlip;
