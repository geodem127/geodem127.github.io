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
	IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import usePageScroll from "../../hooks/usePageScroll";
import { ScrollListener } from "../../common/animation";
import zIndex from "@mui/material/styles/zIndex";
import PageRow from "../PageRow";

const lineGridWidth = {
	sm: 20,
	md: 20,
	lg: 50,
};

const L_PADDING = {
	sm: "1.5rem",
	md: "2rem",
	lg: "3rem",
};

const PageRowStyles = styled(PageRow)(({ theme }) => ({
	"& .slide-left": {
		transformOrigin: "left center",
		transform: "translateX(20%)",
		opacity: 0,
		transition: "all 500ms ease-out 300ms",
		"&.title-in": {
			transform: "translateX(0)",
			opacity: 1,
		},
	},
	"& .slide-up": {
		transformOrigin: "top center",
		transform: "translateY(20%)",
		opacity: 0,
		transition: "all 500ms ease-out 300ms",
		"&.in": {
			transform: "translateY(0)",
			opacity: 1,
		},
	},
	"&:has(+ * .title-in)": {
		// "& .downLinePointer::before": {
		// 	opacity: 1,
		// },
		"& .line": {
			transform: "scaleY(1)",
			opacity: 1,
			borderRadius: 0,
		},
	},
	"&:not(:has(+ * + * .title-in))": {
		// background: "red",
		"& .line": {
			// borderBottomLeftRadius: "100%",
			// borderBottomRightRadius: "100%",
			background: `linear-gradient(${theme.palette.primary.main} 40%, transparent)`,
			// "linear-gradient(transparent, #33b3ae, rgb(51, 179, 174), transparent)",
		},
	},
	"&:has(.title-in)": {
		// "& .downLinePointer::before": {
		// 	opacity: 1,
		// },
		"& .timeLineWrapper": {
			"&::before": {
				opacity: 1,
			},
		},
	},
}));

const TimeLine = styled("div")(({ theme }) => ({
	position: "absolute",
	top: "0",
	left: "0",
	width: "fit-content",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",
	// border: "1px dashed purple",
	paddingRight: ".5rem",
	paddingTop: ".15rem",
	"&::before": {
		content: "''",
		width: "1.75rem",
		height: "1.75rem",
		position: "absolute",
		top: "-.25rem",
		left: "-.5rem",
		background: theme.palette.primary.light,
		filter: "blur(15px)",
		borderRadius: "50%",
		transition: "transform 300ms ease-in",
		opacity: 0,
	},

	"& .pointer": {
		position: "relative",
		width: "1rem",
		aspectRatio: 1,
		overflow: "visible",
		clipPath:
			"polygon(50% 21%, 80% 36%, 80% 64%, 51% 80%, 21% 65%, 21% 37%, 50% 21%, 50% 0%, 50% 0%, 49.529% 0.011%, 49.058% 0.044%, 48.589% 0.098%, 48.123% 0.174%, 47.66% 0.272%, 47.202% 0.391%, 46.75% 0.532%, 46.305% 0.695%, 45.868% 0.878%, 45.44% 1.083%, 4.56% 22.034%, 4.56% 22.034%, 3.747% 22.504%, 3.003% 23.041%, 2.331% 23.64%, 1.737% 24.295%, 1.223% 24.999%, 0.793% 25.746%, 0.452% 26.531%, 0.204% 27.347%, 0.052% 28.189%, 0% 29.05%, 0% 70.95%, 0% 70.95%, 0.052% 71.811%, 0.204% 72.653%, 0.452% 73.469%, 0.793% 74.254%, 1.223% 75.001%, 1.737% 75.705%, 2.331% 76.36%, 3.003% 76.959%, 3.747% 77.496%, 4.56% 77.966%, 45.44% 98.917%, 45.44% 98.917%, 45.868% 99.122%, 46.304% 99.305%, 46.748% 99.468%, 47.199% 99.609%, 47.656% 99.728%, 48.118% 99.826%, 48.585% 99.902%, 49.054% 99.956%, 49.526% 99.989%, 50% 100%, 50% 100%, 50.474% 99.989%, 50.946% 99.956%, 51.415% 99.902%, 51.882% 99.826%, 52.344% 99.728%, 52.801% 99.609%, 53.252% 99.468%, 53.696% 99.305%, 54.132% 99.122%, 54.56% 98.917%, 95.44% 77.966%, 95.44% 77.966%, 96.253% 77.496%, 96.997% 76.959%, 97.669% 76.36%, 98.263% 75.705%, 98.778% 75.001%, 99.207% 74.254%, 99.548% 73.469%, 99.796% 72.653%, 99.948% 71.811%, 100% 70.95%, 100% 29.059%, 100% 29.059%, 99.948% 28.198%, 99.796% 27.356%, 99.548% 26.54%, 99.207% 25.755%, 98.778% 25.008%, 98.263% 24.304%, 97.669% 23.649%, 96.997% 23.05%, 96.253% 22.513%, 95.44% 22.043%, 54.56% 1.083%, 54.56% 1.083%, 54.132% 0.878%, 53.696% 0.695%, 53.252% 0.532%, 52.801% 0.391%, 52.344% 0.272%, 51.882% 0.174%, 51.415% 0.098%, 50.946% 0.044%, 50.474% 0.011%, 50% 0%, 50% 0%)",

		background: theme.palette.primary.main,
		boxShadow: `0 0 0 1px ${alpha(theme.palette.primary.main, 0.15)}`,
	},
	"& .line": {
		background: theme.palette.primary.main,
		height: "100%",
		transformOrigin: "top center",

		marginTop: "-2px",
		transform: "scaleY(0)",
		opacity: 0,
		transition: "all 500ms ease-out",
	},
}));

const ExperienceDetails = ({ data = {} }) => {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
	const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));

	const [readMore, setReadMore] = useState(false);
	const [experienceDescrtion, setExperienceDescrtion] = useState(
		data?.jobDescription
	);

	const readMoreHidden = data?.jobDescription?.length <= 200;
	const ReadMoreIcon = () =>
		readMore ? <ExpandLessIcon /> : <ExpandMoreIcon />;
	const headerText = (
		data?.role + (!!data?.company ? ` ⬩ ${data?.company}` : "")
	)?.trim();
	useEffect(() => {
		if (!readMore) {
			const parsedDescrtion =
				data?.jobDescription?.length > 200
					? `${data?.jobDescription?.substring(0, 200)?.trim()}... `
					: data?.jobDescription;
			setExperienceDescrtion(parsedDescrtion);
		} else {
			setExperienceDescrtion(data?.jobDescription);
		}
	}, [readMore]);

	const leftPadding = smScreen
		? L_PADDING?.sm
		: mdScreen
		? L_PADDING?.md
		: L_PADDING?.lg;

	const colSpacer =
		lineGridWidth?.[smScreen ? "sm" : mdScreen ? "md" : "lg"] || 60;

	return (
		<PageRowStyles>
			<Box
				sx={{
					pl: leftPadding,
					// border: "1px dashed blue",
					pb: "4rem",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "stretch",
					width: "100%",
					// border: "1px dashed orange",
					position: "relative",
					// p: "1rem",
				}}
			>
				<TimeLine
					className="timeLineWrapper"
					style={
						{
							// width: leftPadding,
							// transform: `translateX(-100%)`,
						}
					}
				>
					<div className="pointer"></div>
					<div
						className="line"
						style={{
							width: mdScreen ? "2px" : "3px",
						}}
					></div>
				</TimeLine>
				<Typography
					variant="subtitle2"
					color="text.primary"
					sx={{
						padding: "0 0 .5rem 0",
						lineHeight: 1.5,
						textTransform: "uppercase",
					}}
				>
					{data?.period}
				</Typography>
				<ScrollListener activeClassName="title-in" start={15}>
					<Box className="slide-left">
						<Typography variant="h5" color="text.secondary">
							{data?.role}
						</Typography>
						<Typography variant="subtitle1" color="primary.light">
							{`@${data?.company}`}
						</Typography>
						{/* </Box> */}
						{/* </ScrollListener> */}
						{/* <Divider sx={{ my: 1 }} /> */}
						{/* <ScrollListener activeClassName="in" start={15}> */}
						{/* <Box className="slide-up"> */}
						<Typography
							variant="body1"
							py={2}
							sx={{
								textAlign: "justify",
								whiteSpace: "pre-wrap",
								textWrap: "wrap",
								transition: "all 400ms ease-out",
								hyphens: "auto",
							}}
						>
							{/* {data?.jobDescription} */}
							{experienceDescrtion}
							{!readMoreHidden && (
								<IconButton
									aria-label="Read more"
									size="small"
									// onClick={openModal}
									color="text.primary"
									onClick={() => {
										setReadMore(!readMore);
									}}
									sx={{
										fontSize: ".85rem",
										background: "transparent",
										borderRadius: "6px",
										position: "absolute",
										right: 0,
									}}
								>
									{readMore ? "Hide" : "Read more"}
									<ReadMoreIcon fontSize="inherit" sx={{ mr: "4px" }} />
								</IconButton>
							)}
						</Typography>
						<Divider sx={{ mt: 4, mb: 1 }} />
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
				</ScrollListener>
			</Box>
		</PageRowStyles>
	);
};

export default ExperienceDetails;
