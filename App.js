import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Carousel from "./src/screen/carousel/Carousel";

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle={"light-content"}></StatusBar>
      <View style={styles.container}>
        <Text style={styles.header}>Travel Store</Text>
        <View style={styles.main}>
          {/* <Home /> */}
          <Carousel />
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
    paddingBottom: 0,
    marginTop: 0,
    backgroundColor: "#222",
  },
  header: {
    marginBottom: 4,
    color: "bisque",
    fontSize: 48,
    textAlign: "center",
  },
  main: {
    flex: 1,
  },
});
