import React from "react";
import { Box, ButtonBase, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const NavigationButton = styled(ButtonBase)(({ theme }) => {
  return {
    color: theme.palette.text.primary,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    "& .navLine": {
      height: "1.5px",
      width: "2.5rem",
      marginRight: "10px",
      background: theme.palette.text.primary,
      transition: "all 200ms ease-in",
    },

    "&:hover": {
      "& .navLine": {
        background: theme.palette.action.hover,
        // width: "3rem",
      },
      "& .navLabel": {
        color: theme.palette.action.hover,
      },
    },

    "&:active, &.active": {
      "& .navLine": {
        background: theme.palette.primary.main,
        width: "5rem",
      },
      "& .navLabel": {
        color: theme.palette.primary.main,
      },
    },
  };
});

const Navigation = ({ data }) => {
  return (
    <Box
      component={"ul"}
      // sx={{ textIndent: 0, margin: 0, padding: 0 }}
      m={0}
      px={0}
      py={4}
      gap={3}
    >
      {data?.map((item) => (
        <Box key={item?.id} component={"li"} sx={{ listStyle: "none" }} py={2}>
          <NavigationButton
            component={NavLink}
            to={item?.path}
            disableTouchRipple
            disableRipple
          >
            <span className="navLine"></span>
            <Typography
              className="navLabel"
              variant={"h6"}
              component={"h6"}
              sx={{ textTransform: "uppercase", fontWeight: 600 }}
            >
              {item?.title}
            </Typography>
          </NavigationButton>
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
