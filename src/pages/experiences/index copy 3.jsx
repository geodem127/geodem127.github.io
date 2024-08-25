import React, { useContext, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography, Grid, Chip, Zoom, Slide } from "@mui/material";
import useDataParse from "../../hooks/useDataParse";
import SectionWrapper from "../SectionWrapper";
import { UserContext } from "../../context/userContext";
import ExperienceCard from "./ExperienceCard";
import usePageScroll from "../../hooks/usePageScroll";

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
    <SectionWrapper id="experiences" rowGap={2}>
      {/* <Box component={"section"} mb={2} id={id} {...other}> */}
      {/* <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}
      > */}
      {experiences?.map((item, index) => {
        {
          /* const startYear = Number(item?.start?.replace(/\D/g, ""));
        const endYear = Number(item?.end?.replace(/\D/g, ""));

        const startMonth = item?.start
          ?.replace(/\d/g, "")
          ?.trim()
          .substring(0, 3)
          ?.toUpperCase();
        const endMonth = item?.end
          ?.replace(/\d/g, "")
          ?.trim()
          .substring(0, 3)
          ?.toUpperCase();

        const startPeriod =
          startYear === endYear ? startMonth : `${startMonth} ${startYear}`;
        const endPeriod = item?.isPresent
          ? "PRESENT"
          : `${endMonth} ${endYear}`;

        const headerText = (
          item?.role + (!!item?.company ? ` @ ${item?.company}` : "")
        )?.trim();

        const newLines = /\n/g;
        const hasNewLines = newLines.test(item?.jobDescription);
        const jobDescriptionData = !hasNewLines
          ? item?.jobDescription
          : parseText(item?.jobDescription);
        const jobDescriptionIsArray = jobDescriptionData?.constructor === Array; */
        }

        {
          /* return (
          <ExperienceCard

            key={index}
            sx={{
              marginBottom: "0rem",
            }}
            href={`https://hello.com/${item?.company}`}
            end={index >= experiences?.length - 1}
            setInView={setInView}
            index={index}
          >
      
            <Grid container columnSpacing={3} rowSpacing={2}>
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                lg={2}
                mb={"1rem"}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="h6"
                  color="text.primary"
                  className="verticalTimeLineLabel"
              
                >
                  {startPeriod} —
                  <br />
                  {endPeriod}
                </Typography>

              </Grid>
              <Grid item xs={12} sm={9} md={9} lg={10}>
                <Box
                  component={"div"}
                  ref={slideContainerRef}
                  className="timelineDescriptionWrapper"
                  sx={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    variant="h3"
                    color="text.secondary"
                    mb={1}
                    className="timelineDescriptionHeader"
                  >
                    {headerText}
                  </Typography>

                  {!jobDescriptionIsArray ? (
                    <Typography
                      component={"p"}
                      variant={"p"}
                      color="text.primary"
                      className="timelineDescriptionDetails"
                    >
                      {item?.jobDescription}
                    </Typography>
                  ) : (
                    jobDescriptionData?.map((jdItem, index) => {
                      const paddingValue = jdItem?.trim()?.startsWith("•")
                        ? "1rem"
                        : "0rem";
                      const isListItem = !!jdItem?.trim()?.startsWith("•");
                      return (
                        <div
                          key={`list-item-${index}`}
                          className="timelineDescriptionDetails"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            padding: !isListItem ? ".75rem 0" : 0,
                          }}
                        >
                          {isListItem ? (
                            <>
                              <div
                                style={{
                                  paddingLeft: "1.5rem",
                                  paddingRight: ".5rem",
                                  paddingTop: ".25rem",
                                  paddingBottom: ".25rem",
                                }}
                              >
                                ▸
                              </div>
                              <Typography component={"p"} variant={"p"}>
                                {jdItem?.replace(/[•\*\-]/g, "")?.trim()}
                              </Typography>{" "}
                            </>
                          ) : (
                            <Typography component={"p"} variant={"p"}>
                              {jdItem?.trim()}
                            </Typography>
                          )}
                        </div>
                      );
                    })
                  )}

                  <Box mt={2} className="techStack">
                    {item?.technologies?.map((tech, index2) => (
                      <Zoom
                        in={inView?.includes(index)}
                        key={index2}
                        timeout={500}
                      >
                        <Chip
                          label={tech}
                          sx={{
                            margin: "3px",
                            background: "rgba(45, 212, 191, 0.1)",
                            color: "rgb(94, 234, 212)",
                          }}
                        />
                      </Zoom>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>

          </ExperienceCard>
        ); */
        }
        return (
          <ExperienceCard
            key={index}
            sx={{
              marginBottom: "0rem",
            }}
            // href={`https://hello.com/${item?.company}`}
            end={index >= experiences?.length - 1}
            index={index}
            data={item}
          ></ExperienceCard>
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
