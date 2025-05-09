import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function TelaB() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('TelaA')} title='Ir para Tela A'/>
    </View>
  );
}