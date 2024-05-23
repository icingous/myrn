import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart, Home, Tour } from "../../screen";
import { AppHeader } from "..";
import ColorSchemeContext from "../../context/colorThemeContext";

const StackNavigator = () => {
  const { isSchemeLight } = useContext(ColorSchemeContext);
  const AppColoredHeader = (props) => (
    <AppHeader {...props} isSchemeLight={isSchemeLight} />
  );
  const Stack = createNativeStackNavigator();
  const stackScreenOptions = {
    header: AppColoredHeader,
    headerMode: "float",
  };

  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tour" component={Tour} />
      <Stack.Screen
        name="Cart"
        component={Cart}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
