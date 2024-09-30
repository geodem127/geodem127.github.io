import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material";

const SliderContainer = styled("div")(
  ({ theme }) => `

  margin: 0 auto;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  width: 90%;
  color: rgb(52, 48, 48)


.content {
  text-align: center;
  margin-bottom: 30px;
}
.header {
  font-size: 30px;
}

.img-body .mediaPlayer {
  display: flex;
  margin: 0 auto;
  height: 40vh;
  object-fit: cover;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 100px 20px rgba(245, 245, 245, 0.182), 
              0px 0px 100px 20px rgba(0, 0, 0, 0.182);
}

.img-body {
  width: 400px;
  aspect-ratio: 1/1;
  outline-color: red;
  display: inline-block;
}

.container {
  margin: 0 auto;
  width: 100%;
  height: 80vh;
  border-color: white;
}

.rotate-180 {
  transform: rotate(180deg);
}

.thumb-wrapper {
  width: 100px;
  aspect-ratio: 1/1;
}

.thumb-wrapper .mediaPlayer {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.thumb-wrapper {
  display: flex;
  width: 100%;
  margin-top: 30px;
}

.thumb-wrapper > div {
  width: 100%;
  max-height: 200px;
  aspect-ratio: 1/1;
  overflow: hidden;
  transition: all .1s;
}
.thumb-wrapper > div:hover, .thumb-wrapper > div.active {
  border: 3px solid rgba(216, 35, 35, 0.732);
  max-height: calc(200px - 6px);
}
.thumb-wrapper > div .mediaPlayer {
  width: 100%;
  height: 100%;
  object-position: center 0;
  object-fit: cover;
}
`
);

const MediaPlayer = ({ src, type, format, ...other }) => {
  return (
    <>
      {type === "video" ? (
        <video
          {...other}
          autoPlay={true}
          loop={true}
          muted={true}
          controls={false}
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100%",
            objectFit: "cover",
            // borderRadius: ".5rem",
          }}
        >
          <source src={src} type={`${type}/${format}`} />
        </video>
      ) : (
        <img
          loading="lazy"
          {...other}
          src={src}
          style={
            {
              // height: "100%",
            }
          }
        />
      )}
    </>
  );
};

const ImageSlider = ({ images }) => {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);
  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    autoplaySpeed: 1000,
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <SliderContainer>
      <div className="content">
        <h1 className="header">Afro Styles Fashion Store</h1>
        <div className="container">
          <Slider
            {...settings}
            asNavFor={nav1}
            ref={(slider) => setSlider1(slider)}
          >
            {AfroStyles.map((item) => (
              <div key={item.id}>
                <div className="img-body">
                  <img src={item.src} alt={item.alt} className="mediaPlayer" />
                </div>
              </div>
            ))}
          </Slider>
          <div className="thumb-wrapper">
            {AfroStyles.map((item, idx) => (
              <div
                key={item.id}
                className={currentSlide === idx ? "active" : null}
                onClick={() => {
                  slider1?.slickGoTo(idx);
                }}
              >
                <img src={item.src} alt={item.alt} className="mediaPlayer" />
                {currentSlide}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SliderContainer>
  );
};

export default ImageSlider;
var AfroStyles = [
  {
    id: 1,
    title: "Model 1",
    description:
      "Wearing a crisp white shirt paired with perfectly fitted denim jeans and classic canvas",
    alt: "First Image",
    src: "https://images.unsplash.com/photo-1528991435120-e73e05a58897?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Model 2",
    description:
      "Elevate your style with this Ankara long sleeve shirt and trouser",
    alt: "Second Image",
    src: "https://images.unsplash.com/photo-1572495532056-8583af1cbae0?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Model 3",
    description: "Elevate your style with Ankara dresses.",
    alt: "Third Image",
    src: "https://images.unsplash.com/photo-1607823489283-1deb240f9e27?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEFmcmljYW4lMjBmYXNoaW9ufGVufDB8fDB8fHww",
  },
  {
    id: 4,
    title: "Model 4",
    description: "An elegant monochromatic image of a female figure.",
    alt: "Forth Image",
    src: "https://images.unsplash.com/flagged/photo-1578907015404-bd0176fb3108?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEFmcmljYW4lMjBmYXNoaW9ufGVufDB8fDB8fHww",
  },
  {
    id: 5,
    title: "Model 5",
    description: "Stylish trendy afro france man in red hat & white outfit",
    alt: "Fifth Image",
    src: "https://images.unsplash.com/photo-1584530193960-b4eb6c87081c?auto=format&fit=crop&q=80&w=2824&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Model 6",
    description: "African woman in a red dinner gown",
    alt: "Sixth Image",
    src: "https://images.unsplash.com/photo-1560457099-64cb8a5eb503?auto=format&fit=crop&q=80&w=2786&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Model 7",
    description: "Man in Suit",
    alt: "Seventh Image",
    src: "https://images.unsplash.com/photo-1530884698386-d42ad3199b1f?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

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
