import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../styles/theme';
import SignIn from '../screens/SignIn';

const { Screen, Navigator } = createNativeStackNavigator();

export function SignInRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
