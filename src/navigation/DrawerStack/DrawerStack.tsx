import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from '../HomeStack';
import DrawerContent from '../../components/Drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      detachInactiveScreens={false}
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  );
}
