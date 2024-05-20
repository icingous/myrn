import { createDrawerNavigator } from "@react-navigation/drawer";
import { AsideDrawer } from "../../screen";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerComponent" component={AsideDrawer} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
