const components = {
	MuiPaper: {
		styleOverrides: {
			root: {
				borderRadius: ".5rem",
				// backdropFilter: "blur(15px)",
				// backgroundColor: "#ffffff19",
				// border: "1px solid rgba(255, 255, 255, .15)",

				// backdropFilter: "blur(10px)",
				// backgroundColor: "#020812cd",

				backdropFilter: "blur(6px)",
				backgroundSize: "100% 100%",
				backgroundPosition: "0px 0px",
				// backgroundImage:
				//   "linear-gradient(50deg, #020812FC 1%, #020812D6 50%, #020812C7 79%, #020812A6 100%)",
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
			},
		},
	},
	MuiCssBaseline: {
		defaultProps: {
			enableColorScheme: true,
		},
		styleOverrides: {
			html: {
				fontSynthesis: "none",
				textRendering: "optimizeLegibility",
				webkitFontSmoothing: "antialiased",
				mozOsxFontSmoothing: "grayscale",

				// fontFamily: '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
				// fontSize: 16,
				// fontSize: "16px",
				fontSize: "16px",
				backgroundColor: "#020812",
			},
			body: {
				// fontFamily:  '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
				fontSize: "16px",
				// backgroundColor: "#020812",
				//  "#020812",

				"&::before, &::after": {
					content: '""',

					position: "fixed",
					filter: "blur(180px)",

					// height: "350px",
					height: "calc(((100vh + 100vw) / 2) * 0.3)",
					maxWidth: "100%",
					maxHeight: "350px",
					opacity: 0.7,
				},
				//GREEN
				"&::before": {
					backgroundColor: "rgba(66, 175, 136, 0.749)",
					bottom: "-3.25rem",
					right: "10%",
					width: "30%",

					//  "3rem",
				},
				//BLUE
				"&::after": {
					backgroundColor: "rgba(81, 54, 245, 0.549)",
					bottom: "-12rem",
					width: "calc(((100vh + 100vw) / 2) * 0.3)",
					right: "0",
					zIndex: 1,
					animation: "animStar 150s linear infinite",
				},
			},
			"#root": {
				width: "100%",
				minWidth: "100%",
				// minHeight: "100%",
			},
		},
	},
};

export default components;
