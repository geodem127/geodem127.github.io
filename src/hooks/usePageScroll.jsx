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

  const getTargetRect = () => {
    if (target) {
      const boundingClientRect = target.getBoundingClientRect();
      setRects(boundingClientRect);
    }
  };

  useEffect(() => {
    if (!target) return;
    getTargetRect();
    window.addEventListener("scroll", getTargetRect);
    return () => {
      window.removeEventListener("scroll", getTargetRect);
    };
  }, [target]);

  useEffect(() => {
    const _viewportWidth = window.innerWidth;
    const _viewportHeight = window.innerHeight;
    if (!rects) return;
    const topPercentage = (rects?.top / _viewportHeight) * 100;
    const botPercentage = 100 - (rects?.bottom / _viewportHeight) * 100;
    const leftPercentage = (rects?.left / _viewportWidth) * 100;
    const rightPercentage = 100 - (rects?.right / _viewportWidth) * 100;

    setTop(topPercentage);
    setBottom(botPercentage);
    setLeft(leftPercentage);
    setRight(rightPercentage);
    setHeight(rects?.height);
    setWidth(rects?.width);
    setView();

    setViewportWidth(_viewportWidth);
    setViewportHeight(_viewportHeight);
  }, [rects]);

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
