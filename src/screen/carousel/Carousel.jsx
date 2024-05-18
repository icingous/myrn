import { useContext } from "react";
import { View } from "react-native";
import { useCarousel, useCarouselItems } from "./hooks";
import { Carousel } from "../../components";
import { styles as s } from "./styles";
import ColorSchemeContext from "../../store/color-theme-context/colorThemeContext";

const CarouselScreen = () => {
  const { isSchemeLight } = useContext(ColorSchemeContext) || {};
  const items = useCarouselItems();
  const {
    currentIndex,
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
  } = useCarousel();

  return (
    <View style={[s.content, isSchemeLight ? s.contentLight : s.contentDark]}>
      <Carousel
        {...{
          items,
          currentIndex,
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
        }}
      />
    </View>
  );
};

export default CarouselScreen;
