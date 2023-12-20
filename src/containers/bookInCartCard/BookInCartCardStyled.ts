import styled from 'styled-components';
import { blue, orange, purple, green } from '#styles/colorsConstants';

export const BookInCartCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 48px;
`;

export const BookInCartCardStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

export const InfoWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const ImgWrapper = styled.div<{
  $bgColor: 'blue' | 'orange' | 'purple' | 'green';
}>`
  width: 20%;
  cursor: pointer;
  display: flex;
  padding: 0 45px;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;
  background-color: ${(props) =>
    props.$bgColor === 'blue'
      ? blue
      : props.$bgColor === 'orange'
      ? orange
      : props.$bgColor === 'purple'
      ? purple
      : green};
`;

export const BookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TextInfoWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const BookTitle = styled.h4<{ $color: string }>`
  all: unset;
  color: ${(props) => props.$color};
  font-size: 24px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 30px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookDescription = styled.span<{ $color: string }>`
  color: ${(props) => props.$color};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  margin-bottom: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NumbersWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 32px;
  word-wrap: break-word;
`;

export const Price = styled.span<{ $color: string }>`
  font-size: 40px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 60px;
  word-wrap: break-word;
  color: ${(props) => props.$color};
`;
