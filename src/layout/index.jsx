import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Box } from "@mui/material";

import { useTheme, alpha, useMediaQuery, styled } from "@mui/material";

import { UserContext } from "../context/userContext";
import Header from "./header";
import Main from "./main";

const X_PADDING = {
	// sm: "1.15rem",
	// md: "2rem",
	sm: 0,
	md: 0,

	lg: "5rem",
};

const Y_PADDING = {
	// sm: "3rem",
	// md: "4rem",
	// lg: "5rem",
	sm: 6,
	md: 8,
	lg: 10,
};

const RootWrapper = styled(Container)(({ theme }) => ({
	minHeight: "100%",
	// outline: "2px dashed green",
	// outlineOffset: "-2px",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "flex-start",
	position: "relative",
	paddingLeft: "5rem",
	paddingRight: "5rem",
	// overflow: "hidden",
	// columnGap: "2rem",
	"& #header, & #main": {
		paddingTop: "5rem",
		paddingBottom: "5rem",
		minHeight: "100dvh",
	},
	"& #header": {
		width: "45%",
		// height: "100dvh",

		position: "sticky",
		top: 0,
	},
	"& #main": {
		width: "50%",
	},
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		justifyContent: "flex-start",
		paddingLeft: 0,
		paddingRight: 0,
		"& #header, & #main": {
			width: "100%",
			minHeight: "fit-content",
			position: "relative",
			paddingTop: "4rem",
			paddingBottom: "3rem",
			// paddingLeft: 0,
			// paddingRight: 0,
			boxSizing: "border-box",
		},
		"& #header": {
			position: "relative",
			height: "fit-content",
		},
		"& #main": {
			width: "100%",

			// flexDirection: "column",
			// justifyContent: "flex-start",
			// alignItems: "stretch",
			// overflow: "hidden",
		},
	},
}));

const MediaQueryView = ({ screenSize, screenWidth }) => {
	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				right: 0,
				zIndex: 999999,
				width: "fit-content",
				height: "2rem",
				background: "black",
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				color: "green",
			}}
		>
			{`mediaQuery: ${screenSize} | width: ${screenWidth}`}
		</div>
	);
};

const Layout = ({ children }) => {
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
	// const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
	// const [pageLoaded, setPageLoaded] = useState(false);
	const [screenWidth, setScreenWidth] = useState(null);
	const { userData, isLoading } = useContext(UserContext);

	const { navigation, personalInformation, about, project, experiences } =
		userData;

	const screenSize = smallScreen ? "sm" : mediumScreen ? "md" : "lg";

	// React.useEffect(() => {
	// 	if (isLoading || pageLoaded) return;
	// 	setPageLoaded(true);
	// }, [isLoading, pageLoaded, setPageLoaded]);

	useEffect(() => {
		setScreenWidth(document.body.clientWidth);
	}, [document.body.clientWidth]);

	return (
		<>
			{!isLoading && !!userData && (
				<RootWrapper
					id="rootWrapper"
					maxWidth={"lg"}
					disableGutters
					px={smallScreen ? 0 : mediumScreen ? "3rem" : "4rem"}
				>
					{/* <MediaQueryView screenSize={screenSize} screenWidth={screenWidth} /> */}
					<Header id="header" data={{ navigation, personalInformation }} />

					<Main id="main" data={{ about, project, experiences }}>
						{children}
					</Main>
				</RootWrapper>
			)}
		</>
	);
};

Layout.propTypes = {
	window: PropTypes.func,
};

export default Layout;
