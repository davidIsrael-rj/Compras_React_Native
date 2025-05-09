import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import ComponDrawer from './src/components/ComponDrawer';

export default function App(){
  return(
    <NavigationContainer>
      <ComponDrawer/>
    </NavigationContainer>
  )
}