import { FlatList, Image, Pressable, View } from "react-native";

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
  return (
    <Pressable onPressIn={pauseCarousel} onPressOut={resumeCarousel}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={s.imageContainer}>
            <Image
              source={item.image}
              width={width}
              height={height}
              style={s.image}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        onScroll={onScroll}
        ref={listRef}
        horizontal
        pagingEnabled
      />
    </Pressable>
  );
};

export default CarouselList;
