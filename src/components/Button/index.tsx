import * as React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

type Props = RectButtonProps & {
  title: string;
};

export default function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
}
