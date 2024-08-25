export const scrollToPage = (targetElement, duration) => {
  const targetPosition = targetElement.offsetTop - 68;
  const startPosition = scrollPage.scrollTop;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easing = easeInOutQuad(progress);
    scrollPage.scrollTo(0, startPosition + distance * easing);

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  // Easing function for smooth animation (you can adjust this function)
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(scrollAnimation);
};
