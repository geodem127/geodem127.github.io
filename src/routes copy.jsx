import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loadable from "./common/loadable";
// import Loadable from './components/Loadable';

//PAGE IMPORTS

const AboutPage = Loadable(lazy(() => import("./pages/about")));
const ExperiencesPage = Loadable(lazy(() => import("./pages/experiences")));
const ProjectsPage = Loadable(lazy(() => import("./pages/projects")));
// const HeroPage = Loadable(lazy(() => import("./pages/hero")));
const NotFoundPage = Loadable(lazy(() => import("./pages/notFound")));
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const RootRoutes = () => {
  const theme = useTheme();
  const fullWidth = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {fullWidth ? (
        <>
          <AboutPage />
          <ExperiencesPage />
          <ProjectsPage />
        </>
      ) : (
        <Routes>
          <Route exact path="/">
            <Route exact path="" element={<Navigate to="about" />} />
            <Route exact path="about" element={<AboutPage />} />
            <Route exact path="projects" element={<ProjectsPage />} />
            <Route exact path="experiences" element={<ExperiencesPage />} />
            {/* <Route exact path="hero" element={<HeroPage />} /> */}
            <Route exact path="404" element={<NotFoundPage />} />
            {/* <Route exact path="/network-error" element={<NetworkError />} /> */}
            <Route exact path="*" element={<Navigate to="404" replace />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default RootRoutes;
