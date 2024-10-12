import React from "react";
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
	Avatar,
	Paper,
	Button,
} from "@mui/material";
// import { UserContext } from "../../context/userContext";
import CustomModal from "../../common/CustomModal";
import ProjectTechStack from "./ProjectTechStack";
import ViewSlider from "../../common/ViewSlider";
// import CustomSlider from "../../common/CustomSlider";
import ImageSwiper from "../../common/ImageSwiper";
import CustomCarousel from "../../common/CustomCarousel";
import config from "../../config";
import CustomCard from "../../common/CustomCard";

const GridBox = styled(Box)(({ theme }) => ({
	width: "100%",
	//   height: "100%",

	position: "relative",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	rowGap: "1rem",
}));

const GridRow = styled(Box)(({ theme }) => ({
	width: "100%",
	position: "relative",

	overflow: "visible",
}));

const SliderContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	padding: "0",
	height: "400px",
	position: "relative",
	//   border: "2px dashed cyan",
	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-start",
	alignItems: "center",
	columnGap: "1rem",
}));

const PopupDetails = ({ open = false, data = null, onClose }) => {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mdScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<CustomModal open={open} onClose={onClose} title={data?.name}>
			<GridBox className="flex-column start-start">
				<GridRow
					sx={{
						flexGrow: 1,
						// mask: "linear-gradient(90deg, transparent 0%, #343a 40px, #343a40 calc(100% - 100px), transparent 100%)",
						// mask: "linear-gradient(90deg, transparent 0%, #343a40 35px, #343a40 calc(100% - 35px), transparent 100%)",
					}}
					pt={"2rem"}
					pb={"1rem"}
					px={smScreen ? "0" : "2rem"}
				>
					{/* <CustomSlider
            height={smScreen ? "300px" : "390px"}
            width={"100%"}
            data={AfroStyles2}
          /> */}
					<CustomCarousel
						height={smScreen ? "190px" : "190px"}
						width={"100%"}
						data={AfroStyles2}
					/>
				</GridRow>
				<GridRow px={smScreen ? "1rem" : "2rem"}>
					<ProjectTechStack
						techStack={data?.technologies}
						size={smScreen ? "md" : "lg"}
					/>
				</GridRow>
				<GridRow py={"1rem"} px={smScreen ? "1rem" : "2rem"}>
					<CustomCard sx={{ p: "1rem" }} accentColor={"primary"}>
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
					</CustomCard>
				</GridRow>

				<GridRow py={"1rem"} px={smScreen ? "1rem" : "2rem"}>
					<CustomCard sx={{ p: "1rem" }} accentColor="secondary">
						<Typography
							mb={1}
							variant="h5"
							component="h5"
							color="text.secondary"
						>
							Features:
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
					</CustomCard>
				</GridRow>

				<GridRow py={"1rem"} px={smScreen ? "1rem" : "2rem"}>
					<Typography mb={1} variant="h5" component="h5" color="text.secondary">
						Technologies:
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
				</GridRow>
				<GridRow py={"1rem"} px={smScreen ? "1rem" : "2rem"} rowGap={"1rem"}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							columnGap: "1rem",
							justifyContent: "flex-end",
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						{/* <Button variant="outlined" color="primary" size="large">
							Accept only needed
						</Button>
						<Button variant="contained" color="primary" size="large">
							Allow all coockies
						</Button> */}
						<Button
							variant="outlined"
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
					</Box>
				</GridRow>
			</GridBox>
		</CustomModal>
	);
};

export default PopupDetails;
var AfroStyles1 = [
	{
		id: "1",
		src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
		type: "image",
		format: "png",
		view: "desktop",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
	{
		id: "2",
		src: "https://geodem.xyz/files/media/videos/myPortfolio_mobile.mp4",
		type: "video",
		format: "mp4",
		view: "mobile",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
	{
		id: "5",
		src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app.mp4",
		type: "video",
		format: "mp4",
		view: "app",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
	{
		id: "3",
		src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
		type: "image",
		format: "png",
		view: "desktop",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
	{
		id: "4",
		src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
		type: "image",
		format: "png",
		view: "app",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
];
var AfroStyles2 = [
	{
		id: "1",
		src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
		type: "image",
		format: "png",
		view: "desktop",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
	{
		id: "2",
		src: "https://geodem.xyz/files/media/videos/myPortfolio_mobile.mp4",
		type: "video",
		format: "mp4",
		view: "mobile",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
	{
		id: "5",
		src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app.mp4",
		type: "video",
		format: "mp4",
		view: "app",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
	{
		id: "3",
		src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
		type: "image",
		format: "png",
		view: "desktop",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
	{
		id: "4",
		src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
		type: "image",
		format: "png",
		view: "app",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
];
