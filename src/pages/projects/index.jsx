import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Typography, Toolbar, Grid, Paper, Chip } from "@mui/material";
import useDataParse from "../../hooks/useDataParse";
import SectionWrapper from "../SectionWrapper";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const ProjectsPage = () => {
  const { projects, experiences, isLoading } = useContext(UserContext);
  const { parseText } = useDataParse();
  console.log("projects:", projects);
  return (
    <SectionWrapper id="projects">
      {/* <Box component={"section"} mb={2} id={id}> */}
      {/* <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2 }}
      > */}
      {experiences?.map((item, index) => {
        const startYear = Number(item?.start?.replace(/\D/g, ""));
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
        const jobDescriptionIsArray = jobDescriptionData?.constructor === Array;

        return (
          <Grid
            key={item?.id}
            width={"100%"}
            container
            rowSpacing={1}
            columnSpacing={1}
            mb={6}
            //   columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 2 }}
          >
            <Grid item sm={3} md={3} lg={3}>
              <Typography
                variant="h6"
                color="text.primary"
              >{`${startPeriod} — ${endPeriod}`}</Typography>
            </Grid>
            <Grid item sm={9} md={9} lg={9}>
              <Typography variant="h5" color="text.secondary">
                {" "}
                {headerText}
              </Typography>
              {!jobDescriptionIsArray ? (
                <Typography component={"p"} variant={"p"} color="text.primary">
                  {item?.jobDescription}
                </Typography>
              ) : (
                jobDescriptionData?.map((jdItem, index) => (
                  <div
                    key={`${index}`}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      padding: !!jdItem?.trim()?.startsWith("•")
                        ? ".75rem 0"
                        : 0,
                    }}
                  >
                    {!!jdItem?.trim()?.startsWith("•") ? (
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
                ))
              )}
              <Box mt={1}>
                {item?.technologies?.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    sx={{
                      margin: "2px",
                      background: "rgba(45, 212, 191, 0.1)",
                      color: "rgb(94, 234, 212)",
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        );
      })}
      {/* </Grid> */}
      {/* </Box> */}
    </SectionWrapper>
  );
};

ProjectsPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  data: PropTypes.array,
  id: PropTypes.string,
  window: PropTypes.func,
};
export default ProjectsPage;
