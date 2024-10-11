import { styled } from "@mui/material";
import React from "react";
import config from "../../../config";
const ASPECT_RATIO = 1.6;
const MediaWrapper = styled("div")(({ theme, url }) => ({
	":root": {
		"--previewBox-width": "100%",
		"--previewBox-height": "100%",
		"--previewBox-url": "",
	},
	position: "absolute",
	background: "#333333",
	borderColor: "#333333",
	boxShadow: "1px 1px 20px 8px rgba(0,0,0,.3)",
	"&.desktop": {
		// paddingTop: "2.25rem",
		padding: "1.75rem .2rem .1rem .2rem",
		backgroundColor: "#333333",
		borderRadius: ".5rem",
		// backgroundImage: `radial-gradient(7px 7px at 15px 13px, rgba(62, 175, 213, 0.534) 0%, rgba(62, 175, 213, 0.534) 100%, #333333 100%),
		// 	radial-gradient(7px 7px at 35px 13px, rgba(187, 189, 190, 0.581) 0%, rgba(187, 189, 190, 0.581) 100%, #333333 100%),
		// 	radial-gradient(7px 7px at 55px 13px, #656565 0%, #656565 100%, #333333 100%)`,
		"&::before": {
			content: "'⬤⬤⬤'",
			fontSize: ".55rem",
			position: "absolute",
			top: "0",
			left: ".5rem",
			// border: "1px solid red",
			letterSpacing: "3px",
			// padding: ".25rem 0",
			lineHeight: "1.65rem",
			// height: "1.65rem",
			// width: "60px",
			// paddingLeft: ".5rem",
			// color: theme.palette.text.primary,
			opacity: ".5",
			textAlign: "center",
			backgroundSize: "100% 100%",
			backgroundPosition: "0px 0px,0px 0px,0px 0px",
			backgroundImage:
				"radial-gradient(.3rem .3rem at 15% 50%, #80C2C2FF 0%, #80C2C2FF 99%, #80C2C200 100%),radial-gradient(.3rem .3rem at 50% 50%, #A6ACACFF 0%, #A6ACACFF 99%, #80C2C200 100%),radial-gradient(.3rem .3rem at 85% 50%, #CFD3D3FF 0%, #CFD3D3FF 99%, #80C2C200 100%)",
			color: "transparent",
			backgoundClip: "text",
		},
		"&::after": {
			content: `"${url}"`,
			fontSize: ".7rem",
			position: "absolute",
			top: ".3rem",
			left: "60px",
			border: "1px solid #000000",
			letterSpacing: "2px",
			// padding: ".25rem 0",
			lineHeight: 1.45,
			height: "1.18rem",
			width: "calc(100% - 80px)",
			paddingLeft: ".5rem",
			color: theme.palette.text.primary,
			opacity: ".5",
			borderRadius: ".25rem",
			background: "#000000",
		},
	},
	"&.app": {
		borderRadius: ".6rem",
		border: `2px solid #333333`,
	},
	"&.widget": {
		borderRadius: ".5rem",
		border: `1px solid #333333`,
	},

	"&.mobile": {
		borderRadius: "1rem",
		border: `6px solid #333333`,
	},
	"& .player": {
		position: "relative",
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "top left",
		borderRadius: ".5rem",
		overflow: "hidden",
	},
}));

const mediaStyles = {
	":root": {
		"--previewBox-width": "100%",
		"--previewBox-height": "100%",
		"--previewBox-url": "",
	},
	position: "absolute",
	background: "#333333",
	borderColor: "#333333",
	boxShadow: "1px 1px 20px 8px rgba(0,0,0,.3)",
	"&.desktop": {
		padding: "1.75rem .2rem .1rem .2rem",
		backgroundColor: "#333333",
		borderRadius: ".5rem",
		"&::before": {
			content: "'⬤⬤⬤'",
			fontSize: ".55rem",
			position: "absolute",
			top: "0",
			left: ".5rem",
			letterSpacing: "3px",

			lineHeight: "1.65rem",
			opacity: ".5",
			textAlign: "center",
			backgroundSize: "100% 100%",
			backgroundPosition: "0px 0px,0px 0px,0px 0px",
			backgroundImage:
				"radial-gradient(.3rem .3rem at 15% 50%, #80C2C2FF 0%, #80C2C2FF 99%, #80C2C200 100%),radial-gradient(.3rem .3rem at 50% 50%, #A6ACACFF 0%, #A6ACACFF 99%, #80C2C200 100%),radial-gradient(.3rem .3rem at 85% 50%, #CFD3D3FF 0%, #CFD3D3FF 99%, #80C2C200 100%)",
			color: "transparent",
			backgoundClip: "text",
		},
		"&::after": {
			content: `"var(--previewBox-url)"`,
			fontSize: ".7rem",
			position: "absolute",
			top: ".3rem",
			left: "60px",
			border: "1px solid #000000",
			letterSpacing: "2px",
			// padding: ".25rem 0",
			lineHeight: 1.45,
			height: "1.18rem",
			width: "calc(100% - 80px)",
			paddingLeft: ".5rem",
			color: (theme) => theme.palette.text.primary,
			opacity: ".5",
			borderRadius: ".25rem",
			background: "#000000",
		},
	},
	"&.app": {
		borderRadius: ".6rem",
		border: `2px solid #333333`,
	},
	"&.widget": {
		borderRadius: ".5rem",
		border: `1px solid #333333`,
	},

	"&.mobile": {
		borderRadius: "1rem",
		border: `6px solid #333333`,
	},
	"& .player": {
		position: "relative",
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "top left",
		borderRadius: ".5rem",
		overflow: "hidden",
	},
};

const Video = ({ src = "", format = "mp4" }) => {
	return (
		<video
			className="player"
			autoPlay={true}
			loop={true}
			muted={true}
			controls={false}
		>
			<source src={src} type={`video/${format}`} />
		</video>
	);
};

const Image = ({ src = "" }) => {
	return <img className="player" src={src} />;
};

const MediaViewer = ({
	preview = [],
	width = "100%",
	height = "100%",
	url = "https://",
	...other
}) => {
	const previewUrl = `${config?.API_ENDPOINT}/media/videos/${preview?.fileName}`;

	const h = ["mobile", "widget"]?.includes(preview?.view) ? "85%" : "auto";
	const w = ["desktop", "app"]?.includes(preview?.view) ? "88%" : "auto";
	const aRatio = ["desktop", "app"]?.includes(preview?.view) ? 1.7 : 0.5;
	return (
		<MediaWrapper
			className={preview?.view}
			url={url}
			style={{
				height: h,
				width: w,
				aspectRatio: aRatio,
				position: "absolute",
				"--previewBox-url": url,
				...preview?.styles,
			}}
			{...other}
		>
			{preview?.type === "video" ? (
				<Video src={previewUrl} format={preview?.format} />
			) : (
				<Image src={previewUrl} />
			)}
		</MediaWrapper>
	);
};

export default MediaViewer;
