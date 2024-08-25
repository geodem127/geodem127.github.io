import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Box,
  Typography,
  Toolbar,
  Grid,
  Card,
  Chip,
  Grow,
} from "@mui/material";
import useDataParse from "../../hooks/useDataParse";
import SectionWrapper from "../SectionWrapper";
import { UserContext } from "../../context/userContext";
import CustomCard from "../../common/CustomCard";
// import "./styles.css";

const CustomCardStyles = styled(CustomCard)(({ theme }) => ({
  "&.inRange": {
    "& .verticalTimeLine": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      height: "100%",
      "&::after": {
        content: '""',
        height: "100%",
        width: "2px",
        position: "absolute",
        // top: "3.25rem",
        top: 0,
        left: "1.5rem",
        background: `linear-gradient(${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        backgroundAttachment: "fixed",
        opacity: 0.5,
      },
    },
    "&:not(:has(+ .inRange)) .verticalTimeLine": {
      "&::after": {
        clipPath: "polygon(100% 0%, 100% 80%, 50% 100%, 0% 80%, 0% 0%)",
      },
    },
  },
}));

const ExperiencesPage = ({}) => {
  const theme = useTheme();
  const { experiences, isLoading } = useContext(UserContext);
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
    <SectionWrapper id="experiences">
      {/* <Box component={"section"} mb={2} id={id} {...other}> */}
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
          <CustomCardStyles
            // className="cardContainer"
            key={index}
            sx={{
              marginBottom: "0rem",
            }}
            href={`https://hello.com/${item?.company}`}
            // end={
            //   index + 1 === experiences?.length ?? (
            //     <div className="verticalTimeLine">zzz</div>
            //   )
            // }
            inRange={index < experiences?.length - 1}
            className={`
              ${index < experiences?.length - 1 ? "inRange" : ""}`}
          >
            {/* <Grow
              in={checked}
              {...(checked ? { timeout: 1000 * (index + 1) } : {})}
            > */}
            <Grid container columnSpacing={3} rowSpacing={2}>
              <Grid
                item
                xs={12}
                sm={3}
                md={3}
                lg={3}
                mb={"1rem"}
                sx={{
                  // outline: "1px solid red",
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
                  className="verticalTimeLine"
                  // className={`verticalTimeLine ${
                  //   index < experiences?.length - 1 ? "active" : ""
                  // }`}

                  // sx={{ height: "100%", outline: "1px solid green" }}
                >
                  {/* {`${startPeriod} — ${endPeriod}`} */}
                  {startPeriod} —
                  <br />
                  {endPeriod}
                </Typography>
                {/* {index + 1 < experiences?.length && (
                  <div className="verticalTimeLine"></div>
                )} */}
              </Grid>
              <Grid item xs={12} sm={9} md={9} lg={9}>
                <Box
                  component={"div"}
                  sx={{
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h3" color="text.secondary" mb={1}>
                    {headerText}
                  </Typography>
                  {!jobDescriptionIsArray ? (
                    <Typography
                      component={"p"}
                      variant={"p"}
                      color="text.primary"
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
                  <Box mt={2}>
                    {item?.technologies?.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        sx={{
                          margin: "3px",
                          background: "rgba(45, 212, 191, 0.1)",
                          color: "rgb(94, 234, 212)",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* </Grow> */}
          </CustomCardStyles>
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
