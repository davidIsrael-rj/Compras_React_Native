import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator()

export default function ComponStack() {
    const [n1, setN1] = useState('0')
    const [n2, setN2] = useState('0')
    const [valor, setValor] = useState(0)

    function acrenNumero() {
        const novoValor = valor + 1;
        setValor(novoValor)

        if (novoValor === 10){
            setN1('0')
            setN2('9-plus')
            setValor(-1)
        }else{

            const valorForm = novoValor.toString().padStart(2, '0');
            {/*
                Garantido dois digito, mesmo que o numero for 1 no final ira ficar 01
                */}
            setN1(valorForm[0]);
            setN2(valorForm[1]);
        }

    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerRight: () => <View style={styles.baraTitulo}>
                    <TouchableOpacity
                        onPress={() => acrenNumero()}
                        style={styles.carrinhoCompra}>
                        <Icon name={'cart'} size={45} color={'#000'} />
                        <Icon name={`numeric-${n1}`} size={20} color={'#fff'}
                            style={styles.iconeSobre} />
                        <Icon name={`numeric-${n2}`} size={20} color={'#fff'}
                            style={[styles.iconeSobreLado, { right: n2 === '9-plus' ? 6 : 9 }]} />

                    </TouchableOpacity>
                    <DrawerToggleButton />
                </View>
            }}>
            <Stack.Screen name="TelaA" >
                {(props) => <TelaA {...props} acrenNumero={acrenNumero}/>}
                </Stack.Screen>
            <Stack.Screen name="TelaB" component={TelaB} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    baraTitulo: {
        flexDirection: "row"
    },
    carrinhoCompra: {
        justifyContent: "center",
        alignItems: "center"

    },
    iconeSobre: {
        position: "absolute",
        top: 6,
        left: 10
    },
    iconeSobreLado: {
        position: "absolute",
        top: 6,
        right:9
    }
})