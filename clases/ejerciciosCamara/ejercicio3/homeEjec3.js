import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "../../context/context";

import StackScreen3 from "../ejercicio3/stackEjec3";

const Stack = createStackNavigator();

export default function HomeEjercicio3() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="StackScreen3" component={StackScreen3} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}