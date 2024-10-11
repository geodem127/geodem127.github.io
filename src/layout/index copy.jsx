import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Container, Box } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
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
const Layout = ({ children }) => {
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

	const [pageLoaded, setPageLoaded] = useState(false);
	const { userData, isLoading } = useContext(UserContext);

	const { navigation, personalInformation, about, project, experiences } =
		userData;

	const screenSize = smallScreen ? "sm" : mediumScreen ? "md" : "lg";

	React.useEffect(() => {
		if (isLoading || pageLoaded) return;
		setPageLoaded(true);
	}, [isLoading, pageLoaded, setPageLoaded]);

	return (
		<>
			<div
				style={{
					position: "fixed",
					top: 0,
					right: "10px",
					zIndex: 999999,
					width: "100vw",
					height: "2rem",
					background: "rgba(255, 255, 255, 0.1)",
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{`mediaQuery: ${screenSize} | width: ${document.body.clientWidth}`}
			</div>
			<Container
				maxWidth={"lg"}
				disableGutters
				fullWidth
				sx={{
					// width: "100%",
					boxSizing: "border-box",
					minHeight: "100vh",
					// outline: "1px solid red",
					// outlineOffset: "-1px",
				}}
			>
				<Box
					components={"div"}
					columnGap={2}
					px={X_PADDING[screenSize]}
					sx={{
						boxSizing: "border-box",

						position: "relative",
						display: "flex",
						flexDirection: smallScreen || mediumScreen ? "column" : "row",
						justifyContent: "space-between",
						// minWidth: `${theme.breakpoints.values.xs}px`,
					}}
				>
					<Header
						width={smallScreen || mediumScreen ? "100%" : "40%"}
						data={{ navigation, personalInformation }}
						screenSize={screenSize}
						py={Y_PADDING[screenSize]}
					/>

					<Main
						width={smallScreen || mediumScreen ? "100%" : "55%"}
						data={{ about, project, experiences }}
						screenSize={screenSize}
						py={mediumScreen || smallScreen ? 1 : Y_PADDING[screenSize]}
					>
						{children}
					</Main>
				</Box>
			</Container>
		</>
	);
};

Layout.propTypes = {
	window: PropTypes.func,
};

export default Layout;
