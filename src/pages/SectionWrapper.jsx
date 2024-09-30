import React, { useRef } from "react";
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
  position: "sticky",
  "& .sectionHeader": {
    zIndex: 999999999,
    overflow: "hidden",
    position: "sticky",
    top: "0px",

    width: "100%",

    "&.topMost": {
      zIndex: 1000,
      // background: alpha(theme.palette.background.default, 0.1),
      backdropFilter: "blur(15px)",

      backgroundColor: "rgba(16, 14, 14, .35)",
      border: "1px #000",
      borderBottom: ".3px solid rgba(255, 255, 255, .2)",
    },
  },
}));

const SectionWrapper = ({ id, rowGap = 0, children, ...other }) => {
  const theme = useTheme();
  const fullWidth = useMediaQuery(theme.breakpoints.down("md"));
  const targetRef = useRef(undefined);

  const { top } = usePageScroll(targetRef?.current);

  return (
    <SectionWrapperStyles
      component={"section"}
      id={id}
      py={fullWidth ? 10 : 0}
      {...other}
    >
      {fullWidth && (
        <Box
          ref={targetRef}
          className={`sectionHeader${top < 1 ? " topMost" : ""}`}
          component="div"
          display="block"
          // mt={5}
          mb={6}
          py={1.5}
          px={fullWidth ? "1.15rem" : 0}
          // sx={{
          //   ...(inRange
          //     ? {
          //         background: alpha(theme.palette.background.default, 0.1),
          //         backdropFilter: "blur(15px)",
          //       }
          //     : {}),
          //   position: "relative",
          //   "&::after": {
          //     content: '""',
          //     position: "absolute",
          //     left: "0",
          //     bottom: "0",
          //     // width: "100%",
          //     height: "2px",
          //     borderRadius: "2px",
          //     background: theme.palette.primary.main,
          //     width: `${0 + (100 - top)}%`,
          //   },
          // }}
        >
          <Typography
            variant={"h2"}
            component={"h2"}
            className="sectionTitle"
            sx={{
              // border: "1px solid green",
              textTransform: "uppercase",

              color: theme.palette.primary.contrastText,

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
