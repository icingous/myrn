import "react-native-gesture-handler";
import { ColorSchemeContextProvider, StoreProvider } from "./src/context";
import Main from "./src/Main";

export default function App() {
  return (
    <ColorSchemeContextProvider>
      <StoreProvider>
        <Main />
      </StoreProvider>
    </ColorSchemeContextProvider>
  );
}
