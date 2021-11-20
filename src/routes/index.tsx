import * as React from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { SignInRoutes } from './auth.routes';
import { useAuth } from '../contexts/auth';
import { AppRoutes } from './app.routes';

type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
};

export type RouteNavigationProps = NavigationProp<RootStackParamList>;

export function Routes() {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <SignInRoutes />}
    </NavigationContainer>
  );
}
