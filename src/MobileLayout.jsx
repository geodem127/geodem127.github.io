import React, { lazy } from "react";

import Layout from "./layout";
import { Box } from "@mui/material";
// import Loadable from "./common/loadable";
import AboutPage from "./pages/about";
import ExperiencesPage from "./pages/experiences";
import ProjectsPage from "./pages/projects";

// const MobileRoutes = Loadable(lazy(() => import("./mobileRoutes")));

const MobileLayout = () => {
  return (
    <Layout>
      <Box
        rowGap={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-between",
          width: "100%",
          flexShrink: 0,
        }}
      >
        <AboutPage />
        <ExperiencesPage />
        <ProjectsPage />
      </Box>
    </Layout>
  );
};

export default MobileLayout;
