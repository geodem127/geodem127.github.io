import { cloneElement, useEffect, useRef, useState } from "react";
import usePageScroll from "../../hooks/usePageScroll";
import "./styles.css";

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

export default Animation;
