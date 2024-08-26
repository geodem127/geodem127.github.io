import { useEffect, useState, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Zoom, useMediaQuery, useTheme } from "@mui/material";

import { UserContext } from "../../context/userContext";
import SectionWrapper from "../SectionWrapper";
import SphereWithIcons from "./SphereWithIcons";

const AboutPage = () => {
  const theme = useTheme();
  const { about, techStack, isLoading } = useContext(UserContext);

  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SectionWrapper id="about">
      <Box
        component={"div"}
        sx={{
          minHeight: "100%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
          position: "relative",
        }}
      >
        <Typography
          flexGrow={0}
          component={"p"}
          variant={"p"}
          sx={{
            whiteSpace: "pre-wrap",
            textAlign: "justify",
            "&:first-letter": {
              color: theme.palette.primary.contrastText,
              fontSize: "3rem",
              lineHeight: 1,
              borderRadius: ".4rem",
              fontWeight: 700,
              margin: "0 .5rem 0 0",
              padding: 0,
              float: "left",
            },
          }}
        >
          {about}
        </Typography>

        <Box
          id={`techStackContainer`}
          flexGrow={smallScreen ? 0 : 1}
          sx={{
            height: smallScreen ? "90vw" : "100%",
            margin: 0,

            display: "grid",
            placeItems: "center",
          }}
        >
          <SphereWithIcons techStack={techStack} />
        </Box>
      </Box>
    </SectionWrapper>
  );
};

AboutPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  data: PropTypes.any,
  id: PropTypes.string,
  window: PropTypes.func,
};
export default AboutPage;
