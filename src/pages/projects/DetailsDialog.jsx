import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
	Container,
	Slide,
	useMediaQuery,
	useTheme,
	IconButton,
	Typography,
	SwipeableDrawer,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PreviewSlider from "./PreviewSlider";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailsModal({ open = false, data = null, onClose }) {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<React.Fragment>
			<Dialog
				fullWidth={true}
				maxWidth={smScreen ? false : "xl"}
				fullScreen={smScreen}
				open={open}
				keepMounted
				TransitionComponent={Transition}
				// component={SwipeableDrawer}
				PaperProps={{
					sx: {
						height: "100%",
					},
				}}
				// sx={{ height: "100vh" }}
			>
				{/* <DialogTitle>Optional sizes</DialogTitle> */}
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
				</DialogTitle>
				<DialogContent
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
				</DialogContent>
				<DialogActions>
					<Button onClick={onClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
