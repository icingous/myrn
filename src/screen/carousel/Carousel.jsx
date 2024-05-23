import { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { observer } from "mobx-react-lite";
import { useCarousel } from "./hooks";
import { Carousel } from "../../components";
import { styles as s } from "./styles";
import { ColorSchemeContext, StoreContext } from "../../context";
import { colors } from "../../constants/colors";

const CarouselScreen = () => {
  const { isSchemeLight } = useContext(ColorSchemeContext);
  const {
    tours: { topFive },
  } = useContext(StoreContext);
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

  const isLoading = topFive.length === 0;

  return (
    <View style={[s.content, isSchemeLight ? s.contentLight : s.contentDark]}>
      {isLoading && <ActivityIndicator color={colors.warning} size={32} />}
      {!isLoading && (
        <Carousel
          {...{
            items: topFive,
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
      )}
    </View>
  );
};

export default observer(CarouselScreen);
