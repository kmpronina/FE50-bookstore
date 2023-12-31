import styled from 'styled-components';
import {
  blue,
  green,
  orange,
  purple,
  gray60,
  black,
} from '#styles/colorsConstants';

export const BookCardStyled = styled.div`
  width: 352px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin: 0 5px;
  margin-bottom: 20px;
`;

export const ClickableArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin: 0 5px;
  cursor: pointer;
`;
export const ImgWrapper = styled.div<{ $color: string }>`
  width: 100%;
  height: 264px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${(props) =>
    props.$color === 'green'
      ? green
      : props.$color === 'blue'
      ? blue
      : props.$color === 'orange'
      ? orange
      : purple};
`;

export const BookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const BookTitle = styled.h4`
  all: unset;
  font-family: 'Bebas Neue';
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  height: 64px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${black};
`;

export const BookSubtitle = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;
  color: ${gray60};
  height: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BookPrice = styled.span`
  font-size: 24px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 32px;
  color: ${black};
`;
