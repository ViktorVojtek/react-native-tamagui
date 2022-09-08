import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button, Text, YStack} from 'tamagui';
import Layout from '../../components/Layout';
import {HomeStackParamList} from '../../navigation/HomeStack/HomeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Example'>;

export default function ExampleScreen(props: Props) {
  const {navigation} = props;

  function onPress(): void {
    navigation.navigate('Home');
  }

  return (
    <Layout>
      <YStack
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        space="$3">
        <Text>Example screen</Text>

        <Button onPress={onPress} backgroundColor="$blue6">
          <Text color="$purple12Light">Go Home</Text>
        </Button>
      </YStack>
    </Layout>
  );
}

ExampleScreen.screenOptions = {
  headerShown: false,
  headerTransparent: true,
  headerTitle: '',
};
