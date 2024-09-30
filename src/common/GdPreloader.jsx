import React from "react";
import { Box, styled } from "@mui/material";

const LogoSvgStyles = styled("svg")(({ theme }) => ({
  "& .logoGradient": {
    transform: "translate(-300px, 15px)",
    animation: "logoGradient 1s linear infinite",
  },
  "& #g-gradient": {
    animation: "logoGradient 1s linear infinite",
  },
  "& #d-gradient": {
    animation: "logoGradient 1s linear infinite",
  },

  "& #g-logo": {
    animation: "gLogoTransition 1s ease-out forwards",
  },
  "& #d-logo": {
    animation: "dLogoTransition 1s ease-out forwards",
  },

  "@keyframes gLogoTransition": {
    "0%": {
      transform: "translate(-300px, 15px)",
    },
    "75%": {
      transform: "translate(0, 15px)",
    },
    "100%": {
      transform: "translate(0, 0)",
    },
  },
  "@keyframes dLogoTransition": {
    "0%": {
      transform: "translate(300px, -15px)",
    },
    "76.5%": {
      transform: "translate(0, -15px)",
    },
    "100%": {
      transform: "translate(0, 0)",
    },
  },
  "@keyframes logoGradient": {
    "0%": {
      transform: "rotate(180deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

const GdPreloader = ({ width = "100%", height = "100%" }) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LogoSvgStyles
          width={"100%"}
          height={"100%"}
          viewBox="0 0 215 215"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              x1="87.5"
              y1="0"
              x2="87.5"
              y2="170"
              id="g-gradient"
              className="logoGradient"
              gradientTransform="matrix(0.70713, 0.707083, -1, 1, 108.125427, -61.870239)"
            >
              <stop offset="0" style={{ stopColor: "rgb(40, 186, 106)" }} />
              <stop offset="1" style={{ stopColor: "rgb(0, 55, 13)" }} />
              <animateTransform
                className="logoGradient"
                type="rotate"
                additive="sum"
                attributeName="gradientTransform"
                values="1;360"
                begin="1s"
                dur="1s"
                fill="freeze"
                keyTimes="0; 1"
                repeatCount="indefinite"
                from="0 107.5 107.5"
                to="360 107.5 107.5"
              />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              x1="138.45"
              y1="46.658"
              x2="138.45"
              y2="216.658"
              id="d-gradient"
              className="logoGradient"
              gradientTransform="matrix(0.68096, 0.73232, -1.058824, 1, 170.123016, -103.048218)"
            >
              <stop offset="0" style={{ stopColor: "rgb(79, 51, 240)" }} />
              <stop offset="1" style={{ stopColor: "rgb(23, 15, 70)" }} />
              <animateTransform
                className="logoGradient"
                type="rotate"
                additive="sum"
                attributeName="gradientTransform"
                values="0;360"
                begin="1s"
                dur="1s"
                fill="freeze"
                repeatCount="indefinite"
                keyTimes="0; 1"
                from="0 107.5 107.5"
                to="360 107.5 107.5"
              />
            </linearGradient>
          </defs>
          <g transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, -1.4210854715202004e-14)">
            <path
              id="g-logo"
              style={{ strokeLinejoin: "round", fill: 'url("#g-gradient")' }}
              d="M 89.926 90.149 L 170 90 L 170 170 L 25 170 L 0 145 L 0 25 L 30 0 L 140 0 L 175 30 L 40 30 L 30 40 L 30 130 L 40 140 L 140 140 L 140 120 L 90 120 L 89.926 90.149 Z"
            ></path>
            <path
              id="d-logo"
              style={{ fill: 'url("#d-gradient")' }}
              d="M 45 120 L 45 45 L 190 45 L 215 70 L 215 190 L 185 215 L 65 215 L 35 185 L 175 185 L 185 175 L 185 85 L 175 75 L 75 75 L 75 120 L 45 120 Z"
            ></path>
          </g>
        </LogoSvgStyles>
      </Box>
    </Box>
  );
};

export default GdPreloader;
