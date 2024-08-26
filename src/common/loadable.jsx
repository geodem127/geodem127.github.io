import React, { Suspense } from "react";
// import { useTheme, alpha } from "@mui/material";
// import LoadingPage from "./loadingPage";
import ErrorBoundary from "./errorrBoundery";

const Loadable = (Component) => (props) => {
  // const theme = useTheme();
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          // <LoadingPage
          //   color={alpha(theme?.palette?.text.primary, 0.5)}
          //   size="sm"
          // />
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "grid",
              placeContent: "center",
            }}
          >
            Loading...
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Loadable;
