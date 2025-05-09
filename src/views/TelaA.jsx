import { useNavigation } from '@react-navigation/native';
import React from "react";

export default function TelaA() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TelaA</Text>
      <Button onPress={() => navigation.navigate('TelaB')} title='Ir para Tela B '/> 
        
    </View>
  );
}