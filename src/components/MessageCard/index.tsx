import * as React from 'react';
import MessageHeader from '../MessageHeader';
import { Container, Content } from './styles';
import { Message } from '../../screens/School';

type Props = {
  data: Message;
};

export default function MessageCard({ data }: Props) {
  return (
    <Container>
      <MessageHeader
        url={data.urlPublica}
        name={data.sumario}
        sender={data.remetente}
        date={data.data}
      />

      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        consectetur vel consequatur aliquid aut amet, culpa assumenda quaerat
        cumque corrupti iure repudiandae provident minima atque doloremque odit,
        dolorum voluptatibus libero?
      </Content>
    </Container>
  );
}
