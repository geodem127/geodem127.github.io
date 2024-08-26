import React, { useState, useRef, useEffect } from "react";
import {
  useTheme,
  useMediaQuery,
  styled,
  Box,
  Typography,
  Grid,
  Chip,
  Divider,
  Fade,
  alpha,
} from "@mui/material";

import usePageScroll from "../../hooks/usePageScroll";
import Animation from "../../common/animation";

// const lineGridWidth = 60;
const lineGridWidth = {
  sm: 20,
  md: 20,
  lg: 50,
};

const SectionStyles = styled(Box)(({ theme }) => ({
  padding: "1rem 0 3rem 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "stretch",
  width: "100%",
  height: "auto",
  position: "relative",
  // "&:first-of-type": {
  //   padding: "0 0 1rem 0",
  // },
  "&:not(:has(+ * .downLine.in))": {
    "& .downLine": {
      clipPath: "polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)",
    },
  },
}));

const GridColumnsLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "100%",
  // width: `${lineGridWidth}px`,
  position: "absolute",
  top: "0",
  left: "0",
  padding: ".85rem 0 0 0",
  // outline: "1px dashed orange",
  // outlineOffset: "-1px",
  "& .downLinePointer": {
    width: "20x",
    height: "23px",
    // border: `2px solid red`,
    paddingBottom: "3px",
    flexGrow: 0,
    flexShrink: 0,
    color: theme.palette.primary.main,
    fontSize: "2.1rem",
    // lineHeight: ,
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    // position: "absolute",
    // top: "0",
    // left: "50%",
    // zIndex: "0",
  },
  "& .downLine": {
    width: "1px",
    flexGrow: 1,
    background: theme.palette.primary.main,
    transition: "all 400ms linear",
    // position: "absolute",
    // top: "0",
    // left: "50%",
    // zIndex: "0",
  },
}));
const GridColumnsRight = styled(Box)(({ theme, leftPadding }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  height: "100%",
  width: "100%",
  // outline: "1px dashed red",
  // outlineOffset: "-1px",
  // paddingLeft: `${lineGridWidth}px`,
  // border: "1px dashed purple",
  // outline: "1px solid red",
  // outlineOffset: "-1px",
  "&::before": {
    content: '""',
    position: "absolute",
    left: leftPadding,
    top: "1rem",
    right: 0,
    bottom: "3rem",
    margin: "-1rem",

    borderRadius: "6px",
    // backgroundColor: "rgba(30, 41, 59, 0.15)",
    border: "1px solid rgba(229, 231, 235,.08)",
    background: alpha(theme.palette.background.paper, 0.1),
    zIndex: 0,
    opacity: 0,
    transition: "opacity 200ms ease-in",
  },
  "&.hasHover": {
    "&:hover": {
      "&::before": { opacity: 1 },
    },
  },
}));

const ExperienceDetails = ({ data = {} }) => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const headerText = (
    data?.role + (!!data?.company ? ` ⬩ ${data?.company}` : "")
  )?.trim();

  const colSpacer =
    lineGridWidth?.[smScreen ? "sm" : mdScreen ? "md" : "lg"] || 60;

  return (
    <>
      <SectionStyles>
        {/* <GridColumnsLeft sx={{ width: `${colSpacer}px` }}> */}
        <GridColumnsLeft sx={{ width: `${colSpacer}px` }}>
          {/* <Box className="downLineWrapper"> */}
          <div className="downLinePointer">⬡</div>
          <Animation start={80} animation="collapseDown">
            <div className="downLine"></div>
          </Animation>
          {/* </Box> */}
        </GridColumnsLeft>
        <GridColumnsRight
          sx={{ paddingLeft: `${colSpacer + 15}px` }}
          className={`${lgScreen ? "hasHover" : ""}`}
          leftPadding={`${colSpacer + 15}px`}
        >
          <Typography
            variant="subtitle1"
            color="text.primary"
            sx={{ padding: 0, lineHeight: 1.3 }}
          >
            {data?.period}
          </Typography>
          <Animation start={80} animation="slideUp">
            <Box
              py={1}
              // className={`descriptionGroup ${lgScreen ? "hasHover" : ""}`}
            >
              {
                <Typography variant="h5" color="text.secondary">
                  {data?.role}
                  <span
                    style={{ color: theme.palette.text.primary }}
                  >{` ⬩ `}</span>
                  {data?.company}
                </Typography>
              }

              <Box
                py={2}
                sx={{
                  textAlign: "justify",
                  whiteSpace: "pre-wrap",
                  textWrap: "wrap",
                }}
              >
                {data?.jobDescription}
              </Box>
              <Box>
                <Divider sx={{ my: 1 }} />
                {data?.technologies?.map((tech, index2) => (
                  <Chip
                    label={tech}
                    sx={{
                      margin: "3px",
                      // background: "rgba(45, 212, 191, 0.1)",
                      background: alpha(theme.palette.background.paper, 0.1),
                      color: theme.palette.primary.light,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Animation>
        </GridColumnsRight>
      </SectionStyles>
    </>
  );
};

export default ExperienceDetails;
