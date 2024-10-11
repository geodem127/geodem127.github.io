import * as React from "react";

import {
	Dialog,
	IconButton,
	Slide,
	SwipeableDrawer,
	useMediaQuery,
	useTheme,
	styled,
	Box,
	Button,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PreviewSlider from "./PreviewSlider";
import ProjectTechStack from "./ProjectTechStack";

const ModalBox = styled(Box)(({ theme }) => ({
	"& .MuiPaper-root": {
		overflow: "auto",

		position: "relative",
		flexGrow: 0,
		minHeight: "300px",
		maxHeight: "100%",
		// paddingBottom: "1rem",
		borderBottom: "2rem solid transparent",
		// borderTop: "1rem solid transparent",
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
	},
	"&.projectDetailsDrawer > .MuiPaper-root": {
		// top: "1.5rem",
		borderTopLeftRadius: "1rem",
		borderTopRightRadius: "1rem",

		"&::before": {
			content: "''",
			position: "absolute",
			height: "10px",
			width: "50px",
			borderRadius: "5px",
			background: theme.palette.grey[600],
			left: "calc(50% - 25px)",
			top: ".75rem",
		},
	},
	"& .modalContentWrapper": {
		// overflow: "hidden",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "stretch",
	},

	[theme.breakpoints.up("md")]: {
		"& .modalContentWrapper": {
			height: "100%",
			maxHeight: "100%",
		},
	},
	[theme.breakpoints.up("sm")]: {
		"& .MuiPaper-root": {
			maxHeight: "calc(100% - 2rem)",
		},
	},
}));
const ModalHeader = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",

	padding: "3rem 1.15rem 2rem 1.15rem",
	flexGrow: 0,
	flexShrink: 0,
}));

const ModalContents = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "stretch",
	// flexGrow: 1,
	// flexShrink: 1,
	overflow: "hidden",
	// gap: "2rem",
	position: "relative",
	height: "100%",
}));

const ModalActions = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-end",
	alignItems: "center",
	padding: "2rem",
	flexGrow: 0,
	columnGap: "1rem",
	// flexShrink: 0,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const drawerProps = {
	// TransitionComponent: Transition,
	// component: SwipeableDrawer,
	component: SwipeableDrawer,
	anchor: "bottom",
	className: "projectDetailsDrawer",
	PaperProps: {
		sx: {
			// border: "1px solid green",
			height: "100%",
			// borderRadius: "0!important",
			// "&::before": {
			//   content: "''",
			//   position: "absolute",
			//   height: "8px",
			//   width: "16px",
			// },
		},
	},
};
const dialogProps = {
	component: Dialog,
	fullWidth: true,
	TransitionComponent: Transition,
	sx: {},
	PaperProps: {
		elevation: 2,

		sx: {
			height: "100%",
			maxWidth: "xl",
		},
	},
};

export default function DetailsModal({ open = false, data = null, onClose }) {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mdScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<ModalBox
			id="projectDetailsModal"
			{...(smScreen ? drawerProps : dialogProps)}
			open={open}
			// onClose={onClose}
		>
			{/* <Slide direction="up" in={open} mountOnEnter unmountOnExit> */}
			<Box className="modalContentWrapper">
				<ModalHeader
					sx={{
						//   height: "2.5rem",
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						// paddingTop: smScreen ? "3rem" : "2rem",
					}}
				>
					<Box>
						<Typography
							sx={{ mb: "1rem" }}
							variant="h4"
							component="div"
							color="text.secondary"
						>
							{data?.name}
						</Typography>

						<ProjectTechStack techStack={data?.technologies} />
					</Box>

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
				</ModalHeader>
				<ModalContents
					sx={{
						flexDirection: mdScreen ? "column" : "row",
						padding: 0,
						// flexGrow: 1,
						// flexShrink: 1,
					}}
				>
					<Box
						sx={{
							width: mdScreen ? "100%" : "50%",
							padding: `0 ${smScreen ? "0" : "2rem"}`,
						}}
					>
						<PreviewSlider data={data?.previews} />
					</Box>
					<Box
						className="prettyScroll"
						sx={{
							width: mdScreen ? "100%" : "50%",
							// padding: smScreen ? "1.15rem" : "1rem",
							padding: `0 ${smScreen ? "1.15rem" : "2rem"}`,
							maxHeight: "100%",

							overflow: "auto",
						}}
					>
						<Box
							sx={{
								flexGrow: 1,
							}}
						>
							<Box mb={"2rem"}>
								<Typography
									mb={1}
									variant="h5"
									component="h5"
									color="text.secondary"
								>
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
							<Box mb={"2rem"}>
								<Typography
									mb={1}
									variant="h5"
									component="h5"
									color="text.secondary"
								>
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
							<Box mb={"2rem"}>
								<Typography
									mb={1}
									variant="h5"
									component="h5"
									color="text.secondary"
								>
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
							<Box mb={"2rem"}>
								<Typography
									mb={1}
									variant="h5"
									component="h5"
									color="text.secondary"
								>
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
								<Typography
									mb={1}
									variant="h5"
									component="h5"
									color="text.secondary"
								>
									Features:
								</Typography>
							</Box>
						</Box>
						<ModalActions sx={{ flexGrow: 0 }}>
							<Button
								variant="contained"
								color="info"
								component={"a"}
								href={data?.sourceLink?.url}
								target="_blank"
								size="large"
							>
								View Source Code
							</Button>
							<Button
								variant="contained"
								color="primary"
								component={"a"}
								target="_blank"
								href={data?.demoLink?.url}
								size="large"
							>
								Open Demo
							</Button>
						</ModalActions>
					</Box>
				</ModalContents>
			</Box>
			{/* </Slide> */}
		</ModalBox>
	);
}
