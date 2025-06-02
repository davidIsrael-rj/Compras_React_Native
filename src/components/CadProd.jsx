import { StyleSheet, View } from "react-native";
import Campo from "./Campo";
import ImagProd from "./ImagProd";

export default function CadProd() {
    return (
        <View style={styles.container}>
            <Campo nome="Nome" />
            <Campo nome="Preço" />
            <Campo nome="Margem" />
            <Campo nome="EAN" />
            <View style={styles.img}>
            <ImagProd />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d3d3d3"
    },
    img:{
        justifyContent:"center",
        alignItems:"center",
    }

})