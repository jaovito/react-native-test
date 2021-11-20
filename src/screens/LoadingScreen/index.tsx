import * as React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading';
import { Conteudo } from '../../components/SchoolCard';
import { RouteNavigationProps } from '../../routes';

type RouteParams = {
  conteudo: Conteudo;
};

export default function LoadingScreen() {
  const { params } = useRoute();
  const route = params as RouteParams;

  const navigation = useNavigation<RouteNavigationProps>();

  useEffect(() => {
    axios
      .post(
        `https://${route.conteudo.contexto}/api/mensagem/ultimas-noticias/v3`,
        {
          header: {
            'X-Authorization': route.conteudo.token,
          },
        }
      )
      .then((response) => {
        navigation.reset({
          routes: [
            {
              name: 'Home',
            },
            {
              name: 'School',
              params: {
                allMessages: response.data.feed,
              },
            },
          ],
          index: 1,
        });
      });
  }, []);

  return <Loading image={route.conteudo.urlLogoContexto} />;
}
