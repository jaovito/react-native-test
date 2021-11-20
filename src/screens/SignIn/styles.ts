import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  max-width: 100%;
  font-size: 20px;
  align-self: flex-start;

  color: ${({ theme }) => theme.colors.text.white};

  margin-bottom: 20px;
`;
