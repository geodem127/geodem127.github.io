import React, { useRef, useState } from "react";
import {
  alpha,
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
} from "swiper/modules";

import MediaPlayer from "./MediaPlayer";

const ASPECT_RATIO = {
  mobile: 0.5,
  desktop: 1.34,
  app: 1.455,
};

const SwiperContainer2 = styled("div")(
  ({ theme }) => `
    
    :root {
        --slider-height: 400px;
    }
        // width:100%;
    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mediaContainer {
        max-width: 60%;
        position: relative;
        height: var(--slider-height);
        padding: 0;
        border-radius: .5rem;
        overflow: hidden;
    &.mobile {
        width: calc(var(--slider-height) * ${ASPECT_RATIO?.mobile});
    }
    
    &.app {
        width: calc(var(--slider-height) * ${ASPECT_RATIO?.app});
    }
    &.desktop {
        width: calc(var(--slider-height) * ${ASPECT_RATIO?.desktop});
    
    }
    .player {
        height: 100%;
        width: 100%;
    }

}


`
);

const SwiperContainer = styled("div")(({ theme }) => ({
  ":root": {
    "--slider-height": "400px",
  },
  width: "100%",
  "& .swiper": {
    width: `100%`,
    height: `100%`,
  },

  "& .swiper-slide": {
    textAlign: `center`,
    fontSize: `18px`,
    background: `transparent`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },

  "& .mediaContainer": {
    maxWidth: `60%`,
    position: `relative`,
    height: `var(--slider-height)`,
    padding: 0,
    borderRadius: `.5rem`,
    overflow: `hidden`,
    "& *": {
      userSelect: "none",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: `calc(100% - 4rem)`,
      "& .mobile ": {
        width: "auto",
        // `calc(var(--slider-height) * ${ASPECT_RATIO?.mobile})`,
      },
    },
    "&.mobile ": {
      width: `calc(var(--slider-height) * ${ASPECT_RATIO?.mobile})`,
    },

    "&.app": {
      width: `calc(var(--slider-height) * ${ASPECT_RATIO?.app})`,
    },
    "&.desktop": {
      width: `calc(var(--slider-height) * ${ASPECT_RATIO?.desktop})`,
    },
    "& .player": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
}));

const ImageSwiper = ({ height = "300px", width = "100%" }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [autoPlayScroll, setAutoPlayState] = useState(true);

  const handlePause = () => {
    Swiper.prototype.autoplayPause();
  };

  return (
    <SwiperContainer
      style={{
        width: width,
        height: height,
        "--slider-height": height,
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: ".5rem",
          right: ".75rem",
          zIndex: 9999999,
          opacity: 0.5,
          "&:hover": {
            opacity: 1,
          },
        }}
        size="large"
        color="info"
        // onClick={() => setAutoPlayState((prev) => !prev)}
        onClick={handlePause}
      >
        {autoPlayScroll ? (
          <TimerOffOutlinedIcon fontSize="large" />
        ) : (
          <TimerOutlinedIcon fontSize="large" />
        )}
      </IconButton>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={smallScreen ? 10 : 20}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        navigation={true}
        // scrollbar={{ draggable: true }}
        // loop={true}
        // autoplay={!!autoPlayScroll}
        slideToClickedSlide={true}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        //     stopOnLastSlide: !autoPlayScroll,
        // }}
        // {(autoPlayScroll ?  {autoplay:{
        //   delay: 1000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }} : "")}

        // {...(autoPlayScroll
        //   ? {
        //       autoplay: {
        //         delay: 1000,
        //         disableOnInteraction: false,
        //         pauseOnMouseEnter: true,
        //       },
        //     }
        //   : false)}

        style={{
          "--swiper-navigation-color": alpha(theme.palette.info.main, 0.5),
          "--swiper-pagination-color": alpha(theme.palette.primary.main, 1),
          "--swiper-navigation-size": "30px",

          "--swiper-pagination-bottom": "1rem",
          "--swiper-pagination-bullet-size": ".65rem",
          "--swiper-pagination-bullet-inactive-color": theme.palette.grey[400],
        }}
        // zoom={true}
        // effect="fade"
      >
        {/* <span slot="wrapper-start">Wrapper Start</span> */}
        {AfroStyles2.map((item, index) => (
          <SwiperSlide
            key={index}
            // className={`mediaContainer ${item?.view}`}
            // style={{ ...theme.components.MuiPaper.styleOverrides.root }}
            // className={
            //   index === 0
            //     ? "wrapper-start"
            //     : index + 1 === AfroStyles2?.length
            //     ? "wrapper-end"
            //     : ""
            // }

            style={{
              width: "fit-content",
              height: "fit-content",
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            {/* <CardMedia
              className="player"
              component={item?.type === "video" ? "video" : "img"}
              sx={{ height: "100%", width: "100%" }}
              image={item?.src}
            /> */}
            <MediaPlayer content={item} height={height} />
          </SwiperSlide>
        ))}
        {/* <span slot="container-start">Container Start</span>
        <span slot="container-end">Container End</span> */}
        {/* <span slot="wrapper-start">Wrapper Start</span> */}
        {/* <span slot="wrapper-end">Wrapper End</span> */}
      </Swiper>
    </SwiperContainer>
  );
};

export default ImageSwiper;
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
