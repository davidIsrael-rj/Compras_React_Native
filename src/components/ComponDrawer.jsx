import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView>
      <DrawerItem
        icon={({ color }) => <Icon size={28} name={"account"} color={color} />}
        label="TelaA"
        onPress={() => navigation.navigate('TelaA')}
      />
      <DrawerItem
        icon={({ color }) => <Icon size={28} name={"apple"} color={color} />}
        label="TelaB"
        onPress={() => navigation.navigate('TelaB')}
      />
    </DrawerContentScrollView>
  )
}


export default function ComponDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawerContent />}>
      <Drawer.Screen name="TelaA" component={TelaA} />
      <Drawer.Screen name="TelaB" component={TelaB} />
    </Drawer.Navigator>
  );
}