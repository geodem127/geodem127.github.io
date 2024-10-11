import React, { useRef, useEffect, useState } from "react";
import {
	useTheme,
	Box,
	Typography,
	styled,
	alpha,
	Container,
	useMediaQuery,
} from "@mui/material";

import usePageScroll from "../hooks/usePageScroll";
import PageRow from "./PageRow";
import { ScrollListener } from "../common/animation";

const PageContainerStyles = styled("section")(({ theme }) => ({
	"& .pageBody": {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
	},

	"& .pageHeader": {
		position: "sticky",
		top: 0,
		"&.isTopMost": {
			zIndex: 1000,
			background: alpha(theme.palette.background.default, 0.1),
			backdropFilter: "blur(15px)",
			borderBottom: ".3px solid rgba(255, 255, 255, .2)",
		},
	},
	"&:last-of-type": {
		marginBottom: "0",
	},
}));

const PageContainer = ({ title = "", rowGap = 0, children, ...otherProps }) => {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
	const targetRef = useRef(undefined);
	const [topMost, setTopMost] = useState(false);

	const { top, bottom, height } = usePageScroll(targetRef?.current);

	useEffect(() => {
		setTopMost(top <= 2);
		return () => {
			setTopMost(false);
		};
	}, [top]);

	return (
		<PageContainerStyles sx={{ mb: "6rem" }}>
			{/* <PageContainerStyles component={"section"}> */}

			{mdScreen && (
				<ScrollListener start={97} activeClassName="isTopMost">
					<Box
						mb={"4rem"}
						py={".75rem"}
						px={smScreen ? "1.15rem" : mdScreen ? "3rem" : 0}
						className="pageHeader"
						// sx={{
						// 	position: "sticky",
						// 	top: 0,
						// }}
					>
						<Typography
							variant={"h4"}
							component={"h4"}
							className="sectionTitle"
							sx={{
								// border: "1px solid green",
								textTransform: "uppercase",

								color: theme.palette.primary.contrastText,

								"&::after": {
									content: '""',
									display: "inline-block",
									width: ".65rem",
									height: ".65rem",
									background: theme.palette.primary.main,
									marginLeft: "0.25rem",
									borderRadius: ".25rem",
								},
							}}
						>
							{title}
						</Typography>
					</Box>
				</ScrollListener>
			)}
			<Box className="pageBody" sx={{ rowGap: rowGap }}>
				{children}
			</Box>
			{/* </PageContainerStyles> */}
		</PageContainerStyles>
	);
};

export default PageContainer;
