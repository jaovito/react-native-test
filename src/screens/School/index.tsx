import * as React from 'react';

import { useRoute } from '@react-navigation/core';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Main } from './styles';
import SchoolHeader from '../../components/SchoolHeader';
import MessageCard from '../../components/MessageCard';

export type Message = {
  idMensagem: number;
  tipo: number;
  data: string;
  remetente: string;
  sumario: string;
  corpoMensagem: string;
  urlPublica: string;
};

type RouteParams = {
  allMessages: Message[];
};

export default function School() {
  const { params } = useRoute();
  const route = params as RouteParams;

  const [messages, setMessages] = useState<Message[]>(route.allMessages);

  return (
    <Container>
      <SchoolHeader />

      <FlatList
        data={messages}
        keyExtractor={(item) => String(item.idMensagem)}
        renderItem={({ item }) => <MessageCard data={item} />}
      />
    </Container>
  );
}
