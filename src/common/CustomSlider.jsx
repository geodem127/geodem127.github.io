import React, { useEffect, useRef, useState } from "react";
import {
  alpha,
  Box,
  CardMedia,
  IconButton,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TimerOffOutlinedIcon from "@mui/icons-material/TimerOffOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/zoom";

// import required modules
import {
  Pagination,
  Navigation,
  EffectFade,
  Zoom,
  Autoplay,
  Thumbs,
  Scrollbar,
} from "swiper/modules";

import MediaPlayer from "./MediaPlayer";

const ASPECT_RATIO = {
  mobile: 0.5,
  desktop: 1.74,
  app: 1.655,
};

const SwiperContainer = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "visible",
  ":root": {
    "--slider-height": "400px",
  },
  width: "100%",
  "& .swiper": {
    width: `100%`,
    height: `100%`,
  },
  "& .swiper-wrapper": {
    overflow: "visible",
  },

  "& .swiper-slide": {
    textAlign: `center`,
    fontSize: `18px`,
    background: `transparent`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    opacity: 0,
    // userSelect: "none",
    // overflow: "visible",
    "&:not(.swiper-slide-prev, .swiper-slide-next, .swiper-slide-active)": {
      opacity: 0.5,
    },

    // "&:not(.swiper-slide-prev, .swiper-slide-next, .swiper-slide-active)": {
    //   opacity: 0.2,
    // },
    "&:has(+ .swiper-slide-prev)": {
      transformOrigin: "right",
      transform: "scale(.9) translateX(-1rem)",
    },
    "&.swiper-slide-prev, &.swiper-slide-next": {
      opacity: 0.5,
      // transform: "scale(.75)",
    },
    "&.swiper-slide-next + .swiper-slide": {
      transformOrigin: "left",
      transform: "scale(.9) translateX(1rem)",
    },
    "&.swiper-slide-next + .swiper-slide + *": {
      opacity: 0,
    },
    "& .player": {
      transformOrigin: "center",
      transition: "all 300ms ease-in-out",
      transitionBehavior: "smooth",
      transformStyle: "preserve-3d",
      userSelect: "none",
      width: "100%",
      height: "100%",
      borderRadius: ".75rem",
      overflow: "hidden",
      border: "1px solid",
      borderColor: theme.palette.divider,
    },
  },
  "& .swiper-slide-active": {
    zIndex: 3,
    opacity: 1,
  },
  "& .swiper-slide-active .player": {
    // overflow: "visible",
    transform: "scale(1.2)",
  },
  "&.next .swiper-button-next": {
    display: "none",
  },
  "&.prev .swiper-button-prev": {
    display: "none",
  },
}));

const CustomSlider = ({ height = "300px", width = "100%", data = [] }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <SwiperContainer
      className={`${activeSlideIndex + 1 >= data?.length ? " next" : ""}${
        activeSlideIndex < 1 ? " prev" : ""
      }`}
      style={{
        width: width,
        // height: height,
        "--slider-height": height,
        // padding: "0 0 .5rem 0",

        // padding: "0 1rem",
        boxSizing: "border-box",
        // backgroundColor: theme.palette.background.default,
        overflow: "hidden",
      }}
    >
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        // spaceBetween={smallScreen ? 10 : 20}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        navigation={true}
        // scrollbar={{ draggable: true }}
        loop={false}
        slideToClickedSlide={true}
        cssMode={true}
        onSlideChange={(swiper) => {
          // console.log(swiper.activeIndex);
          setActiveSlideIndex(swiper.activeIndex);
        }}
        style={{
          "--swiper-navigation-color": alpha(theme.palette.info.main, 0.5),
          "--swiper-pagination-color": alpha(theme.palette.primary.main, 1),
          "--swiper-navigation-size": "25px",
          "--swiper-navigation-sides-offset": "100px",

          // "--swiper-pagination-bottom": "1rem",
          "--swiper-pagination-bullet-size": ".65rem",
          "--swiper-pagination-bullet-inactive-color": theme.palette.grey[400],

          boxSizing: "border-box",
          height: `calc(${height} + 8rem)`,
          padding: "3rem 0",
          width: "100%",
          overflow: "visible",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              minHeight: "300px",
              height: height,
              position: "relative",
              boxSizing: "border-box",
              // maxWidth: smallScreen
              //   ? `calc(100% - 4rem)`
              //   : `calc(${height}*${ASPECT_RATIO?.[item?.view]})`,
              maxWidth: `calc(100% - 11rem)`,
              width: `calc(${height}*${ASPECT_RATIO?.[item?.view]})`,
              overflow: "visible",
            }}
          >
            <MediaPlayer className="player" content={item} height={height} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default CustomSlider;
var AfroStyles2 = [
  {
    id: "1",
    src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
    type: "image",
    format: "png",
    view: "desktop",
    alt: "dxdd",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    id: "2",
    src: "https://geodem.xyz/files/media/videos/myPortfolio_mobile.mp4",
    type: "video",
    format: "mp4",
    view: "mobile",
    alt: "dxdd",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    id: "5",
    src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app.mp4",
    type: "video",
    format: "mp4",
    view: "app",
    alt: "dxdd",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    id: "3",
    src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
    type: "image",
    format: "png",
    view: "desktop",
    alt: "dxdd",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    id: "4",
    src: "https://geodem.xyz/files/media/videos/vscode_cmd_runner_ext_app2.png",
    type: "image",
    format: "png",
    view: "app",
    alt: "dxdd",
    description: "Probably the most random thing you have ever seen!",
  },
];
