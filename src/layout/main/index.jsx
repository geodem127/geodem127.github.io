import * as React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Main = ({ width, data, screenSize, sx = {}, children, ...other }) => {
  return (
    <Box
      component="main"
      flexShrink={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "space-between",
        width: width,
        flexShrink: 0,

        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
};

Main.propTypes = {
  width: PropTypes.string,
  data: PropTypes.object,
  screenSize: PropTypes.string,
  window: PropTypes.func,
};

export default Main;
