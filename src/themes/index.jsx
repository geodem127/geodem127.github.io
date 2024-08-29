import * as React from "react";

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import "./fonts/index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { palette } from "./palette";
// import overRidesStyles from "./styleOverrides";

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
    // lg: 1088,
    xl: 1500,
  },
  unit: "px",
};

const themeOptions = createTheme({
  breakpoints,
  direction: "ltr",
  palette: palette?.dark,
  typography,
  components,
  // ...overRidesStyles,
  gradients: {
    primary: `linear-gradient(135deg, ${palette?.dark.primary.dark} 0%, ${palette?.dark.primary.main} 62%, ${palette?.dark.primary.light} 100%)`,
    secondary: `linear-gradient(135deg, ${palette?.dark.secondary.dark} 0%, ${palette?.dark.secondary.main} 62%, ${palette?.dark.secondary.light} 100%)`,
    combined: `linear-gradient(45deg, ${palette?.dark.primary.main} 0%, ${palette?.dark.secondary.main} 100%)`,
  },
});

export const AppThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  // const [theme, setTheme] = React.useState();

  const setThemeMode = (selectedMode) => {
    // setIsDarkMode(selectedMode === "dark");
    return;
  };

  // const themeOptions = createTheme({
  //   breakpoints,
  //   direction: "ltr",
  //   palette: palette?.dark,
  //   typography,
  //   // typography: typography(paletteData),
  //   // components: components(breakpoints),
  //   // components: {
  //   //   MuiPaper: {
  //   //     styleOverrides: {
  //   //       root: {
  //   //         background: "transparent",
  //   //       },
  //   //     },
  //   //   },
  //   //   MuiChip: {
  //   //     styleOverrides: {
  //   //       root: {
  //   //         height: "max-content",
  //   //         paddingTop: "4px",
  //   //         paddingBottom: "4px",
  //   //       },
  //   //     },
  //   //   },
  //   //   MuiCssBaseline: {
  //   //     defaultProps: {
  //   //       enableColorScheme: true,
  //   //     },

  //   //     styleOverrides: {
  //   //       ...overRidesStyles,

  //   //       [`@media  screen and  (max-width: ${breakpoints.values.md}px)`]: {
  //   //         html: { fontSize: ".9rem" },
  //   //       },
  //   //       [`@media   screen and (min-width: ${breakpoints.values.md}px)`]: {
  //   //         html: { fontSize: "1rem" },
  //   //       },
  //   //       [`@media  screen and  (max-width: ${breakpoints.values.sm}px)`]: {
  //   //         html: { fontSize: ".8rem" },
  //   //       },
  //   //     },
  //   //   },
  //   // },
  //   gradients: {
  //     primary: `linear-gradient(90deg, ${palette?.dark.primary.dark} 0%, ${palette?.dark.primary.main} 40%, ${palette?.dark.primary.light} 100%)`,
  //   },
  // });
  // console.log("themeOptions:", themeOptions);
  // setTheme(responsiveFontSizes(themeOptions));
  // setTheme(themeOptions);

  // if (!theme) return "LOADING...";

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
