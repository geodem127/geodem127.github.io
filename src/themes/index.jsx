import * as React from "react";

import {
	ThemeProvider,
	createTheme,
	responsiveFontSizes,
	alpha,
	CssBaseline,
} from "@mui/material";
import "./fonts/index.css";
// import CssBaseline from "@mui/material/CssBaseline";
// import { palette } from "./palette";

// import { typography } from "./typography";
// import components from "./components";

import { teal, deepPurple, blueGrey, grey } from "@mui/material/colors";
// import defaultProps from "react-slick/lib/default-props";

const AppThemeContext = React.createContext();

const breakpoints = {
	keys: ["xs", "sm", "md", "lg", "xl"],
	values: {
		xs: 360,
		// sm: 768,
		// sm: 600,
		// md: 1024,
		sm: 600,
		md: 900,
		lg: 1256,
		xl: 1500,
	},
	unit: "px",
};

let theme = createTheme({
	colorSchemes: {
		dark: true,
	},
	spacing: 8,
	palette: {
		mode: "dark",
		common: {
			black: "#100e0e", //blueGrey[900],
			white: grey["A100"],
		},
		primary: {
			// main: teal[700],
			main: "#1a8781",
		},
		secondary: {
			// main: deepPurple[800],
			main: "#6e40c9",
		},
		info: {
			main: blueGrey["A400"],
		},
		text: {
			// primary: grey[400],
			primary: "#94a3b8dd",
			secondary: grey["A100"],
		},
		background: {
			// default: "#121316",
			// paper: "#ffffff19",

			default: "#100e0e", //TRANSPARENT
			paper: "#797e7d38", //TRANSPARENT
			// paper: "#100e0e",

			custom1: "#151b23",

			// default: "#0d1117", // GITHUB
			// paper: "#151b23", // GITHUB
		},

		// divider: "#8382822a",
		divider: "#8382822a",
	},
	breakpoints,
});

theme = createTheme(theme, {
	palette: {
		primary: {
			contrastText: theme.palette.common.white,
		},
		secondary: {
			contrastText: theme.palette.common.white,
		},
		info: {
			contrastText: theme.palette.common.black,
		},
		action: {
			hover: grey[200],
			active: theme.palette.primary.main,
		},
	},
	typography: {
		fontFamily: "Saira, sans-serif",
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,

		h1: {
			fontFamily: "Saira, sans-serif",
			fontSize: "3rem",
			fontWeight: 600,
		},
		h2: {
			fontFamily: "Saira, sans-serif",
			fontSize: "2.5rem",
			fontWeight: 500,
		},
		h3: { fontFamily: "Saira, sans-serif", fontSize: "2rem", fontWeight: 500 },
		h4: {
			fontFamily: "Saira, sans-serif",
			fontSize: "1.75rem",
			fontWeight: 500,
		},
		h5: {
			fontFamily: "Saira, sans-serif",
			fontSize: "1.5rem",
			fontWeight: 500,
		},
		h6: {
			fontFamily: "Saira, sans-serif",
			fontSize: "1.15rem",
			fontWeight: 500,
		},
		button: {
			fontFamily: "Saira, sans-serif",
			fontSize: "1rem",
			fontWeight: 600,
		},
		body1: {
			fontFamily: "Saira, sans-serif",
			fontSize: "1rem",
			fontWeight: 400,
		},
	},
	shape: {
		borderRadius: 4,
	},
	shadows: {
		a1: `0px 3px 5px -1px ${alpha(
			theme.palette.primary.main,
			0.2
		)},0px 6px 10px 0px ${alpha(
			theme.palette.primary.main,
			0.14
		)},0px 1px 18px 0px ${alpha(theme.palette.primary.main, 0.12)}`,
		a2: `0px 3px 5px -1px ${alpha(
			theme.palette.secondary.main,
			0.2
		)},0px 6px 10px 0px ${alpha(
			theme.palette.secondary.main,
			0.14
		)},0px 1px 18px 0px ${alpha(theme.palette.secondary.main, 0.12)}`,

		a3: `0px 3px 5px -1px ${alpha(
			theme.palette.primary.main,
			0.2
		)},0px 6px 10px 0px ${alpha(
			theme.palette.primary.main,
			0.14
		)},0px 1px 18px 0px ${alpha(
			theme.palette.secondary.main,
			0.12
		)},0px 1px 18px 0px ${alpha(theme.palette.secondary.main, 0.14)}`,
	},
	components: {
		MuiDialog: {
			defaultProps: {},
			styleOverrides: {
				paper: {
					// outline: "3px solid red",
					boxShadow: theme.shadows[24],
					zIndex: 1000,
				},
			},
		},
		MuiPaper: {
			defaultProps: {
				elevation: 12,
			},
			styleOverrides: {
				root: {
					background: theme.palette.background.paper,
					border: `.3px solid ${theme.palette.divider}`,
					// backdropFilter: "blur(8px)",
					variants: [
						{
							props: { variant: "custom1" },
							style: {
								backgroundColor: alpha(theme.palette.background.custom1, 0.8),
								border: "1px solid #454c56",
								borderRadius: "1rem",
								boxSizing: "border-box",
								overflow: "hidden",
								padding: "1rem",
								boxSizing: "border-box",
							},
						},
					],
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					height: "max-content",
					paddingTop: "2px",
					paddingBottom: "3px",
					borderRadius: "5px",
					// backgroundColor: "red",
					// background: `${alpha(theme.palette.background.paper, 0.6)}!important`,
				},
			},
		},
		MuiDivider: {
			defaultProps: {},
			styleOverrides: {
				// root: { width: "100%" },
			},
		},
		// MuiBackdrop: {
		// 	defaultProps: {
		// 		// className: "overlay",
		// 	},
		// 	styleOverrides: {
		// 		root: {
		// 			backdropFilter: "blur(5px)",
		// 			backgroundColor: "#1b1b1bd9",
		// 			// borderRadius: "1.5rem",
		// 			"&::before, &::after": {
		// 				content: '""',
		// 				position: "fixed",
		// 				filter: "blur(180px)",
		// 				height: "calc(((100vh + 100vw) / 2) * 0.3)",
		// 				maxWidth: "100%",
		// 				maxHeight: "350px",
		// 				opacity: 0.7,
		// 				zIndex: 0,
		// 			},
		// 			//GREEN
		// 			"&::before": {
		// 				// backgroundColor: "rgba(66, 175, 136, 0.749)",
		// 				backgroundColor: theme.palette.primary.main,
		// 				bottom: "-1.25rem",
		// 				right: "10%",
		// 				width: "500px",
		// 			},
		// 			//BLUE
		// 			"&::after": {
		// 				// backgroundColor: "rgba(81, 54, 245, 0.549)",
		// 				backgroundColor: theme.palette.secondary.main,
		// 				bottom: "-10rem",
		// 				width: "calc(((100vh + 100vw) / 2) * 0.3)",
		// 				right: "0",

		// 				animation: "animStar 150s linear infinite",
		// 			},
		// 		},
		// 	},
		// },
		MuiButton: {
			styleOverrides: {
				root: {
					// backgroundColor: theme.palette.primary.main,
					// backgroundImage: `linear-gradient(83deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main})`,
					// border: "2px rgba(255, 255, 255, 0)",
					textTransform: "none",
					borderRadius: "calc(infinity * 1px)",
					padding: ".5rem 1.5rem",
				},
			},
		},

		MuiDivider: {
			styleOverrides: {
				root: {
					borderWidth: ".3px",
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					fontSynthesis: "none",
					textRendering: "optimizeLegibility",
					webkitFontSmoothing: "antialiased",
					mozOsxFontSmoothing: "grayscale",
					fontSize: "16px",
					fontFamily: "Saira, sans-serif",
					// boxSizing: "border-box",
					// width: "100vw",
					overflow: "hidden",
				},
				body: {
					fontSize: "16px",
					fontFamily: "Saira, sans-serif",
					padding: 0,
					margin: 0,

					// overflowX: "hidden",
					// overflowY: "scroll",
					overflow: "hidden",
					// width: "100vw",
					// boxSizing: "border-box",
					// border: "2px dashed red",
					// "& *": {
					// 	boxSizing: "border-box",
					// },
					"&::before, &::after": {
						content: '""',
						position: "fixed",
						filter: "blur(180px)",

						// maxWidth: "100%",
						// maxHeight: "350px",
						opacity: 0.7,
						zIndex: -1,
						bottom: "-5rem",
						mixBlendMode: "lighten",
						borderRadius: "50%",
						aspectRatio: "1",

						animationName: "animStar",
						animationTimingFunction: "linear",
						animationIterationCount: "infinite",
						animationFillMode: "forwards",
					},

					"&::before": {
						backgroundColor: theme.palette.primary.main,

						// height: "40vw",
						height: "calc((100vh + 100vw)/2 * 0.4)",

						animationDuration: "100s",
						// animationDuration: "50s",
						bottom: "-15%",
						right: "15%",
					},

					"&::after": {
						backgroundColor: theme.palette.secondary.main,
						// animationDelay: "3s",
						animationDuration: "80s",
						// animationDuration: "40s",
						// height: "30vw",
						height: "calc((100vh + 100vw)/2 * 0.3)",

						bottom: "-15%",
						right: 0,
					},
					// [theme.breakpoints.down("sm")]: {
					// 	"&::before": {
					// 		top: "67%",
					// 		left: "0%",
					// 		right: "auto",
					// 		bottom: "auto",
					// 	},

					// 	"&::after": {
					// 		top: "73%",
					// 		left: "70%",
					// 		right: "auto",
					// 		bottom: "auto",
					// 	},
					// },
				},
				"#root": {
					// minHeight: "100dvh",
					width: "100vw",
					boxSizing: "border-box",
					overflowX: "hidden",
					overflowY: "scroll",
					height: "100vh",
					// overflow: "hidden",
					// border: "2px dashed green",
					position: "relative",
				},
				"*": {
					"&::-webkit-scrollbar": {
						width: "6px",
					},
					"&::-webkit-scrollbar-track": {
						background: alpha(theme.palette.background.paper, 0.1),
					},
					"&::-webkit-scrollbar-thumb": {
						borderRadius: "10px",

						backgroundImage: `linear-gradient(to top, ${alpha(
							theme.palette.background.paper,
							0.45
						)} 0%, ${alpha(theme.palette.background.paper, 0.85)} 50%,  ${alpha(
							theme.palette.background.paper,
							0.45
						)} 100%)`,
					},
				},
				"@keyframes animStar": {
					"50%": {
						transform: "translateX(-60vw)",
					},

					"100%": {
						transform: "translateX(0)",
					},
					[theme.breakpoints.down("sm")]: {
						"50%": {
							transform: "translateX(-100vw)",
						},

						"100%": {
							transform: "translateX(0)",
						},
					},
				},
				// [theme.breakpoints.up("md")]: {
				// 	h2: {
				// 		fontSize: "2.75!important",
				// 	},
				// },
				// [theme.breakpoints.down("sm")]: {
				// 	h1: {
				// 		fontSize: "5rem!important",
				// 	},
				// },
			},
		},
	},
});

export const AppThemeProvider = ({ children }) => {
	// const [isDarkMode, setIsDarkMode] = React.useState(true);

	const setThemeMode = () => {
		// setIsDarkMode(selectedMode === "dark");
		return;
	};

	return (
		<AppThemeContext.Provider value={{ setThemeMode }}>
			<ThemeProvider theme={responsiveFontSizes(theme, { factor: 1.25 })}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</AppThemeContext.Provider>
	);
};

// Custom hook to use the context
const useAppThemeContext = () => {
	const context = React.useContext(AppThemeContext);
	if (!context) {
		throw new Error("useTodo must be used within a TodoProvider");
	}
	return context;
};

export { useAppThemeContext };
