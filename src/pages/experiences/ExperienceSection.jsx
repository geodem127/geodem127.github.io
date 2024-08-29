import React, { useState, useRef, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";
import {
  Card,
  useTheme,
  useMediaQuery,
  styled,
  Box,
  Typography,
  Grid,
  Chip,
  Zoom,
  Grow,
  Collapse,
  Slide,
  Divider,
  Fade,
} from "@mui/material";

import useDataParse from "../../hooks/useDataParse";

import usePageScroll from "../../hooks/usePageScroll";
import zIndex from "@mui/material/styles/zIndex";

const SectionStyles = styled(Box)(({ theme }) => ({
  background: "transparent",
  border: 0,
  boxShadow: "none",
  overflow: "visible",
  position: "relative",
  cursor: "pointer",
  padding: "0",
  "& .periodLabel": {
    width: "0px",
    height: "0px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: "200",
    boxShadow: `0px 0px 50px 15px ${theme.palette.primary.main}`,
    // "-webkit-box-shadow": `0px 0px 50px 15px ${theme.palette.primary.main}`,
    // "-moz-box-shadow": `0px 0px 50px 15px ${theme.palette.primary.main}`,
    WebkitBoxShadow: `0px 0px 50px 15px ${theme.palette.primary.main}`,
    MozBoxShadow: `0px 0px 50px 15px ${theme.palette.primary.main}`,
  },

  "& .periodLine": {
    width: "3px",
    height: 0,
    position: "absolute",
    // top: "5rem",
    left: "50%",
    // transform: "translateX(-50%)",
    zIndex: "0",
    // background: `linear-gradient(180deg, ${theme?.palette.primary.dark} 0%, ${theme?.palette.primary.main} 50%, ${theme?.palette.primary.light} 100%)`,
    background: `linear-gradient(180deg, ${theme?.palette.primary.dark} 0%, ${theme?.palette.primary.light} 100%)`,
    backgroundAttachment: "fixed",
    opacity: 0.5,
    overflow: "hidden",
    transition: "all 400ms linear",
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   left: "-.35rem",
    //   top: "-1rem",
    //   width: "1rem",
    //   height: "0",
    //   transition: "height 200ms linear",
    //   background: `linear-gradient(180deg, ${theme?.palette.primary.dark} 0%, ${theme?.palette.primary.main} 50%, ${theme?.palette.primary.light} 100%)`,
    //   clipPath:
    //     "polygon(50% 100%, 100% 75%, 100% 25%, 50.75% 0%, 50% 19.37%, 82.95% 33.68%, 82.95% 66.48%, 50% 81.23%, 17.05% 66.48%, 17.37% 33.68%, 50% 19.37%, 50.75% 0%, 0% 25%, 0% 75%)",
    // },
  },

  "&.inRange": {
    "& .periodLine": {
      overflow: "visible",
      // height: "calc(100% - 3.5rem)",
      height: "100%",
      // [theme.breakpoints.down("md")]: {
      //   height: "calc(100% + 3rem)",
      // },
      "&::before": {
        height: "1rem",
      },
    },
    "&:last-child .periodLine": {
      height: "calc(100% - 5rem)",
    },

    "&:not(:has(+ .inRange))": {
      "& .periodLine": {
        clipPath:
          "polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)",
      },
    },
  },
  "&.isMobile": {
    paddingLeft: "2rem",
    "&::before": {
      content: '""',
      position: "absolute",
      left: "0",
      top: "1.25rem",
      width: "1rem",
      height: "1rem",
      transition: "height 200ms linear",
      background: `linear-gradient(180deg, ${theme?.palette.primary.dark} 0%, ${theme?.palette.primary.main} 50%, ${theme?.palette.primary.light} 100%)`,
      clipPath:
        "polygon(50% 100%, 100% 75%, 100% 25%, 50.75% 0%, 50% 19.37%, 82.95% 33.68%, 82.95% 66.48%, 50% 81.23%, 17.05% 66.48%, 17.37% 33.68%, 50% 19.37%, 50.75% 0%, 0% 25%, 0% 75%)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      left: ".38rem",
      top: "2.25rem",
      width: "3px",
      height: "0",
      transition: "all 200ms linear",
      background: `linear-gradient(180deg, ${theme?.palette.primary.dark} 0%, ${theme?.palette.primary.light} 100%)`,
      backgroundAttachment: "fixed",
    },
    "&.inRange": {
      "&::after": {
        height: "100%",
      },
      "&:not(:has(+ .inRange))": {
        "&::after": {
          height: "calc(100% - 2.15rem)",
          clipPath:
            "polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)",
        },
      },
    },
  },
  "& .descriptionBoxWrapper": {
    position: "relative",
    outlineOffset: "-1px",
    overflow: "visible",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      margin: "-.5rem",

      borderRadius: "4px",
      backgroundColor: "rgba(30, 41, 59, 0.5)",
      border: "1px solid rgba(229, 231, 235,.08)",
      zIndex: -1,
      opacity: 0,
      transition: "opacity 200ms ease-in",
    },
  },
  "&:not(.isMobile) .descriptionBoxWrapper": {
    "&:hover": {
      "&::before": {
        opacity: 1,
      },
    },
  },
  "&:first-of-type, &:last-of-type": { marginTop: "0", marginBottom: "0" },
  "@keyframes animateDescription": {
    from: {
      opacity: 0,
      scale: 0.5,
    },
    to: {
      opacity: 1,
      scale: 1,
    },
  },
}));

const ExperienceSection = ({
  data = {},
  end = false,
  index,

  ...other
}) => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const slideContainerRef = useRef(null);
  const targetRef = useRef(undefined);
  const { bottom, rects, top, width, height, viewportWidth, viewportHeight } =
    usePageScroll(targetRef?.current);
  const { parseText } = useDataParse();
  const [inRange, setInRange] = useState(false);
  // href={`https://hello.com/${item?.company}`}
  const startYear = Number(data?.start?.replace(/\D/g, ""));
  const endYear = Number(data?.end?.replace(/\D/g, ""));
  // console.log(`[${data?.year}] rects:`, rects);

  const startMonth = data?.start
    ?.replace(/\d/g, "")
    ?.trim()
    .substring(0, 3)
    ?.toUpperCase();
  const endMonth = data?.end
    ?.replace(/\d/g, "")
    ?.trim()
    .substring(0, 3)
    ?.toUpperCase();

  const startPeriod =
    startYear === endYear ? startMonth : `${startMonth} ${startYear}`;
  const endPeriod = data?.isPresent ? "PRESENT" : `${endMonth} ${endYear}`;

  const headerText = (
    data?.role + (!!data?.company ? ` @ ${data?.company}` : "")
  )?.trim();

  const newLines = /\n/g;
  const hasNewLines = newLines.test(data?.jobDescription);
  const jobDescriptionData = !hasNewLines
    ? data?.jobDescription
    : parseText(data?.jobDescription);
  const jobDescriptionIsArray = jobDescriptionData?.constructor === Array;

  useEffect(() => {
    setInRange(top < 80);
  }, [top]);
  useEffect(() => {
    // if (data?.year !== "2022") return;
    const pointsTop = (viewportHeight * top) / 100;
    const pointsBottom = viewportHeight - (viewportHeight * bottom) / 100;
    console.log(`${data?.year}: `, {
      height,
      top,
      bottom,
      viewportWidth,
      viewportHeight,
      avgheight: (viewportHeight * top) / 100,
      pointsTop: pointsTop,
      pointsBottom: pointsBottom,
      avg: pointsBottom - pointsTop,
    });
  }, [top]);
  return (
    <>
      <SectionStyles
        {...other}
        // onClick={handleClick}
        my={smScreen ? "2rem" : "5rem"}
        className={`${!!inRange ? "inRange" : ""}${
          !!smScreen ? " isMobile" : ""
        }`}
        ref={targetRef}
        // pl={!!smScreen ? "2rem" : "0"}
      >
        <Grid
          container
          columnSpacing={0}
          rowSpacing={0}
          width={"100%"}
          height={"100%"}
        >
          <Grid item xs={12} sm={2} md={2} lg={2}>
            {!smScreen && (
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  // display: "flex",
                  // flexDirection: "column",
                  // justifyContent: "flex-start",
                  // alignItems: "center",
                  pt: "2rem",
                }}
              >
                <Typography variant="h6" component="h6" className="periodLabel">
                  {data?.year}
                </Typography>

                <div
                  className="periodLine"
                  style={{
                    top: smScreen ? "2rem" : "4.5rem",

                    ...(smScreen && { transform: "translate(-50% -50%)" }),
                  }}
                ></div>
              </Box>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            sm={10}
            md={10}
            lg={10}
            sx={{
              position: "relative",
            }}
          >
            <Box
              component={"div"}
              ref={slideContainerRef}
              className="descriptionBoxWrapper"
              sx={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                p: smScreen ? "1rem 0" : "1rem",

                overflow: "hidden",
              }}
            >
              {!!smScreen && (
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  pb={1}
                  columnGap={1}
                >
                  <Typography variant="h5" component="h5">
                    {data?.year}
                  </Typography>
                  <div
                    style={{
                      width: "3rem",
                      height: "1px",
                      background: theme.palette.divider,
                    }}
                  ></div>
                </Box>
              )}

              <Typography
                variant="h4"
                color="text.secondary"
                className="timelineDescriptionHeader"
                mb={1.5}
              >
                {headerText}
              </Typography>

              <Box sx={{ overflow: "hidden" }}>
                <Box
                  sx={{
                    overflow: "hidden",
                    mb: 1.5,
                  }}
                >
                  <Slide direction="down" in={inRange}>
                    <Typography
                      component={"p"}
                      variant={"p"}
                      color="text.primary"
                      className="timelineDescriptionDetails"
                    >
                      {data?.jobDescription}
                    </Typography>
                  </Slide>
                </Box>
                <Box className="techStack">
                  <Divider sx={{ my: 1 }} />
                  {data?.technologies?.map((tech, index2) => (
                    <Fade
                      in={inRange}
                      style={{
                        transitionDelay: inRange
                          ? `${30 * index2 + 1}ms`
                          : "0ms",
                      }}
                      key={index2}
                    >
                      <Chip
                        label={tech}
                        sx={{
                          margin: "3px",
                          background: "rgba(45, 212, 191, 0.1)",
                          color: "rgb(94, 234, 212)",
                        }}
                      />
                    </Fade>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </SectionStyles>
    </>
  );
};

export default ExperienceSection;
