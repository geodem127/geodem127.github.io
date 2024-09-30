import React, { useRef, useState } from "react";

import { Box, styled } from "@mui/material";
import { ImageWithZoom } from "pure-react-carousel";

const VideoContainer = styled(Box)(({ theme }) => ({
  ":root": {
    "--mouseX": "0",
    "--mouseY": "0",
  },
  // "--mouseX": "0",
  // "--mouseY": "0",
  transition: "all 200ms ease-in",
  // overflow: "hidden",

  "&:hover": {
    "& video, & img": {},
  },

  "& video, & img": {
    cursor: "zoom-in",
    // objectFit: "cover",
    // objectPosition: "center",
    height: "400px!important",
    width: "100%",
    height: "100%",
    // aspectRatio: "1",
    // transformOrigin: "var(--mouseX) var(--mouseY)",
    "&:hover": {
      position: "absolute",

      top: 0,
      left: 0,
      height: "200%",
      transform: "scale(2)",
      transformOrigin: "var(--mouseX) var(--mouseY)",
      // transform: "scale(2)",
      // scale: 2,
      // transformOrigin: "10px 10px",
      // transform: "scale(2)",
      // position: "absolute",
      // top: "var(--mouseY)",
      // left: "var(--mouseX)",
      // transformOrigin: "var(--mouseX) var(--mouseY)",
      // transform: "scale(2)",
      // transform: "translateY(var(--mouseY))",
    },
  },
}));
const videoProps = {
  component: VideoContainer,
  autoPlay: true,
  loop: true,
  muted: true,
  controls: false,

  style: {
    borderRadius: ".5rem",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    objectFit: "cover",
  },
};
const imageProps = {
  component: ImageWithZoom,
  loading: "lazy",
  style: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    objectFit: "cover",
    borderRadius: ".5rem",
  },
};
// <ImageWithZoom src={item?.src} />;
const MediaViewer = ({ type = "image", src = "", format = "", ...other }) => {
  return (
    <VideoContainer sx={{ height: "100%", overflow: "visible" }}>
      {/* <Box
        ref={contRef}
        {...(type === "video"
          ? { ...videoProps, style: { ...overlayStyle } }
          : imageProps)}
        src={src}
        {...other}
        // onMouseOver={handleOver}
        onMouseMove={handleMove}
        // style={overlayStyle}
      > */}
      {/* <source src={src} type={`${type}/${format}`} /> */}

      {type === "video" ? (
        <video
          {...videoProps}
          style={{
            // borderRadius: ".5rem",
            height: "100%",
            // width: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            // width: "100%",
            // ...overlayStyle,
          }}
        >
          <source src={src} type={`${type}/${format}`} />
        </video>
      ) : (
        <img
          src={src}
          style={{
            height: "100%",
          }}
        />
      )}

      {/* </Box> */}
    </VideoContainer>
  );
};

export default MediaViewer;
