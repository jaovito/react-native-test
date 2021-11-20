import * as React from 'react';
import { useState } from 'react';
import Background from '../../components/Background';
import Button from '../../components/Button';
import CelphoneLogin from '../../components/CelphoneLogin';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { api } from '../../services/api';
import { Content, Form, Title } from './styles';

export default function SignIn() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const response = await api.post('Acesso/login', {
      login,
      senha: password,
      nomeApp: 'br.com.eem.teste',
      versaoApp: '10',
      versaoSO: '10',
      idDispositivo: 'teste-mobile',
    });

    console.log(response.data);
    console.log(login, password);
  }

  return (
    <Background>
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

          <Button onPress={handleLogin} title="Entrar" />
        </Form>
      </Content>

      <CelphoneLogin title="Entrar com o celular" />
    </Background>
  );
}
