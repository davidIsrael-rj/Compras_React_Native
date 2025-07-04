import React, { useContext } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MeuContexto } from "./MeuContexto";
import ImagProd from "./ImagProd";
import ImagemProd from "./ImagemProd";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DadosContext } from "../contexts/GlobalState";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Produtos(props) {
    const {acrenNumero, n1, n2} = useContext(MeuContexto)
    const [transacao, setTransacao] = useContext(DadosContext)
const removerProdutos = async (id) =>{
    try{
        const transacaoStorage = await AsyncStorage.getItem("transacao");
        const transacaoArry = JSON.parse(transacaoStorage);
        const novaTransacao = transacaoArry.filter((item)=> item.id !== id);
        setTransacao(novaTransacao);
        await AsyncStorage.setItem("transacao", JSON.stringify(novaTransacao));
    }catch (e){
        console.warn(e);
    }
}

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
                        <View style={styles.imagProd}>
                           <ImagemProd fotos={props.imgF}/>
                        </View>
                        <View style={styles.etiqueta}>
                            <Text>{props.ean}</Text>
                            <Text style={styles.preco}>R$ {props.preco}</Text>
                        </View>
                        <View styles={styles.cardBotao}>
                            <TouchableOpacity
                            styles={styles.botao}
                            onPress={()=> Alert.alert("Editando produto")}>
                                <Icon name={'file-edit-outline'} size={30} color={'#000'} />
                            </TouchableOpacity>
                            <TouchableOpacity
                            styles={styles.botao}
                            onPress={()=> removerProdutos(props.id)}>
                                <Icon name={'pail-remove'} size={30} color={'#000'} />
                            </TouchableOpacity>
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
    imagProd:{
        width: 100,
        height:100
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
    },
    cardBotao:{
        height:"100%",
        width:"100%",
        flexDirection:"column" ,
        justifyContent:"center",
        alignItems:"center",
    },
    botao:{
        
        
    }

})