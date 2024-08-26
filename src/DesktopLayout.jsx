import React from "react";
import { HashRouter } from "react-router-dom";
import Layout from "./layout";

import DesktopRoutes from "./desktopRoutes";

const DesktopLayout = () => {
  return (
    <>
      <HashRouter>
        <Layout>
          <DesktopRoutes />
        </Layout>
      </HashRouter>
    </>
  );
};

export default DesktopLayout;
