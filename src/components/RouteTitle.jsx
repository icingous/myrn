import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import ColorSchemeContext from "../context/colorThemeContext";

const getScreenTitle = (route) => {
  const { name, params } = route;
  if (params) return params.title;

  switch (name) {
    case "Home":
      return "Popular";
    case "Best":
      return "Top Rated Tours";
    case "Cart":
      return "Shopping Cart";
    default:
      return name;
  }
};

const RouteTitle = ({ route }) => {
  const { params } = route;
  const { isSchemeLight } = useContext(ColorSchemeContext);

  return (
    <View styles={styles.screenTitleContainer}>
      <Text
        style={[
          styles.screenTitle,
          isSchemeLight ? styles.screenTitleLight : styles.screenTitleDark,
        ]}
      >
        {getScreenTitle(route)}
      </Text>
      {params?.isNew && (
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>New</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenTitleContainer: {
    position: "relative",
  },
  screenTitle: {
    paddingTop: 4,
    fontSize: 26,
    textAlign: "center",
    color: colors.warning,
  },
  screenTitleLight: {
    backgroundColor: colors.extra,
  },
  screenTitleDark: {
    backgroundColor: colors.dark,
  },
  newBadge: {
    position: "absolute",
    top: 0,
    right: -32,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 14,
    backgroundColor: colors.warning,
  },
  newBadgeText: {
    fontSize: 10,
    color: "white",
  },
});

export default RouteTitle;
