import styled from 'styled-components/native';

export const Container = styled.View`
  width: 70%;
  height: 1px;
  background: ${({ theme }) => theme.colors.text.black};
  opacity: 0.3;
  margin: 21px 0;
  align-self: flex-end;
`;
