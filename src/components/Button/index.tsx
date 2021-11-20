import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import theme from '../../styles/theme';
import { Container, ButtonText } from './styles';

type Props = RectButtonProps & {
  title: string;
  loading: boolean;
};

export default function Button({ title, loading, ...rest }: Props) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.text.blue} />
      ) : (
        <ButtonText>{title}</ButtonText>
      )}
    </Container>
  );
}
