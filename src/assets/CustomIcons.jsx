import React from "react";
import { styled } from "@mui/material/styles";
import { ButtonBase } from "@mui/material";

// const ButtonIconStyles = styled("a")`
//   box-sizing: border-box;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   width: 20px;
//   height: 20px;
//   & svg {
//     opacity: 0.8;
//     transition: all 200ms linear;
//     background: transparent;
//     box-sizing: border-box;
//     // fill: none;
//     // stroke: currentColor;
//     width: 100%;
//     height: auto;
//   }
//   &:hover svg {
//     opacity: 1;
//   }
//   &:active {
//     transform: scale(0.9);
//   }
// `;

const ICON_SIZES = {
  sm: "1rem",
  md: "1.75rem",
  lg: "2.5rem",
};

export const PortfolioIcon = (
  <svg viewBox="-0.114 0.169 153 152" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        x1="59.886"
        y1="0.169"
        x2="59.886"
        y2="120.169"
        id="gradient-0"
        gradientTransform="matrix(0.708199, 0.706012, -0.841667, 0.841667, 65.617007, -33.253506)"
      >
        <stop offset="0" style={{ stopColor: "rgb(2, 133, 103)" }} />
        <stop offset="0.254" style={{ stopColor: "rgb(2, 84, 66)" }} />
        <stop offset="0.69" style={{ stopColor: "rgb(1, 48, 38)" }} />
        <stop offset="1" style={{ stopColor: "rgb(1, 18, 14)" }} />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        x1="85.886"
        y1="26.169"
        x2="85.886"
        y2="146.169"
        id="gradient-1"
        gradientTransform="matrix(0.749172, 0.662375, -0.783333, 0.891667, 94.041641, -45.053781)"
      >
        <stop offset="0" style={{ stopColor: "rgb(1, 64, 107)" }} />
        <stop offset="0.267" style={{ stopColor: "rgb(2, 56, 91)" }} />
        <stop offset="0.654" style={{ stopColor: "rgb(3, 32, 51)" }} />
        <stop offset="1" style={{ stopColor: "rgb(1, 22, 35)" }} />
      </linearGradient>
    </defs>
    <path
      style={{ strokeWidth: "18px", fill: "none" }}
      d="M 51.886 61.169 L 110.886 61.169 L 110.886 96.169 L 96.886 111.169 L 23.886 111.169 L 8.886 96.169 L 8.886 24.169 L 23.886 9.169 L 119.886 9.169"
    />
    <path
      d="M 61.886 64.169 L 118.886 64.169 L 118.886 120.169 L 19.886 120.169 L -0.114 99.897 L -0.114 20.441 L 20.158 0.169 L 93.886 0.169 L 118.886 21.169 L 29.614 21.169 L 20.886 30.897 L 20.886 88.441 L 31.886 99.169 L 98.886 99.169 L 98.886 84.169 L 82.886 84.169 L 61.886 64.169 Z"
      style={{
        fill: " url('#gradient-0')",
        stroke: "rgb(51, 54, 51)",
        strokeWidth: "3px",
      }}
    />
    <path
      style={{ strokeWidth: "18px", fill: "none" }}
      d="M 128.886 87.169 L 128.886 122.169 L 114.886 137.169 L 41.886 137.169 L 26.886 122.169 L 26.886 50.169 L 41.886 35.169 L 137.886 35.169"
      transform="matrix(-1, 0, 0, -1, 164.77200317382815, 172.33799743652347)"
    />
    <path
      d="M 152.886 110.169 L 152.886 151.169 L 53.158 152.169 L 32.886 131.897 L 32.886 52.441 L 53.158 32.169 L 129.886 32.169 L 151.886 53.169 L 63.614 53.169 L 53.886 62.897 L 53.886 121.441 L 63.614 131.169 L 132.886 131.169 L 132.886 93.169 L 152.886 110.169 Z"
      style={{
        fill: "url('#gradient-1')",
        stroke: "rgb(62, 62, 60), strokeWidth: 3px,",
      }}
      transform="matrix(-1, 0, 0, -1, 185.771973, 184.338013)"
    />
    <path
      d="M 25.886 77.169 H 97.886 V 96.344 H 25.886 V 77.169 Z"
      style={{ fill: "none" }}
    />
    <path
      d="M 98.386 76.669 L 98.386 96.844 L 25.386 96.844 L 25.386 76.669 Z M 26.386 95.844 L 97.386 95.844 L 97.386 77.669 L 26.386 77.669 Z"
      style={{ fill: "none" }}
    />
    <path
      d="M 98.886 97.344 L 24.886 97.344 L 24.886 76.169 L 98.886 76.169 Z M 26.886 95.344 L 96.886 95.344 L 96.886 78.169 L 26.886 78.169 Z"
      style={{ fill: "none" }}
    />
  </svg>
);

export const GeodemIcon = (
  <svg viewBox="0 0 153 152" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        x1="59.886"
        y1="0.169"
        x2="59.886"
        y2="120.169"
        id="gradient-0"
        gradientTransform="matrix(0.708199, 0.706012, -0.841667, 0.841667, 65.730675, -33.422722)"
      >
        <stop offset="0" style={{ stopColor: "rgb(66, 175, 136)" }} />
        <stop offset="1" style={{ stopColor: "rgb(20, 53, 41)" }} />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        x1="85.886"
        y1="26.169"
        x2="85.886"
        y2="146.169"
        id="gradient-1"
        gradientTransform="matrix(0.749172, 0.662375, -0.783333, 0.891667, 94.155999, -45.222593)"
      >
        <stop offset="0" style={{ stopColor: "rgb(32, 21, 96)" }} />
        <stop offset="1" style={{ stopColor: "rgb(81, 54, 246)" }} />
      </linearGradient>
    </defs>
    <path
      style={{ strokeWidth: "18px", fill: "none" }}
      d="M 52 61 L 111 61 L 111 96 L 97 111 L 24 111 L 9 96 L 9 24 L 24 9 L 120 9"
      transform="matrix(1, 0, 0, 1, -3.552713678800501e-15, 0)"
    />
    <path
      d="M 60 66 L 120 66 L 120 120 L 20 120 L 0 99.728 L 0 20.272 L 20.272 0 L 96 0 L 120 21 L 29.728 21 L 21 30.728 L 21 88.272 L 32 99 L 99 99 L 99 84 L 60 84 L 60 66 Z"
      style={{ fill: "url('#gradient-0')", strokeWidth: "3px" }}
      transform="matrix(1, 0, 0, 1, -3.552713678800501e-15, 0)"
    />
    <path
      style={{ strokeWidth: "18px", fill: "none" }}
      d="M 129 87 L 129 122 L 115 137 L 42 137 L 27 122 L 27 50 L 42 35 L 138 35"
      transform="matrix(-1, 0, 0, -1, 165.000015, 171.999985)"
    />
    <path
      d="M 153 100 L 153 151 L 53.272 152 L 33 131.728 L 33 52.272 L 53.272 32 L 130 32 L 152 53 L 63.728 53 L 54 62.728 L 54 121 L 63 130 L 132 130 L 132 100 L 153 100 Z"
      style={{ fill: "url('#gradient-1')", strokeWidth: "3px" }}
      transform="matrix(-1, 0, 0, -1, 186, 184.00001525878906)"
    />
    <path
      d="M 26 77 L 98 77 L 98 96.175 L 26 96.175 L 26 77 Z"
      style={{ fill: "none" }}
      transform="matrix(1, 0, 0, 1, -3.552713678800501e-15, 0)"
    />
    <path
      d="M 98.5 76.5 L 98.5 96.675 L 25.5 96.675 L 25.5 76.5 L 98.5 76.5 Z M 26.5 95.675 L 97.5 95.675 L 97.5 77.5 L 26.5 77.5 L 26.5 95.675 Z"
      style={{ fill: "none" }}
      transform="matrix(1, 0, 0, 1, -3.552713678800501e-15, 0)"
    />
    <path
      d="M 99 97.175 L 25 97.175 L 25 76 L 99 76 L 99 97.175 Z M 27 95.175 L 97 95.175 L 97 78 L 27 78 L 27 95.175 Z"
      style={{ fill: "none" }}
      transform="matrix(1, 0, 0, 1, -3.552713678800501e-15, 0)"
    />
  </svg>
);

export const GithubIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1 -1 18 18"
    // fill="none"
    // stroke="currentColor"
    className="h-6 w-6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path
      fill="currentColor"
      strokeWidth="1"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    ></path>
  </svg>
);

export const LinkedInIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
    // ariaHidden="true"
  >
    <path
      fill="currentColor"
      d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
    ></path>
  </svg>
);

export const CodePenIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path
      d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
      strokeWidth="4"
    ></path>
  </svg>
);

export const EmailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z"></path>
  </svg>
);

export const PhoneIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2m0 16H2V5h20zm-2.99-1.01L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2h1.64L21 8l-1.99-1.99c-1.31.98-2.28 2.37-2.73 3.99-.18.64-.28 1.31-.28 2s.1 1.36.28 2c.45 1.61 1.42 3.01 2.73 3.99M9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1z"></path>
  </svg>
);

export const OpenArrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
    // ariaHidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const OpenNewWindowIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"></path>
  </svg>
);

export const CustomIcons = {
  GeodemIcon: GeodemIcon,
  Github: GithubIcon,
  LinkedIn: LinkedInIcon,
  CodePen: CodePenIcon,
  Portfolio: PortfolioIcon,
  OpenNewWindowIcon: OpenNewWindowIcon,
  EmailIcon: EmailIcon,
  PhoneIcon: PhoneIcon,
};

const ButtonIcon = ({ icon, path, title, size, color }) => {
  const iconSize = ICON_SIZES?.[size] || "1rem";

  return (
    <div style={{ width: "25px", height: "25px" }}>
      <a
        href={path}
        target="_blank"
        title={title}
        style={{ width: `${iconSize}`, height: `${iconSize}`, color: color }}
      >
        {icon}
      </a>
    </div>
  );
};

export default ButtonIcon;
