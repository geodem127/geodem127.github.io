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
  Slide,
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

const ANIMATION_TIMER = 3500;

const HeaderStyles = styled(Box)(({ theme }) => ({
  //   border: "solid 1px blue",
  "& .nameContainer > .MuiTypography-h1": {
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textTransform: "uppercase",

    backgroundClip: "text",
    background: `linear-gradient(135deg, ${theme.palette.primary.main}  0%, ${theme.palette.primary.dark} 25%, ${theme.palette.primary.light} 50%,${theme.palette.primary.dark} 75%,  ${theme.palette.primary.main} 100%)`,
    color: "transparent",
    backgroundSize: "400%",
    padding: 0,
    margin: 0,
    animation: "text-gradient-animation linear 20s infinite 1s",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },

  "& .roleTextContainer": {
    position: "relative",
    // outline: "1px dashed red",
    // outlineOffset: "-1px",
    "& .roleTextWrapper": {
      //   outline: "1px solid yellow",
      //   outlineOffset: "-1px",
    },
    "& .roleText": {
      //   outline: "1px dashed green",
      //   outlineOffset: "-3px",
      width: "0%",
      //   transition: "all 500ms steps(10) forwards",
      //   transitionBehavior: "normal",
      //   transitionProperty: "width",
      //   transitionDuration: "2000ms",
      //   transitionTimingFunction: "steps(10)",
      // transition-delay: 0s;

      overflow: "hidden",
      whiteSpace: "nowrap",
      //   height: "2.4rem",
      "&::after": {
        content: "''",
        position: "absolute",
        top: 0,
        right: "1px",
        bottom: 0,
        width: "1px",
        background: theme.palette.primary.light,
        opacity: 0.1,
      },
    },
  },

  "&.ready": {
    "& .roleTextContainer": {
      //   height: "2.4rem",
      overflow: "hidden",
      //   border: "solid 1px green",
      "& .roleTextWrapper": {
        animationName: "text-slide-animation",
        animationIterationCount: "infinite",
        // animationDirection: "alternate",

        "& .roleText": {
          // animation: "text-animation 2s steps(10) both infinite",
          // animationName: "text-animation",
          // animationDuration: "1500ms",
          // animationTimingFunction: "steps(10)",
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          position: "relative",
          //   paddingRight: ".5rem",
          // animationTimeout: "500ms",
          "&::after": {
            // content: "''",
            // position: "absolute",
            // top: 0,
            // right: 0,
            // bottom: 0,
            // width: "1px",
            // background: "red",
            animationName: "cursor-blink-animation",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            animationDuration: `600ms`,
          },
        },
      },
    },
  },

  "@keyframes text-gradient-animation": {
    "100%": {
      backgroundPosition: "400%",
    },
  },
  "@keyframes text-animation": {
    "0%": {
      width: "0%",
    },
    "60%": {
      width: "101.1%",
    },
    "100%": {
      width: "101.1%",
    },
  },
  "@keyframes text-slide-animation": {
    "100%": {
      transform: "translateY(-100%)",
    },
  },
  "@keyframes cursor-blink-animation": {
    "100%": {
      opacity: 1,
    },
  },
}));

const Header = ({ width, data, screenSize, sx = {}, ...other }) => {
  const { setThemeMode } = useAppThemeContext();
  const theme = useTheme();
  const [mode, setMode] = React.useState("dark");
  const [ready, setReady] = React.useState(false);

  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const { personalInformation, navigation } = data;

  const handleModeChage = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  React.useEffect(() => {
    setThemeMode(mode);
    setReady(true);
  }, [mode, setThemeMode]);
  React.useEffect(() => {
    setReady(true);
  }, []);
  return (
    <HeaderStyles
      component={"header"}
      //   py={Y_PADDING[screenSize]}
      className={!!ready ? "ready" : ""}
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
      <Box
        flexGrow={0}
        sx={{
          width: "100%",
        }}
      >
        <Slide direction="down" in timeout={500}>
          <Box
            className="nameContainer"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant={"h1"}
              component={"h1"}
              color={"text.secondary"}
            >
              {personalInformation?.firstName}
            </Typography>
            <Typography
              variant={"h1"}
              component={"h1"}
              color={"text.secondary"}
            >
              {personalInformation?.lastName}
            </Typography>
          </Box>
        </Slide>
        <Divider light sx={{ border: "none" }} />
        <Box
          className="roleTextContainer"
          sx={{
            // outline: "1px solid purple",
            // outlineOffset: "-1px",
            height: !!smallScreen ? "2.1rem" : "2.65rem",
            // width: "max-content",
            mt: 1,
          }}
        >
          <Box
            className="roleTextWrapper"
            sx={{
              width: "fit-content",
              animationDuration: `${
                ANIMATION_TIMER * personalInformation?.skills?.length * 2
              }ms`,
              animationTimingFunction: `steps(${personalInformation?.skills?.length})`,
              animationName: "text-slide-animation",
              animationDeley: `${ANIMATION_TIMER}ms`,
              //   animationDuration: `${1500}ms`,
              //   animationTimingFunction: `steps(${skill?.length})`,
              //   marginTop: "-2rem",
            }}
          >
            {personalInformation?.skills?.map((skill, index, arr) => (
              <Box
                py={0.25}
                sx={{
                  width: "max-content",
                }}
              >
                <Typography
                  className="roleText"
                  variant={"h3"}
                  // component={"h3"}
                  color={"text.secondary"}
                  //   py={0.5}
                  sx={{
                    //   transitionTimingFunction: `steps(${personalInformation?.role?.length})`,
                    animationName: "text-animation",
                    animationDuration: `${ANIMATION_TIMER}ms`,
                    animationTimingFunction: `steps(${skill?.length})`,
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
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
    </HeaderStyles>
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
