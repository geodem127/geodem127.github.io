import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Zoom, useMediaQuery, useTheme } from "@mui/material";
import SectionWrapper from "../SectionWrapper";

import { UserContext } from "../../context/userContext";
import "./styles.css";

// import TechCard from "./TechCard";
// import TechStack from "./TechStack";
// import SphereWithIcons from "./SphereWithIcons";
import SphereWithIcons from "./SphereWithIcons";
import IcosahedronWithIcons from "./IcosahedronWithIcons";
import SphereWithIcons2 from "./SphereWithIcons2";
// import TechStack from "./TechStack";

const AboutPage = () => {
  const theme = useTheme();
  const { about, techStack, isLoading } = useContext(UserContext);

  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
    return () => {
      setChecked(false);
    };
  }, []);

  return (
    <SectionWrapper id="about">
      <Box
        component={"div"}
        // rowGap={"1"}
        sx={{
          // border: "2px solid green",
          minHeight: "100%",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
          position: "relative",
        }}
      >
        <Zoom
          in={checked}
          timeout={500}
          style={{ flexGrow: 0, display: "inline-block" }}
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
                // padding: "0 .5rem",
                borderRadius: ".4rem",
                fontWeight: 700,
                margin: "0 .5rem 0 0",
                padding: 0,
                float: "left",
              },
            }}
            // pb={4}
          >
            {about}
          </Typography>
        </Zoom>
        {/* <Zoom in={checked} timeout={500} style={{ flexGrow: 1 }}> */}
        <Box
          id={`techStackContainer`}
          flexGrow={smallScreen ? 0 : 1}
          sx={{
            // outline: "1px solid yellow",
            height: smallScreen ? "90vw" : "100%",
          }}
        >
          {/* <TechStack /> */}
          <SphereWithIcons techStack={techStack} />
          {/* <SphereWithIcons2 techStack={techStack} /> */}
          {/* <IcosahedronWithIcons /> */}
        </Box>
        {/* </Zoom> */}
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
