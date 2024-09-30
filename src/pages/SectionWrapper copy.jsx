import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import usePageScroll from "../hooks/usePageScroll";

const SectionWrapperStyles = styled(Box)(({ theme }) => ({
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  boxSizing: "border-box",
  // outline: "2px dashed green",
  // outlineOffset: "-2px",
  position: "sticky",
  "& .sectionHeader": {
    zIndex: 999999999,
    overflow: "hidden",
    position: "sticky",
    top: "0px",
    // border: "1px solid red",
    width: "100%",
    // "&::before": {
    //   content: "''",
    //   position: "absolute",
    //   left: "0",
    //   // top: 0,
    //   bottom: 0,
    //   width: "100%",
    //   height: 0,

    //   opacity: 0,
    // },
    "&.topMost": {
      zIndex: 1000,

      // "&::before": {
      //   WebkitBackdropFilter: "blur(15px)",
      //   backdropFilter: "blur(15px)",
      //   backgroundColor: "rgba(16, 14, 14, .35)",

      //   height: "100%",
      //   opacity: 1,
      // },
    },
    "&::after": {
      content: "'xxx'",
      position: "absolute",
      height: "1px",
      left: "2rem",
      right: "2rem",
      bottom: "1px",
      background: "rgba(55, 53, 53, 0.085)",
    },
  },

  // outline: "2px dashed green",
  // outlineOffset: "-2px",
}));

const SectionWrapper = ({ id, rowGap = 0, children, ...other }) => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const fullWidth = useMediaQuery(theme.breakpoints.down("md"));
  const targetRef = useRef(undefined);
  const [inRange, setInRange] = useState(false);
  const { top, bottom, left, right, height, width, view } = usePageScroll(
    targetRef?.current
  );

  useEffect(() => {
    setInRange(top < 1);
    console.log(`usePageScroll | ${id}: `, {
      top,
      bottom,
      left,
      right,
      height,
      width,
      view,
    });
  }, [top]);

  return (
    <SectionWrapperStyles component={"section"} id={id} {...other}>
      {fullWidth && (
        <Box
          ref={targetRef}
          className="sectionHeader"
          component="div"
          display="block"
          mt={5}
          mb={6}
          py={1.5}
          px={fullWidth ? "1.15rem" : 0}
          sx={{
            ...(inRange
              ? {
                  background: alpha(theme.palette.background.default, 0.1),
                  backdropFilter: "blur(15px)",
                }
              : {}),
          }}
        >
          <Typography
            variant={"h2"}
            component={"h2"}
            className="sectionTitle"
            sx={{
              // border: "1px solid green",
              textTransform: "uppercase",

              color: theme.palette.primary.contrastText,

              position: "relative",

              "&::after": {
                content: '""',
                display: "inline-block",
                width: ".65rem",
                height: ".65rem",
                background: theme.palette.primary.main,
                marginLeft: "0.25rem",
                borderRadius: ".25rem",
              },
            }}
          >
            {id}
          </Typography>
        </Box>
      )}
      <Box
        // py={"4rem"}
        px={fullWidth ? "1.15rem" : 0}
        rowGap={rowGap}
        sx={{
          minHeight: "100%",
          position: "relative",
        }}
      >
        {children}
      </Box>
    </SectionWrapperStyles>
  );
};

export default SectionWrapper;
