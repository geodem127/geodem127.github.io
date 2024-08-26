import React, { lazy } from "react";
import Layout from "./layout";
import Loadable from "./common/loadable";
const AboutPage = Loadable(lazy(() => import("./pages/about")));
const ExperiencesPage = Loadable(lazy(() => import("./pages/experiences")));
const ProjectsPage = Loadable(lazy(() => import("./pages/projects")));
const MobileLayout = () => {
  return (
    <Layout>
      <AboutPage />
      <ExperiencesPage />
      <ProjectsPage />
    </Layout>
  );
};

export default MobileLayout;
