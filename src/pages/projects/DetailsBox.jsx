import React from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
// import LaunchIcon from "@mui/icons-material/Launch";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  SourceCodeIcon,
  LaunchNewWindowIcon,
} from "../../common/CustomSvgIcons";
import LaunchIcon from "@mui/icons-material/Launch";
import ProjectTechStack from "./ProjectTechStack";
import Animation from "../../common/animation";

const TitleDivider = styled("div")(({ theme }) => ({
  height: "1px",
  flexGrow: 1,
  //   backgroundColor: theme.palette.divider,
  backgroundColor: theme.palette.primary.main,
}));
export const LinkContainer = styled(Box)(({ theme }) => ({
  // height: "1px",
  flexGrow: 0,
  // outline: "1px dashed yellow",
  // outlineOffset: "-3px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  position: "relative",
  "&::before": {
    content: "''",
    width: "40%",
    height: "2px",
    background: theme.palette.divider,
    marginRight: "1rem",
  },
}));

export const LinkButtonStyles = styled(Button)(({ theme }) => ({
  padding: ".35rem",
  minWidth: 0,
  color: theme.palette.text.primary,
}));

const DetailsBox = ({ proj, openModal }) => {
  // const theme = useTheme();
  // const targetRef = useRef(undefined);
  // const [inRange, setInRange] = useState(false);
  // const { top } = usePageScroll(targetRef?.current);
  const parsedDescrtion =
    proj?.description?.length > 200
      ? `${proj?.description?.substring(0, 200)}... `
      : proj?.description;

  // useEffect(() => {
  //   setInRange(top < 85);
  // }, [top]);

  return (
    <Box
    // className={inRange ? "animation-slideup" : ""}
    // sx={{ border: "1px solid red" }}
    // ref={targetRef}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        columnGap={2}
        mt={2}
        sx={{
          width: "100%",
        }}
      >
        <Typography variant="h5" color="text.secondary">
          {proj?.name}
        </Typography>
        <TitleDivider />
      </Box>
      <Animation start={90} animation="slideUp">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="stretch"
          py={2}
          sx={{
            width: "100%",
          }}
        >
          <ProjectTechStack techStack={proj?.technologies} />
          <Typography
            variant="p"
            component="p"
            mt={2}
            sx={{
              overflow: "hidden",

              textAlign: "justify",
            }}
          >
            {/* {proj?.description} */}
            {parsedDescrtion}

            <IconButton
              aria-label="Read more"
              size="small"
              onClick={openModal}
              sx={{
                fontSize: ".85rem",
                background: "transparent",
                borderRadius: "6px",
              }}
            >
              <LaunchIcon fontSize="inherit" sx={{ mr: "4px" }} />
              Read more
            </IconButton>

            {/* <Button component="a" href="/" style={{ marginLeft: "1rem" }}>
              Read more
            </Button> */}
          </Typography>
          {/* <Divider /> */}
        </Box>
      </Animation>

      <LinkContainer pt={3} pb={1}>
        <Tooltip title="Source Code" placement="top" arrow>
          <LinkButtonStyles
            component={"a"}
            href={proj?.sourceLink?.url}
            target="_blank"
          >
            {/* <SettingsEthernetIcon fontSize="medium" /> */}
            <SourceCodeIcon color="text.primary" fontSize="medium" />
          </LinkButtonStyles>
        </Tooltip>
        <Tooltip title="Launch Demo" placement="top" arrow>
          <LinkButtonStyles
            component={"a"}
            target="_blank"
            href={proj?.demoLink?.url}
          >
            <LaunchNewWindowIcon color="text.primary" fontSize="medium" />
          </LinkButtonStyles>
        </Tooltip>
      </LinkContainer>
    </Box>
  );
};

export default DetailsBox;
