import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator()
const num1 = '9'
const num2 = '9'
export default function ComponStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerRight: () => <View style={styles.baraTitulo}>
                    <TouchableOpacity
                        onPress={()=> Alert.alert('Compra feita com sucesso')}
                        style={styles.carrinhoCompra}>
                        <Icon name={'cart'} size={45} color={'#000'} />
                        <Icon name={`numeric-${num1}`} size={20} color={'#fff'} 
                        style={styles.iconeSobre}/>
                        <Icon name={`numeric-${num2}`} size={20} color={'#fff'}
                        style={styles.iconeSobreLado}/>
                    </TouchableOpacity>
                    <DrawerToggleButton />
                </View>
            }}>
            <Stack.Screen name="TelaA" component={TelaA} />
            <Stack.Screen name="TelaB" component={TelaB} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    baraTitulo: {
        flexDirection: "row"
    },
    carrinhoCompra:{
       justifyContent: "center",
       alignItems:"center" 

    },
    iconeSobre:{
        position: "absolute",
        top: 6,
        left:10
    },
    iconeSobreLado:{
        position: "absolute",
        top: 6,
        right:9
    }
})