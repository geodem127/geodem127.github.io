import React, { useContext } from "react";
// import PropTypes from "prop-types";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";

import { UserContext } from "../../context/userContext";

import ExperienceDetails from "./ExperienceDetails";

import PageContainer from "../PageContainer";

const ExperiencesPage = () => {
	const { experiences } = useContext(UserContext);

	return (
		<PageContainer title="experiences" rowGap="1rem">
			{experiences?.map((item, index) => (
				<ExperienceDetails key={index} data={item} />
			))}
		</PageContainer>
	);
};

// ExperiencesPage.propTypes = {
// 	data: PropTypes.array,
// 	id: PropTypes.string,
// 	window: PropTypes.func,
// };
export default ExperiencesPage;
