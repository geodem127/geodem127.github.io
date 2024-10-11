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
import Animation from "../../common/animation";

const SectionStyles = styled(Box)(({ theme }) => ({
	background: "transparent",
	border: 0,
	boxShadow: "none",
	overflow: "visible",
	position: "relative",
	cursor: "pointer",
	padding: "0",
	"& .periodLabel": {
		width: "0px",
		height: "0px",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		zIndex: "200",
		boxShadow: `0px 0px 40px 15px ${theme.palette.primary.main}`,
		WebkitBoxShadow: `0px 0px 40px 15px ${theme.palette.primary.main}`,
		MozBoxShadow: `0px 0px 40px 15px ${theme.palette.primary.main}`,
	},

	"& .periodLine": {
		width: "2px",
		height: 0,
		position: "absolute",
		left: "50%",
		zIndex: "0",
		background: `linear-gradient(180deg, ${theme?.palette.primary.dark} 0%, ${theme?.palette.primary.light} 100%)`,
		backgroundAttachment: "fixed",
		opacity: 0.5,
		overflow: "hidden",
		transition: "all 400ms linear",
	},

	"&.inRange": {
		"& .periodLine": {
			overflow: "visible",

			height: "100%",

			"&::before": {
				height: "1rem",
			},
		},
		"&:last-child .periodLine": {
			height: "calc(100% - 5rem)",
		},

		"&:not(:has(+ .inRange))": {
			"& .periodLine": {
				clipPath:
					"polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)",
			},
		},
	},
	"&.isMobile": {
		paddingLeft: "2.5rem",
		"&::before": {
			content: '""',
			position: "absolute",
			left: "0",
			top: "1.25rem",
			width: "1rem",
			height: "1rem",
			transition: "height 200ms linear",
			background: `linear-gradient(180deg, ${theme?.palette.primary.dark} 0%, ${theme?.palette.primary.main} 50%, ${theme?.palette.primary.light} 100%)`,
			clipPath:
				"polygon(50% 100%, 100% 75%, 100% 25%, 50.75% 0%, 50% 19.37%, 82.95% 33.68%, 82.95% 66.48%, 50% 81.23%, 17.05% 66.48%, 17.37% 33.68%, 50% 19.37%, 50.75% 0%, 0% 25%, 0% 75%)",
		},
		"&::after": {
			content: '""',
			position: "absolute",
			left: ".38rem",
			top: "2.25rem",
			width: "2px",
			height: "0",
			transition: "all 200ms linear",
			background: `linear-gradient(180deg, ${theme?.palette.primary.dark} 0%, ${theme?.palette.primary.light} 100%)`,
			backgroundAttachment: "fixed",
		},
		"&.inRange": {
			"&::after": {
				height: "100%",
			},
			"&:not(:has(+ .inRange))": {
				"&::after": {
					height: "calc(100% - 2.15rem)",
					clipPath:
						"polygon(400% -3rem, 100% 50%, 50% 100%, 0% 50%, -400% -3rem)",
				},
			},
		},
	},
	"& .descriptionBoxWrapper": {
		position: "relative",
		// outlineOffset: "-1px",
		overflow: "visible",
		"&::before": {
			content: '""',
			position: "absolute",
			left: 0,
			top: 0,
			right: 0,
			bottom: 0,
			margin: "-.5rem",

			borderRadius: "4px",
			// backgroundColor: "rgba(30, 41, 59, 0.15)",
			border: "1px solid rgba(229, 231, 235,.08)",
			background: alpha(theme.palette.background.paper, 0.05),
			zIndex: 0,
			opacity: 0,
			transition: "opacity 200ms ease-in",
		},
	},
	"&:not(.isMobile, .isTablet) .descriptionBoxWrapper": {
		"&:hover": {
			"&::before": {
				opacity: 0.8,
			},
		},
	},
	"&:first-of-type, &:last-of-type": { marginTop: "0", marginBottom: "0" },
	"@keyframes animateDescription": {
		from: {
			opacity: 0,
			scale: 0.5,
		},
		to: {
			opacity: 1,
			scale: 1,
		},
	},
}));

const ExperienceSection = ({
	data = {},
	end = false,
	index,

	...other
}) => {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
	// const slideContainerRef = useRef(null);
	const targetRef = useRef(undefined);
	const { top } = usePageScroll(targetRef?.current);

	const [inRange, setInRange] = useState(false);

	const headerText = (
		data?.role + (!!data?.company ? ` ⬩ ${data?.company}` : "")
	)?.trim();

	useEffect(() => {
		setInRange(top < 80);
	}, [top]);

	return (
		<>
			<SectionStyles
				{...other}
				my={smScreen ? "2rem" : "5rem"}
				className={`${!!inRange ? "inRange" : ""}${
					!!smScreen ? " isMobile" : !!mdScreen ? " isTablet" : ""
				}`}
				ref={targetRef}
			>
				<Grid
					container
					columnSpacing={0}
					rowSpacing={0}
					width={"100%"}
					height={"100%"}
				>
					<Grid item xs={12} sm={2} md={2} lg={2}>
						{!smScreen && (
							<Box
								display={"flex"}
								flexDirection={"column"}
								justifyContent={"flex-start"}
								alignItems={"center"}
								sx={{
									width: "75%",
									height: "100%",
									position: "relative",

									pt: "2rem",
								}}
							>
								<Typography variant="h6" component="h6" className="periodLabel">
									{data?.year}
								</Typography>

								<div
									className="periodLine"
									style={{
										top: smScreen ? "2rem" : "4.5rem",

										...(smScreen && { transform: "translate(-50% -50%)" }),
									}}
								></div>
							</Box>
						)}
					</Grid>
					<Grid
						item
						xs={12}
						sm={10}
						md={10}
						lg={10}
						spacing={0}
						gap={0}
						sx={{
							position: "relative",
						}}
					>
						<Box
							component={"div"}
							className="descriptionBoxWrapper"
							sx={{
								boxSizing: "border-box",
								display: "flex",
								flexDirection: "column",
								p: smScreen ? "1rem 0" : "1rem",

								overflow: "hidden",

								// mr: mdScreen ? "1rem" : "0",
							}}
						>
							{!!smScreen && (
								<Box
									display={"flex"}
									flexDirection={"row"}
									justifyContent={"flex-start"}
									alignItems={"center"}
									pb={1}
									columnGap={1}
								>
									<Typography variant="subtitle1" component="subtitle1">
										{data?.year}
									</Typography>
									<div
										style={{
											width: "3rem",
											height: "1px",
											background: theme.palette.divider,
										}}
									></div>
								</Box>
							)}

							<Typography
								variant="h5"
								color="text.secondary"
								className="timelineDescriptionHeader"
								mb={1.5}
							>
								{/* {headerText} */}
								{/* {data?.role +
                  (!!data?.company ? (<span>⬩</span>)` ${data?.company}` : "")} */}
								{data?.role}
								<span
									style={{ color: theme.palette.text.primary }}
								>{` ⬩ `}</span>
								{data?.company}
							</Typography>

							<Animation start={90} animation="slideUp">
								<Box sx={{ overflow: "hidden" }}>
									<Box
										sx={{
											overflow: "hidden",
											mb: 1.5,
										}}
									>
										{/* <Animation start={90} animation="slideUp"> */}
										<Typography
											component={"p"}
											variant={"p"}
											color="text.primary"
											// className={`timelineDescriptionDetails ${
											//   inRange ? "animation-slideup" : ""
											// }`}
											className={`timelineDescriptionDetails`}
											sx={{
												textAlign: "justify",
												whiteSpace: "pre-wrap",
												textWrap: "wrap",
											}}
										>
											{data?.jobDescription}
										</Typography>
										{/* </Animation> */}
									</Box>
									<Box className="techStack">
										<Divider sx={{ my: 1 }} />
										{data?.technologies?.map((tech, index2) => (
											<Chip
												label={tech}
												sx={{
													margin: "3px",
													// background: "rgba(45, 212, 191, 0.5)",
													backgroundColor: "red",
													color: "rgb(94, 234, 212)",
												}}
											/>
										))}
										{/* <Fade
                        in={inRange}
                        timeout={500}
                        style={{
                          transitionDelay: inRange
                            ? `${30 * index2 + 1}ms`
                            : "0ms",
                        }}
                        key={index2}
                      >
                        <Chip
                          label={tech}
                          sx={{
                            margin: "3px",
                            background: "rgba(45, 212, 191, 0.1)",
                            color: "rgb(94, 234, 212)",
                          }}
                        />
                      </Fade> */}
									</Box>
								</Box>
							</Animation>
						</Box>
					</Grid>
				</Grid>
			</SectionStyles>
		</>
	);
};

export default ExperienceSection;
