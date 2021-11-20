import * as React from 'react';
import { Container, Image, SchoolName, Main } from './styles';

export default function SchoolHeader() {
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
      <Image
        resizeMode="cover"
        source={{ uri: 'http://github.com/jaovito.png' }}
      />

      <Main>
        <SchoolName>Marshmallow</SchoolName>
      </Main>
    </Container>
  );
}
