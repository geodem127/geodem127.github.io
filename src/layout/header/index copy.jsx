import * as React from "react";
import PropTypes from "prop-types";
import {
  Box,
  ButtonBase,
  Button,
  Toolbar,
  Typography,
  Switch,
  Divider,
  IconButton,
  Link,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppThemeContext } from "../../themes";
import Navigation from "./Navigation";
import ButtonIcon, { CustomIcons, GithubIcon } from "../../assets/CustomIcons";
import TextFlip from "../../common/textAnimation";
import NameAnimation from "./NameAnimation";
import MyLogo from "../../common/MyLogo";

const Y_PADDING = {
  sm: "0",
  md: "0",
  lg: "5rem",
};

const NavigationButton = styled(ButtonBase)(({ theme }) => {
  console.log("THEME::", theme);
  return {
    color: theme.palette.text.primary,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    "& .navLine": {
      height: "1.5px",
      width: "2rem",
      marginRight: "10px",
      background: theme.palette.text.primary,
      transition: "all 200ms linear",
    },

    "&:hover": {
      "& .navLine": {
        background: theme.palette.action.hover,
        width: "3rem",
      },
      "& .navLabel": {
        color: theme.palette.action.hover,
      },
    },

    "&:active": {
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

const HeaderWrapperStyles = styled(Box)(({ theme }) => {
  return { outline: "1px solid red", outlineOffset: "-1px" };
});

const Header = ({ width, data, screenSize, sx = {}, ...other }) => {
  const { setThemeMode } = useAppThemeContext();
  const theme = useTheme();
  const [mode, setMode] = React.useState("dark");
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const { personalInformation, navigation } = data;

  const handleModeChage = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  React.useEffect(() => {
    setThemeMode(mode);
  }, [mode, setThemeMode]);

  return (
    <Box
      component={"header"}
      //   py={Y_PADDING[screenSize]}
      display={"flex"}
      flexDirection={"column"}
      alignContent={"stretch"}
      justifyContent={"flex-start"}
      sx={{
        width: width,
        flexShrink: 0,
        position: !["sm", "md"].includes(screenSize) ? "sticky" : "relative",
        height: !["sm", "md"].includes(screenSize) ? "100vh" : "auto",
        top: 0,
        // border: "1px solid blue",
        ...sx,
      }}
      {...other}
    >
      <Box flexGrow={0} sx={{ width: "100%" }}>
        <Box
          component={"div"}
          // flexDirection={{ sm: "row", md: "column" }}
          sx={{
            overflowWrap: "anywhere",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            overflow: "hidden",

            fontSize: "3rem",
            display: "flex",
            flexDirection: "column",
            columnGap: ".25em",
            justifyContent: "flex-start",
            alignItems: "flex-start",

            animationDuration: "40000ms",
            "@keyframes text-animation": {
              "100%": {
                backgroundPosition: "400%",
              },
            },
          }}
        >
          <NameAnimation
            text={personalInformation?.firstName}
            variant="h1"
            animationDuration="20s"
            transitionTimeout="500ms"
            transitionDelay="200ms"
          />

          <NameAnimation
            text={personalInformation?.lastName}
            variant="h1"
            animationDuration="20s"
            transitionTimeout="500ms"
            transitionDelay="700ms"
          />
        </Box>
        <Typography
          variant={"h3"}
          component={"h3"}
          color={"text.secondary"}
          mt={1}
        >
          {personalInformation?.role}
        </Typography>
      </Box>
      {!["sm", "md"].includes(screenSize) && (
        <Box flexGrow={1} py={5} sx={{ width: "100%" }}>
          <Navigation data={navigation} />
        </Box>
      )}
      <Box
        flexGrow={0}
        component={"div"}
        pt={6}
        gap={2}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        {/* <MyLogo
          sx={{
            margin: ".25rem",
            width: "30px",
            height: "30px",
         
          }}
        /> */}
        {personalInformation?.socialLinks?.map((link) => {
          console.log("link?.path:::", link?.path);
          return (
            <Box
              component={"a"}
              // sx={{ color: theme.palette.text.secondary }}
              href={link?.path}
              target="_blank"
              title={link?.label}
              sx={{
                width: "30px",
                height: "30px",
                color: theme.palette.text.primary,
              }}
            >
              {CustomIcons?.[link?.icon]}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  width: PropTypes.string,
  daata: PropTypes.object,
  screenSize: PropTypes.string,
  window: PropTypes.func,
};
export default Header;
