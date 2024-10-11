import React, { useState, useEffect } from "react";

const useScrollObserver = ({ target = undefined, ratio = 0.1 }) => {
	const [top, setTop] = useState(null);
	const [bottom, setBottom] = useState(null);
	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);
	const [inRange, setInRange] = useState(false);
	const [_ratio, set_Ratio] = useState(null);

	const observer = new IntersectionObserver(
		([entry]) => {
			const {
				top: _top,
				bottom: _bottom,
				height: _height,
				width: _width,
			} = entry.boundingClientRect;
			// const ratio = entry.intersectionRatio;
			setTop(100 - _top);
			setBottom(_bottom);
			setHeight(_height);
			setWidth(_width);
			set_Ratio(entry.intersectionRatio);
			setInRange(entry.intersectionRatio >= ratio);
		},
		{
			root: null,
			rootMargin: "0px",
			threshold: ratio,
		}
		// {
		// 	root: null,
		// 	rootMargin: "0px",
		// 	threshold: 0.1,
		// }
	);

	useEffect(() => {
		if (!target) return;

		observer.observe(target);

		return () => {
			observer.disconnect();
		};
	}, [target]);

	return { top, bottom, height, width, ratio: _ratio, inRange };
};

export default useScrollObserver;
