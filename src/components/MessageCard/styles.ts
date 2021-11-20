import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  align-self: center;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.Text`
  align-self: center;

  padding: 10px;
`;
