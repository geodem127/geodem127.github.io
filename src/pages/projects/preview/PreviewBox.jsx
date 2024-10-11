import React from "react";
import MediaViewer from "./MediaViewer";
import { Box, Slide, styled } from "@mui/material";
import SlideAnimation from "../../../common/animation/SlideAnimation";
import { AnimationScroll } from "../../../common/animation";

const ASPECT_RATIO = 1.4;

const PreviewBox = ({ previews = [], width = "100%", url = "https://" }) => {

	return (
		<div
			style={{
				width: `calc(${width} )`,
				aspectRatio: ASPECT_RATIO,
				position: "relative",
				display: "block",
				overflow: "visible",
				"--previewBox-width": `calc(${width} )`,
				"--previewBox-height": `calc(100% *  ${ASPECT_RATIO})`,
			}}
		>
			{/* start={90} animation="slideUp" */}
			{previews.map((preview, index) => (
				<AnimationScroll animation="slideUp" duration="500ms" start={15}>
					{/* <Slide in={true} direction="up" timeout={1000}>
						<MediaViewer
							key={index}
							className={preview?.view}
							preview={preview}
							width={width}
							url={url}
						/>
					</Slide> */}
					<Box
						component={MediaViewer}
						key={index}
						className={preview?.view}
						preview={preview}
						width={width}
						url={url}
					/>
				</AnimationScroll>
			))}
		</div>
	);
};

export default PreviewBox;
