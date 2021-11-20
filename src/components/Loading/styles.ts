import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SchoolImage = styled.Image`
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').height / 3}px;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  position: relative;
  top: ${Dimensions.get('screen').height / 10}px;
`;
