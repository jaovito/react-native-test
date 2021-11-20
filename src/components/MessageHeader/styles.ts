import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 5px;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const SchoolInfo = styled.View`
  flex: 1;
  align-items: flex-start;
  margin-left: 10px;
`;

export const SchoolName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.black};
`;

export const Sender = styled.Text`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.text.black};
`;

export const Date = styled.Text`
  font-size: 9px;
  color: ${({ theme }) => theme.colors.text.black};
  align-self: flex-start;
`;
