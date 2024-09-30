import React, { useEffect, useState } from "react";
// import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  styled,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Avatar,
} from "@mui/material";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from "../../config";

const SliderContainer = styled(Box)(({ theme }) => ({
  width: "100%",

  height: "100%",
  overflow: "hidden",
  flexGrow: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  "& .slick-list": {
    height: "100%",
    position: "relative",
  },
  "& .slick-track": {
    height: "100%",
    position: "relative",
  },
  "& .slick-slide > div": {
    height: "100%",

    boxSizing: "border-box",
    position: "relative",
  },
  "& .slick-slide .MuiPaper-root": {
    height: "100%",
    border: "none",
    maxHeight: "100%",
    overflow: "hidden",
    background: "transparent!important",
    backdropFilter: "none!important",
    boxShadow: "none",
    "& img, & video": {
      height: "100%",
      borderRadius: "1rem",
      width: "auto",
      maxWidth: "100%",
      backgroundSize: "cover",
      objectFit: "contain",
      margin: "0 auto",
      //   border: "1px solid",
      overflow: "hidden",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .slick-slide .MuiPaper-root": {
      height: "100%",
      border: "none!important",
      borderRadius: "0!important",
      //   maxHeight: "30vh",
      "& img, & video": {
        // height: "27vh",
        height: "35vh",
        maxHeight: "35vh",
        borderRadius: "0!important",
        border: "none",
      },
    },
  },
}));

const ThumbnailContainer = styled(Box)(({ theme }) => ({
  padding: " 1rem",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  flexGrow: 0,
  //   height: "80px",
  overflow: "hidden",

  "& .thumbnails": {
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: ".5rem",
    overflow: "hidden",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&.active": {
      borderColor: theme.palette.primary.main,
      borderWidth: "2px",
    },
  },
}));

const CardItemStyles = styled(Card)(({ theme }) => ({
  height: "100%",
  width: "100%",
}));

const PreviewSlider = ({ data = [] }) => {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  useEffect(() => {
    console.log("PreviewSlider | data:", data);
  }, [data]);

  return (
    <SliderContainer className="sliderContainer" py={".5rem"}>
      <Slider
        onReInit={() =>
          setCurrentSlide(slider1?.innerSlider.state.currentSlide)
        }
        lazyLoad={true}
        focusOnSelect={true}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        autoplay={false}
        autoplaySpeed={1000}
        arrows={true}
        useCSS={true}
        asNavFor={nav1}
        ref={(slider) => setSlider1(slider)}
        style={{
          flexGrow: 1,
          width: "100%",
          height: "40vh",
          overflow: "hidden",
          border: "1px solid red",
          padding: "0",
        }}
      >
        {data.map((item, index) => (
          <CardItem
            key={index}
            // item={item}
            src={`${config.API_ENDPOINT}/media/videos/${item?.fileName}`}
            type={item?.type}
          />
        ))}
      </Slider>
      {/* </Box> */}
      {/* <ThumbnailContainer>
        {data.map((item, idx) => (
          <div
            key={item.id}
            className={`thumbnails ${currentSlide === idx ? "active" : null}`}
            onClick={() => {
              slider1?.slickGoTo(idx);
            }}
          >
       
            <Box
              component={item?.type === "video" ? "video" : "img"}
              src={`${gitHubVideosPath}/${item?.fileName}`}
              sx={{
                backgroundSize: "cover",
                objectFit: "cover",
                width: "auto",
                height: "100%",
                margin: "0 auto",
              }}
            ></Box>
          </div>
        ))}
      </ThumbnailContainer> */}
    </SliderContainer>
  );
};

var items = [
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];

var AfroStyles = [
  {
    id: "1",
    src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
    alt: "dxdd",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    id: "2",
    src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
    alt: "dxdd",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    id: "3",
    src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
    alt: "dxdd",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    id: "4",
    src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
    alt: "dxdd",
    description: "Probably the most random thing you have ever seen!",
  },
];

function CardItem({ src, type }) {
  return (
    <CardItemStyles>
      <CardMedia
        component={type === "video" ? "video" : "img"}
        image={src}
        // autoplay
        // alt={props?.item.alt}
        sx={{
          height: "100%",
          backgroundSize: "cover",
          overflow: "hidden",
          width: "auto",
        }}
      />
      {/* <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props?.item.description}
          </Typography>
        </CardContent> */}
    </CardItemStyles>
  );
}

export default PreviewSlider;
