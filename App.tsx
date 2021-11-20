import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import SignIn from './src/screens/SignIn';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
