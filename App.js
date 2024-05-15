import {
  Appearance,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import Carousel from "./src/screen/carousel/Carousel";
import Home from "./src/screen/home/Home";
import { colors } from "./src/constants/colors";
import { Contacts } from "./src/components";

const scheme = Appearance.getColorScheme();
const isSchemeLight = scheme === "light";

export default function App() {
  const barStyle = isSchemeLight ? "light-content" : "default";

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle={barStyle}></StatusBar>
      <View style={styles.container}>
        <Contacts />
        <Text style={styles.header}>Travel Store</Text>
        <View style={styles.main}>
          <Home />
          {/* <Carousel /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 16,
    marginTop: 0,
    backgroundColor: isSchemeLight ? colors.extra : colors.dark,
  },
  header: {
    marginBottom: 4,
    color: isSchemeLight ? colors.dark : colors.primary,
    fontSize: 48,
    textAlign: "center",
  },
  main: {
    flex: 1,
  },
});
