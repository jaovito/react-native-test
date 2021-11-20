import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 90%;
  align-self: center;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 8px 4px;

  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  margin-bottom: ${getBottomSpace() + 20}px;
`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.white};
  font-size: 18px;
`;
