import { View, Text, Button } from "react-native";
import { useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "../../context/context";

const Tab = createBottomTabNavigator();

export default function MainApp() {
      return (
        <Provider>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Ejercicio1" component={HomeScreen1} />
              {/* <Tab.Screen name="HomeScreen2" component={HomeScreen2} /> */}
              {/* <Tab.Screen name="HomeScreen3" component={HomeScreen3} /> */}
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      );
}