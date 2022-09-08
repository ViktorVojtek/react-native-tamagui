import {Conf} from './tamagui.config';

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
