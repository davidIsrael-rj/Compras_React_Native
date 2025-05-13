import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import ComponStack from "./ComponStack"

const Tab = createBottomTabNavigator()

export default function ComponTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={ComponStack}/>
            <Tab.Screen name="TelaB" component={TelaB}/>
        </Tab.Navigator>
    )
}