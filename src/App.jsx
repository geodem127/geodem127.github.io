// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/userContext";

import Layout from "./layout";
import { AppThemeProvider } from "./themes";
import StarryNightBackground from "./themes/bg/starryNight";

function App() {
  return (
    <AppThemeProvider>
      <UserContextProvider>
        {/* <BrowserRouter basename="/"> */}
        <StarryNightBackground />
        <Layout />
        {/* </BrowserRouter> */}
      </UserContextProvider>
    </AppThemeProvider>
  );
}

export default App;
