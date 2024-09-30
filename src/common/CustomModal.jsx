import React, { useContext, useEffect, useState, forwardRef } from "react";
import {
  Backdrop,
  Box,
  Dialog,
  Modal,
  Slide,
  styled,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  Typography,
  Card,
  CardMedia,
  Divider,
  Container,
  IconButton,
  alpha,
  DialogTitle,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalHeader = styled(DialogTitle)(({ theme }) => ({
  position: "relative",
  // border: "1px solid red",
  padding: "1rem 10rem 1rem 1.5rem",
  margin: 0,
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "1.5rem",
    right: "1.5rem",
    height: "1px",
    background: theme.palette.divider,
    opacity: 0.4,
  },

  // background: "red",
}));
const ModalContent = styled(Container)(({ theme }) => ({
  //   height: "100%",
  width: "100%",
  //   border: "1px solid green",
  maxHeight: "100%",
  overflow: "auto",
  position: "relative",
  display: "block",
}));
const drawerProps = {
  component: SwipeableDrawer,
  anchor: "bottom",
  PaperProps: {
    sx: {
      height: "calc(100vh - 1rem)",
      width: "100vw",
      paddingTop: "1rem",
      borderRadius: "1rem 1rem 0 0!important",
      paddingBottom: "1rem",
      "&::before": {
        content: "''",
        position: "absolute",
        height: "6px",
        width: "40px",
        borderRadius: "3px",
        opacity: 0.5,
        background: (theme) => theme.palette.grey[600],
        left: "calc(50% - 20px)",
        top: ".75rem",
      },
    },
  },
};

const dialogProps = {
  component: Dialog,

  fullWidth: true,
  // TransitionComponent: forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // }),
  PaperProps: {
    sx: {
      height: "calc(100vh - 4rem)",
      maxHeight: "calc(100vh - 4rem)",
      minHeight: "500px",
      maxWidth: (theme) => theme.breakpoints.values.md,
      padding: "0 0 2rem 0",
      overflow: "visible",
      background: (theme) => theme.palette.background.paper,
      //   top: "2rem",
      borderRadius: 6,
      // boxShadow: (theme) => theme.shadows[24],
    },
  },
};

const CustomModal = ({ open = false, title = "", onClose, children }) => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (open) {
      setIsRendered(true);
    } else {
      setIsRendered(false);
    }

    return () => {
      setIsRendered(false);
    };
  }, [open]);
  return (
    <Box
      open={open}
      onClose={onClose}
      mountOnEnter
      unmountOnExit
      {...(smScreen ? drawerProps : dialogProps)}
    >
      <Button
        variant="text"
        onClick={onClose}
        endIcon={<CloseIcon />}
        sx={{
          position: "absolute",
          top: ".75rem",
          right: ".75rem",
          zIndex: 100,
          display: smScreen ? "none" : "flex",
        }}
      >
        Close
      </Button>

      <ModalHeader>
        <Typography variant="h2" component="h2" color="primary">
          {title}
        </Typography>
      </ModalHeader>
      <ModalContent fullWidth disableGutters maxWidth="lg" sx={{ py: "1rem" }}>
        {isRendered ? children : "Loading..."}
      </ModalContent>
    </Box>
  );
};

export default CustomModal;
