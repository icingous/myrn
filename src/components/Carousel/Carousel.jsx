import { View } from "react-native";
import {
  ByIndexNavigator,
  CarouselList,
  GoToPrevNextButton,
} from "./components";
import { colors } from "../../constants/colors";
import { styles } from "./styles";

const Carousel = ({
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
}) => {
  return (
    <View style={styles.carousel}>
      <CarouselList
        {...{
          height,
          width,
          items,
          listRef,
          pauseCarousel,
          resumeCarousel,
          onScroll,
          styles,
        }}
      />
      <GoToPrevNextButton
        name="chevron-left"
        iconSize={56}
        color={colors.light}
        style={[
          styles.button,
          styles.buttonPrev,
          noSwipeLeft ? styles.buttonDisabled : null,
        ]}
        disabled={noSwipeLeft}
        onPress={scrollToPrev}
      />
      <GoToPrevNextButton
        name="chevron-right"
        iconSize={56}
        color={colors.light}
        style={[
          styles.button,
          styles.buttonNext,
          noSwipeRight ? styles.buttonDisabled : null,
        ]}
        disabled={noSwipeRight}
        onPress={scrollToNext}
      />
      <ByIndexNavigator
        {...{
          currentIndex,
          styles,
          color: colors.light,
          activeColor: colors.warning,
          scrollToIndex,
          iconSize: 16,
          capacity: 5,
        }}
      />
    </View>
  );
};

export default Carousel;
