import React from "react";
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Produtos from '../components/Produtos';

const dadosProdutos = [
  {
    "id": "1",
    "nome": "Caderno",
    "preco": "2.50",
    "subtitulo": "Ursinho",
    "uri": "mouse"
  }, {
    "id": "2",
    "nome": "Livro",
    "preco": "2.50",
    "subtitulo": "lobo",
    "uri": "teclado"
  },
  {
    "id": "3",
    "nome": "Caderno",
    "preco": "2.50",
    "subtitulo": "Ursinho",
    "uri": "mouse"
  },
  {
    "id": "4",
    "nome": "Caderno",
    "preco": "2.50",
    "subtitulo": "Ursinho",
    "uri": "mouse"
  },
  {
    "id": "5",
    "nome": "Caderno",
    "preco": "2.50",
    "subtitulo": "Ursinho",
    "uri": "teclado"
  },]


export const imagens = {

  mouse: require('../imgs/mouse.jpg')
}
export default function TelaA(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.lista}
        data={dadosProdutos}
        renderItem={({ item }) => (
          <Produtos
            nome={item.nome}
            subtitulo={item.subtitulo}
            preco={item.preco}
             />)} />
      <TouchableOpacity

        onPress={() => props.acrenNumero()}
        style={styles.botao}>
        <Text style={styles.textoBotao}>Acrescentar Número</Text>

      </TouchableOpacity>
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