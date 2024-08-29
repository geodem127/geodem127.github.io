// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/userContext";

import Layout from "./layout";
// import { AppThemeProvider } from "./themes";
import StarryNightBackground from "./themes/bg/starryNight";
import { useMediaQuery, useTheme } from "@mui/material";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function App() {
  const theme = useTheme();
  const fullWidth = useMediaQuery(theme.breakpoints.up("md"));
  return (
    // <AppThemeProvider>
    <UserContextProvider>
      {/* <BrowserRouter basename="/"> */}
      <StarryNightBackground />
      {/* <Layout /> */}
      {!!fullWidth ? <DesktopLayout /> : <MobileLayout />}
      {/* </BrowserRouter> */}
    </UserContextProvider>
    // </AppThemeProvider>
  );
}

export default App;
