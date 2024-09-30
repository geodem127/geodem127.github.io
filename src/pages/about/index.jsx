import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { UserContext } from "../../context/userContext";
import SectionWrapper from "../SectionWrapper";
import TechStack from "./TechStack";

// const TechStack = lazy(() => import("./TechStack"));

const AboutPage = () => {
  const theme = useTheme();
  const [aboutData, setAboutData] = useState(null);
  const [techStackData, setTechStackData] = useState(null);
  const { about, techStack } = useContext(UserContext);

  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (!about || !techStack) return;
    setAboutData(about);
    setTechStackData(techStack);
  }, [about, techStack]);

  return (
    <SectionWrapper id="about">
      {!!aboutData && !!techStackData && (
        <Box
          component={"div"}
          // px={smallScreen || mediumScreen ? 0 : 3}
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
            className="animation-slideup"
            sx={{
              whiteSpace: "pre-wrap",
              textAlign: "justify",
              "&:first-letter": {
                color: theme.palette.primary.contrastText,
                fontSize: "3rem",
                lineHeight: 1,
                borderRadius: ".4rem",
                fontWeight: 500,
                margin: "0 .5rem 0 0",
                padding: "0 .45rem",
                float: "left",
                backgroundColor: theme.palette.background.paper,
              },
            }}
          >
            {about}
          </Typography>
          <Box
            flexGrow={0}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h6" pt={8} pb={3}>
              <span style={{ color: theme.palette.primary.main }}>{"< "}</span>
              Tech-Stack
              <span style={{ color: theme.palette.primary.main }}>{" />"}</span>
            </Typography>
          </Box>
          <Box
            id={`techStackContainer`}
            flexGrow={smallScreen || mediumScreen ? 0 : 1}
            sx={{
              // height: smallScreen || mediumScreen ? "50vw" : "48vh",
              // minHeight: "250px",
              // maxHeight: "370px",
              margin: 0,
              display: "grid",
              placeItems: "center",
            }}
          >
            <TechStack techStack={techStack} />
          </Box>
          {/* <Box
            flexGrow={0}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="outlined">View</Button>
          </Box> */}
        </Box>
      )}
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
