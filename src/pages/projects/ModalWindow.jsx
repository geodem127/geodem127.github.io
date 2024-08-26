import { useState, useEffect, Fragment } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import CloseIcon from "@mui/icons-material/Close";
import {
  alpha,
  Divider,
  IconButton,
  Paper,
  Skeleton,
  styled,
  SwipeableDrawer,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import PreviewBox from "./PreviewBox";
import DetailsBox, { LinkButtonStyles, LinkContainer } from "./DetailsBox";
import ProjectTechStack from "./ProjectTechStack";
import {
  SourceCodeIcon,
  LaunchNewWindowIcon,
} from "../../common/CustomSvgIcons";
import zIndex from "@mui/material/styles/zIndex";

const drawerBleeding = 56;

const DialogStyles = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    margin: 0,
    maxHeight: "90vh",
    overflow: "hidden",
    position: "relative",
    background:
      "linear-gradient(52deg, rgba(19,19,19,1) 0%, rgba(38,38,38,1) 68%, rgba(63,64,63,1) 100%)",
  },
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.grey[600],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));
const SwipeableDrawerStyles = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    position: "absolute",
    // top: drawerBleeding,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    visibility: "visible",
    right: 0,
    left: 0,
    bottom: "-1rem",
    paddingBottom: "1rem",
    paddingTop: "30px",
    maxHeight: "calc(100vh - 1rem)",
    // backgroundColor: "background.paper",
    background:
      "linear-gradient(52deg, rgba(19,19,19,1) 0%, rgba(38,38,38,1) 68%, rgba(63,64,63,1) 100%)",
  },
}));

const DialogContentStyles = styled(DialogContent)(({ theme }) => ({
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-track": {
    /* background: #020812; */
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "1rem",
    backgroundColor: "#ffffff1a",
    backgroundImage: "linear-gradient(to top, #94a3b8dd 0%, #ffffff1a 100%)",
  },
}));

const MobileModal = ({
  open,
  onclose,
  window,
  header = "",
  sourceLink = "",
  demoLink = "",
  children,
}) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <SwipeableDrawerStyles
      container={container}
      anchor="bottom"
      open={open}
      onClose={onclose}
      // onOpen={toggleDrawer(true)}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      keepMounted={false}
      //   ModalProps={{
      //     keepMounted: false,
      //   }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: "visible",
          right: 0,
          left: 0,
          height: "30px",
        }}
      >
        <Puller />
      </Box>
      <Box
        sx={{
          position: "relative",
          //   paddingTop: "30px",
          paddingBottom: "5rem",
          //   height: "100%",

          overflow: "hidden",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            px: 2,
            pb: 2,
            // height: "50%",

            overflowY: "auto",
          }}
        >
          {children}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "1rem",
            height: "3rem",
            position: "absolute",
            bottom: "1rem",
            left: "1rem",
            right: "1rem",
          }}
        >
          <Button
            variant="contained"
            color="inherit"
            component={"a"}
            href={sourceLink}
            target="_blank"
            sx={{ width: "48%" }}
          >
            View Source Code
          </Button>

          <Button
            variant="contained"
            component={"a"}
            target="_blank"
            href={demoLink}
            sx={{ width: "48%" }}
          >
            Open Demo
          </Button>
        </Box>
      </Box>
    </SwipeableDrawerStyles>
  );
};

const DesktopModal = ({
  open,
  onclose,
  header = "",
  sourceLink = "",
  demoLink = "",
  children,
}) => {
  return (
    <DialogStyles fullWidth={true} open={open} keepMounted={true}>
      <DialogTitle
        sx={{
          //   height: "2.5rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="div" color="text.secondary">
          {header}
        </Typography>
        <IconButton
          color="error"
          size="medium"
          onClick={onclose}
          sx={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
            zIndex: 100,
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </DialogTitle>

      <DialogContentStyles dividers="paper">{children}</DialogContentStyles>
      <DialogActions sx={{ p: 2 }}>
        <Button
          variant="contained"
          color="inherit"
          component={"a"}
          href={sourceLink}
          target="_blank"
        >
          View Source Code
        </Button>

        <Button
          variant="contained"
          color="primary"
          component={"a"}
          target="_blank"
          href={demoLink}
        >
          Open Demo
        </Button>
      </DialogActions>
    </DialogStyles>
  );
};

const ModalWindow = ({ open = false, data = null, onClose }) => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [modalContents, setModalContents] = useState(null);

  const handleClose = () => {
    onClose(false);
  };

  useEffect(() => {
    if (!data) return;
    const contents = (
      <Box>
        <Box my={2}>
          <PreviewBox
            data={data?.previews}
            url={data?.demoLink?.url}
            in={true}
          />
        </Box>
        <Box my={2}>
          <Typography mb={1} variant="h6" component="h6" color="text.secondary">
            Description:
          </Typography>

          <Typography
            variant="p"
            component="p"
            sx={{
              overflow: "hidden",
              textAlign: "justify",
            }}
          >
            {data?.description}
          </Typography>
        </Box>
        <Box pb={4}>
          <Typography mb={1} variant="h6" component="h6" color="text.secondary">
            Technologies:
          </Typography>

          <ProjectTechStack techStack={data?.technologies} />
        </Box>
      </Box>
    );
    setModalContents(contents);
    return () => {
      setModalContents(null);
    };
  }, [data]);

  return (
    <Fragment>
      {/* <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <Box>dasdassad</Box>
        </DialogContent>
      </Dialog> */}
      {smScreen ? (
        <MobileModal
          open={open}
          onclose={handleClose}
          header={data?.name}
          sourceLink={data?.sourceLink?.url}
          demoLink={data?.demoLink?.url}
        >
          {modalContents}
        </MobileModal>
      ) : (
        <DesktopModal
          open={open}
          onclose={handleClose}
          header={data?.name}
          sourceLink={data?.sourceLink?.url}
          demoLink={data?.demoLink?.url}
        >
          {modalContents}
        </DesktopModal>
      )}
    </Fragment>
  );
};

export default ModalWindow;
