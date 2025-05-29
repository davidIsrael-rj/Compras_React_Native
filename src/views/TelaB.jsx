import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { launchCamera } from "react-native-image-picker";

export default function TelaB() {
  const navigation = useNavigation();
  const [imagem, setImagem] = useState(null);

  const abrirCamera = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImagem(response.assets[0].uri);
      }
    });
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('TelaA')} title='Ir para Tela A' />

      <TouchableOpacity onPress={abrirCamera}>
        <View style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5, margin:10 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Abrir Câmera</Text>
        </View>
      </TouchableOpacity>

      {imagem && (
        <Image
          source={{ uri: imagem }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      )}

    </View>
  );
}