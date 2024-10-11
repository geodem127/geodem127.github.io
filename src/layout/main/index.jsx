import * as React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Main = ({ data, children, ...other }) => {
	return (
		<Box
			component="main"
			sx={{
				// outline: "1px dashed pink",
				display: "flex",
				flexDirection: "column",
				flexGrow: 1,
				justifyContent: "space-between",
				// width: width,
				flexShrink: 0,
				position: "relative",

				boxSizing: "border-box",
			}}
			{...other}
		>
			{children}
		</Box>
	);
};

Main.propTypes = {
	width: PropTypes.string,
	data: PropTypes.object,
	screenSize: PropTypes.string,
	window: PropTypes.func,
};

export default Main;
