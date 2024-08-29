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

          fontFamily:
            '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: 14,
        },
        body: {
          fontFamily:
            '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
          //   fontSize: "1rem",
          fontSize: "14px",
          backgroundColor: "#0f1012",
        },
      },
    },
    // MuiTypography: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: "1rem",
    //       fontWeightLight: 400,
    //       fontWeightRegular: 400,
    //       fontWeightBold: 700,
    //       fontSize: 14,
    //       htmlFontSize: 16,
    //       fontFamily:
    //         '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    //     },
    //   },
    // },
    // MuiCssBaseline: {
    //   defaultProps: {
    //     enableColorScheme: true,
    //   },

    //   styleOverrides: {
    //     html: {
    //       colorScheme: "dark light",
    //       fontSynthesis: "none",
    //       textRendering: "optimizeLegibility",
    //       webkitFontSmoothing: "antialiased",
    //       mozOsxFontSmoothing: "grayscale",

    //       fontFamily:
    //         '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    //       fontSize: 14,
    //     },
    //     body: {
    //       fontFamily:
    //         '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    //       //   fontSize: "1rem",
    //       fontSize: "14px",
    //     },
    //     h1: {
    //       fontFamily: "Inter",
    //       fontSize: "3rem",
    //       fontWeight: 700,
    //       letterSpacing: "-1.84px",
    //     },
    //     h2: {
    //       fontFamily: "Inter",
    //       fontSize: "1.5rem",
    //       fontWeight: 600,
    //     },
    //     h3: {
    //       fontFamily: "Inter",
    //       fontSize: "1.35rem",
    //       fontWeight: 600,
    //     },
    //     h4: {
    //       fontFamily: "Inter",
    //       fontSize: "1.25rem",
    //       fontWeight: 600,
    //     },
    //     h5: {
    //       fontFamily: "Inter",
    //       fontSize: "1.25rem",
    //       fontWeight: 500,
    //     },
    //     h6: {
    //       fontFamily: "Inter",
    //       fontSize: "0.85rem",
    //       fontWeight: 500,
    //     },
    //     caption: {
    //       fontFamily: "Inter",
    //       fontSize: "0.8rem",
    //       fontWeight: 500,
    //     },

    //     p: {
    //       fontFamily:
    //         '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    //       fontSize: "1rem",
    //       fontWeight: 400,
    //     },

    //     [`@media  screen and  (max-width: ${breakpoints.values.md}px)`]: {
    //       html: { fontSize: "1rem" },
    //     },
    //     [`@media   screen and (min-width: ${breakpoints.values.md}px)`]: {
    //       html: { fontSize: "1rem" },
    //     },
    //     [`@media  screen and  (max-width: ${breakpoints.values.sm}px)`]: {
    //       html: { fontSize: ".85rem" },
    //     },
    //   },
    // },
  };
};

export default components;
