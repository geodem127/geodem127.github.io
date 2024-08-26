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

      <svg
        width="430"
        height="932"
        viewBox="0 0 500 500"
        preserveAspectRatio="none"
      >
        <path
          fill="transparent"
          touch-action="none"
          d="M194.7197156734247, 366.2106719741039L 185.93282456625576, 383.17157186012236L 161.4467451826538, 396.4716977694673L 126.45204468378257, 403.2195217265041L 88.61234329814634, 401.7595336332098L 56.321676075662246, 392.6450828450084L 36.61860329892584, 377.75751619460794L 33.72691653681217, 360.3829272752083L 48.22564273103816, 344.3059184805254L 76.9329135868481, 332.99394840009097L 113.71086743134272, 328.91758546331687L 150.45743814830146, 333.0157584015265L 179.1974738250434, 344.30309395652546L 193.6637550865992, 360.3937589271721z"
        ></path>
      </svg>
    </div>
  );
};

export default StarryNightBackground;
