import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Profile')} title='Go to Profile '/> 
        
    </View>
  );
}

function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('Home')} title='Go to Home'/>
    </View>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}