import React, { Suspense, useRef, useEffect } from "react";
import { useTheme, alpha, styled } from "@mui/material";
// import LoadingPage from "./loadingPage";
import ErrorBoundary from "./errorrBoundery";
import { LoadingAnimation } from "./loadingPage";

const LoadableStyles = styled(ErrorBoundary)(({ theme }) => ({
	"& .transition-container": {
		animationName: "pageTransition",
		animationDuration: "2000ms",
		animationFillMode: "forwards",
		animationTimingFunction: "ease-in",
		transformOrigin: "center",
		border: "1px solid red",
		transitionBehavior: "smooth",
	},

	"@keyframes pageTransition": {
		"0%": {
			opacity: 0,
			// transform: "translateY(100px)",
			height: "100%",
			transform: "scaleY(0)",
		},
		"100%": {
			opacity: 1,
			height: "auto",
			// transform: "translateY(0)",
			transform: "scaleY(1)",
		},
	},
}));

const Loadable = (Component) => (props) => {
	const theme = useTheme();

	useEffect(() => {
		console.log("Loadable | Component props :: ", { Component, props });
		// console.log("targetRef?.current: ", { ...targetRef?.current });
	}, [Component, props]);

	return (
		<LoadableStyles>
			<Suspense
				fallback={
					// <LoadingPage
					//   color={alpha(theme?.palette?.text.primary, 0.5)}
					//   size="sm"
					// />
					// <div
					//   style={{
					//     position: "absolute",
					//     width: "100%",
					//     height: "100%",
					//     display: "grid",
					//     placeContent: "center",
					//   }}
					// >
					//   Loading...
					// </div>
					<LoadingAnimation size="md" color={theme.palette.grey[800]} />
				}
			>
				<Component {...{ className: "transition-container", ...props }} />
			</Suspense>
		</LoadableStyles>
	);
};

export default Loadable;
