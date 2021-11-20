import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import Background from '../../components/Background';
import Button from '../../components/Button';
import CelphoneLogin from '../../components/CelphoneLogin';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { useAuth } from '../../contexts/auth';
import { RouteNavigationProps } from '../../routes';
import { api } from '../../services/api';
import { Content, Form, Title } from './styles';

export default function SignIn() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { handleSaveToken, handleSaveConteudo } = useAuth();

  const navigation = useNavigation<RouteNavigationProps>();

  async function handleLogin() {
    setLoading(true);
    try {
      const { data } = await api.post('Acesso/login', {
        login,
        senha: password,
        nomeApp: 'br.com.eem.teste',
        versaoApp: '10',
        versaoSO: '10',
        idDispositivo: 'teste-mobile',
      });

      await handleSaveConteudo(data.conteudo);
      setLoading(false);
      await handleSaveToken(data.conteudo[0].token);
    } catch (err) {
      Alert.alert(`Erro ao fazer a requisição: ${err}`);
      setLoading(false);
    }
  }

  return (
    <Background>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <Header />

        <Content>
          <Form>
            <Title>Informe o usuário e a senha encaminhados pela escola</Title>

            <Input
              loginValue={login}
              setLoginValue={setLogin}
              passwordValue={password}
              setPasswordValue={setPassword}
            />

            <Button loading={loading} onPress={handleLogin} title="Entrar" />
          </Form>
        </Content>

        <CelphoneLogin title="Entrar com o celular" />
      </KeyboardAvoidingView>
    </Background>
  );
}
