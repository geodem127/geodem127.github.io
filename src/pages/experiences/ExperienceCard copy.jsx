import React, { useState, useRef, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { Card, useTheme, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";

import usePageScroll from "../../hooks/usePageScroll";

const CardStyles = styled(Card)(({ theme }) => ({
  background: "transparent",
  border: 0,
  boxShadow: "none",
  overflow: "visible",
  position: "relative",
  cursor: "pointer",
  padding: "1rem",
  marginBottom: "1rem",
  "& .descriptionBox": {
    outline: "1px solid red",
    outlineOffset: "-1px",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    margin: "0 0 -.75rem 0",
    borderRadius: "4px",
    backgroundColor: "rgba(30, 41, 59, 0.5)",
    border: "1px solid rgba(229, 231, 235,.08)",
    zIndex: -1,
    opacity: 0,
    transition: "opacity 200ms ease-in",
  },
  "&:hover": {
    "&::before": {
      opacity: 1,
    },
  },
  "& .timelineDescriptionWrapper": {
    transformStyle: "preserve-3d",
    opacity: 1,
    "& .timelineDescriptionHeader": {
      transform: "translateY(-100%)",
      transition: "transform 500ms  ease-in-out",
    },
    "& .timelineDescriptionDetails": {
      transform: "translateX(40%)",
      opacity: 0,
      transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out",
    },
  },

  "&::after": {
    content: '"⬡"',
    height: "calc(100% - 4rem)",
    width: "3px",
    position: "absolute",
    bottom: "-.75rem",
    left: "2.5rem",
    background: `linear-gradient(transparent 0%, ${theme.palette.primary.main} .55rem, ${theme.palette.secondary.main} 100%)`,
    backgroundAttachment: "fixed",
    opacity: 0.3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: 0,
    color: theme.palette.primary.main,
    transformOrigin: "top center",
    transform: "scaleY(0)",
    transition: "all 500ms ease-in-out",
    [theme.breakpoints.down("md")]: {
      left: "-.25rem",
      height: "calc(100% - 1.75rem)",
    },
  },
  "&.inRange": {
    "& .verticalTimeLineLabel": {
      position: "relative",
      fontWeight: "600!important",
    },

    "& .timelineDescriptionWrapper": {
      "& .timelineDescriptionHeader": {
        transform: "translateY(0%)",
      },
      "& .timelineDescriptionDetails": {
        transform: "translateX(0%)",
        opacity: 1,
      },
    },
    "&::after": {
      transform: "scaleY(1)",
    },

    "&:not(:has(+ .inRange))": {
      "&::after": {
        content: '"⬡"',
        clipPath:
          "polygon(400% -3rem, 100% 80%, 50% 100%, 0% 80%, -400% -3rem)",
      },
    },
  },
}));

const ExperienceCard = ({
  href = undefined,
  end = false,
  index,
  setInView,
  children,
  ...other
}) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const targetRef = useRef(undefined);
  const { bottom } = usePageScroll(targetRef?.current);
  const [inRange, setInRange] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {};

  useEffect(() => {
    setInRange(bottom > -7);
  }, [bottom]);

  useEffect(() => {
    setInView((prev) => {
      if (inRange) {
        return [...prev, index];
      } else {
        return prev.filter((item) => item !== index);
      }
    });
  }, [inRange, index, setInView]);
  return (
    <>
      <CardStyles
        {...other}
        onClick={handleClick}
        my={2}
        className={!!inRange ? "inRange" : ""}
        ref={targetRef}
      >
        {children}
      </CardStyles>
    </>
  );
};

export default ExperienceCard;
