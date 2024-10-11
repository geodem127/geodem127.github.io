import React, { lazy } from "react";

import Layout from "./layout";
import { Box } from "@mui/material";
// import Loadable from "./common/loadable";
import AboutPage from "./pages/about";
import ExperiencesPage from "./pages/experiences";
import ProjectsPage from "./pages/projects";
import ContactsPage from "./pages/contacts";

// const MobileRoutes = Loadable(lazy(() => import("./mobileRoutes")));
// const AboutPage = Loadable(lazy(() => import("./pages/about")));
// const ExperiencesPage = Loadable(lazy(() => import("./pages/experiences")));
// const ProjectsPage = Loadable(lazy(() => import("./pages/projects")));

const MobileLayout = () => {
	return (
		<Layout>
			{/* <Box
				id="mobile-layout-box"
				rowGap={10}
				sx={{
					display: "flex",
					flexDirection: "column",
					flexGrow: 1,
					justifyContent: "space-between",
					width: "100%",
					flexShrink: 0,
				}}
			> */}
			<AboutPage />
			<ExperiencesPage />
			<ProjectsPage />
			<ContactsPage />
			{/* <MobileRoutes /> */}
			{/* </Box> */}
		</Layout>
	);
};

export default MobileLayout;
