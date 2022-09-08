import React from 'react';
import {TamaguiProvider} from 'tamagui';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import config from './tamagui.config';
import Navigation from './src/navigation';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
