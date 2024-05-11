import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

const getScreenTitle = (route) => {
  const { name, params } = route;
  if (params) return params.title;

  switch (name) {
    case "Home":
      return "Popular";
    default:
      return name;
  }
};

const RouteTitle = ({ route }) => {
  const { params } = route;

  return (
    <View styles={styles.screenTitleContainer}>
      <Text style={styles.screenTitle}>{getScreenTitle(route)}</Text>
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
