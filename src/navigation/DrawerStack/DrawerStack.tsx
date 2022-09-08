import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from '../HomeStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  );
}
