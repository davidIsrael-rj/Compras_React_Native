import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Tela from "../views/Tela"

const Drawer = createDrawerNavigator()
export default props =>(
        <Drawer.Navigator>
          <Drawer.Screen name="Tela" component={Tela}/>  
        </Drawer.Navigator>
    )
