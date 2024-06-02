import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import BackButton from "./BackButton";
import RouteTitle from "./RouteTitle";
import { colors } from "../constants/colors";
import store from "../store";

const AppHeader = (props) => {
  const { navigation, route, back, isSchemeLight } = props;
  const goBack = useCallback(() => navigation.goBack(), []);

  return route.name !== "Home" ||
    (route.name === "Home" && store.tours.isHeaderVisible) ? (
    <View
      style={[
        styles.header,
        isSchemeLight ? styles.headerLight : styles.headerDark,
      ]}
    >
      <Text
        style={[
          styles.headerText,
          isSchemeLight ? styles.headerTextLight : styles.headerTextDark,
        ]}
      >
        Travel Store
      </Text>
      <View style={styles.navHeader}>
        {back && <BackButton onPress={goBack} />}
        <RouteTitle route={route} />
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  headerText: {
    paddingTop: 8,
    fontSize: 48,
    textAlign: "center",
  },
  headerTextLight: {
    color: colors.dark,
  },
  headerTextDark: {
    color: colors.primary,
  },
  navHeader: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingBottom: 16,
  },
  headerLight: {
    backgroundColor: colors.extra,
  },
  headerDark: {
    backgroundColor: colors.dark,
  },
});

export default observer(AppHeader);
