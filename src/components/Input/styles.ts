import styled from 'styled-components/native';

type InputProps = {
  showBorder?: boolean;
};

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.white};
`;

export const InputContainer = styled.View<InputProps>`
  border-top-width: ${({ showBorder }) => (showBorder ? 1 : 0)}px;
  border-color: ${({ theme }) => theme.colors.white};
  width: 100%;

  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border-color: transparent;
  border-width: 0;

  margin-left: 8px;
  color: ${({ theme }) => theme.colors.text.white};
`;
