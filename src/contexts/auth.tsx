import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

type AuthContextProps = {
  token: string;
  context: string;
  loading: boolean;
  isAuthenticated: boolean;
  handleSaveContext: (contextValue: string) => Promise<void>;
  handleSaveToken: (tokenValue: string) => Promise<void>;
};

const AuthContext = createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState('');
  const [context, setContext] = useState('');
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!context;

  useEffect(() => {
    async function handleGetInfos() {
      const tokenValue = await AsyncStorage.getItem('@token_test');
      const contextValue = await AsyncStorage.getItem('@context_test');
      console.log(tokenValue, contextValue);

      if (tokenValue && contextValue) {
        setContext(contextValue);
        setToken(tokenValue);
      }

      setLoading(false);
    }

    handleGetInfos();
  }, []);

  const handleSaveToken = useCallback(async (tokenValue: string) => {
    setToken(tokenValue);
    console.log(tokenValue);
    await AsyncStorage.setItem('@token_test', tokenValue);
  }, []);

  const handleSaveContext = useCallback(async (contextValue: string) => {
    setContext(contextValue);
    console.log(contextValue);
    await AsyncStorage.setItem('@context_test', contextValue);
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        context,
        handleSaveToken,
        handleSaveContext,
        isAuthenticated,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
