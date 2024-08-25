import React, { Suspense } from "react";

import ErrorBoundary from "./errorrBoundery";
import { styled } from "@mui/material/styles";
// styles
const LoaderWrapper = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1301;
  width: 100%;
  height: 2px;
  opacity: 0;
`;

// ==============================|| LOADER ||============================== //
const Loader = () => <LoaderWrapper>LOADING</LoaderWrapper>;

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => (props) =>
  (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );

export default Loadable;
