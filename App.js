import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UploadPhoto from "./screens/UploadPhoto";
import Home from "./screens/Home";
import Result from "./screens/Result";
import PhotoNavigation from "./navigation/PhotoNavigation";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: null,
            headerStyle: { backgroundColor: "#81ecec" },
          }}
        />
        <Stack.Screen
          name="PhotoNavigation"
          component={PhotoNavigation}
          options={{
            headerTitle: null,
            headerBackTitleVisible: false,
            headerTintColor: "gray",
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
        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            headerTitle: "퍼스널컬러 진단 결과",
            headerBackTitleVisible: false,
            headerTintColor: "black",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
