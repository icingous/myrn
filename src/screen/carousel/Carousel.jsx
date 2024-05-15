import { Text, View } from "react-native";
import { useCarousel, useCarouselItems } from "./hooks";
import { Carousel } from "../../components";
import { styles as s } from "./styles";

const CarouselScreen = () => {
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
    <View style={s.content}>
      <Text style={s.header}>The Best</Text>
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
