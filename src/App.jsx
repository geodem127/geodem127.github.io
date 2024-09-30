import { useMediaQuery, useTheme } from "@mui/material";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
import GdPreloader from "./common/GdPreloader";
import Overlay from "./common/Overlay";

const App = () => {
  const { isLoading } = useContext(UserContext);
  const theme = useTheme();
  const fullWidth = useMediaQuery(theme.breakpoints.up("md"));
  if (isLoading) return <GdPreloader width="100vw" height="100vh" />;
  // return <Overlay />;
  return <>{!!fullWidth ? <DesktopLayout /> : <MobileLayout />}</>;
};

export default App;
