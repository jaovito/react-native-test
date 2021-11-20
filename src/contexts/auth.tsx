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
import axios from 'axios';
import { Conteudo } from '../components/SchoolCard';

type AuthContextProps = {
  conteudo: Conteudo[];
  token: string | null;
  loading: boolean;
  isAuthenticated: boolean;
  handleSaveConteudo: (contextValue: Conteudo[]) => Promise<void>;
  handleSaveToken: (tokenValue: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [conteudo, setConteudo] = useState<Conteudo[]>([]);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!token;

  useEffect(() => {
    async function handleGetInfos() {
      const tokenValue = await AsyncStorage.getItem('@token_test');
      const conteudoValue = await AsyncStorage.getItem('@conteudo_test');

      if (tokenValue && conteudoValue) {
        setConteudo(JSON.parse(conteudoValue));
        setToken(tokenValue);

        axios.defaults.headers.common['X-Authorization'] = tokenValue;
      }

      setLoading(false);
    }

    handleGetInfos();
  }, []);

  const handleSaveToken = useCallback(async (tokenValue: string) => {
    setToken(tokenValue);
    await AsyncStorage.setItem('@token_test', tokenValue);
    axios.defaults.headers.common['X-Authorization'] = tokenValue;
  }, []);

  const handleSaveConteudo = useCallback(async (content: Conteudo[]) => {
    setConteudo(content);
    await AsyncStorage.setItem('@conteudo_test', JSON.stringify(content));
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@conteudo_test');
    await AsyncStorage.removeItem('@token_test');
    setConteudo([]);
    setToken(null);
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <AuthContext.Provider
      value={{
        conteudo,
        handleSaveToken,
        token,
        handleSaveConteudo,
        isAuthenticated,
        loading,
        signOut,
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
