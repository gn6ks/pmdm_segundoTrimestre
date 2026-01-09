import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "../../context/context";

import StackScreen1 from "../ejercicio2/stackScreen1";
import StackScreen2 from "../ejercicio2/stackScreen2";

const Stack = createStackNavigator();

export default function StackEjercicio2() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="StackScreen1" component={StackScreen1} />
          <Stack.Screen name="StackScreen2" component={StackScreen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
