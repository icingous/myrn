import { useEffect, useRef, useState } from "react";
import { useWindowDimensions } from "react-native";
import { SIZE, TIMEOUT } from "../config";

const useCarousel = () => {
  const listRef = useRef(null);
  const [timer, setTimer] = useState(null);
  const [current, setCurrent] = useState(0);
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

    if (timer) {
      clearInterval(timer);
    }

    listRef.current.scrollToOffset({
      offset: (current + 1) * width,
      animated: true,
    });
    setCurrent((current) => current + 1);
  };

  const scrollToPrev = () => {
    if (!listRef.current) return;

    if (timer) {
      clearInterval(timer);
    }

    listRef.current.scrollToOffset({
      offset: (current - 1) * width,
      animated: true,
    });
    setCurrent((current) => current - 1);
  };

  const scrollToIndex = (index, resetTimer) => {
    if (!listRef.current) return;

    if (resetTimer) {
      clearInterval(timer);
    }

    setCurrent(index);
    listRef.current.scrollToOffset({
      offset: index * width,
      animated: true,
    });
  };

  const timerFn = () => {
    const index = current === SIZE - 1 ? 0 : current + 1;

    scrollToIndex(index);
  };

  const pauseCarousel = () => clearTimeout(timer);
  const resumeCarousel = () => setTimeout(timerFn, TIMEOUT);

  useEffect(() => {
    clearInterval(timer);
    setTimer(setTimeout(timerFn, TIMEOUT));

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
