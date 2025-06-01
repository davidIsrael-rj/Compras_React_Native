import React, { useState, useEffect } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { launchCamera } from "react-native-image-picker";
import { check, PERMISSIONS, request } from "react-native-permissions";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ImagProd(props) {

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
                quality: 0.1,
            };

            launchCamera(options, (response) => {
                if (response.assets && response.assets.length > 0) {
                    setImagem(response.assets[0].uri);
                }
            });
        } else {
            Alert.alert("Permissão não concedida")
        }
    };

    return (
        <View style={{ width: "100%", height: "auto", }}>
            {!imagem && (
                <TouchableOpacity onPress={abrirCamera}>
                    <View style={{
                        flex: 1,
                        flexDirection:"row",
                        width: 100,
                        height: 100,
                        borderRadius: 5,
                        borderColor: "#000",
                        borderWidth:3,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Icon name="camera" size={35} color="#000" />
                    </View>
                </TouchableOpacity>
            )}

            {imagem && (
                <TouchableOpacity
                    onPress={() => setImagem(null)}>
                    <Image
                        source={{ uri: imagem }}
                        style={{ width: 100, height: 100 }}
                    />
                </TouchableOpacity>
            )}

        </View>
    )
}