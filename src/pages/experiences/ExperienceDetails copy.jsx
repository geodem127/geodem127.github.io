import React, { useState, useRef, useEffect } from "react";
import {
	useTheme,
	useMediaQuery,
	styled,
	Box,
	Typography,
	Grid,
	Chip,
	Divider,
	Fade,
	alpha,
} from "@mui/material";

import usePageScroll from "../../hooks/usePageScroll";
import Animation, {
	AnimationScroll,
	ScrollListener,
} from "../../common/animation";
import zIndex from "@mui/material/styles/zIndex";
import PageRow from "../PageRow";

const lineGridWidth = {
	sm: 20,
	md: 20,
	lg: 50,
};

const PageRowStyles = styled(PageRow)(({ theme }) => ({
	// padding: "1rem 0 5rem 0",
	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-start",
	// alignItems: "stretch",
	// width: "100%",
	height: "auto",
	position: "relative",
	// border: "1px dashed orange",
	boxSizing: "border-box",
	// outlineOffset: "-2px",

	"&:not(:has(+ * + * .role.in))": {
		// background: "red",
		"& .downLine": {
			clipPath: "polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)",
		},
	},

	"&:has(+ * .role.in)": {
		// "& .downLinePointer::before": {
		// 	opacity: 1,
		// },
		"& .downLine": {
			transform: "scaleY(1)",
		},
	},
	"&:has(.role.in)": {
		// "& .downLinePointer::before": {
		// 	opacity: 1,
		// },

		"& .downLinePointer::before": {
			opacity: 1,
		},
	},
	// "&:has(.role.in)": {
	// 	"& .downLinePointer::before": {
	// 		opacity: 1,
	// 	},
	// },

	// "&:not(:has(+ *:last-child))": {
	// 	background: "red",
	// 	"& .downLine": {
	// 		clipPath: "polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)",
	// 	},
	// },
	// "& + *:has(.in)": {
	// 	background: "red",
	// 	"& .downLine": {
	// 		clipPath: "polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)",
	// 	},
	// },
	"& .slideUp": {
		opacity: 0,
		transform: "translateY(50px)",
		transition: "all 500ms ease-out",
		"&.in": {
			opacity: 1,
			transform: "translateY(0)",
		},
	},
}));

const GridColumnsLeft = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",
	height: "100%",
	// width: `${lineGridWidth}px`,
	position: "absolute",
	top: "0",
	left: "0",
	padding: ".85rem 0 0 0",
	// outline: "1px dashed orange",
	// outlineOffset: "-1px",
	// "&:not(:has(.in))": {
	// 	background: "red",
	// 	"& .downLine": {
	// 		clipPath: "polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)",
	// 	},
	// },
	"& .downLinePointer": {
		width: "20x",
		height: "23px",
		// border: `2px solid red`,
		paddingBottom: "3px",
		flexGrow: 0,
		flexShrink: 0,
		color: theme.palette.primary.main,
		fontSize: "2.1rem",
		// lineHeight: ,
		display: "flex",
		// flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		fontWeight: 600,
		position: "relative",
		// background: "red",
		// position: "absolute",
		// top: "0",
		// left: "50%",
		// zIndex: "0",
		"&::before": {
			content: "''",
			width: "100%",
			height: "100%",
			position: "absolute",
			top: "0",
			left: "0",
			background: theme.palette.primary.light,
			// background: "red",
			filter: "blur(15px)",
			// transform: "scale(0)",
			transition: "transform 300ms ease-in",
			opacity: 0,
		},
		// "&:not(:has( + .in))": {
		// 	background: "red",
		// 	"& .downLine": {
		// 		clipPath:
		// 			"polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)",
		// 	},
		// },

		"&:has(+ .in)": {
			// "& + .downLine": {
			// 	clipPath:
			// 		"polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)",

			// },
			"&::before": {
				// content: "''",
				// width: "100%",
				// height: "100%",
				// position: "absolute",
				// top: "0",
				// left: "0",
				// background: theme.palette.secondary.light,
				// filter: "blur(10px)",

				transform: "scale(1)",
			},

			zIndex: -1,
		},
	},
	"& .downLine": {
		width: "1px",
		flexGrow: 1,
		background: theme.palette.primary.main,
		transformOrigin: "top center",
		transform: "scaleY(0)",
		transition: "all 400ms linear",
		// position: "absolute",
		// top: "0",
		// left: "50%",
		// zIndex: "0",
	},
}));
const GridColumnsRight = styled(Box)(({ theme }) => {
	return {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "stretch",
		height: "100%",
		width: "100%",
		// outline: "1px dashed red",
		// outlineOffset: "-1px",
		// paddingLeft: `${lineGridWidth}px`,
		// border: "1px dashed purple",
		// outline: "1px solid red",
		// outlineOffset: "-1px",
		"&::before": {
			content: '""',
			position: "absolute",
			// left: `"${leftpadding}"`,
			top: "1rem",
			right: 0,
			bottom: "3rem",
			margin: "-1rem",
			// left: 0,
			borderRadius: "6px",
			backgroundColor: "rgba(30, 41, 59, 0.15)",
			border: "1px solid rgba(229, 231, 235,.08)",
			// background: "red",
			//  alpha(theme.palette.background.paper, 0.1),
			zIndex: 0,
			opacity: 0,
			transition: "opacity 200ms ease-in",
		},
		"&.hasHover": {
			"&:hover": {
				"&::before": {
					opacity: 1,
				},
			},
		},
	};
});

const ExperienceDetails = ({ data = {}, end = false }) => {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
	const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
	const headerText = (
		data?.role + (!!data?.company ? ` ⬩ ${data?.company}` : "")
	)?.trim();

	const colSpacer =
		lineGridWidth?.[smScreen ? "sm" : mdScreen ? "md" : "lg"] || 60;

	return (
		<PageRowStyles>
			{/* <SectionStyles className="experienceDetails"> */}
			{/* <GridColumnsLeft sx={{ width: `${colSpacer}px` }}> */}
			<GridColumnsLeft
				className="downLineWrapper ol-r"
				sx={{ width: `${colSpacer}px`, ml: smScreen ? "-.25rem" : "0" }}
			>
				{/* <Box className="downLineWrapper"> */}
				<div className="downLinePointer">⬡</div>
				{/* <Animation start={80} animation="collapseDown">
						<div className="downLine"></div>
					</Animation> */}
				{/* {!end && (
					<AnimationScroll start={50} animation="collapseDown">
						<div className="downLine"></div>
					</AnimationScroll>
				)} */}
				<div className="downLine"></div>
				{/* </Box> */}
			</GridColumnsLeft>
			<GridColumnsRight
				sx={{
					paddingLeft: `calc(${colSpacer}px + .25rem)`,
					// `${colSpacer + 8}px`,
					"&::before": {
						left: `calc(${colSpacer}px + .5rem)`,
					},
				}}
				className={`${lgScreen ? "hasHover" : ""}`}
				// leftpadding={`${colSpacer + 10}px`}
			>
				<Typography
					variant="subtitle2"
					color="text.primary"
					sx={{ padding: 0, lineHeight: 1.5, textTransform: "uppercase" }}
				>
					{data?.period}
				</Typography>
				<AnimationScroll start={10} animation="slideLeft">
					<Box
						py={1}
						className="role"
						// className={`descriptionGroup ${lgScreen ? "hasHover" : ""}`}
					>
						<Typography variant="h5" color="text.secondary">
							{data?.role}
							{/* <span
                  style={{ color: theme.palette.text.primary }}
                >{` ⬩ `}</span>
                {data?.company} */}
						</Typography>
						<Typography variant="subtitle1" color="primary">
							{data?.company}
						</Typography>
					</Box>
				</AnimationScroll>
				{/* <AnimationScroll start={20} animation="slideUp"> */}
				<ScrollListener start={15} activeClassName="in">
					<Box className="slideUp">
						{/* <Divider sx={{ my: 1 }} /> */}
						<Box
							py={2}
							sx={{
								textAlign: "justify",
								whiteSpace: "pre-wrap",
								textWrap: "wrap",
							}}
						>
							{data?.jobDescription}
						</Box>
						<Box>
							<Divider sx={{ mt: 1, mb: 3 }} />
							{data?.technologies?.map((tech, index2) => (
								<Chip
									key={index2}
									label={tech}
									sx={{
										margin: "3px",
										// background: "rgba(45, 212, 191, 0.1)",
										background: alpha(theme.palette.background.paper, 0.1),
										color: theme.palette.primary.light,
									}}
								/>
							))}
						</Box>
					</Box>
				</ScrollListener>
				{/* </AnimationScroll> */}
			</GridColumnsRight>
			{/* </SectionStyles> */}
		</PageRowStyles>
	);
};

export default ExperienceDetails;
