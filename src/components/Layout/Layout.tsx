import React, {Fragment, ReactNode} from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  SafeAreaView,
  NativeSafeAreaViewProps,
} from 'react-native-safe-area-context';
import {Stack, YStack} from 'tamagui';
import Header from '../Header';

type Props = {
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
  children: ReactNode;
  fluid?: boolean;
  isHeaderDivider?: boolean;
  isHeaderShown?: boolean;
  safearea?: boolean;
  scroll?: boolean;
} & NativeSafeAreaViewProps;

export default function Layout(props: Props) {
  const {
    children,
    backgroundColor,
    barStyle,
    fluid,
    isHeaderDivider,
    isHeaderShown,
    safearea,
    scroll,
    ...restSafeareaProps
  } = props;

  const SafeareaTag = safearea ? SafeAreaView : Fragment;
  const safeareaProps = safearea
    ? {
        ...restSafeareaProps,
        style: {
          flexGrow: 1,
          flexShrink: 0,
        },
      }
    : {};

  const ViewTag = scroll ? ScrollView : Stack;
  const viewTagBaseProps = {
    backgroundColor,
    paddingHorizontal: fluid ? 0 : 5,
    flexGrow: 1,
  };
  const viewTagProps = scroll
    ? {
        style: {
          ...viewTagBaseProps,
        },
      }
    : {
        ...viewTagBaseProps,
        paddingHorizontal: undefined,
        px: fluid ? 0 : '$2',
      };

  return (
    <YStack backgroundColor={backgroundColor} flexGrow={1}>
      <SafeareaTag {...safeareaProps}>
        <StatusBar barStyle={barStyle || 'default'} />
        {isHeaderShown && <Header isDivider={isHeaderDivider} />}

        <ViewTag {...viewTagProps}>{children}</ViewTag>
      </SafeareaTag>
    </YStack>
  );
}

Layout.defaultProps = {
  backgroundColor: '$purple2Light',
  barStyle: 'dark-content',
  edges: ['top', 'right', 'left'],
  isHeaderDivider: true,
  isHeaderShown: false,
  fluid: false,
  safearea: true,
  scroll: false,
};
