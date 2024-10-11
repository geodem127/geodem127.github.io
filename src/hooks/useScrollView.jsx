import { useEffect, useState } from "react";

const useScrollView = (target) => {
	const [top, setTop] = useState(null);
	const [bottom, setBottom] = useState(null);
	const [start, setStart] = useState(null);
	const [end, setEnd] = useState(null);
	const [height, setHeight] = useState(null);
	const [ratio, setRatio] = useState(null);

	const root = document.querySelector("#root");

	const getTargetRect = () => {
		if (target) {
			const boundingClientRect = target.getBoundingClientRect();

			if (!boundingClientRect) return;

			const _viewportHeight = window.innerHeight;
			const _targetHeight = boundingClientRect?.height;
			const _targetTop = boundingClientRect?.top;
			const _targetBottom = boundingClientRect?.bottom;

			const _targetHeightRatio = (_targetHeight / _viewportHeight) * 100;

			const _top = (_targetTop / _viewportHeight) * 100;
			const _bottom = 100 - (_targetBottom / _viewportHeight) * 100;

			const _start = 100 - _top;
			const _end = _bottom;

			const _startRatio = _top < 0 ? _top * -1 : 0;
			const _endRatio = _bottom < 0 ? _bottom * -1 : 0;

			const _ratio =
				((_targetHeightRatio - (_startRatio + _endRatio)) /
					_targetHeightRatio) *
				100;

			setTop(_top);
			setBottom(_bottom);
			setHeight(_targetHeight);

			setStart(_start);
			setEnd(_end);
			setRatio(_ratio < 0 ? 0 : _ratio);
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
		start,
		end,
		height,
		ratio,
	};
};

export default useScrollView;
