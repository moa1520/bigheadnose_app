import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TakePhoto from "../screens/TakePhoto";
import SelectPhoto from "../screens/SelectPhoto";

const PhotoNavigation = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="사진 찍기" component={TakePhoto} />
      <Tab.Screen name="사진 선택" component={SelectPhoto} />
    </Tab.Navigator>
  );
};

export default PhotoNavigation;
