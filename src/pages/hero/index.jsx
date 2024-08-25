import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Toolbar, styled } from "@mui/material";
import SectionWrapper from "../SectionWrapper";

import "./heroStyles.css";

const HeroPageStyles = styled(Box)`
  /* background-color: #d2d2d2;
  background-image: repeating-linear-gradient(
      to right,
      transparent 0 100px,
      #25283b22 100px 101px
    ),
    repeating-linear-gradient(
      to bottom,
      transparent 0 100px,
      #25283b22 100px 101px
    ); */
`;
const HeroPage = () => {
  return (
    <SectionWrapper id="hero">
      <Box
        component={"div"}
        sx={{
          // border: "2px solid green",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          position: "relative",
        }}
      >
        <HeroPageStyles id="heroContainer" flexGrow={1}>
          <div className="banner">
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
              {/* <div className="item" style={{ "--position": 6 }}>
                <img src="images/heroImages/dragon_6.jpg" alt="" />
              </div>
              <div className="item" style={{ "--position": 7 }}>
                <img src="images/heroImages/dragon_7.jpg" alt="" />
              </div>
              <div className="item" style={{ "--position": 8 }}>
                <img src="images/heroImages/dragon_8.jpg" alt="" />
              </div>
              <div className="item" style={{ "--position": 9 }}>
                <img src="images/heroImages/dragon_9.jpg" alt="" />
              </div>
              <div className="item" style={{ "--position": 10 }}>
                <img src="images/heroImages/dragon_10.jpg" alt="" />
              </div> */}
            </div>
            {/* <div className="content">
              <h1 dataContent="CSS ONLY">CSS ONLY</h1>
              <div className="author">
                <h2>LUN DEV</h2>
                <p>
                  <b>Web Design</b>
                </p>
                <p>Subscribe to the channel to watch many interesting videos</p>
              </div>
              <div className="model"></div>
            </div> */}
          </div>
        </HeroPageStyles>
      </Box>
    </SectionWrapper>
  );
};

HeroPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  // data: PropTypes.any,
  // id: PropTypes.string,
  // window: PropTypes.func,
};
export default HeroPage;
