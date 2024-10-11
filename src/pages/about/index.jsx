import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	Box,
	Button,
	styled,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

import { UserContext } from "../../context/userContext";
import SectionWrapper from "../SectionWrapper";
import TechStack from "./TechStack";
import PageContainer from "../PageContainer";
import PageRow from "../PageRow";

// const TechStack = lazy(() => import("./TechStack"));

const AboutStyles = styled(Typography)(({ theme }) => ({
	hyphens: "auto",
	"& .highlighted": {
		color: theme.palette.text.secondary,
		fontWeight: 600,
		whiteSpace: "line-break",
		// hyphens: "auto",
	},
}));

const AboutPage = () => {
	const theme = useTheme();
	const [aboutData, setAboutData] = useState(null);
	const [techStackData, setTechStackData] = useState(null);
	const { about, techStack } = useContext(UserContext);

	const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mdScreen = useMediaQuery(theme.breakpoints.down("md"));

	useEffect(() => {
		if (!about || !techStack) return;

		const parsedAbout = about
			?.replace(/\*\*\{/g, "<span class='highlighted'>")
			?.replace(/\}*\*/g, "</span>");

		setAboutData(parsedAbout);
		setTechStackData(techStack);
	}, [about, techStack]);

	return (
		<PageContainer title="about">
			{/* {!!aboutData && !!techStackData && (
				<AboutPageStyles
					component={"div"}
					sx={{
						minHeight: "100%",
						flexGrow: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "stretch",
						position: "relative",
					}}
				>
					<Typography
						flexGrow={0}
						component={"p"}
						variant={"p"}
						className="animation-slideup"
						sx={{
							whiteSpace: "pre-wrap",
							textAlign: "justify",
							"&:first-letter": {
								color: theme.palette.primary.contrastText,
								fontSize: "3rem",
								lineHeight: 1,
								borderRadius: ".4rem",
								fontWeight: 500,
								margin: "0 .5rem 0 0",
								padding: "0 .45rem",
								float: "left",
								backgroundColor: theme.palette.background.paper,
							},
						}}
						dangerouslySetInnerHTML={{ __html: aboutData }}
					></Typography>
					<Box
						flexGrow={0}
						display="flex"
						flexDirection="row"
						justifyContent="center"
						alignItems="center"
					>
						<Typography variant="h6" pt={8} pb={3}>
							<span style={{ color: theme.palette.primary.main }}>{"< "}</span>
							Tech-Stack
							<span style={{ color: theme.palette.primary.main }}>{" />"}</span>
						</Typography>
					</Box>
					<Box
						id={`techStackContainer`}
						flexGrow={smallScreen || mediumScreen ? 0 : 1}
						sx={{
							margin: 0,
							display: "grid",
							placeItems: "center",
						}}
					>
						<TechStack techStack={techStack} />
					</Box>
				</AboutPageStyles>
			)} */}
			<PageRow>
				<AboutStyles
					flexGrow={0}
					component={"p"}
					variant={"p"}
					className="animation-slideup"
					sx={{
						whiteSpace: "pre-wrap",
						textAlign: "justify",
						"&:first-letter": {
							color: theme.palette.primary.contrastText,
							fontSize: "3rem",
							lineHeight: 1,
							borderRadius: ".4rem",
							fontWeight: 500,
							margin: "0 .5rem 0 0",
							padding: "0 .45rem",
							float: "left",
							backgroundColor: theme.palette.background.paper,
						},
					}}
					dangerouslySetInnerHTML={{ __html: aboutData }}
				></AboutStyles>
			</PageRow>
			<PageRow align="center">
				<Typography variant="h6" pt={8}>
					<span style={{ color: theme.palette.primary.main }}>{"< "}</span>
					Tech-Stack
					<span style={{ color: theme.palette.primary.main }}>{" />"}</span>
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
					}}
				>
					<TechStack techStack={techStack} />
				</Box>
			</PageRow>
		</PageContainer>
	);
};

AboutPage.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * Remove this when copying and pasting into your project.
	 */
	data: PropTypes.any,
	id: PropTypes.string,
	window: PropTypes.func,
};
export default AboutPage;
