import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screens/Home';
import ExampleScreen from '../../screens/Example';

export type HomeStackParamList = {
  Home: undefined;
  Example: {text?: string};
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={HomeScreen.screenOptions}
      />
      <Stack.Screen
        name="Example"
        component={ExampleScreen}
        options={ExampleScreen.screenOptions}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
