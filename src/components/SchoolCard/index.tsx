import { Entypo } from '@expo/vector-icons';
import * as React from 'react';
import { TouchableOpacityProps } from 'react-native';
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

type Props = TouchableOpacityProps & {
  data: Conteudo;
};

export default function SchoolCard({ data, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
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
