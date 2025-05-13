import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import ComponDrawer from './src/components/ComponDrawer';
import ComponTabs from './src/components/ComponTabs';

export default function App(){
  return(
    <NavigationContainer>
      <ComponDrawer/>
    </NavigationContainer>
  )
}