import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, YStack} from 'tamagui';

import {HomeStackParamList} from '../../navigation/HomeStack/HomeStack';
import Layout from '../../components/Layout';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export default function HomeScreen(props: Props) {
  const {navigation} = props;

  function onPress(): void {
    navigation.navigate('Example', {});
  }

  return (
    <Layout isHeaderShown>
      <YStack
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        space="$4">
        <Text>Home Screen</Text>

        <Button onPress={onPress} backgroundColor="$blue6">
          <Text>Check the Example</Text>
        </Button>
      </YStack>
    </Layout>
  );
}

HomeScreen.screenOptions = {
  headerShown: false,
};
