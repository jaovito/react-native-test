import * as React from 'react';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <TouchableOpacity activeOpacity={0.7}>
        <Entypo name="chevron-thin-left" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}>
        <MaterialIcons name="help-outline" size={24} color="white" />
      </TouchableOpacity>
    </Container>
  );
}
