import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import ComponStack from "./ComponStack"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createBottomTabNavigator()

export default function ComponTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: '#4f4f4f',
                tabBarInactiveTintColor: '#c0c0c0',
                tabBarStyle: { height: 60, width: '100%' },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'HomeStack':
                            iconName = focused
                                ? 'account-details'
                                : 'account-details-outline'
                            break;
                        case 'TelaB':
                            iconName = focused
                                ? 'account-edit'
                                : 'account-edit-outline'
                            break;
                    }
                    return <Icon name={iconName} size={size} color={color} />

                },
            })}

        >
            <Tab.Screen name="HomeStack" component={ComponStack} options={{tabBarLabel: 'HomeStack'}} />
            <Tab.Screen name="TelaB" component={TelaB} options={{tabBarLabel: 'TelaB'}}/>
        </Tab.Navigator>
    )
}