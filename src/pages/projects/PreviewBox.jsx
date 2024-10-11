import React from "react";
import { Box, styled, CardMedia, useTheme, useMediaQuery } from "@mui/material";
// import DesktopWindow from "./DesktopWindow";
// import MobileWindow from "./MobileWindow";
// import Animation, { ScrollAnimation } from "../../common/animation";
import config from "../../config";
import { ScrollListener } from "../../common/animation";
import zIndex from "@mui/material/styles/zIndex";

const PreviewBoxStyles = styled(Box)(({ theme }) => ({
	width: "100%",
	aspectRatio: "16/11",
	position: "relative",
	boxSizing: "border-box",

	"& .mediaPlayer": {
		border: "1px solid green",
		background: "#141313",
		borderColor: "#333333",
		BorderStyle: "solid",
		boxShadow: "1px 1px 20px 8px rgba(0,0,0,.3)",
		boxSizing: "border-box",
		position: "absolute",
		objectFit: "cover",
		objectPosition: "top left",
		overflow: "hidden",
		// width: ["desktop", "app"]?.includes(view) "87%",
		// "&::before": {
		// 	content: '""',
		// 	position: "absolute",
		// 	top: 0,
		// 	left: 0,
		// 	right: 0,
		// 	bottom: 0,
		// 	background: "rgba(0,0,0,.3)",
		// 	zIndex: 1,
		// },
	},
	"& .desktop, & .app": {
		borderRadius: ".75rem",
		aspectRatio: "16/10",
		background: "#141313",
	},
	"& .desktop": {
		borderWidth: "3px",
		// paddingTop: "1.75rem",
		backgroundImage: `radial-gradient(7px 7px at 15px 13px, rgba(62, 175, 213, 0.534) 0%, rgba(62, 175, 213, 0.534) 100%, #333333 100%),
			radial-gradient(7px 7px at 35px 13px, rgba(187, 189, 190, 0.581) 0%, rgba(187, 189, 190, 0.581) 100%, #333333 100%),
			radial-gradient(7px 7px at 55px 13px, #656565 0%, #656565 100%, #333333 100%)`,
	},
	"& .app": {
		height: "85%",
		borderWidth: "5px",
	},
	"& .mobile, & .widget": {
		height: "85%",
		aspectRatio: ".55",
	},
	"& .mobile": {
		// height: "90%",
		// aspectRatio: ".5",
		aspectRatio: ".55",
		borderRadius: "1rem",
		overflow: "hidden",
		borderWidth: "3px",
	},
	"& .widget": {
		// height: "90%",
		// aspectRatio: ".5",
		aspectRatio: ".55",
		borderWidth: "3px",
		borderRadius: ".5rem",
		overflow: "hidden",
	},
	"& .desktopMenu": {
		// position: "absolute",
		// top: 0,
		// left: 0,
		zIndex: 100,
	},
}));

const vidProps = {
	autoPlay: true,
	loop: true,
	muted: true,
	controls: false,
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

const PreviewBox = ({ data, url, in: inProp = false }) => {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
	// const targetRef = useRef(undefined);
	// const [inRange, setInRange] = useState(false);
	// const { top } = usePageScroll(targetRef?.current);

	// useEffect(() => {
	//   setInRange(top < 85);
	// }, [top]);

	return (
		<PreviewBoxStyles>
			{data?.map((preview, index) => {
				const previewUrl = `${config?.API_ENDPOINT}/media/videos/${preview?.fileName}`;

				const h = ["mobile", "widget"]?.includes(preview?.view)
					? "85%"
					: "auto";
				const w = ["desktop", "app"]?.includes(preview?.view) ? "88%" : "auto";
				const aRatio = ["desktop", "app"]?.includes(preview?.view) ? 1.7 : 0.5;

				const previewStyles = {
					background: "#333333",
					objectFit: "cover",
					objectPosition: "top left",
					width: ["desktop", "app"]?.includes(preview?.view) ? "88%" : "auto",
					height: ["mobile", "widget"]?.includes(preview?.view)
						? "85%"
						: "auto",
					aspectRatio: aRatio,
					...preview.styles,
				};
				return (
					<ScrollListener start={15} activeClassName="in" key={index}>
						{/* {preview?.type === "video" ? (
							<video
								{...vidProps}
								className={`mediaPlayer ${preview?.view}`}
								style={{
									background: "#333333",
									objectFit: "cover",
									objectPosition: "top left",

									width: ["mobile", "widget"]?.includes(preview?.view)
										? "auto"
										: "87%",
									height: ["mobile", "widget"]?.includes(preview?.view)
										? "80%"
										: "auto",
									...preview.styles,
								}}
							>
								<source
									src={`${config?.API_ENDPOINT}/media/videos/${preview?.fileName}`}
									type={`video/${preview?.format}`}
								/>
							</video>
						) : (
							<img
								className={`mediaPlayer ${preview?.view}`}
								src={`${config?.API_ENDPOINT}/media/videos/${preview?.fileName}`}
								style={{
									background: "#333333",
									objectFit: "cover",
									objectPosition: "top left",

									width: ["mobile", "widget"]?.includes(preview?.view)
										? "auto"
										: "87%",
									height: ["mobile", "widget"]?.includes(preview?.view)
										? "80%"
										: "auto",
									...preview.styles,
								}}
							/>
						)} */}
						{preview?.type === "video" ? (
							<video
								{...vidProps}
								className={`mediaPlayer ${preview?.view} _sanimation-${preview?.animation}`}
								style={{
									...previewStyles,
								}}
							>
								<source
									src={`${config?.API_ENDPOINT}/media/videos/${preview?.fileName}`}
									type={`video/${preview?.format}`}
								/>
								<span className="desktopMenu">⬤⬤⬤</span>
							</video>
						) : (
							<img
								className={`mediaPlayer ${preview?.view} _sanimation-${preview?.animation}`}
								src={`${config?.API_ENDPOINT}/media/videos/${preview?.fileName}`}
								style={{
									...previewStyles,
								}}
							/>
						)}
					</ScrollListener>
				);
			})}
		</PreviewBoxStyles>
	);
};

export default PreviewBox;
