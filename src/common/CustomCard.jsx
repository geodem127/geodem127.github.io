import React, { useEffect, useRef, useState } from "react";

import { useTheme, Paper, styled, alpha } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import zIndex from "@mui/material/styles/zIndex";

const PaperStyles = styled(Paper)(({ theme }) => ({
	":root": {
		"--x-pos": 0,
		"--y-pos": 0,
	},

	"&::before": {
		content: "''",
		width: "250px",
		aspectRatio: 1,
		// backgroundColor: "#33b3ae", //theme.palette.primary.main,
		zIndex: 0,
		position: "absolute",
		borderRadius: "50%",
		top: "var(--y-pos)",
		left: "var(--x-pos)",
		transform: "translateX(-40%) translateY(-40%)",
		filter: "blur(180px)",
		mixBlendMode: "lighten",
		willChange: "transform",
		opacity: 0,
		transition: "all 400ms ease-in",
	},
	"&:hover::before": {
		opacity: 1,
	},
	overflow: "hidden",
	position: "relative",
}));

const CustomCard = ({ accentColor = "primary", children }) => {
	const theme = useTheme();
	const paperRef = useRef(undefined);
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const [mousePosition, setMousePosition] = useState(null);
	const handleHover = (e) => {
		const rect = paperRef.current.getBoundingClientRect();

		const clientX = e.clientX;
		const clientY = e.clientY;
		const offsetLeft = e.target.offsetLeft;
		const offsetTop = e.target.offsetTop;

		const targetX = paperRef.current.clientX;
		const targetY = paperRef.current.clientY;
		const xPos = e.clientX - rect?.left;
		const yPos = e.clientY - rect?.top;

		// paperRef.current.setStyles({ "--x-pos": xPos, "--y-pos": yPos });
		paperRef.current.style.setProperty("--x-pos", `${xPos}px`);
		paperRef.current.style.setProperty("--y-pos", `${yPos}px`);

		// console.log("e.: ", e);
		// paperRef.current.style.background = `radial-gradient(500px at ${mouseX}px ${mouseY}px, ${alpha(
		// 	theme.palette.primary.main,
		// 	0.5
		// )}, transparent 80%)`;
		setMousePosition({
			clientX,
			clientY,
			offsetLeft,
			offsetTop,
			xPos,
			yPos,
			targetX,
			targetY,
		});
		e.stopPropagation();
	};
	// useEffect(() => {
	// 	if (!!isMobile) return;
	// 	if (paperRef?.current) {
	// 		document.body.addEventListener("mousemove", handleHover);
	// 	}

	// 	return () => {
	// 		document.body.removeEventListener("mousemove", handleHover);
	// 	};
	// }, [paperRef?.current, isMobile]);

	return (
		<PaperStyles
			ref={paperRef}
			variant="custom1"
			onMouseMove={handleHover}
			sx={{
				"&::before": {
					backgroundColor: theme.palette?.[accentColor].main,
				},
			}}
		>
			{/* <span>{`
			clientX:${mousePosition?.clientX} clientY:${mousePosition?.clientY}\n
			offsetLeft:${mousePosition?.offsetLeft} offsetTop:${mousePosition?.offsetTop}\n
			xPos:${mousePosition?.xPos} yPos:${mousePosition?.yPos} \n
			targetX:${mousePosition?.targetX} targetY:${mousePosition?.targetY}
			`}</span> */}
			{children}
		</PaperStyles>
	);
};

export default CustomCard;
