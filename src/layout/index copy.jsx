import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Container, Slide, Toolbar, Box, Grid } from "@mui/material";
import Navigation from "./Navigation";
import Main from "./Main";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { UserContext } from "../context/userContext";
import Header from "./Header";

const X_PADDING = {
  sm: "1.5rem",
  md: "3rem",
  lg: "6rem",
  // lg: "0",
};

const Y_PADDING = {
  sm: "3rem",
  md: "5rem",
  lg: 0,
};

const Layout = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [pageLoaded, setPageLoaded] = useState(false);
  const { userData, isLoading } = useContext(UserContext);

  const { navigation, personalInformation, about, project, experiences } =
    userData;

  const screenSize = smallScreen ? "sm" : mediumScreen ? "md" : "lg";

  React.useEffect(() => {
    if (isLoading || pageLoaded) return;
    console.log("isLoading:", isLoading);
    console.log("userData:", userData);
    setPageLoaded(true);
  }, [isLoading, pageLoaded, setPageLoaded]);

  return (
    // <Slide direction="up" in={!isLoading}>
    <Container
      maxWidth={"lg"}
      disableGutters
      // fixed
      // maxWidth={`calc(100% - ${
      //   PADDING_MAP[screenSize] - PADDING_MAP[screenSize]
      // })`}
      sx={{
        // width: "100vw",
        boxSizing: "border-box",
        border: "1px  solid green",
        minHeight: "100vh",
        position: "relative",
        // display: "flex",
        // flexDirection: smallScreen || mediumScreen ? "column" : "row",
        // justifyContent: "space-between",
        padding: `${Y_PADDING[screenSize]} ${X_PADDING[screenSize]}!important`,
        // minWidth: `${theme.breakpoints.values.xs}px`,
        // boxSizing: "border-box",
        // px: smallScreen ? 3 : 1,
        // px: PADDING_MAP[screenSize],
        // paddingLeft: `${PADDING_MAP[screenSize]}!important`,
        // paddingRight: `${PADDING_MAP[screenSize]}!important`,
        //
        // margin: `0 ${X_PADDING[screenSize]}!important`,
        // padding: 0,import components from 'src/themes/components';
      }}
    >
      {/* <span
        style={{ position: "fixed", top: 0, right: "10px", zIndex: 999999 }}
      >
        {`mediaQuery: ${screenSize} | width: ${document.body.clientWidth}`}
      </span> */}
      <Grid
        container
        width={"100%"}
        // columnSpacing={2}
        columnSpacing={4}
        // sx={{ border: "1px solid blue" }}
        // m={0}
        // p={0}
      >
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <Header
            // width={smallScreen || mediumScreen ? "100%" : "40%"}
            width={"100%"}
            data={{ navigation, personalInformation }}
            screenSize={screenSize}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          <Main
            // width={smallScreen || mediumScreen ? "100%" : "60%"}
            width={"100%"}
            data={{ about, project, experiences }}
            screenSize={screenSize}
          />
        </Grid>
      </Grid>
    </Container>
    // </Slide>
  );
};

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  // width: PropTypes.string,
  window: PropTypes.func,
};

export default Layout;
