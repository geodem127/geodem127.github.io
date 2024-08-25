import * as React from "react";
import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";
import My_Logo from "../assets/gd_logo.svg";
const LinkStyles = styled(Link)({
  textDecoration: "none",
  // "&::after": {
  //   content: "''",
  //   width: "100%",
  //   height: "100%",
  //   position: "absolute",
  //   top: 0,
  //   left: 0,
  //   // opacity: 0,
  //   background:
  //     "linear-gradient(15deg, rgba(2,67,88,0) 0%, rgba(224,241,242,1) 10%, rgba(2,67,88,0) 20%)",
  //   transition: "all 0.5s ease-in-out",
  // },
  // "&:hover": {
  //   "&::after": {
  //     // opacity: 1,
  //     background:
  //       "linear-gradient(15deg, rgba(2,67,88,0) 80%, rgba(224,241,242,1) 90%, rgba(2,67,88,0) 100%)",
  //   },
  // },
});

const MyLogo = ({ sx = {}, ...other }) => (
  <Box
    sx={{
      flexGrow: 0,

      zIndex: 1000,
      // border: "1px solid red",
      ...sx,
    }}
    {...other}
  >
    <LinkStyles to="/">
      {/* <GDLogo color={theme.palette.text.primary} /> */}
      <img src={My_Logo} alt="" />
    </LinkStyles>
  </Box>
);

export default MyLogo;
