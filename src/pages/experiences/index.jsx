import React, { useContext, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useDataParse from "../../hooks/useDataParse";
import SectionWrapper from "../SectionWrapper";
import { UserContext } from "../../context/userContext";

import ExperienceSection from "./ExperienceSection";
import ExperienceDetails from "./ExperienceDetails";
import { Box } from "@mui/material";
import PageContainer from "../PageContainer";
import PageRow from "../PageRow";

const ExperiencesPage = ({}) => {
	const theme = useTheme();
	const { experiences } = useContext(UserContext);

	const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
	const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));

	// }, [obTop, obBot, obHeight, ratio, top, bottom, height]);

	return (
		<PageContainer title="experiences" rowGap="1rem">
			{experiences?.map((item, index) => (
				<ExperienceDetails key={index} data={item} />
			))}
		</PageContainer>
	);
};

ExperiencesPage.propTypes = {
	data: PropTypes.array,
	id: PropTypes.string,
	window: PropTypes.func,
};
export default ExperiencesPage;
