import * as React from "react";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import "./fonts/index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { palette } from "./palette";

import { typography } from "./typography";
import components from "./components";

const AppThemeContext = React.createContext();

const breakpoints = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  values: {
    xs: 360,
    sm: 768,
    md: 1024,
    lg: 1256,
    xl: 1500,
  },
  unit: "px",
};

const themeOptions = createTheme({
  breakpoints,
  direction: "ltr",
  palette: palette,
  // typography,
  typography: {
    ...typography,
    h1: {
      ...typography.h1,
      "@media (max-width:768px)": {
        fontSize: "2.5rem",
      },
    },
  },
  components,
  // components: {
  //   ...components,
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       ...components.MuiCssBaseline.styleOverrides,
  //       "#root": {
  //         "@media (max-width:1024px)": {
  //           overflow: "hidden",
  //         },
  //       },
  //     },
  //   },
  // },
  gradients: {
    primary: `linear-gradient(135deg, ${palette.primary.dark} 0%, ${palette.primary.main} 62%, ${palette.primary.light} 100%)`,
    secondary: `linear-gradient(135deg, ${palette.secondary.dark} 0%, ${palette.secondary.main} 62%, ${palette.secondary.light} 100%)`,
    combined: `linear-gradient(45deg, ${palette.primary.main} 0%, ${palette.secondary.main} 100%)`,
  },
});

export const AppThemeProvider = ({ children }) => {
  // const [isDarkMode, setIsDarkMode] = React.useState(true);

  const setThemeMode = () => {
    // setIsDarkMode(selectedMode === "dark");
    return;
  };

  return (
    <AppThemeContext.Provider value={{ setThemeMode }}>
      <ThemeProvider theme={responsiveFontSizes(themeOptions)}>
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
