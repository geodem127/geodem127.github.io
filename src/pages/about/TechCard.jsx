import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const CardStyles = styled(Card)(({ theme }) => ({
  height: "100%",
  width: "100%",
  padding: "1rem",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  outline: "2px dashed yellow",
  outlineOffset: "-2px",
}));
const IconHeaderStyles = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  outline: "1px dashed red",
  outlineOffset: "-1px",
  flexGrow: 0,
}));
const CardMediaStyles = styled("img")(({ theme }) => ({
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "space-between",
  // alignItems: "center",
  width: "50px!important",
  // height: "50px",
  // aspectRatio: "1",
  outline: "1px dashed green",
  outlineOffset: "-1px",
}));
const CardContentStyles = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  outline: "1px dashed purple",
  outlineOffset: "-1px",
  flexGrow: 1,
  padding: "1rem 0!important",
  overflow: "hidden",
  flexWrap: "wrap",
  width: "100%",
}));

const TechCard = ({ data, index }) => {
  return (
    <CardStyles variant="elevation" p={2}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <IconHeaderStyles>
        {/* <CardMediaStyles src={`./images/${data?.id}.svg`} alt={data?.label} /> */}
        <CardMediaStyles src={data?.icon} alt={data?.label} />
        <Divider
          orientation="horizontal"
          width={"100%"}
          sx={{ mt: 0.25 }}
          my={1}
        />
        <Typography
          variant="h6"
          component={"h6"}
          sx={{ textTransform: "uppercase" }}
        >
          {" "}
          {data?.label}
        </Typography>
      </IconHeaderStyles>
      <CardContentStyles>
        <Grid
          container
          width={"100%"}
          // display={"flex"}
          // flexDirection={"column"}
          // justifyContent={"flex-start"}
          // height={"100%"}
          columnSpacing={1}
          rowSpacing={0}
        >
          {data?.technologies?.map((tech) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              key={tech}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              py={0.25}
              m={0}
            >
              {/* <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                alt={tech}
                src={`./images/${tech}.svg`}
                flexGrow={0}
              /> */}
              <img
                style={{
                  width: 22,
                  height: 22,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  flexGrow: 0,
                }}
                alt={tech}
                src={`./images/${tech?.replace(/\s/g, "")?.toLowerCase()}.svg`}
              />
              <Typography
                variant="body2"
                component={"body2"}
                textAlign="left"
                pl={0.5}
                m={0}
                sx={{ outline: "1px dashed blue", outlineOffset: "-1px" }}
                flexGrow={1}
                noWrap
              >
                {tech}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContentStyles>
    </CardStyles>
  );
};

export default TechCard;
