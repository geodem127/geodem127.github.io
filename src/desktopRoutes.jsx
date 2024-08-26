import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loadable from "./common/loadable";

const AboutPage = Loadable(lazy(() => import("./pages/about")));
const ExperiencesPage = Loadable(lazy(() => import("./pages/experiences")));
const ProjectsPage = Loadable(lazy(() => import("./pages/projects")));
// const ContactsPage = Loadable(lazy(() => import("./pages/contacts")));
const NotFoundPage = Loadable(lazy(() => import("./pages/notFound")));

const DesktopRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/">
        <Route exact path="" element={<Navigate to="about" replace={true} />} />
        <Route exact path="about" element={<AboutPage />} />
        <Route exact path="projects" element={<ProjectsPage />} />
        <Route exact path="experiences" element={<ExperiencesPage />} />

        <Route exact path="404" element={<NotFoundPage />} />
        <Route exact path="*" element={<Navigate to="404" replace={true} />} />
      </Route> */}
      <Route path="/">
        <Route exact path="" element={<Navigate to="about" replace />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="experiences" element={<ExperiencesPage />} />
        {/* <Route path="contacts" element={<ContactsPage />} /> */}
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="404" replace />} />
      </Route>
    </Routes>
  );
};

export default DesktopRoutes;
