import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import PreviewSlider from "./PreviewSlider";
import ProjectTechStack from "./ProjectTechStack";

import CustomModal from "../../common/CustomModal";

const ModalBox = styled(Box)(({ theme }) => ({}));

const DrawerPuller = styled(Box)(({ theme }) => ({
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	height: "20px",
	width: "100%",
	border: "1px solid red",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	"&::before": {
		content: "''",

		height: "8px",
		width: "40px",
		borderRadius: "5px",
		background: theme.palette.grey[600],
	},
}));

const GridBox = styled(Box)(({ theme }) => ({
	width: "100%",
	height: "100%",

	position: "relative",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "flex-start",
}));
const GridColumn = styled(Box)(({ theme }) => ({
	border: "2px dashed red",
	width: "50%",
	maxHeight: "100%",
	position: "relative",

	//   display: "flex",
	//   flexDirection: "column",
	//   justifyContent: "flex-start",
	//   alignItems: "flex-start",
}));
const ColumnWrapper = styled(Box)(({ theme }) => ({
	width: "100%",
	position: "relative",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	rowGap: "1rem",
}));
const CardItemStyles = styled(Card)(({ theme }) => ({
	height: "100%",
	width: "100%",
}));

const GridRow = styled(Box)(({ theme }) => ({
	width: "100%",
	position: "relative",
	border: "2px dashed red",
}));

const SliderContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	padding: "0",
	height: "400px",
	position: "relative",
	border: "2px dashed cyan",
	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-start",
	alignItems: "center",
	columnGap: "1rem",

	//   "& .sliderCard": {
	//     border: "2px dashed orange",
	//   },

	//   "& .slick-track": {
	//     border: "2px dashed orange",
	//     height: "400px",
	//     overflow: "hidden",
	//       display: "flex",
	//       flexDirection: "row",
	//       justifyContent: "flex-start",
	//       alignItems: "center",
	//       "& .slick-slide": {
	//         width: "fit-content",
	//         "& div": {
	//           width: "fit-content",
	//         },
	//       },
	//   },
	//   "& .slick-slide": {
	//     width: "auto!important",
	//     "& div": {
	//       width: "auto!important",
	//     },
	//   },

	//   "& .preview": {
	//     height: "400px",
	//     width: "auto",

	//     objectFit: "contain",
	//   },
}));

const drawerProps = {
	component: SwipeableDrawer,
	anchor: "bottom",
	PaperProps: {
		sx: {
			height: "90svh",
			"&::before": {
				content: "''",
				position: "absolute",
				height: "8px",
				width: "40px",
				borderRadius: "5px",
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
	TransitionComponent: React.forwardRef(function Transition(props, ref) {
		return <Slide direction="up" ref={ref} {...props} />;
	}),
	PaperProps: {
		// elevation: 2,

		sx: {
			height: "calc(100vh - 4rem)",
			maxHeight: "calc(100vh - 4rem)",
			minHeight: "500px",
			maxWidth: (theme) => theme.breakpoints.values.md,
			padding: "2rem 0",
			border: "1px solid red",
			overflow: "hidden",
			//   top: "2rem",
		},
	},
};

const CardItem = ({ src, type }) => {
	return (
		<CardItemStyles>
			<CardMedia
				component={type === "video" ? "video" : "img"}
				image={src}
				// autoplay
				// alt={props?.item.alt}
				sx={{
					height: "auto",
					backgroundSize: "cover",
					overflow: "hidden",
					width: "100%",
					objectFit: "contain",
				}}
			/>
			{/* <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props?.item.description}
          </Typography>
        </CardContent> */}
		</CardItemStyles>
	);
};

const ProjectModal = ({ open = false, data = null, onClose }) => {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mdScreen = useMediaQuery(theme.breakpoints.down("md"));

	const [nav1, setNav1] = useState(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slider1, setSlider1] = useState(null);

	useEffect(() => {
		setNav1(slider1);
	}, [slider1]);

	return (
		<>
			{/* <Box
        open={open}
        onClose={onClose}
        {...(smScreen ? drawerProps : dialogProps)}
      >
        <GridBox className="flex-row start-stretch">
          <GridRow>
            <Typography
              sx={{ mb: "1rem" }}
              variant="h4"
              component="div"
              color="text.secondary"
            >
              {data?.name}
            </Typography>
            <ProjectTechStack techStack={data?.technologies} size="lg" />
          </GridRow>
          <GridRow>
            <SliderContainer>
              {AfroStyles2.map((item, index) => (
                <Card
                  sx={{
                    height: "fit-content",
                  }}
                >
                  <CardMedia
                    className={`preview`}
                    component={item?.type === "video" ? "video" : "img"}
                    image={item.src}
                    sx={{
                      height: "400px",
                      width: "100%",
                      objectFit: "contain",
                      margin: "0 auto",
                    }}
                  />
                </Card>
              ))}
            </SliderContainer>
          </GridRow>
        </GridBox>
      </Box> */}
			<CustomModal open={open} onClose={onClose} data={data}>
				<GridBox className="flex-row start-stretch">
					<GridRow>
						<Typography
							sx={{ mb: "1rem" }}
							variant="h4"
							component="div"
							color="text.secondary"
						>
							{data?.name}
						</Typography>
						<ProjectTechStack techStack={data?.technologies} size="lg" />
					</GridRow>
					<GridRow>
						<SliderContainer>
							{AfroStyles2.map((item, index) => (
								<Card
									sx={{
										height: "fit-content",
									}}
								>
									<CardMedia
										className={`preview`}
										component={item?.type === "video" ? "video" : "img"}
										image={item.src}
										sx={{
											height: "400px",
											width: "100%",
											objectFit: "contain",
											margin: "0 auto",
										}}
									/>
								</Card>
							))}
						</SliderContainer>
					</GridRow>
				</GridBox>
			</CustomModal>
		</>
	);
};

export default ProjectModal;
var AfroStyles2 = [
	{
		id: "1",
		src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
		type: "image",
		view: "desktop",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
	{
		id: "2",
		src: "https://geodem.xyz/files/media/videos/myPortfolio_mobile.mp4",
		type: "video",
		view: "mobile",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
	{
		id: "3",
		src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
		type: "image",
		view: "desktop",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
	{
		id: "4",
		src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
		type: "image",
		view: "app",
		alt: "dxdd",
		description: "Probably the most random thing you have ever seen!",
	},
];
