import "react-native-gesture-handler";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  DrawerNavigator,
  StackNavigator,
  MoreTabIcon,
  MoreTabLabel,
  SettingsTabIcon,
  SettingsTabLabel,
  ToursTabIcon,
  ToursTabLabel,
} from "./src/components/navigation";
import { AppHeader } from "./src/components";
import { More } from "./src/screen";

export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle={"light-content"}></StatusBar>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen
            name="Tours"
            component={StackNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ToursTabIcon,
              tabBarLabel: ToursTabLabel,
            }}
          />
          <Tabs.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
              tabBarIcon: SettingsTabIcon,
              tabBarLabel: SettingsTabLabel,
            }}
          />
          <Tabs.Screen
            name="More"
            component={More}
            options={{
              header: AppHeader,
              tabBarIcon: MoreTabIcon,
              tabBarLabel: MoreTabLabel,
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
