import styled from 'styled-components';

export const PageTitleWrapper = styled.div`
  margin-bottom: 30px;
`;

export const PageTitleStyled = styled.h2<{ $textColor?: string }>`
  all: unset;
  padding-right: 200px;
  font-family: 'Bebas Neue';
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  transition: 0.2s;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.$textColor};
`;
