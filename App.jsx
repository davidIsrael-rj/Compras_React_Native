import { StyleSheet, Text, View } from "react-native";
// import { Icon } from "react-native-vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App(){
  return(
    <View style={styles.container}>
      <Text>Compras</Text>
      <Icon name={"emoticon-cool"} size={150} color={"#000"}/>
    </View>
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