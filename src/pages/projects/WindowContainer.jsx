import React, { useContext, useEffect, useRef, useState } from "react";
import { styled, Paper, Box } from "@mui/material";
import { UserContext } from "../../context/userContext";
import usePageScroll from "../../hooks/usePageScroll";
import Animation from "../../common/animation";
// import { color } from "three/webgpu";
const PlayerWrapper = styled(Box)(({ theme }) => ({
  //   boxShadow: "1px 1px 20px 8px rgba(0, 0, 0, 0.377)",
  opacity: 0,
  "&.desktop": {
    position: "absolute",
    width: "85%",
    height: "80%",
    // bottom: "1rem",
    // left: "2rem",
    borderRadius: ".65rem",
    borderTopWidth: "1.85rem",
    borderLeftWidth: ".4rem",
    borderRightWidth: ".4rem",
    borderBottomWidth: ".4rem",
    borderStyle: "solid",
    borderColor: theme.palette.grey[800],

    "&::before": {
      content: "'•••'",
      position: "absolute",
      top: "-1.5rem",
      left: ".25rem",
      fontSize: "2.5rem",
      lineHeight: ".5",
      opacity: 0.3,
    },
  },
  "&.mobile": {
    position: "absolute",

    width: "30%",
    height: "85%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "1rem",

    // borderWidth: "8px",
    // borderStyle: "solid",
    // borderColor: theme.palette.grey[700],
    outline: `8px solid ${theme.palette.grey[700]}`,
    outlineOffset: "-4px",
    overflow: "visible",
    padding: "4px",
    "&::before": {
      content: "''",
      position: "absolute",
      //   top: "0",
      left: "50%",
      width: "55%",
      height: "6px",
      transform: "translateX(-50%)",
      background: theme.palette.grey[700],
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: "4px",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      top: "50px",
      left: "100%",
      width: "6px",
      height: "50px",
      transform: "translateX(2px)",
      background: theme.palette.grey[700],
      borderTopRightRadius: "4px",
      borderBottomRightRadius: "4px",
    },
  },

  "&.app": {
    position: "absolute",
    maxWidth: "85%",
    maxHeight: "80%",
    // bottom: "1rem",
    // left: "2rem",
    overflow: "hidden",
    borderRadius: ".5rem",

    borderWidth: ".25rem",
    borderStyle: "solid",
    borderColor: theme.palette.grey[800],
  },
}));

const VideoPlayerStyles = styled("video")(({ theme }) => ({
  objectFit: "cover",
  objectPosition: "top",
}));

const VideoPlayer = ({ src, type, format, ...other }) => {
  return (
    <VideoPlayerStyles
      autoPlay
      loop
      muted
      playsInline
      width={"100%"}
      height={"100%"}
      controls={false}
      {...other}
    >
      <source src={src} type={`${type}/${format}`} />
      {/* <source src={`${baseURL}/videos/${src}`} type="video/webm" /> */}
    </VideoPlayerStyles>
  );
};

const ImageViewer = ({ src, ...other }) => {
  return (
    <img
      loading="lazy"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
      src={src}
      {...other}
    />
  );
};

const WindowContainer = ({ preview, url, view, ...other }) => {
  const { appConfig } = useContext(UserContext);
  // const baseURL = appConfig?.baseURL;
  // const githubMediaLink = `${baseURL}/videos/${preview?.fileName}`;
  const gitHubVideosPath = `${appConfig?.githubMediaPath}/videos`;
  const videoUrl = `${gitHubVideosPath}/${preview?.fileName}`;
  return (
    <Animation start={90} animation={preview?.animation}>
      <PlayerWrapper elevation={5} {...other}>
        {preview?.type === "video" ? (
          <VideoPlayer
            src={videoUrl}
            type={`${preview?.type}`}
            format={`${preview?.format}`}
          />
        ) : (
          <ImageViewer src={videoUrl} />
        )}
      </PlayerWrapper>
    </Animation>
  );
};

export default WindowContainer;
