import { useCallback, useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "react-native";
import { SIZE, TIMEOUT } from "../config";

const useCarousel = () => {
  const listRef = useRef(null);
  const [timer, setTimer] = useState(null);
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);
  const { width, height } = useWindowDimensions();

  const noSwipeLeft = current === 0;
  const noSwipeRight = current === SIZE - 1;

  const onScroll = ({ nativeEvent: e }) => {
    const { contentOffset: offset, layoutMeasurement: layout } = e;
    const index = Math.floor(offset.x / layout.width);

    if (index !== current) {
      setCurrent(index);
    }
  };

  const scrollToNext = () => {
    if (!listRef.current) return;

    listRef.current.scrollToOffset({
      offset: (current + 1) * width,
      animated,
    });
    setCurrent((current) => current + 1);

    if (timer) {
      setAnimated(false);
      clearInterval(timer);
    }
  };

  const scrollToPrev = () => {
    if (!listRef.current) return;

    listRef.current.scrollToOffset({
      offset: (current - 1) * width,
      animated,
    });
    setCurrent((current) => current - 1);

    if (timer) {
      setAnimated(false);
      clearInterval(timer);
    }
  };

  const scrollToIndex = useCallback((index, animate, resetTimer) => {
    if (!listRef.current) return;

    listRef.current.scrollToOffset({
      offset: index * width,
      animated: animate === undefined ? animated : animate,
    });
    setCurrent(index);

    if (resetTimer) {
      setAnimated(false);
      clearInterval(timer);
    }
  }, []);

  const timerFn = useCallback(() => {
    const index = current === SIZE - 1 ? 0 : current + 1;
    const animated = index !== 0;

    scrollToIndex(index, animated);
  }, [current, scrollToIndex]);

  const pauseCarousel = () => clearTimeout(timer);

  const resumeCarousel = () => setTimeout(timerFn, TIMEOUT);

  useEffect(() => {
    setTimer(setTimeout(timerFn, TIMEOUT));

    if (!animated) {
      setAnimated(true);
    }

    return () => clearInterval(timer);
  }, [current]);

  return {
    currentIndex: current,
    height,
    width,
    noSwipeLeft,
    noSwipeRight,
    onScroll,
    pauseCarousel,
    resumeCarousel,
    scrollToIndex,
    scrollToNext,
    scrollToPrev,
    listRef,
  };
};

export default useCarousel;
