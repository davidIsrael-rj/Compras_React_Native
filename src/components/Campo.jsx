import { StyleSheet, Text, TextInput, View } from "react-native"

export default function Campo(props) {
    return (
        <View style={styles.campo}>
            <Text style={styles.rotulo}>{props.nome}</Text>
            <TextInput
                value={props.valCampo}
                onChangeText={props.campoOnChange}
                style={styles.inptText} />
        </View>
    )
}

const styles = StyleSheet.create({
    campo: {
        padding: 15,
    },
    rotulo: {
        position: "absolute",
        left: 30,
        top: 5,
        paddingHorizontal: 5,
        backgroundColor: "#d3d3d3",
        zIndex: 1
    },
    inptText: {
        borderColor: "#000",
        backgroundColor: "#d3d3d3",
        borderWidth: 2,
        borderRadius: 15
    },
})