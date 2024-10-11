import React, { useRef } from "react";
import { Paper, Box, styled } from "@mui/material";
// import { DesktopView } from "../../assets/shapes";
// import usePageScroll from "../../hooks/usePageScroll";
// import useScrollObserver from "../../hooks/useScrollObserver";
// import SlideAnimation from "../../common/animation/SlideAnimation";
// import useScrollView from "../../hooks/useScrollView";
import { ScrollListener } from "../../common/animation";

const BoxStyles = styled(Box)(({ theme }) => ({
	"& .active": {
		background: "red",
	},
}));

const HeroPage = () => {
	return (
		<BoxStyles>
			<Paper
				sx={{
					width: "500px",
					height: "500px",
					backgroundSize: "100% 100%",
					backgroundPosition: "0px 0px",
					// backgroundImage:
					// 	"radial-gradient(50% 50% at 45% 47%, #2CBC3ECC 3%, #2CBC3EAD 36%, #2CBC3E6B 69%, #073AFF00 98%)",
				}}
			>
				{/* <div
					style={{
						width: "100px",
						height: "100px",
						background: "red",
						filter: "blur(180px)",
					}}
				>
					zzz
				</div> */}
			</Paper>
		</BoxStyles>
	);
};

export default HeroPage;
