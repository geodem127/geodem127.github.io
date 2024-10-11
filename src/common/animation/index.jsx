import {
	Children,
	cloneElement,
	isValidElement,
	useEffect,
	useRef,
	useState,
} from "react";
import usePageScroll from "../../hooks/usePageScroll";
// import "./styles.css";
import "./scroll-animation.css";
import useScrollView from "../../hooks/useScrollView";

const Animation = ({ start = 90, end = 1, animation = "easein", children }) => {
	const targetRef = useRef(undefined);
	const { top } = usePageScroll(targetRef?.current);

	const [inRange, setInRange] = useState(false);

	useEffect(() => {
		setInRange(top < start);
	}, [top]);

	return cloneElement(children, {
		// ...children,
		ref: targetRef,
		"data-animation": `_${animation}`,
		className: `${
			!!children?.props?.className ? children?.props?.className : ""
		} ${inRange ? "in" : ""}`.trim(),
	});
};

const ScrollAnimationx = ({
	start = 20,
	end = 1,
	animation = "easein",
	children,
}) => {
	const targetRef = useRef(undefined);
	const { top, bottom } = usePageScroll(targetRef?.current);

	const [inRange, setInRange] = useState(false);

	useEffect(() => {
		// setInRange(bottom >= start);
		setInRange(100 - top >= start);
	}, [bottom]);

	return cloneElement(children, {
		// ...children,
		ref: targetRef,
		"data-animation": `_${animation}`,
		className: `${
			!!children?.props?.className ? children?.props?.className : ""
		} ${inRange ? "in" : ""}`.trim(),
	});
};

const ScrollAnimation = ({
	start = 20,
	end = 1,
	animation = "slideup",
	children,
}) => {
	const targetRef = useRef(undefined);
	const { top, bottom } = usePageScroll(targetRef?.current);

	const [inRange, setInRange] = useState(false);

	useEffect(() => {
		// setInRange(bottom >= start);
		setInRange(100 - top >= start);
	}, [bottom]);

	return cloneElement(children, {
		// ...children,
		ref: targetRef,
		"data-animation": `_${animation}`,
		className: `${
			!!children?.props?.className ? children?.props?.className : ""
		} ${inRange ? "in" : ""}`.trim(),
	});
};

const AnimationScroll = ({
	start = 20,
	end = 1,
	animation = "slideUp",
	duration = "400ms",
	delay = "0ms",
	children,
}) => {
	const targetRef = useRef(undefined);
	const { top, bottom } = usePageScroll(targetRef?.current);

	const [inRange, setInRange] = useState(false);

	const animationName = animation?.trim()?.toLowerCase();

	useEffect(() => {
		// setInRange(bottom >= start);
		setInRange(100 - top >= start);
	}, [top]);

	const childrenCount = Children.count(children);
	if (childrenCount > 1 || !isValidElement) return children;

	return cloneElement(children, {
		ref: targetRef,
		className: `${children?.props?.className} _sanimation-${animation}${
			inRange ? " in" : ""
		}`,
	});
};

const ScrollListener = ({
	start = null,
	end = null,
	ratio = null,
	activeClassName = "in",
	children,
}) => {
	const targetRef = useRef(undefined);
	const [target, setTarget] = useState(undefined);
	const [inRange, setInRange] = useState(false);
	const { start: _start, end: _end, ratio: _ratio } = useScrollView(target);

	useEffect(() => {
		if (!targetRef?.current) return;
		setTarget(targetRef?.current);
	}, [targetRef?.current]);

	useEffect(() => {
		if (!start && !end && !ratio) return;
		if (!!end && _end > end) return setInRange(false);

		const startTrigger = !!start && _start >= start;
		const ratioTrigger = !!ratio && _ratio >= ratio;

		setInRange(startTrigger || ratioTrigger);
	}, [_start, _ratio, _end]);

	const childrenCount = Children.count(children);
	if (childrenCount > 1 || !isValidElement) return children;

	return cloneElement(children, {
		ref: targetRef,
		className: `${children?.props?.className} ${
			!!inRange ? activeClassName : ""
		}`,
	});
};

export default Animation;
export { ScrollAnimation, AnimationScroll, ScrollListener };
