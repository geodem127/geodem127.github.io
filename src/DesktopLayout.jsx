import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";

import RootRoutes from "./routes";

const DesktopLayout = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Layout>
          <RootRoutes />
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default DesktopLayout;
