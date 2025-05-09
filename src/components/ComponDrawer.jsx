import { createDrawerNavigator } from "@react-navigation/drawer";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";

const Drawer = createDrawerNavigator();

export default function ComponDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="TelaA" component={TelaA} />
      <Drawer.Screen name="TelaB" component={TelaB} />
    </Drawer.Navigator>
  );
}