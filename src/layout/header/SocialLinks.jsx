import React from "react";
import { Box, useTheme } from "@mui/material";

import { CustomIcons } from "../../assets/CustomIcons";

const ICON_SIZE = {
	sm: 0.75,
	md: 1,
	lg: 1.35,
};

const SocialLinks = ({ socialLinks, size = "md", ...other }) => {
	const theme = useTheme();
	const iconSize = ICON_SIZE[size] || 1;
	return (
		<Box
			flexGrow={0}
			component={"div"}
			gap={2}
			{...other}
			sx={{ display: "flex", flexDirection: "row" }}
		>
			{socialLinks?.map((link, index) => {
				return (
					<Box
						key={index}
						component={"a"}
						href={link?.path}
						target="_blank"
						title={link?.label}
						sx={{
							width: `calc(30px * ${iconSize})`,
							height: `calc(30px * ${iconSize})`,
							color: theme.palette.text.primary,
						}}
					>
						{CustomIcons?.[link?.icon]}
					</Box>
				);
			})}
		</Box>
	);
};

export default SocialLinks;
