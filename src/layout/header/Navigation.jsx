import React from "react";
import { Box, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const NavButtonLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  textDecoration: "none!important",
  maxWidth: "fit-content",
  transition: "all 500ms linear 250ms",

  "&::before , & .navLabel": {
    background: alpha(theme.palette.text.primary, 0.6),
    transition: "all 250ms linear 250ms",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "50% 100%",
  },
  "&::before": {
    content: '""',
    height: "1px",
    width: "3rem",
    marginRight: "10px",
  },

  "& .navLabel": {
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  },

  "&:hover": {
    "&::before": {
      width: "4rem",
      background: theme.palette.text.primary,
    },
    "& .navLabel": {
      color: theme.palette.text.primary,
      WebkitTextFillColor: theme.palette.text.primary,
    },
  },

  "&.active": {
    "&::before, & .navLabel": {
      backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.light} 0%,  ${theme.palette.primary.dark} 50% ) `,
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundSize: "50% 100%",
    },
    "&::before": {
      width: "6rem",
    },
    "& .navLabel": {
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
  },
}));

const Navigation = ({ data }) => {
  return (
    <Box component={"ul"} m={0} px={0} py={4} gap={3}>
      {data?.map((item) => (
        <Box key={item?.id} component={"li"} sx={{ listStyle: "none" }} py={2}>
          <NavButtonLink to={item?.path} end>
            <span className="navLine"></span>
            <Typography
              className="navLabel"
              variant={"body1"}
              component={"body1"}
              sx={{ textTransform: "uppercase", fontWeight: 600 }}
            >
              {item?.title}
            </Typography>
          </NavButtonLink>
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
