import { useContext } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ColorSchemeContext from "./store/color-theme-context/colorThemeContext";

import {
  DrawerNavigator,
  StackNavigator,
  CarouselTabIcon,
  CarouselTabLabel,
  SettingsTabIcon,
  SettingsTabLabel,
  DrawerTabIcon,
  DrawerTabLabel,
  ToursTabIcon,
  ToursTabLabel,
} from "./components/navigation";
import { AppHeader } from "./components";
import { Carousel, Settings } from "./screen";

const Main = () => {
  const { isSchemeLight } = useContext(ColorSchemeContext) || {};
  const barStyle = isSchemeLight ? "light-content" : "dark-content";
  const Tabs = createBottomTabNavigator();
  const AppColoredHeader = (props) => (
    <AppHeader {...props} isSchemeLight={isSchemeLight} />
  );

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle={barStyle}></StatusBar>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen
            name="Best"
            component={Carousel}
            options={{
              header: AppColoredHeader,
              tabBarIcon: CarouselTabIcon,
              tabBarLabel: CarouselTabLabel,
            }}
          />
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
            name="AsideDrawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
              tabBarIcon: DrawerTabIcon,
              tabBarLabel: DrawerTabLabel,
            }}
          />
          <Tabs.Screen
            name="Settings"
            component={Settings}
            options={{
              header: AppColoredHeader,
              tabBarIcon: SettingsTabIcon,
              tabBarLabel: SettingsTabLabel,
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default Main;
