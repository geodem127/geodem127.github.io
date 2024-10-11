import { styled, useMediaQuery, useTheme } from "@mui/material";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/userContext";
import GdPreloader from "./common/GdPreloader";

const LoaderContainer = styled("div")(({ theme }) => ({
	width: "100%",
	height: "100dvh",
	display: "flex",
	placeContent: "center",
	// overflow: "hidden",
	userSelect: "none",
	pointerEvents: "none!important",
}));

const App = () => {
	const { isLoading } = useContext(UserContext);

	const theme = useTheme();
	const fullWidth = useMediaQuery(theme.breakpoints.up("md"));
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (isLoading) return;
		setTimeout(() => {
			setIsLoaded(true);
		}, 3000);
	}, [isLoading]);

	if (isLoading || !isLoaded)
		return (
			<LoaderContainer>
				<GdPreloader />
			</LoaderContainer>
		);
	return <>{!!fullWidth ? <DesktopLayout /> : <MobileLayout />}</>;
};

export default App;
