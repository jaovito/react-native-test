import * as React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { Container, Main, Title } from './styles';

type Props = {
  title: string;
};

export default function SectionHeader({ title }: Props) {
  return (
    <Container>
      <TouchableOpacity activeOpacity={0.7}>
        <Entypo name="chevron-thin-left" size={24} color="white" />
      </TouchableOpacity>

      <Main>
        <Title>{title}</Title>
      </Main>
    </Container>
  );
}
