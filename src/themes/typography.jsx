import { colors } from "@mui/material";
import { palette } from "./palette";

const typography = {
  // fontWeightLight: 400,
  // fontWeightRegular: 400,
  // fontWeightBold: 700,
  // fontSize: 14,
  // htmlFontSize: 16,
  fontSize: 14,

  h1: {
    fontFamily: '"REM","Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "3.25rem",
    fontWeight: 700,
    letterSpacing: "-1.84px",
    color: palette.dark.primary.contrastText,
  },
  h2: {
    fontFamily: '"REM","Roboto", "Helvetica", "Arial", sans-serif',
    // fontSize: "1.25rem",
    fontSize: "2.25rem",
    fontWeight: 600,
  },
  h3: {
    fontFamily: '"REM","Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "2rem",
    fontWeight: 600,
  },
  h4: {
    fontFamily: '"REM","Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "1.75rem",
    fontWeight: 600,
  },
  h5: {
    fontFamily: '"REM","Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  h6: {
    fontFamily: '"REM","Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: "1.15rem",
    fontWeight: 600,
  },
  body1: {},
  // p: {
  //   fontFamily: '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  //   fontSize: "1rem",
  //   fontWeight: 400,
  //   letterSpacing: "1px",
  // },
};

export { typography };
