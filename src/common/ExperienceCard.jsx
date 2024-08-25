import React from "react";
// import { styled } from "@mui/material/styles";
// import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { Card } from "@mui/material";
import styled from "@emotion/styled";

const CardStyles = styled(Card)(({ theme }) => ({
  background: "transparent",
  border: 0,
  boxShadow: "none",
  overflow: "visible",
  //   border: "2px solid yellow",
  position: "relative",
  cursor: "pointer",
  padding: "1rem",
  // outline: "2px solid yellow",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    // margin: "-12px",
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
  "& .verticalLine": {
    height: "100%",
    width: "2px",
    position: "absolute",
    // top: "3.25rem",
    top: 0,
    left: "1.5rem",
    background: `linear-gradient(${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    backgroundAttachment: "fixed",
    opacity: 0.5,
  },
}));

const ExperienceCard = ({
  href = undefined,
  end = false,
  inRange = false,
  children,
  ...other
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // if (!!href) {
    //   window.open(href, "_blank");
    // }
  };

  return (
    <>
      <CardStyles {...other} onClick={handleClick}>
        {children}
        {!!inRange && <div className="verticalLine"></div>}
      </CardStyles>
    </>
  );
};

export default ExperienceCard;
