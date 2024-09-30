import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import {
  Container,
  Slide,
  useMediaQuery,
  useTheme,
  IconButton,
  Typography,
  SwipeableDrawer,
  Modal,
  Dialog,
  Button,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PreviewSlider from "./PreviewSlider";
// import { SmartScreen } from "@mui/icons-material";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const drawerProps = {
  // TransitionComponent: Transition,
  // component: SwipeableDrawer,
  PaperProps: {
    sx: {
      border: "1px solid green",
      height: "100%",
    },
  },
};
const dialogProps = {
  fullWidth: true,
  maxWidth: "xl",
  fullScreen: true,
  // TransitionComponent: Transition,
  // component: Dialog,
  PaperProps: {
    sx: {
      border: "1px solid green",
      height: "100%",
    },
  },
};
export default function DetailsModal({ open = false, data = null, onClose }) {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <Modal
        // fullWidth={true}
        // maxWidth={smScreen ? false : "xl"}
        // fullScreen={smScreen}
        // open={open}
        // keepMounted
        // TransitionComponent={Transition}
        // PaperProps={{
        //   sx: {
        //     border: "1px solid green",
        //     height: "100%",
        //   },
        // }}
        // sx={{ height: "100vh" }}
        open={open}
        // keepMounted
      >
        {/* <DialogTitle>Optional sizes</DialogTitle> */}
        <Box
          sx={{
            //   height: "2.5rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" component="div" color="text.secondary">
            Title
          </Typography>
          <IconButton
            color="error"
            size="medium"
            onClick={onClose}
            sx={{
              position: "absolute",
              top: ".5rem",
              right: ".5rem",
              zIndex: 100,
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Box>
        <Box
          sx={{
            border: "1px solid red",
            display: "flex",
            flexDirection: mdScreen ? "column" : "row",
          }}
        >
          {/* <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText> */}
          {/* <Container disableGutters maxWidth={false}>
            dasdsad
          </Container> */}

          <Box
            sx={{
              border: "1px solid red",
              width: "60%",
            }}
          >
            {/* <PreviewSlider /> */}
          </Box>
          <Box
            sx={{
              border: "1px solid blue",
              width: "40%",
            }}
          >
            DETAILS
          </Box>
        </Box>
        <Box>
          <Button onClick={onClose}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
