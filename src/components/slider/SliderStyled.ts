import styled from 'styled-components';

export const SliderStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  width: 100%;
`;

export const SliderTitle = styled.h4<{ $color: string }>`
  all: unset;
  color: ${(props) => props.$color};
  font-size: 40px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 60px;
`;
