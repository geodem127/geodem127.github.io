import UserContextProvider from "./context/userContext";
import StarryNightBackground from "./themes/bg/starryNight";
import { useMediaQuery, useTheme } from "@mui/material";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function App() {
  const theme = useTheme();
  const fullWidth = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <UserContextProvider>
      <StarryNightBackground />
      {!!fullWidth ? <DesktopLayout /> : <MobileLayout />}
    </UserContextProvider>
  );
}

export default App;
