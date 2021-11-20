import * as React from 'react';
import { ReactNode } from 'react';
import theme from '../../styles/theme';
import { Container } from './styles';

type Props = {
  children: ReactNode;
};

export default function Background({ children }: Props) {
  return (
    <Container colors={[theme.colors.linear01, theme.colors.linear02]}>
      {children}
    </Container>
  );
}
