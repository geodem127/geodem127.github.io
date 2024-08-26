const components = {
  MuiPaper: {
    styleOverrides: {
      root: {
        // background: "transparent",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        // filter: "blur(155px)",
        // backgroundColor: "rgba(255, 255, 255, .1)",
        // border: "1px solid rgba(229, 231, 235,.18)",
        backgroundColor: "rgba(30, 41, 59, 0.5)",
        border: "1px solid rgba(229, 231, 235,.08)",
        // "1px solid rgba(229, 231, 235,.08)",
        // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        borderRadius: "1rem",
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
        // fontSize: 16,
        // fontSize: "16px",
        fontSize: "16px",
        backgroundColor: "#020812",
      },
      body: {
        // fontFamily:  '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: "16px",
        backgroundColor: "#020812",

        "&::before, &::after": {
          content: '""',

          position: "fixed",
          filter: "blur(180px)",

          // height: "350px",
          height: "calc(((100vh + 100vw) / 2) * 0.3)",
          maxWidth: "500px",
          maxHeight: "350px",
          opacity: 0.7,
        },
        //GREEN
        "&::before": {
          backgroundColor: "rgba(66, 175, 136, 0.749)",
          bottom: "-3.25rem",
          right: "10%",
          width: "500px",

          //  "3rem",
        },
        //BLUE
        "&::after": {
          backgroundColor: "rgba(81, 54, 245, 0.549)",
          bottom: "-12rem",
          width: "calc(((100vh + 100vw) / 2) * 0.3)",
          right: "0",
          zIndex: 1,
        },
      },
      "#root": {
        width: "100%",
        minWidth: "100%",
        minHeight: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
      },
    },
  },
};

export default components;
