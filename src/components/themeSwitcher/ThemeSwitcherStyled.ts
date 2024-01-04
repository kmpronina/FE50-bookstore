import styled from 'styled-components';

export const ThemeSwitcherWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FormSubtitle = styled.h5<{ $color: string }>`
  all: unset;
  color: ${(props) => props.$color};
  font-size: 32px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 46px;
`;
