import { StyleSheet, Text, TextInput, View } from "react-native";

export default function CadProd() {
    return (
        <View style={styles.container}>
            <View style={styles.campo}>
                <Text style={styles.rotulo}>Nome</Text>
                <TextInput style={styles.inptText} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d3d3d3"
    },
    campo: {
        padding: 15,
    },
    rotulo: {
        position: "absolute",
        left: 30,
        top:5,
        paddingHorizontal:5,
        backgroundColor: "#d3d3d3",
        zIndex:1
    },
    inptText: {
        borderColor: "#000",
        backgroundColor:"#d3d3d3",
        borderWidth: 2,
        borderRadius: 15
    },
})