import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import { Icon } from "react-native-vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Drawer from "./src/navegacao/Drawer";
import { enableScreens } from "react-native-screens";

export default function App(){
  enableScreens();
  return(
    <SafeAreaView>
      <NavigationContainer>
        <Drawer/>
      </NavigationContainer>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Text>Compras</Text>
    //   <Icon name={"emoticon-cool"} size={150} color={"#000"}/>
    // </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems: "center",
    backgroundColor:"#FFF",

  }
})