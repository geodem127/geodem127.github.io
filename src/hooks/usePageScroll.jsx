import { useEffect, useState } from "react";

const usePageScroll = (target) => {
	const [top, setTop] = useState(null);
	const [bottom, setBottom] = useState(null);
	const [left, setLeft] = useState(null);
	const [right, setRight] = useState(null);
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);
	const [view, setView] = useState(null);
	const [viewportWidth, setViewportWidth] = useState(null);
	const [viewportHeight, setViewportHeight] = useState(null);
	const [rects, setRects] = useState(null);

	// const root = document.getElementById("root");
	const root = document.querySelector("#root");

	const getTargetRect = () => {
		if (target) {
			const boundingClientRect = target.getBoundingClientRect();
			setRects(boundingClientRect);

			const _viewportWidth = window.innerWidth;
			const _viewportHeight = window.innerHeight;
			if (!boundingClientRect) return;
			const topPercentage = (boundingClientRect?.top / _viewportHeight) * 100;
			const botPercentage =
				100 - (boundingClientRect?.bottom / _viewportHeight) * 100;
			const leftPercentage = (boundingClientRect?.left / _viewportWidth) * 100;
			const rightPercentage =
				100 - (boundingClientRect?.right / _viewportWidth) * 100;

			setTop(topPercentage);
			setBottom(botPercentage);
			setLeft(leftPercentage);
			setRight(rightPercentage);
			setHeight(boundingClientRect?.height);
			setWidth(boundingClientRect?.width);
			setView();
			setRects(boundingClientRect);
			setViewportWidth(_viewportWidth);
			setViewportHeight(_viewportHeight);
		}
	};

	useEffect(() => {
		if (!target) return;
		getTargetRect();
		root.addEventListener("scroll", getTargetRect);
		return () => {
			root.removeEventListener("scroll", getTargetRect);
		};
	}, [target]);

	return {
		top,
		bottom,
		left,
		right,
		height,
		width,
		view,
		rects,
		viewportWidth,
		viewportHeight,
		getTargetRect,
	};
};

export default usePageScroll;
