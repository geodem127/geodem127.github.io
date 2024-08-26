import React, { Fragment, useEffect, useRef, useState } from "react";
import { Paper, Box, styled } from "@mui/material";
// import DesktopWindow from "./DesktopWindow";
// import MobileWindow from "./MobileWindow";
import usePageScroll from "../../hooks/usePageScroll";
import WindowContainer from "./WindowContainer";
import Animation from "../../common/animation";

const PreviewBoxStyles = styled(Box)(({ theme }) => ({
  width: "100%",
  aspectRatio: "1.5/1",
  padding: "1rem",
  // outline: "1px dashed green",
  // outlineOffset: "-3px",
  position: "relative",
  // ...theme?.components?.MuiPaper?.styleOverrides?.root,
  overflow: "hidden",

  //   backgroundColor: theme.palette.secondary.main,
}));

const PreviewBox = ({ data, url, in: inProp = false }) => {
  // const targetRef = useRef(undefined);
  // const [inRange, setInRange] = useState(false);
  // const { top } = usePageScroll(targetRef?.current);

  // useEffect(() => {
  //   setInRange(top < 85);
  // }, [top]);
  return (
    <PreviewBoxStyles>
      {data?.map((preview, index) => (
        <WindowContainer
          key={index}
          preview={preview}
          url={url}
          view={preview?.view}
          // className={`${preview?.view} ${
          //   !inRange
          //     ? ""
          //     : preview?.view === "desktop"
          //     ? "animation-slideup"
          //     : "animation-slideleft"
          // }`}
          className={`${preview?.view} ${!!inProp ? "in" : ""}`}
          sx={{
            animationDelay: `${index * 0.2}s`,
            ...preview?.styles,
          }}
        />
      ))}
    </PreviewBoxStyles>
  );
};

/* <Fragment key={index}>
          {preview?.view === "desktop" ? (
            <DesktopWindow
              src={preview?.url}
              url={url}
              type={preview?.type}
              format={preview?.format}
              className={inRange ? "animation-slideup" : ""}
            />
          ) : (
            <MobileWindow
              src={preview?.url}
              url={url}
              className={inRange ? "animation-slideleft" : ""}
            />
          )}
        </Fragment> */

export default PreviewBox;
