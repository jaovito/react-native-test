import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;

  background: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text.blue};
  font-size: 19px;
  font-weight: bold;
`;
