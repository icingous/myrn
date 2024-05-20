import "react-native-gesture-handler";
import { ColorSchemeContextProvider } from "./src/store/color-theme-context/colorThemeContext";
import Main from "./src/Main";

export default function App() {
  return (
    <ColorSchemeContextProvider>
      <Main />
    </ColorSchemeContextProvider>
  );
}
