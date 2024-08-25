import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Zoom, useMediaQuery, useTheme } from "@mui/material";
import SectionWrapper from "../SectionWrapper";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./styles.css";
import TechStack from "./images.json";
import TechCard from "./TechCard";

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
        rowGap={"2rem"}
        sx={{
          border: "2px solid green",

          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
          position: "relative",
        }}
      >
        <Zoom in={checked} timeout={500}>
          <Typography
            component={"p"}
            variant={"p"}
            fontSize={"1.14286rem"}
            lineHeight={1.8}
            flexGrow={0}
            // pb={4}
          >
            {about}
          </Typography>
        </Zoom>
        <Zoom in={checked} timeout={500}>
          <Box
            id={`techStackContainer`}
            flexGrow={1}
            sx={{
              outline: "1px solid red",
              height: smallScreen ? "55vh" : "auto",
            }}
          >
            {/* <div className={`banner ${!!smallScreen && "isMobile"}`}>
              <div className="slider" style={{ "--quantity": 5 }}>
                <div className="item" style={{ "--position": 1 }}>
                  <img src="images/heroImages/dragon_1.jpg" alt="" />
                </div>
                <div className="item" style={{ "--position": 2 }}>
                  <img src="images/heroImages/dragon_2.jpg" alt="" />
                </div>
                <div className="item" style={{ "--position": 3 }}>
                  <img src="images/heroImages/dragon_3.jpg" alt="" />
                </div>
                <div className="item" style={{ "--position": 4 }}>
                  <img src="images/heroImages/dragon_4.jpg" alt="" />
                </div>
                <div className="item" style={{ "--position": 5 }}>
                  <img src="images/heroImages/dragon_5.jpg" alt="" />
                </div>
              </div>
            </div> */}
            <div className={`banner ${!!smallScreen && "isMobile"}`}>
              <div
                className="slider"
                style={{ "--quantity": techStack?.length }}
              >
                {techStack?.map((techInfo, index) => (
                  <div
                    key={techInfo?.id}
                    className="item"
                    style={{ "--position": index + 1 }}
                  >
                    <TechCard data={techInfo} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </Box>
        </Zoom>
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
