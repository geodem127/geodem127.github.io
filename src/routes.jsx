import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loadable from "./common/loadable";
// import AboutPage from "./pages/about";
// import ExperiencesPage from "./pages/experiences";
// import ProjectsPage from "./pages/projects";
// import NotFoundPage from "./pages/notFound";

//PAGE IMPORTS

const AboutPage = Loadable(lazy(() => import("./pages/about")));
const ExperiencesPage = Loadable(lazy(() => import("./pages/experiences")));
const ProjectsPage = Loadable(lazy(() => import("./pages/projects")));
const NotFoundPage = Loadable(lazy(() => import("./pages/notFound")));

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route exact path="" element={<Navigate to="about" replace={true} />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="experiences" element={<ExperiencesPage />} />

        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Route>
    </Routes>
  );
};

export default RootRoutes;
