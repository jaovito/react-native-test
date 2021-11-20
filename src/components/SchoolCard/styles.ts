import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 80px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;

  border-radius: 10px;
`;

export const SchoolInfoContainer = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  width: 60%;
`;

export const SchoolTitle = styled.Text`
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.black};
`;

export const SchoolUrl = styled.Text`
  color: ${({ theme }) => theme.colors.text.black};
  font-size: 13px;
`;
