import React from 'react';
import {Menu} from '@tamagui/feather-icons';
import {Stack, XStack} from 'tamagui';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';

type Props = {
  backgroundColor?: string;
  isDivider?: boolean;
};

export default function Header(props: Props) {
  const {backgroundColor, isDivider} = props;

  const navigation = useNavigation();

  function onPress(): void {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  const restProps = isDivider
    ? {
        borderBottomColor: '$purple4Light',
        borderBottomWidth: 1,
      }
    : {};

  return (
    <XStack
      alignItems="center"
      backgroundColor={backgroundColor}
      height="$3"
      px="$2"
      {...restProps}>
      <Pressable onPress={onPress}>
        <Stack p="$2">
          <Menu />
        </Stack>
      </Pressable>
    </XStack>
  );
}

Header.defaultProps = {
  backgroundColor: '$purple2Light',
  isDivider: false,
};
