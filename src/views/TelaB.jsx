import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Button, Image, Text, TouchableOpacity, View } from "react-native";
import { launchCamera } from "react-native-image-picker";
import { check, PERMISSIONS, request } from "react-native-permissions";

export default function TelaB() {
  const navigation = useNavigation();
  const [imagem, setImagem] = useState(null);
  const [permissaoConcedida, setPermissaoConcedida] = useState(false);

  
  useEffect(() => {
    verificarPermissao();
  }, []);
  
  const verificarPermissao = async () => {
    const permissao = await check(PERMISSIONS.ANDROID.CAMERA);
    if (permissao === 'granted') {
      setPermissaoConcedida(true);
    } else {
      solicitarPermissao();
    }
  };
  
  const solicitarPermissao = async () => {
    const resultado = await request(PERMISSIONS.ANDROID.CAMERA);
    if (resultado === 'granted') {
      setPermissaoConcedida(true);
    }
  };
  
  const abrirCamera = async () => {
    if (permissaoConcedida) {
      const options = {
        mediaType: 'photo',
        quality: 1,
      };

      launchCamera(options, (response) => {
        if (response.assets && response.assets.length > 0) {
          setImagem(response.assets[0].uri);
        }
      });
    } else {
      // console.warn('Permissão não concedida');
      Alert.alert("Permissão não concedida")

    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('TelaA')} title='Ir para Tela A' />

      <TouchableOpacity onPress={abrirCamera}>
        <View style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5, margin: 10 }}>
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