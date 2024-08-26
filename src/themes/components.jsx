const components = (breakpoints) => {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "transparent",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "max-content",
          paddingTop: "3px",
          paddingBottom: "2px",
        },
      },
    },
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
      styleOverrides: {
        html: {
          fontSynthesis: "none",
          textRendering: "optimizeLegibility",
          webkitFontSmoothing: "antialiased",
          mozOsxFontSmoothing: "grayscale",

          // fontFamily: '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: 14,
        },
        body: {
          // fontFamily:  '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: "14px",
          backgroundColor: "#0f1012",
        },
      },
    },
  };
};

export default components;
