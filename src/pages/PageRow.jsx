import React from "react";
import { Box, styled, useTheme, useMediaQuery } from "@mui/material";

const X_PADDING = {
	// sm: "1.15rem",
	// md: "2rem",
	sm: 0,
	md: "3rem",

	lg: "5rem",
};

const PageRowStyles = styled(Box)(({ theme, align }) => ({
	width: "100%",
	textAlign: align,
	position: "relative",
	display: "block",
	// flexDirection: "row",
	// justifyContent: align,
	// border: "2px dashed cyan",
}));

const PageRow = ({
	breakOut = false,
	my = 0,
	mt = 0,
	mb = 0,
	align = "left",
	children,
	...other
}) => {
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
	const mTop = mt ? mt : my;
	const mBot = mb ? mb : my;

	const screenSize = smallScreen ? "sm" : mediumScreen ? "md" : "lg";
	return (
		<Box
			component="div"
			className="pageRow"
			px={breakOut ? 0 : smallScreen ? "1.15rem" : mediumScreen ? "3rem" : 0}
			mt={mTop}
			mb={mBot}
			{...other}
			sx={{
				// border: "1px dashed cyan",
				width: "100%",
				textAlign: align,
				position: "relative",
				...other.sx,
			}}
		>
			{children}
		</Box>
	);
};

export default PageRow;
