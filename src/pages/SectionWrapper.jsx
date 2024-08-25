import React from "react";
import { Box, Divider, Typography, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SectionWrapperStyles = styled(Box)(({ theme }) => ({
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  boxSizing: "border-box",
}));

const SectionWrapper = ({ id, rowGap = 0, children, ...other }) => {
  const theme = useTheme();
  const fullWidth = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <SectionWrapperStyles
      component={"section"}
      id={id}
      // pt={"1rem"}
      // pb={"1rem"}
      // sx={{ outline: "3px solid red", outlineOffset: "-3px" }}
      {...other}
    >
      {fullWidth && (
        <Box
          component={"div"}
          // pb={6}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          columnGap={1}
          pt={8}
          pb={4}
          sx={{
            position: "relative",
          }}
        >
          <Typography
            variant={"h2"}
            component={"h2"}
            className="sectionTitle"
            // sx={{
            //   // padding: "1rem 0",
            //   // margin: "1rem 0",
            //   // textTransform: "uppercase",
            //   // fontWeight: 600,
            //   // color: theme.palette.primary.contrastText,
            //   // backgroundClip: "text",
            //   // backgroundImage: theme.gradients.primary,
            //   // color: "transparent",
            //   // color: "red",
            //   // textShadow: "yellow 0 0 1px",
            //   // "-webkit-box-reflect":
            //   //   "below -2px linear-gradient(transparent, rgba(255,255,255,.4))",
            // }}
            sx={{
              textTransform: "uppercase",
              fontWeight: 600,
              color: theme.palette.primary.contrastText,
              // outline: "3px solid red",
              // outlineOffset: "-3px",
              position: "relative",

              "&::after": {
                content: '""',
                display: "inline-block",
                width: ".65rem",
                height: ".65rem",
                background: theme.palette.primary.main,
                marginLeft: "0.25rem",
                borderRadius: ".25rem",
                // position: "absolute",
                // right: "0",
                // bottom: "-.5rem",
              },
            }}
          >
            {id}
          </Typography>
          <div
            style={{
              flexGrow: 1,
              height: "2px",
              width: "100%",
              marginTop: ".5rem",
              background: theme.palette.divider,
            }}
          ></div>
        </Box>
      )}
      <Box
        // py={"1rem"}
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
