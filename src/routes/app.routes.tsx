import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../styles/theme';
import Home from '../screens/Home';
import { TabsRoutes } from './tabs.routes';
import LoadingScreen from '../screens/LoadingScreen';

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
      <Screen name="LoadingScreen" component={LoadingScreen} />
      <Screen name="School" component={TabsRoutes} />
    </Navigator>
  );
}
