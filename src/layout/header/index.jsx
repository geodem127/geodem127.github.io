import * as React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider, Slide } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAppThemeContext } from "../../themes";
import Navigation from "./Navigation";
import { CustomIcons } from "../../assets/CustomIcons";

const Y_PADDING = {
  sm: "0",
  md: "0",
  lg: "5rem",
};

const ANIMATION_TIMER = 3500;

const HeaderStyles = styled(Box)(({ theme }) => ({
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
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  "& .roleTextContainer": {
    position: "relative",

    "& .roleTextWrapper": {},
    "& .roleText": {
      width: "0%",

      overflow: "hidden",
      whiteSpace: "nowrap",

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
      overflow: "hidden",

      "& .roleTextWrapper": {
        animationName: "text-slide-animation",
        animationIterationCount: "infinite",

        "& .roleText": {
          animationIterationCount: "infinite",
          animationDirection: "alternate",
          position: "relative",

          "&::after": {
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
            height: !!smallScreen ? "2.1rem" : "2.65rem",

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
            }}
          >
            {personalInformation?.skills?.map((skill, index, arr) => (
              <Box
                key={index}
                py={0.25}
                sx={{
                  width: "max-content",
                }}
              >
                <Typography
                  className="roleText"
                  variant={"h3"}
                  color={"text.secondary"}
                  sx={{
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
        {personalInformation?.socialLinks?.map((link, index) => {
          return (
            <Box
              key={index}
              component={"a"}
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
