import React, { useState } from "react";
import { alpha, styled, useMediaQuery, useTheme } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/scrollbar";
// import "swiper/css/zoom";

import { Pagination, Navigation, Scrollbar } from "swiper/modules";

import MediaPlayer from "./MediaPlayer";
const ASPECT_RATIO = {
	mobile: 0.5,
	desktop: 1.74,
	app: 1.655,
};
const SwiperContainer = styled("div")(({ theme }) => ({
	position: "relative",
	boxSizing: "border-box",
	overflow: "visible",
	width: "100%",
	"& .swiper": {
		width: "100%",
		height: "100%",
	},

	"& .swiper-slide": {
		textAlign: "center",
		fontSize: "18px",
		background: "#fff",
		boxSizing: "border-box",

		/* Center slide text vertically */
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},

	"& .swiper-slide .player": {
		display: "block",
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
	"& .swiper-button-disabled": {
		display: "none",
	},
}));

const CustomCarousel = ({ height = "300px", width = "100%", data = [] }) => {
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<SwiperContainer
			style={{
				width: width,

				overflow: "hidden",
			}}
		>
			<Swiper
				// slidesPerView={"auto"}
				slidesPerView={smallScreen ? "auto" : mediumScreen ? 2 : 3}
				centeredSlides={smallScreen ? true : false}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				modules={[
					Navigation,
					Pagination,
					// Scrollbar,
				]}
				className="mySwiper"
				navigation={!smallScreen}
				// scrollbar={{ draggable: true }}
				loop={smallScreen}
				slideToClickedSlide={true}
				// cssMode={true}
				// onSlideChange={(swiper) => {
				//   // console.log(swiper.activeIndex);
				//   setActiveSlideIndex(swiper.activeIndex);
				// }}
				scrollbar={{
					hide: true,
				}}
				autoplay={true}
				style={{
					"--swiper-navigation-color": alpha(theme.palette.info.main, 0.5),
					"--swiper-pagination-color": alpha(theme.palette.primary.main, 1),
					"--swiper-navigation-size": "30px",
					"--swiper-navigation-sides-offset": "5px",

					"--swiper-pagination-bullet-size": ".65rem",
					"--swiper-pagination-bullet-inactive-color": theme.palette.grey[400],
					paddingTop: smallScreen ? "1rem" : "2.5rem",
					paddingBottom: "2.5rem",

					boxSizing: "border-box",
					overflow: "hidden",
					width: "100%",
				}}
			>
				{data.map((item, index) => (
					<SwiperSlide
						key={index}
						style={{
							userSelect: "none",
							height: height,
							overflow: "visible",

							boxSizing: "border-box",
							background: "transparent",
							maxWidth: `calc(100% - 4rem)`,
						}}
					>
						<MediaPlayer className="player" content={item} height={height} />
					</SwiperSlide>
				))}
			</Swiper>
		</SwiperContainer>
	);
};

export default CustomCarousel;
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
