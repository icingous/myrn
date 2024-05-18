import { Pressable, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

const ByIndexNavigator = ({
  currentIndex,
  styles: s,
  color,
  activeColor,
  scrollToIndex,
  iconSize,
  capacity,
}) => {
  return (
    <View style={s.carouselNavigator}>
      {[...Array(capacity)].map((_, i) => (
        <Pressable
          key={i}
          onPress={() => scrollToIndex(i)}
          style={s.carouselButton}
        >
          <Octicons
            name="dot-fill"
            size={iconSize} //16
            color={i === currentIndex ? activeColor : color}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default ByIndexNavigator;
