import { useMediaQuery, useTheme } from "@mui/material";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function App() {
  const theme = useTheme();
  const fullWidth = useMediaQuery(theme.breakpoints.up("md"));
  return <>{!!fullWidth ? <DesktopLayout /> : <MobileLayout />}</>;
}

export default App;
