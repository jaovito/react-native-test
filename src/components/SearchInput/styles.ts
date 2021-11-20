import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.gray};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.View`
  width: 95%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 5px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 100%;
  margin-left: 4px;

  color: ${({ theme }) => theme.colors.text.black};
`;
