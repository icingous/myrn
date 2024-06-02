import "react-native-gesture-handler";
import { Platform, UIManager } from "react-native";
import { ColorSchemeContextProvider, StoreProvider } from "./src/context";
import Main from "./src/Main";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function App() {
  return (
    <ColorSchemeContextProvider>
      <StoreProvider>
        <Main />
      </StoreProvider>
    </ColorSchemeContextProvider>
  );
}
