import styled from 'styled-components';

export const SignFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-right: 10px;
`;

export const Input = styled.input<{ $borderColor: string; $color: string }>`
  all: unset;
  width: 100%;
  padding: 7px;
  border: 1px solid ${(props) => props.$borderColor};
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  cursor: text;
`;

export const Label = styled.label<{ $color: string }>`
color: ${(props) => props.$color}
font-size: 16px;
font-weight: 700;
line-height: 32px;
text-transform: capitalize;
`;
