import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import { Text, View } from "react-native";
import ComponTabs from "./ComponTabs";
import CadProd from "./CadProd";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView>
      <DrawerItem
        icon={({ color }) => <Icon size={28} name={"account"} color={color} />}
        label="HomeTab"
        onPress={() => navigation.navigate('HomeTab')}
      />
      <DrawerItem
        icon={({ color }) => <Icon size={28} name={"apple"} color={color} />}
        label="TelaB"
        onPress={() => navigation.navigate('TelaB')}
      />
      <DrawerItem
        icon={({ color }) => <Icon size={28} name={"clipboard-text-multiple-outline"} color={color} />}
        label="Cadastro de Produtos"
        onPress={() => navigation.navigate('CadProd')}
      />
    </DrawerContentScrollView>
  )
}


export default function ComponDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={() => <CustomDrawerContent />}
      initialRouteName="HomeTab"
      >
      <Drawer.Screen name="HomeTab" component={ComponTabs} />
      <Drawer.Screen name="TelaB" component={TelaB} />
      <Drawer.Screen name="CadProd" component={CadProd} />
    </Drawer.Navigator>
  );
}

