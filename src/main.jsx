import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppThemeProvider } from "./themes";
import UserContextProvider from "./context/userContext";
// import ErrorBoundary from "./common/errorrBoundery";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppThemeProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
