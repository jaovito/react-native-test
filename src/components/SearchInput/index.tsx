import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';

import { Container, Main, Input } from './styles';
import theme from '../../styles/theme';

export default function SearchInput({ ...rest }: TextInputProps) {
  return (
    <Container>
      <Main>
        <Feather name="search" size={24} color={theme.colors.text.black} />

        <Input {...rest} />
      </Main>
    </Container>
  );
}
