import { StatusBar, StyleSheet, Text, View } from "react-native";
import Home from "./src/screen/home/Home";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"}></StatusBar>
      <View style={styles.container}>
        <Text style={styles.header}>Travel Store</Text>
        <View style={styles.main}>
          <Home />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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

//<ActivityIndicator size color
//react-native-indicators

//TouchableWithoutFeedback onPress onLongPress onPressIn onPressOut
//TouchableOpacity style activeOpacity(0.2) 0-1
//TouchableHighlight(0.85) underlayColor

//Pressable android_ripple={borderless, radius, color, foreground}
