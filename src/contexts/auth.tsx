import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
  token: string;
  context: string;
  loading: boolean;
  handleSaveContext: (contextValue: string) => void;
  handleSaveToken: (tokenValue: string) => void;
};

const AuthContext = createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState('');
  const [context, setContext] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function handleGetInfos() {
      const tokenValue = await AsyncStorage.getItem('@token_test');
      const contextValue = await AsyncStorage.getItem('@context_test');

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
    await AsyncStorage.setItem('@token_test', tokenValue);
  }, []);

  const handleSaveContext = useCallback(async (contextValue: string) => {
    setContext(contextValue);
    await AsyncStorage.setItem('@context_test', contextValue);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, context, handleSaveToken, handleSaveContext, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
