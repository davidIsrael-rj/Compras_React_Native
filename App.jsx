import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import ComponDrawer from './src/components/ComponDrawer';
import ComponTabs from './src/components/ComponTabs';
import { MeuProvedor } from './src/components/MeuContexto';
import GlobalState from './src/contexts/GlobalState';

export default function App() {
  return (
    <GlobalState>
      <MeuProvedor>
        <NavigationContainer>
          <ComponDrawer />
        </NavigationContainer>
      </MeuProvedor>
    </GlobalState>
  )
}