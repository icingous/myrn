import { StyleSheet, Text, View } from "react-native";
import BackButton from "./BackButton";
import RouteTitle from "./RouteTitle";
import { colors } from "../constants/colors";

const AppHeader = (props) => {
  const { navigation, route, back } = props;

  return (
    <View>
      <Text style={styles.header}>Travel Store</Text>
      <View style={styles.navHeader}>
        {back && <BackButton onPress={() => navigation.goBack()} />}
        <RouteTitle route={route} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 8,
    fontSize: 48,
    textAlign: "center",
    backgroundColor: colors.dark,
    color: colors.primary,
  },
  navHeader: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark,
  },
});

export default AppHeader;
