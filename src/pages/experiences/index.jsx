import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useDataParse from "../../hooks/useDataParse";
import SectionWrapper from "../SectionWrapper";
import { UserContext } from "../../context/userContext";

import ExperienceSection from "./ExperienceSection";
import ExperienceDetails from "./ExperienceDetails";
import { Box } from "@mui/material";

const ExperiencesPage = ({}) => {
  const theme = useTheme();
  const { experiences } = useContext(UserContext);

  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <SectionWrapper id="experiences">
      {/* {experiences?.map((item, index) => (
        <ExperienceSection
          key={index}
          end={index >= experiences?.length - 1}
          index={index}
          data={item}
        ></ExperienceSection>
      ))} */}
      {/* <Box sx={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}> */}
      {experiences?.map((item, index) => (
        <ExperienceDetails key={index} data={item} />
      ))}
      {/* </Box> */}
    </SectionWrapper>
  );
};

ExperiencesPage.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
  window: PropTypes.func,
};
export default ExperiencesPage;
