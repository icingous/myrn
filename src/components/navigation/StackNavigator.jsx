import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart, Home, Tour } from "../../screen";
import { AppHeader } from "..";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const stackScreenOptions = {
    header: AppHeader,
    headerMode: "float",
  };

  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tour" component={Tour} />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
