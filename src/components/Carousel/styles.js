import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    position: "relative",
  },
  carouselList: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
  },
  button: {
    position: "absolute",
    top: "50%",
    marginTop: -30,
  },
  buttonDisabled: {
    opacity: 0.3,
  },
  buttonPrev: {
    left: 0,
    paddingLeft: 20,
    paddingRight: 30,
  },
  buttonNext: {
    right: 0,
    paddingLeft: 30,
    paddingRight: 20,
  },
  buttonText: {
    fontSize: 30,
    color: colors.extra,
  },
  carouselNavigator: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0,
  },
  carouselButton: {
    padding: 15,
  },
});
