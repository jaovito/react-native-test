import * as React from 'react';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { Dispatch, SetStateAction } from 'react';
import { Container, InputContainer, Input } from './styles';
import theme from '../../styles/theme';

type Props = {
  loginValue: string;
  setLoginValue: Dispatch<SetStateAction<string>>;
  passwordValue: string;
  setPasswordValue: Dispatch<SetStateAction<string>>;
};

export default function InputComponent({
  loginValue,
  setLoginValue,
  passwordValue,
  setPasswordValue,
}: Props) {
  return (
    <Container>
      <InputContainer>
        <SimpleLineIcons
          name="user"
          size={24}
          color={theme.colors.text.white}
        />
        <Input
          placeholder="Usuário"
          placeholderTextColor={theme.colors.text.white}
          value={loginValue}
          onChangeText={setLoginValue}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </InputContainer>

      <InputContainer showBorder>
        <Ionicons
          name="key-outline"
          size={24}
          color={theme.colors.text.white}
        />
        <Input
          placeholder="Senha"
          placeholderTextColor={theme.colors.text.white}
          secureTextEntry
          value={passwordValue}
          onChangeText={setPasswordValue}
        />
      </InputContainer>
    </Container>
  );
}
