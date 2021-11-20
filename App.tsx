import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { AuthProvider } from './src/contexts/auth';
import { Routes } from './src/routes';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
