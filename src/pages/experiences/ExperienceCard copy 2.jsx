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
} from "@mui/material";

import useDataParse from "../../hooks/useDataParse";

import usePageScroll from "../../hooks/usePageScroll";

const CardStyles = styled(Card)(({ theme }) => ({
  background: "transparent",
  border: 0,
  boxShadow: "none",
  overflow: "visible",
  position: "relative",
  cursor: "pointer",
  padding: "1rem",
  marginBottom: "1rem",
  "& .timelineLabel": {
    border: "1px solid red",
    padding: "3px 5px",
    width: "95%",
    clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
    background: "red",
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
      margin: "-1rem",

      borderRadius: "4px",
      backgroundColor: "rgba(30, 41, 59, 0.5)",
      border: "1px solid rgba(229, 231, 235,.08)",
      zIndex: -1,
      opacity: 0,
      transition: "opacity 200ms ease-in",
    },
    "&:hover": {
      "&::before": {
        opacity: 1,
      },
    },
  },
  "& .descriptionBox": {
    outline: "1px solid red",
    outlineOffset: "-1px",
    overflow: "hidden",
  },
  // "&::before": {
  //   content: '""',
  //   position: "absolute",
  //   left: 0,
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   margin: 0,
  //   borderRadius: "4px",
  //   backgroundColor: "rgba(30, 41, 59, 0.5)",
  //   border: "1px solid rgba(229, 231, 235,.08)",
  //   zIndex: -1,
  //   opacity: 0,
  //   transition: "opacity 200ms ease-in",
  // },
  // "&:hover": {
  //   "&::before": {
  //     opacity: 1,
  //   },
  // },

  "&::after": {
    content: '"⬡"',
    height: "calc(100% - 4rem)",
    width: "3px",
    position: "absolute",
    bottom: "-.75rem",
    left: "2.5rem",
    background: `linear-gradient(transparent 0%, ${theme.palette.primary.main} .55rem, ${theme.palette.secondary.main} 100%)`,
    backgroundAttachment: "fixed",
    opacity: 0.3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    aligndatas: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: 0,
    color: theme.palette.primary.main,
    transformOrigin: "top center",
    transform: "scaleY(0)",
    transition: "all 500ms ease-in-out",
    [theme.breakpoints.down("md")]: {
      left: "-.25rem",
      height: "calc(100% - 1.75rem)",
    },
  },

  "&.inRange": {
    "& .verticalTimeLineLabel": {
      position: "relative",
      fontWeight: "600!important",
    },

    "& .descriptionBoxWrapper": {
      "& .timelineDescriptionHeader": {
        transform: "translateY(0%)",
      },
      "& .timelineDescriptionDetails": {
        transform: "translateX(0%)",
        opacity: 1,
      },
    },
    "&::after": {
      transform: "scaleY(1)",
    },

    "&:not(:has(+ .inRange))": {
      "&::after": {
        content: '"⬡"',
        clipPath:
          "polygon(400% -3rem, 100% 80%, 50% 100%, 0% 80%, -400% -3rem)",
      },
    },
  },
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

const ExperienceCard = ({
  data = {},
  end = false,
  index,

  ...other
}) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const slideContainerRef = useRef(null);
  const targetRef = useRef(undefined);
  const { bottom, rects } = usePageScroll(targetRef?.current);
  const { parseText } = useDataParse();
  const [inRange, setInRange] = useState(false);
  // href={`https://hello.com/${item?.company}`}
  const startYear = Number(data?.start?.replace(/\D/g, ""));
  const endYear = Number(data?.end?.replace(/\D/g, ""));
  console.log(`[${data?.year}] rects:`, rects);

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
    setInRange(bottom > -7);
  }, [bottom]);

  return (
    <>
      <CardStyles
        {...other}
        // onClick={handleClick}
        my={2}
        // className={!!inRange ? "inRange" : ""}
        ref={targetRef}
      >
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            lg={2}
            // mb={"1rem"}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              outline: "1px solid yellow",
              outlineOffset: "-1px",
            }}
          >
            {/* <Typography
              variant="h6"
              color="text.primary"
              className="verticalTimeLineLabel"
            >
              {data?.year}
            </Typography> */}
            {/* <Chip label={data?.year} size="small" variant="outlined" /> */}
            <div className="timelineLabel">{data?.year}</div>
          </Grid>
          <Grid item xs={12} sm={9} md={9} lg={10}>
            <Box
              component={"div"}
              ref={slideContainerRef}
              className="descriptionBoxWrapper"
              sx={{
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h3"
                color="text.secondary"
                mb={1.5}
                className="timelineDescriptionHeader"
              >
                {headerText}
              </Typography>

              <Box className="descriptionBox">
                <Slide
                  in={inRange}
                  timeout={500}
                  container={slideContainerRef.current}
                >
                  <Box className="techStack">
                    <Typography
                      component={"p"}
                      variant={"p"}
                      color="text.primary"
                      className="timelineDescriptionDetails"
                    >
                      {data?.jobDescription}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    {data?.technologies?.map((tech, index2) => (
                      <Chip
                        label={tech}
                        sx={{
                          margin: "3px",
                          background: "rgba(45, 212, 191, 0.1)",
                          color: "rgb(94, 234, 212)",
                        }}
                      />
                    ))}
                  </Box>
                </Slide>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardStyles>
    </>
  );
};

export default ExperienceCard;
