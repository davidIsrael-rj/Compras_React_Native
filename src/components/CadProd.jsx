import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Campo from "./Campo";
import ImagProd from "./ImagProd";

export default function CadProd() {
    return (
        <View style={styles.container}>
            <View style={styles.espImg}>
                <View style={styles.img}>
                    <ImagProd wt={250} ht={250} />
                </View>
            </View>
            <Campo nome="Nome" />
            <Campo nome="Preço" />
            <Campo nome="Margem" />
            <Campo nome="EAN" />

            <View>
                <TouchableOpacity 
                style={styles.botao}
                onPress={()=> Alert.alert("Produto salvo com sucesso")}>
                    <Text style={styles.textBotao}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d3d3d3"
    },
    espImg: {
        justifyContent: "center",
        width: "100%",
        height: 300
    },
    img: {
        alignItems: "center",
        width: "100%",
        height: 100
    },
    botao:{
        height:50,
        marginHorizontal:10,
        backgroundColor:"#000",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 20,
    },
    textBotao:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
    }

})