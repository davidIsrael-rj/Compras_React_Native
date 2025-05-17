import { DrawerToggleButton } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Button, Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Produtos from '../components/Produtos';

export const imagens ={
  
  mouse: require('../imgs/mouse.jpg')
}
export default function TelaA() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Produtos nome="Caderno" preco="2.50" subtitulo="Ursinho" uri="mouse"/>
      <Produtos nome="Livro Matematica" subtitulo="Descomplicando" preco="50.49" uri="mouse"/>
      <Text>TelaA</Text>
      <Icon name={'abacus'} size={30} color={'#000'}/>
      <Button onPress={() => navigation.navigate('TelaB')} title='Ir para Tela B '/> 
        <DrawerToggleButton/>
    </View>
  );
}