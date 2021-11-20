import * as React from 'react';
import { Feather } from '@expo/vector-icons';

import theme from '../../styles/theme';
import { Container, Main, Title } from './styles';

type Props = {
  title: string;
};

export default function CelphoneLogin({ title }: Props) {
  return (
    <Container>
      <Feather name="smartphone" size={24} color={theme.colors.white} />

      <Main>
        <Title>{title}</Title>
      </Main>
    </Container>
  );
}
