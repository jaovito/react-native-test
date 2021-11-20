import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../styles/theme';
import Home from '../screens/Home';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
