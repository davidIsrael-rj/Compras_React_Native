import { StyleSheet, Text, TextInput, View } from "react-native";
import Campo from "./Campo";

export default function CadProd() {
    return (
        <View style={styles.container}>
           <Campo nome="Nome"/>
           <Campo nome="Preço"/>
           <Campo nome="Margem"/>
           <Campo nome="EAN"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d3d3d3"
    },
   
})