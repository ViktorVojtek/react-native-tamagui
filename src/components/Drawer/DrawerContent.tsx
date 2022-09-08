import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Text, YStack} from 'tamagui';

type Props = DrawerContentComponentProps;

export default function DrawerContent(props: Props) {
  const {navigation} = props;

  return (
    <DrawerContentScrollView>
      <YStack px="$2">
        <Text>Drawer</Text>
      </YStack>
    </DrawerContentScrollView>
  );
}
