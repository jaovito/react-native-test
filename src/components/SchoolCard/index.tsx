import { Entypo } from '@expo/vector-icons';
import * as React from 'react';
import theme from '../../styles/theme';
import {
  Container,
  Image,
  SchoolInfoContainer,
  SchoolTitle,
  SchoolUrl,
} from './styles';

export type Conteudo = {
  id: number;
  urlLogoContexto: string;
  nomeAplicacao: string;
  contexto: string;
  token: string;
};

type Props = {
  data: Conteudo;
};

export default function SchoolCard({ data }: Props) {
  return (
    <Container activeOpacity={0.7}>
      <Image source={{ uri: data.urlLogoContexto }} resizeMode="cover" />

      <SchoolInfoContainer>
        <SchoolTitle>{data.nomeAplicacao}</SchoolTitle>

        <SchoolUrl>{data.contexto}</SchoolUrl>
      </SchoolInfoContainer>

      <Entypo
        name="chevron-thin-right"
        size={24}
        color={theme.colors.text.black}
      />
    </Container>
  );
}
