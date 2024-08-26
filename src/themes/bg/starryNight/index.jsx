import React, { useEffect, useRef } from "react";
// import { createPortal } from "react-dom";
import { useTheme, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./styles.css";

const StarryNightBackground = () => {
  const theme = useTheme();
  const universeRef = useRef(undefined);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  const handleHover = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    universeRef.current.style.background = `radial-gradient(600px at ${mouseX}px ${mouseY}px, ${alpha(
      theme.palette.primary.light,
      0.05
    )}, rgba(2,9,18,0) 55%)`;
  };

  useEffect(() => {
    if (!!isMobile) return;
    if (universeRef?.current) {
      document.body.addEventListener("mousemove", handleHover);
    }

    return () => {
      document.body.removeEventListener("mousemove", handleHover);
    };
  }, [universeRef?.current, isMobile]);

  return (
    <div ref={universeRef} id="universe" style={{ zIndex: 0 }}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div
        style={{
          position: "absolute",
          bottom: "-40%",
          right: "-19%",
          width: "70vh",
          height: "70vh",
          backgroundColor: "rgba(66, 175, 136, 0.3)",
          borderRadius: "50%",
          filter: "blur(180px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-62%",
          right: "-19%",
          width: "70vh",
          height: "70vh",
          backgroundColor: "rgba(81, 54, 245, 0.35)",
          borderRadius: "50%",
          filter: "blur(180px)",
        }}
      ></div>
    </div>
  );
};

export default StarryNightBackground;
