import React from "react";
import { styled, Paper, Box } from "@mui/material";

import Animation, { ScrollAnimation } from "../../common/animation";
import config from "../../config";

// import { color } from "three/webgpu";
const PlayerWrapper = styled(Paper)(({ theme }) => ({
	//   boxShadow: "1px 1px 20px 8px rgba(0, 0, 0, 0.377)",
	overflow: "hidden",
	borderRadius: ".45rem",
	background: theme.palette.grey[800],
	// borderColor: theme.palette.divider,
	// borderWidth: ".3px",
	// borderStyle: "solid",
	// boxShadow: theme.shadows["a3"],
	outline: `1px solid ${theme.palette.divider}`,
	outlineOffset: "-1px",

	"& .wrapper": {
		width: "100%",
		height: "100%",
		overflow: "hidden",
		borderRadius: ".45rem",
		background: theme.palette.background.default,
		// border: "1px solid green",
		boxSizing: "border-box",
	},
	// opacity: 0,
	"&.desktop": {
		position: "absolute",
		width: "85%",
		height: "80%",
		borderRadius: ".65rem",
		overflow: "hidden",
		// borderTopWidth: "1.85rem",
		// borderLeftWidth: ".4rem",
		// borderRightWidth: ".4rem",
		// borderBottomWidth: ".4rem",
		// borderStyle: "solid",
		paddingTop: "1.85rem",
		paddingLeft: ".4rem",
		paddingRight: ".4rem",
		paddingBottom: ".4rem",
		// border: "1px solid #2A2929",
		// borderWidth: ".3px",
		// borderStyle: "solid",
		// borderColor: theme.palette.divider,
		"& .wrapper": {
			borderRadius: ".45rem",
			borderTopWidth: "1.85rem",
			borderLeftWidth: ".4rem",
			borderRightWidth: ".4rem",
			borderBottomWidth: ".4rem",
			borderStyle: "solid",
			borderColor: "#2A2929",
			overflow: "hidden",
		},

		"&::before": {
			content: "'•••'",
			position: "absolute",
			top: "2px",
			left: ".65rem",
			fontSize: "3.25rem",
			lineHeight: ".5",
			opacity: 0.3,
			color: theme.palette.grey[600],
			letterSpacing: "1px",
		},
	},
	"&.mobile": {
		position: "absolute",

		width: "30%",
		height: "85%",
		objectFit: "cover",
		objectPosition: "center",
		borderRadius: ".85rem",

		// borderWidth: "8px",
		// borderStyle: "solid",
		// borderColor: theme.palette.grey[700],
		border: `6px solid ${theme.palette.grey[800]}`,
		// outlineOffset: "-4px",
		overflow: "visible",
		padding: "0",

		"&::after": {
			content: "''",
			position: "absolute",
			top: "10%",
			left: "100%",
			width: "7px",
			height: "10%",
			transform: "translateX(2px)",
			background: theme.palette.grey[800],
			borderTopRightRadius: "4px",
			borderBottomRightRadius: "4px",
		},
	},

	"&.app": {
		position: "absolute",
		maxWidth: "85%",
		maxHeight: "80%",
		// bottom: "1rem",
		// left: "2rem",
		overflow: "hidden",
		borderRadius: ".5rem",

		borderWidth: ".25rem",
		borderStyle: "solid",
		borderColor: theme.palette.grey[800],
	},
	"& video, img": {
		borderRadius: ".5rem",
		overflow: "hidden",
		// border: "1px solid red",
	},
}));

const VideoPlayerStyles = styled("video")(({ theme }) => ({
	objectFit: "cover",
	objectPosition: "top",
}));

const VideoPlayer = ({ src, type, format, ...other }) => {
	return (
		<VideoPlayerStyles
			autoPlay
			loop
			muted
			playsInline
			width={"100%"}
			height={"100%"}
			controls={false}
			{...other}
		>
			<source src={src} type={`${type}/${format}`} />
			{/* <source src={`${baseURL}/videos/${src}`} type="video/webm" /> */}
		</VideoPlayerStyles>
	);
};

const ImageViewer = ({ src, ...other }) => {
	return (
		<img
			loading="lazy"
			style={{
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				width: "100%",
				height: "100%",
			}}
			src={src}
			{...other}
		/>
	);
};

const WindowContainer = ({ preview, url, view, ...other }) => {
	return (
		// <Animation start={90} animation={preview?.animation}>
		<ScrollAnimation start={10} animation="slideUp">
			<div>
				<PlayerWrapper elevation={4} {...other}>
					{/* <Box className="wrapper"> */}
					{preview?.type === "video" ? (
						<VideoPlayer
							src={`${config?.API_ENDPOINT}/media/videos/${preview?.fileName}`}
							type={`${preview?.type}`}
							format={`${preview?.format}`}
						/>
					) : (
						<ImageViewer
							src={`${config?.API_ENDPOINT}/media/videos/${preview?.fileName}`}
						/>
					)}
					{/* </Box> */}
				</PlayerWrapper>
			</div>
		</ScrollAnimation>
		// </Animation>
	);
};

export default WindowContainer;

export { PlayerWrapper };
