import * as React from 'react';
import theme from '../../styles/theme';
import { Container, SchoolImage, LoadingIndicator } from './styles';

type Props = {
  image: string;
};

export default function Loading({ image }: Props) {
  return (
    <Container>
      <SchoolImage resizeMode="contain" source={{ uri: image }} />

      <LoadingIndicator color={theme.colors.text.black} size="large" />
    </Container>
  );
}
