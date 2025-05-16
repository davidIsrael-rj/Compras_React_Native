import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const imagens = {
    mouse: require('../imgs/mouse.jpg'),

};
export default function Produto(props) {
    return (
        <View style={styles.container}>
            <View style={styles.contorno}>
                <Text style={styles.nome}>Produto</Text>
                <Image source={imagens[props.uri]}
                    style={{ width: 100, height: 100 }} />
                <Text>{props.nome}</Text>
                <Text>{props.preco}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    contorno: {
        padding:20,
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,


    },
    nome: {
        fontSize: 25,
        fontWeight: "bold"
    },

})