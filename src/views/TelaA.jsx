import React from "react";
import { useNavigation } from '@react-navigation/native';
import {  FlatList, View } from 'react-native';
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
    "uri": "mouse"
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
    "uri": "mouse"
  },]


export const imagens = {

  mouse: require('../imgs/mouse.jpg')
}
export default function TelaA() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: "100%" }}>
      <FlatList
        style={{ width: "95%"}}
        data={dadosProdutos}
        renderItem={({ item }) => (
          <Produtos
            nome={item.nome}
            subtitulo={item.subtitulo}
            preco={item.preco}
            uri={item.uri} />)} />
    </View>
  );
}