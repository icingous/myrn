import { useContext, useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer } from "mobx-react-lite";
import ColorSchemeContext from "./context/colorThemeContext";
import StoreContext from "./context/storeContext";

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
  CartTabIcon,
  CartTabLabel,
} from "./components/navigation";
import { AppHeader } from "./components";
import { Carousel, Settings, Cart } from "./screen";

const Main = () => {
  const { isSchemeLight } = useContext(ColorSchemeContext);
  const {
    tours: { getItems },
  } = useContext(StoreContext);
  const Tabs = createBottomTabNavigator();
  const AppColoredHeader = (props) => (
    <AppHeader {...props} isSchemeLight={isSchemeLight} />
  );

  useEffect(() => {
    getItems(800);
  }, []);

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar barStyle="default"></StatusBar>
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
            name="Cart"
            component={Cart}
            options={{
              header: AppColoredHeader,
              tabBarIcon: (props) => <CartTabIcon {...props} />,
              tabBarLabel: CartTabLabel,
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

export default observer(Main);
