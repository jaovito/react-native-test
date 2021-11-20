import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: ${getStatusBarHeight() + 10}px;
  padding-horizontal: 10px;
  padding-bottom: 8px;

  background-color: ${({ theme }) => theme.colors.schoolHeader};

  shadow-color: rgba(0, 0, 0, 1);
`;

export const Main = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const SchoolName = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text.strongBlue};
`;
