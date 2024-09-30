import React, { useContext, useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Dialog,
  Modal,
  Slide,
  styled,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  Typography,
  Card,
  CardMedia,
  Divider,
  Fab,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import MediaViewer from "./MediaViewer";

const SliderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "0",
  height: "400px",
  position: "relative",
  border: "2px dashed cyan",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  columnGap: "1rem",
  overflow: "hidden",
  "& .preview": {
    border: "1px dashed red",
    "&.mobile": {
      border: "1px dashed cyan",
      height: "100%",
      aspectRatio: "3/1",
    },
  },
}));

const SliderNavButton = styled(Fab)(({ theme }) => ({}));

const ViewSlider = ({ data = [], ...other }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <SliderContainer {...other}>
          <SliderNavButton size="medium" color="secondary" class>
            <ArrowBackIosIcon />
          </SliderNavButton>
          {/* {data.map((item, index) => (
            <>
              <MediaViewer
                type={item?.type}
                src={item?.src}
                format={item?.format}
              />
            </>
          ))} */}
          <SliderNavButton size="medium" color="secondary">
            <ArrowForwardIosIcon />
          </SliderNavButton>
        </SliderContainer>
      )}
    </>
  );
};

export default ViewSlider;
