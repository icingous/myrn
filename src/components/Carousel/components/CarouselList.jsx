import { useCallback } from "react";
import { FlatList, Image, Pressable, View } from "react-native";

const keyExtractor = (item) => item.id;

const CarouselList = ({
  height,
  width,
  items,
  listRef,
  pauseCarousel,
  resumeCarousel,
  onScroll,
  styles: s,
}) => {
  const renderItem = useCallback(
    ({ item }) => (
      <View style={s.imageContainer}>
        <Image
          source={item.image}
          width={width}
          height={height}
          style={s.image}
        />
      </View>
    ),
    [s, height, width]
  );

  return (
    <Pressable onPressIn={pauseCarousel} onPressOut={resumeCarousel}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onScroll={onScroll}
        ref={listRef}
        horizontal
        pagingEnabled
      />
    </Pressable>
  );
};

export default CarouselList;
