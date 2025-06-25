import React, { useContext } from "react";
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Produtos from '../components/Produtos';
import { DadosContext } from "../contexts/GlobalState";

export const imagens = {

  mouse: require('../imgs/mouse.jpg')
}
export default function TelaA(props) {

  const [transacao, setTransacao] = useContext(DadosContext)
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.lista}
        data={transacao}
        renderItem={({ item }) => (
          <Produtos
            id={item.id}
            nome={item.nome}
            ean={item.ean}
            preco={item.preco}
            imgF={item.imgF}
          />)} />
      {/* <TouchableOpacity

        onPress={() => props.acrenNumero()}
        style={styles.botao}>
        <Text style={styles.textoBotao}>Acrescentar Número</Text>

      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  lista: {
    flex: 1,
    width: "95%",
    height: "auto"
  },
  botao: {
    height: 50,
    width: "95%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    backgroundColor: "#000",
    borderWidth: 1,
    borderRadius: 25
  },
  textoBotao: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
})