import React, { useState, useEffect } from "react";
import {
	Box,
	Button,
	Divider,
	IconButton,
	styled,
	Tooltip,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import LaunchIcon from "@mui/icons-material/Launch";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
	SourceCodeIcon,
	LaunchNewWindowIcon,
} from "../../common/CustomSvgIcons";
import LaunchIcon from "@mui/icons-material/Launch";
import ProjectTechStack from "./ProjectTechStack";
import Animation, { ScrollListener } from "../../common/animation";

const TitleDivider = styled("div")(({ theme }) => ({
	height: "1px",
	flexGrow: 1,
	//   backgroundColor: theme.palette.divider,
	backgroundColor: theme.palette.primary.main,
}));
export const LinkContainer = styled(Box)(({ theme }) => ({
	// height: "1px",
	flexGrow: 0,

	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-end",
	alignItems: "center",
	position: "relative",
	"&::before": {
		content: "''",
		width: "40%",
		height: "2px",
		background: theme.palette.divider,
		marginRight: "1rem",
	},
}));

export const LinkButtonStyles = styled(Button)(({ theme }) => ({
	padding: ".35rem",
	minWidth: 0,
	color: theme.palette.text.primary,
}));

const DetailsBox = ({ proj, openModal }) => {
	// const theme = useTheme();
	// const targetRef = useRef(undefined);
	// const [inRange, setInRange] = useState(false);
	// const { top } = usePageScroll(targetRef?.current);
	const [readMore, setReadMore] = useState(false);
	// const [hidereadMore, setHidereadMore] = useState(false);
	const [projectDescrtion, setProjectDescrtion] = useState(proj?.description);
	// const parsedDescrtion =
	// 	proj?.description?.length > 200
	// 		? `${proj?.description?.substring(0, 200)}... `
	// 		: proj?.description;

	const readMoreHidden = proj?.description?.length <= 200;
	const ReadMoreIcon = () =>
		readMore ? <ExpandLessIcon /> : <ExpandMoreIcon />;

	useEffect(() => {
		if (!readMore) {
			const parsedDescrtion =
				proj?.description?.length > 200
					? `${proj?.description?.substring(0, 200)}... `
					: proj?.description;
			setProjectDescrtion(parsedDescrtion);
		} else {
			setProjectDescrtion(proj?.description);
		}
	}, [readMore]);

	return (
		<Box
		// className={inRange ? "animation-slideup" : ""}
		// sx={{ border: "1px solid red" }}
		// ref={targetRef}
		>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				columnGap={2}
				mt={2}
				sx={{
					width: "100%",
				}}
			>
				<Typography variant="h4" color="text.secondary">
					{proj?.name}
				</Typography>
				<TitleDivider />
			</Box>

			<ScrollListener activeClassName="in" start={15}>
				<Box
					className="_sanimation-slideUp"
					display="flex"
					flexDirection="column"
					justifyContent="flex-start"
					alignItems="stretch"
					py={2}
					sx={{
						width: "100%",
					}}
				>
					<ProjectTechStack techStack={proj?.technologies} />
					<Typography
						variant="p"
						component="p"
						mt={2}
						sx={{
							overflow: "hidden",

							textAlign: "justify",
						}}
					>
						{/* {proj?.description} */}
						{/* {parsedDescrtion} */}
						{projectDescrtion}
						{!readMoreHidden && (
							<IconButton
								aria-label="Read more"
								size="small"
								// onClick={openModal}
								onClick={() => {
									setReadMore(!readMore);
								}}
								sx={{
									fontSize: ".85rem",
									background: "transparent",
									borderRadius: "6px",
								}}
							>
								{readMore ? "Hide" : "Read more"}
								<ReadMoreIcon fontSize="inherit" sx={{ mr: "4px" }} />
							</IconButton>
						)}

						{/* <Button component="a" href="/" style={{ marginLeft: "1rem" }}>
              Read more
            </Button> */}
					</Typography>
					{/* <Divider /> */}
				</Box>
			</ScrollListener>

			<LinkContainer pt={3} pb={1}>
				<Tooltip title="Source Code" placement="top" arrow>
					<LinkButtonStyles
						component={"a"}
						href={proj?.sourceLink?.url}
						target="_blank"
					>
						{/* <SettingsEthernetIcon fontSize="medium" /> */}
						<SourceCodeIcon
							color="text.primary"
							fontSize="medium"
							sx={{ opacity: 0.5 }}
						/>
					</LinkButtonStyles>
				</Tooltip>
				<Tooltip title="Launch Demo" placement="top" arrow>
					<LinkButtonStyles
						component={"a"}
						target="_blank"
						href={proj?.demoLink?.url}
					>
						<LaunchNewWindowIcon
							color="text.primary"
							fontSize="medium"
							sx={{ opacity: 0.5 }}
						/>
					</LinkButtonStyles>
				</Tooltip>
			</LinkContainer>
		</Box>
	);
};

export default DetailsBox;
