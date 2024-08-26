import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import usePageScroll from "../hooks/usePageScroll";

const SectionWrapperStyles = styled(Box)(({ theme }) => ({
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  boxSizing: "border-box",
  // outline: "1px solid pink",
  // outlineOffset: "-1px",
  "& .sectionHeader": {
    zIndex: 0,
    overflow: "hidden",
    "&::before": {
      content: "''",
      position: "absolute",
      left: "0",
      // top: 0,
      bottom: 0,
      width: "100%",
      height: 0,

      opacity: 0,
    },
    "&.topMost": {
      zIndex: 1000,

      "&::before": {
        WebkitBackdropFilter: "blur(15px)",
        backdropFilter: "blur(15px)",
        backgroundColor: "rgba(16, 14, 14, .35)",

        height: "100%",
        opacity: 1,
      },
    },
    "&::after": {
      content: "''",
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
  const fullWidth = useMediaQuery(theme.breakpoints.down("md"));
  // const targetRef = useRef(undefined);
  // const [inRange, setInRange] = useState(false);
  // const { top } = usePageScroll(targetRef?.current);

  // useEffect(() => {
  //   setInRange(top < 2);
  // }, [top]);

  return (
    <SectionWrapperStyles component={"section"} id={id} {...other}>
      {fullWidth && (
        <Box
          // ref={targetRef}
          component={"div"}
          // pb={6}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          columnGap={1}
          mt={5}
          mb={8}
          ml={"-2rem"}
          py={2}
          px={4.25}
          sx={{
            position: "sticky",
            top: 0,
            // border: "1px solid red",
            width: "calc(100% + 4rem)",
          }}
          // className={`sectionHeader ${!!inRange ? "topMost" : ""}`}
          className="sectionHeader"
        >
          <Typography
            variant={"h2"}
            component={"h2"}
            className="sectionTitle"
            sx={{
              // border: "1px solid green",
              textTransform: "uppercase",
              // fontWeight: 500,
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
          {/* <div
            style={{
              flexGrow: 1,
              height: "2px",
              width: "100%",
              marginTop: ".5rem",
              background: theme.palette.divider,
            }}
          ></div> */}
        </Box>
      )}
      <Box
        // py={"4rem"}
        // px={"1rem"}
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
