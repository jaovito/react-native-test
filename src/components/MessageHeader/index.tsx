import * as React from 'react';
import {
  Container,
  Image,
  SchoolInfo,
  SchoolName,
  Sender,
  Date,
} from './styles';

type Props = {
  url: string;
  name: string;
  sender: string;
  date: string;
};

export default function MessageHeader({ url, name, sender, date }: Props) {
  return (
    <Container>
      <Image source={{ uri: url }} />

      <SchoolInfo>
        <SchoolName>{name}</SchoolName>

        <Sender numberOfLines={1}>Por: {sender}</Sender>
      </SchoolInfo>

      <Date>{date}</Date>
    </Container>
  );
}
