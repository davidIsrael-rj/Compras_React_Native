import { DrawerToggleButton } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Button, FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={dadosProdutos}
        renderItem={({ item }) => (
          <Produtos
            nome={item.nome}
            subtitulo={item.subtitulo}
            preco={item.preco}
            uri={item.uri} />)} />

      <Text>TelaA</Text>
      <Icon name={'abacus'} size={30} color={'#000'} />
      <Button onPress={() => navigation.navigate('TelaB')} title='Ir para Tela B ' />
      <DrawerToggleButton />
    </View>
  );
}