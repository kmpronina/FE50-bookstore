import styled from 'styled-components';
import { black, gray80, white } from '#styles/colorsConstants';

export const ButtonStyled = styled.button<{ $width: string | undefined }>`
  all: unset;
  width: ${(props) => (props.$width ? props.$width : '')};
  cursor: pointer;
  font-family: 'Bebas Neue';
  background-color: ${black};
  color: ${white};
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.9px;
  text-align: center;

  &:hover {
    transition: 0.5s;
    background-color: ${gray80};
  }

  &:active {
    background-color: ${black};
  }
`;
