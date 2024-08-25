import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Toolbar } from "@mui/material";
import SectionWrapper from "../SectionWrapper";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./styles.css";

const AboutPage = () => {
  const { about, isLoading } = useContext(UserContext);
  return (
    <SectionWrapper id="about">
      <Box
        component={"div"}
        rowGap={"4rem"}
        sx={{
          // border: "2px solid green",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          component={"p"}
          variant={"p"}
          fontSize={"1.14286rem"}
          lineHeight={1.8}
          flexGrow={0}
        >
          {about}
        </Typography>

        <Box id="techStackContainer" flexGrow={1}>
          <article class="gallery">
            <img
              src="https://assets.codepen.io/1506195/unsplash-music-0.avif"
              alt="guitar player at concert"
            />
            <img
              src="https://assets.codepen.io/1506195/unsplash-music-1.avif"
              alt="duo singing"
            />
            <img
              src="https://assets.codepen.io/1506195/unsplash-music-2.avif"
              alt="crowd cheering"
            />
            <img
              src="https://assets.codepen.io/1506195/unsplash-music-3.avif"
              alt="singer performing"
            />
            <img
              src="https://assets.codepen.io/1506195/unsplash-music-4.avif"
              alt="singer fistbumping crowd"
            />
            <img
              src="https://assets.codepen.io/1506195/unsplash-music-5.avif"
              alt="man with a guitar singing"
            />
            <img
              src="https://assets.codepen.io/1506195/unsplash-music-6.avif"
              alt="crowd looking at a lighted stage"
            />
            <img
              src="https://assets.codepen.io/1506195/unsplash-music-7.avif"
              alt="woman singing on stage"
            />
          </article>
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
