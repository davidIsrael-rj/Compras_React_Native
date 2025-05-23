import React, { useContext } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MeuContexto } from "./MeuContexto";

const imagens = {
    mouse: require('../imgs/mouse.jpg'),

};
export default function Produtos(props) {
    const {acrenNumero, n1, n2} = useContext(MeuContexto)
    return (

        <View style={styles.container}>
            <TouchableOpacity  
            style={{width:"100%", alignContent:"center", justifyContent: "center"}}
            // onPress={() => Alert.alert(`Produto ${props.nome}, preço R$ ${props.preco} `)}>
            onPress={() => acrenNumero()}>
                <View style={styles.contorno}>
                    <View style={styles.contText}>
                        <Text style={styles.nome}>{props.nome}</Text>
                    </View>
                    <View style={styles.card}>
                        <View>
                            <Image source={imagens[props.uri]}
                                style={{ width: 100, height: 100 }} />
                        </View>
                        <View style={styles.etiqueta}>
                            <Text>{props.subtitulo}</Text>
                            <Text style={styles.preco}>R$ {props.preco}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        paddingBottom:5,
        justifyContent: "center",
        alignItems: "center"
    },
    contorno: {
        width: "100%",
        padding: 20,
        borderWidth: 2,
        borderColor: '#000',
        padding: 10,
    },
    contText: {
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        flexDirection: "row",

    },
    nome: {
        fontSize: 25,
        fontWeight: "bold"
    },
    etiqueta: {
        paddingLeft: 5,
    },
    preco: {
        fontSize: 50,
        fontWeight: "bold"
    }

})