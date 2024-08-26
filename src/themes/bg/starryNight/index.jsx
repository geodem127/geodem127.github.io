import React, { useEffect, useRef } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./styles.css";

const StarryNightBackground = () => {
  const theme = useTheme();
  const universeRef = useRef(undefined);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleHover = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    universeRef.current.style.background = `radial-gradient(500px at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.08), transparent 80%)`;
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
        id="cloud"
        style={{
          width: isMobile ? "40vw" : "60vh",
          height: isMobile ? "40vw" : "60vh",
          bottom: isMobile ? "-5%" : " -25%",
          right: isMobile ? "-5%" : " -10%",
        }}
      ></div>
    </div>
  );
};

export default StarryNightBackground;
