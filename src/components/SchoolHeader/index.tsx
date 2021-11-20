import * as React from 'react';
import { Container, Image, SchoolName, Main } from './styles';

type Props = {
  title: string;
  image: string;
};

export default function SchoolHeader({ title, image }: Props) {
  return (
    <Container
      style={{
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 8,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      }}
    >
      <Image resizeMode="cover" source={{ uri: image }} />

      <Main>
        <SchoolName>{title}</SchoolName>
      </Main>
    </Container>
  );
}
