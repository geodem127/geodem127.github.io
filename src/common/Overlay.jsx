import { styled } from "@mui/material";
import React from "react";

const OverlayStyles = styled("div")(
  ({ theme }) => `
    
    z-index: -1;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: #1b1b1bd9;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;

    .blur-wrapper {
        z-index: 0;
        opacity: 1;
        width: 900px;
        height: 600px;
        position: absolute;
       top: 25%;
        left: 43%;
    }

        
    .blur-blue {
        z-index: 1;
        filter: blur(180px);
        background-color: #5136f58c;
        width: 500px;
        height: 350px;
        position: absolute;
        // top: 25%; 
        // top: calc(42% + 149.5px);
        top: 58%;
        // 42% + 149.5px
        //149.5px + 393.531px
        bottom: auto;
        // left: 25%;
        // left: calc(43% + 224.5px);
        left: 55%;
        //43% + 224.5px
        right: auto;

        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
    }
    .blur-green {
        filter: blur(180px);
        background-color: #42af88bf;
        width: 500px;
        height: 350px;
        position: absolute;
        // top: 0%;
        top: 42%;
        bottom: 0%;
        // left: 0%;
        left: 43% 
        right: 0%;

        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
    }
    `
);

function Overlay() {
  return (
    <OverlayStyles
      id="overlay-cookie-close"
      fs-cc="close"
      className="fs-cc-prefs_overlay"
    >
      <div class="blur-wrapper section-web up opacity">
        <div class="blur-blue"></div>
        <div class="blur-green"></div>
      </div>
    </OverlayStyles>
  );
}

export default Overlay;
