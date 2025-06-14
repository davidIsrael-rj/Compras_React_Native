import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Campo from "./Campo";
import ImagProd from "./ImagProd";
import { useContext, useState } from "react";
import { DadosContext } from "../contexts/GlobalState";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialForm = {
    nome: "Teste",
    preco: "2,50",
    margem: "40",
    ean: "123456"
}

export default function CadProd() {

    const [form, setForm] = useState(initialForm)
    const [transacao, setTransacao] = useContext(DadosContext)

    const setAsyncStorage = async (data)=>{
        try{
            await AsyncStorage.setItem("transacao", JSON.stringify(data))
        } catch (e){
            console.warn(e)
        }
    }

    const addProdutoUP = async ()=>{
        if (form.id > 0){
            //se o id for maior que 0, então iremos atualizar o produto

            const updatedTransacao = transacao.map((produto) => {
                if(produto.id === form.id){
                    return form;
                }
                return produto;
            })
            setTransacao(updatedTransacao)
            await setAsyncStorage(updatedTransacao);
            setForm(initialForm)
            Alert.alert(`Produto foi atualizado com sucesso!!`)
        } else{
            //Adicionar um produto novo
            const id = transacao.length > 0 ? transacao[transacao.length - 1].id + 1 : 1;
            const newTransacao = {id, ...form};
            const updatedTransacao = [...transacao, newTransacao];
            setTransacao(updatedTransacao)
            setForm(initialForm);
            await setAsyncStorage(updatedTransacao)
            Alert.alert(`Produto cadastrado com sucesso!`)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.espImg}>
                <View style={styles.img}>
                    <ImagProd wt={250} ht={250} />
                </View>
            </View>
            <Campo
                nome="Nome"
                valCampo={form.nome}
                campoOnChange={(text) => setForm({ ...form, nome: text })} />
            <Campo nome="Preço"
                valCampo={form.preco}
                campoOnChange={(text) => setForm({ ...form, preco: text })} />
            <Campo nome="Margem"
                valCampo={form.margem}
                campoOnChange={(text) => setForm({ ...form, margem: text })} />
            <Campo nome="EAN"
                valCampo={form.ean}
                campoOnChange={(text) => setForm({ ...form, ean: text })} />

            <View>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={addProdutoUP}>
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
    botao: {
        height: 50,
        marginHorizontal: 10,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    textBotao: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    }

})