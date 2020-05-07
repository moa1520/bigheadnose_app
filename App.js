import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Test from "./screens/Test";
import TakePhoto from "./screens/TakePhoto";
import UploadPhoto from "./screens/UploadPhoto";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TakePhoto"
          component={TakePhoto}
          options={{
            headerTitle: null,
            headerStyle: {
              backgroundColor: "white",
            },
          }}
        />
        <Stack.Screen
          name="UploadPhoto"
          component={UploadPhoto}
          options={{
            headerTitle: null,
            headerBackTitleVisible: false,
            headerTintColor: "black",
          }}
        />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
