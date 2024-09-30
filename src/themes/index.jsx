import * as React from "react";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  alpha,
  CssBaseline,
} from "@mui/material";
import "./fonts/index.css";
// import CssBaseline from "@mui/material/CssBaseline";
// import { palette } from "./palette";

// import { typography } from "./typography";
// import components from "./components";

import { teal, deepPurple, blueGrey, grey } from "@mui/material/colors";
// import defaultProps from "react-slick/lib/default-props";

const AppThemeContext = React.createContext();

const breakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  values: {
    xs: 360,
    // sm: 768,
    sm: 600,
    md: 1024,
    lg: 1256,
    xl: 1500,
  },
  unit: "px",
};

let theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  spacing: 8,
  palette: {
    mode: "dark",
    common: {
      black: blueGrey[900],
      white: grey["A100"],
    },
    primary: {
      // main: teal[700],
      main: "#1a8781",
    },
    secondary: {
      main: deepPurple[800],
    },
    info: {
      main: blueGrey["A400"],
    },
    text: {
      // primary: grey[400],
      primary: "#94a3b8dd",
    },
    background: {
      // default: "#121316",
      default: "#100e0e",

      // paper: "#ffffff19",
      paper: "#797e7d38",
      // paper: "rgb(18 19 22)",
    },

    // divider: "#8382822a",
    divider: "#ffffff2e",
  },
  breakpoints,
});

theme = createTheme(theme, {
  palette: {
    primary: {
      contrastText: theme.palette.common.white,
    },
    secondary: {
      contrastText: theme.palette.common.white,
    },
    info: {
      contrastText: theme.palette.common.black,
    },
    action: {
      hover: grey[200],
      active: theme.palette.primary.main,
    },
  },
  typography: {
    fontFamily: "Saira, sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontFamily: "Saira, sans-serif",
      fontSize: "3.2rem",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Saira, sans-serif",
      fontSize: "2.25rem",
      fontWeight: 500,
    },
    h3: { fontFamily: "Saira, sans-serif", fontSize: "2rem", fontWeight: 500 },
    h4: {
      fontFamily: "Saira, sans-serif",
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "Saira, sans-serif",
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "Saira, sans-serif",
      fontSize: "1.15rem",
      fontWeight: 500,
    },
    button: {
      fontFamily: "Saira, sans-serif",
      fontSize: "1rem",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Saira, sans-serif",
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: {
    a1: `0px 3px 5px -1px ${alpha(
      theme.palette.primary.main,
      0.2
    )},0px 6px 10px 0px ${alpha(
      theme.palette.primary.main,
      0.14
    )},0px 1px 18px 0px ${alpha(theme.palette.primary.main, 0.12)}`,
    a2: `0px 3px 5px -1px ${alpha(
      theme.palette.secondary.main,
      0.2
    )},0px 6px 10px 0px ${alpha(
      theme.palette.secondary.main,
      0.14
    )},0px 1px 18px 0px ${alpha(theme.palette.secondary.main, 0.12)}`,

    a3: `0px 3px 5px -1px ${alpha(
      theme.palette.primary.main,
      0.2
    )},0px 6px 10px 0px ${alpha(
      theme.palette.primary.main,
      0.14
    )},0px 1px 18px 0px ${alpha(
      theme.palette.secondary.main,
      0.12
    )},0px 1px 18px 0px ${alpha(theme.palette.secondary.main, 0.14)}`,
  },
  components: {
    MuiDialog: {
      defaultProps: {},
      styleOverrides: {
        paper: {
          // outline: "3px solid red",
          boxShadow: theme.shadows[24],
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 6,
      },
      styleOverrides: {
        root: {
          borderRadius: 1,
          backdropFilter: "blur(5px)",
          // background: "rgba(255, 255, 255, .1)",
          // border: "1px solid rgba(255, 255, 255, .15)",
          // backgroundSize: "100% 100%",
          // backgroundPosition: "0px 0px",
          // backgroundColor: theme.palette.background.paper,
          // background: theme.palette.background.paper,

          // backdropFilter: "blur(5px)",
          // backgroundColor: "rgba(16, 14, 14, .85)",
          // border: ".3px solid rgba(255, 255, 255, .25)",

          // backgroundImage:
          //   "linear-gradient(50deg, #020812FC 1%, #020812D6 50%, #020812C7 79%, #020812A6 100%)",
          // background:
          //   "linear-gradient(52deg, rgb(19, 19, 19) 0%, rgb(38, 38, 38) 68%, rgb(63, 64, 63) 100%)",
          // backgroundImage: `
          //   linear-gradient(50deg,
          //   ${alpha(theme.palette.background.paper, 1)} 1%,
          //   ${alpha(theme.palette.background.paper, 1)} 50%,
          //   ${alpha(theme.palette.background.paper, 1)} 79%,
          //   ${alpha(theme.palette.background.paper, 1)}  100%)
          // `,
          background: theme.palette.background.paper,
          border: `.3px solid ${theme.palette.divider}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "max-content",
          paddingTop: "2px",
          paddingBottom: "3px",
          borderRadius: "5px",
        },
      },
    },
    MuiDivider: {
      defaultProps: {},
      styleOverrides: {
        // root: { width: "100%" },
      },
    },
    MuiBackdrop: {
      defaultProps: {
        // className: "overlay",
      },
      styleOverrides: {
        root: {
          backdropFilter: "blur(5px)",
          backgroundColor: "#1b1b1bd9",
          borderRadius: "1.5rem",
          "&::before, &::after": {
            content: '""',
            position: "fixed",
            filter: "blur(180px)",
            height: "calc(((100vh + 100vw) / 2) * 0.3)",
            maxWidth: "500px",
            maxHeight: "350px",
            opacity: 0.7,
          },
          //GREEN
          "&::before": {
            // backgroundColor: "rgba(66, 175, 136, 0.749)",
            backgroundColor: theme.palette.primary.main,
            bottom: "-1.25rem",
            right: "10%",
            width: "500px",
          },
          //BLUE
          "&::after": {
            // backgroundColor: "rgba(81, 54, 245, 0.549)",
            backgroundColor: theme.palette.secondary.main,
            bottom: "-10rem",
            width: "calc(((100vh + 100vw) / 2) * 0.3)",
            right: "0",
            zIndex: 1,
            animation: "animStar 150s linear infinite",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          // backgroundColor: theme.palette.primary.main,
          // backgroundImage: `linear-gradient(83deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main})`,
          // border: "2px rgba(255, 255, 255, 0)",
          textTransform: "none",
          borderRadius: "calc(infinity * 1px)",
          padding: ".5rem 1.5rem",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSynthesis: "none",
          textRendering: "optimizeLegibility",
          webkitFontSmoothing: "antialiased",
          mozOsxFontSmoothing: "grayscale",
          fontSize: "16px",
          fontFamily: "Saira, sans-serif",
        },
        body: {
          fontSize: "16px",
          fontFamily: "Saira, sans-serif",
          "&::before, &::after": {
            content: '""',
            position: "fixed",
            filter: "blur(180px)",
            height: "calc(((100vh + 100vw) / 2) * 0.3)",
            maxWidth: "500px",
            maxHeight: "350px",
            opacity: 0.7,
          },
          //GREEN
          "&::before": {
            // backgroundColor: "rgba(66, 175, 136, 0.749)",
            backgroundColor: theme.palette.primary.main,
            // bottom: "-2.25rem",
            // right: "10%",
            width: "500px",
            zIndex: 0,

            top: "57%",
            left: "59%",
            right: "auto",
            bottom: "auto",
          },
          //BLUE
          "&::after": {
            // backgroundColor: "rgba(81, 54, 245, 0.549)",
            backgroundColor: theme.palette.secondary.main,

            width: "calc(((100vh + 100vw) / 2) * 0.3)",

            zIndex: 0,
            animation: "animStar 150s linear infinite",
            // bottom: "-10rem",
            // right: "0",
            // BACKDROP
            top: "73%",
            left: "70%",
            right: "auto",
            bottom: "auto",
          },
          [theme.breakpoints.down("sm")]: {
            //GREEN
            "&::before": {
              top: "67%",
              left: "0%",
              right: "auto",
              bottom: "auto",
            },
            //BLUE
            "&::after": {
              top: "73%",
              left: "70%",
              right: "auto",
              bottom: "auto",
            },
          },
        },
        "#root": {
          width: "100%",
          minWidth: "100%",
        },
        "*": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            /* background: #020812; */
            // background: "#a0a0ff1a",
            background: alpha(theme.palette.background.paper, 0.1),
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            // background: theme.palette.background.paper,
            // backgroundColor: theme.palette.background.paper,
            backgroundImage: `linear-gradient(to top, ${alpha(
              theme.palette.background.default,
              0.45
            )} 0%, ${alpha(
              theme.palette.background.default,
              0.85
            )} 50%,  ${alpha(theme.palette.background.default, 0.45)} 100%)`,
            // backgroundImage:
            //   "linear-gradient(to top, #94a3b8dd 0%, #ffffff1a 100%)",
            // backgroundImage: `linear-gradient(to top, ${
            //   theme.palette.background.paper
            // } 0%, ${alpha(theme.palette.background.paper, 0.5)} 100%)`,
          },
        },
        [theme.breakpoints.down("sm")]: {
          h1: {
            fontSize: "3rem!important",
          },
        },
      },
    },
  },
});

export const AppThemeProvider = ({ children }) => {
  // const [isDarkMode, setIsDarkMode] = React.useState(true);

  console.log("theme", theme);
  const setThemeMode = () => {
    // setIsDarkMode(selectedMode === "dark");
    return;
  };

  return (
    <AppThemeContext.Provider value={{ setThemeMode }}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

// Custom hook to use the context
const useAppThemeContext = () => {
  const context = React.useContext(AppThemeContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};

export { useAppThemeContext };
