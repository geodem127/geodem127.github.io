import React from "react";
import {
	Card,
	CardMedia,
	styled,
	useTheme,
	useMediaQuery,
} from "@mui/material";

const ASPECT_RATIO = {
	mobile: 0.5,
	desktop: 1.34,
	app: 1.455,
};

const CardStyles = styled(Card)(({ theme }) => ({
	animation: "fadeIn 300ms ease-in-out",
	animationFillMode: "forwards",

	"@keyframes fadeIn": {
		"0%": {
			transform: "scale(0)",
			opacity: 0,
		},
		"50%": {
			transform: "scale(1)",
			opacity: 0.2,
		},
		"100%": {
			transform: "scale(1)",
			opacity: 1,
		},
	},
}));

const MediaPlayer = ({ content = null, height = "300px", ...other }) => {
	const { src, view, type, format } = content;
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<>
			{!content ? (
				""
			) : (
				<CardStyles
					{...other}
					raised={true}
					sx={{
						maxHeight: "100%",
						height: "100%",
						width: "100%",
						// width: smScreen
						//   ? `calc(100% - 4rem)`
						//   : `calc(${height}*${ASPECT_RATIO})`,

						position: "relative",
						overflow: "hidden",
						borderRadius: 2,
						// maxWidth: "60%",
					}}
				>
					<CardMedia
						// className="player"
						component={type === "video" ? "video" : "img"}
						sx={{
							height: "100%",
							width: "100%",
							objectFit: "cover",
							objectPosition: "left top",
						}}
						image={src}
					/>
				</CardStyles>
			)}
		</>
	);
};

export default MediaPlayer;
