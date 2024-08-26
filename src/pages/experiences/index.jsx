import React, { useContext, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography, Grid, Chip, Zoom, Slide } from "@mui/material";
import useDataParse from "../../hooks/useDataParse";
import SectionWrapper from "../SectionWrapper";
import { UserContext } from "../../context/userContext";

import ExperienceSection from "./ExperienceSection";

const ExperiencesPage = ({}) => {
  const theme = useTheme();
  const { experiences, isLoading } = useContext(UserContext);
  // const slideContainerRef = useRef(null);
  const [inView, setInView] = useState([]);
  const [checked, setChecked] = useState(false);
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const { parseText } = useDataParse();

  const screenSize = smallScreen
    ? "sm"
    : mediumScreen
    ? "md"
    : largeScreen
    ? "lg"
    : "xl";

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <SectionWrapper id="experiences" rowGap={4}>
      {/* <Box component={"section"} mb={2} id={id} {...other}> */}
      {/* <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}
      > */}
      {experiences?.map((item, index) => {
        return (
          <ExperienceSection
            key={index}
            // sx={{
            //   marginBottom: "0rem",
            // }}
            // href={`https://hello.com/${item?.company}`}
            end={index >= experiences?.length - 1}
            index={index}
            data={item}
          ></ExperienceSection>
        );
      })}
    </SectionWrapper>
  );
};

ExperiencesPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  data: PropTypes.array,
  id: PropTypes.string,
  window: PropTypes.func,
};
export default ExperiencesPage;
