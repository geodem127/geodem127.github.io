import * as React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider, Toolbar } from "@mui/material";
// import AboutPage from "../../pages/about";
// import ExperiencesPage from "../../pages/experiences";
// import Projects from "../../pages/projects";
import { useTheme } from "@mui/material/styles";
// import RootRoutes from "../../routes";
const scrollPage = document.getElementById("root");

const Main = ({ width, data, screenSize, sx = {}, children, ...other }) => {
  const theme = useTheme();
  const { about, experiences, projects } = data;
  return (
    <Box
      component="main"
      // gap={7}
      // pt={screenSize !== "sm" ? `${theme.mixins.toolbar.minHeight + 20}px` : 0}
      // pl={"2rem"}
      flexShrink={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "space-between",
        width: width,
        flexShrink: 0,
        // border: "1px solid red",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
};

Main.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  width: PropTypes.string,
  data: PropTypes.object,
  screenSize: PropTypes.string,
  window: PropTypes.func,
};

export default Main;
