import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"

const Stack = createStackNavigator()

export default function ComponStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="TelaA" component={TelaA} />
            <Stack.Screen name="TelaB" component={TelaB}/>
        </Stack.Navigator>
    )
}