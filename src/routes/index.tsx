import * as React from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { SignInRoutes } from './auth.routes';
import { useAuth } from '../contexts/auth';
import { AppRoutes } from './app.routes';
import { Conteudo } from '../components/SchoolCard';
import { Message } from '../screens/School';

type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
  School: {
    allMessages: Message[];
  };
  LoadingScreen: {
    conteudo: Conteudo;
  };
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
